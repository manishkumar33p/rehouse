
// import React, { useEffect, useState } from "react";
// import "./Property.css";
// // import Footer from "../Footer/Footer";

// import {
//   addDoc,
//   collection,
//   serverTimestamp,
// } from "firebase/firestore";

// import { db } from "../firebase";

// const defaultProperties = [
//   {
//     id: 1,
//     title: "Luxury 3 BHK House",
//     category: "Buy",
//     type: "Residential",
//     location: "Ghaziabad, Uttar Pradesh",
//     price: "₹85 Lakh",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     description:
//       "Beautiful 3 BHK residential property with modern facilities.",
//   },
//   {
//     id: 2,
//     title: "Premium Commercial Office",
//     category: "Commercial",
//     type: "Commercial",
//     location: "Nehru Nagar, Ghaziabad",
//     price: "₹45,000 / Month",
//     image:
//       "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
//     description:
//       "Fully furnished commercial office suitable for business use.",
//   },
//   {
//     id: 3,
//     title: "Residential Plot",
//     category: "Plot",
//     type: "Land",
//     location: "Raj Nagar Extension",
//     price: "₹32 Lakh",
//     image:
//       "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
//     description:
//       "Excellent residential plot in a developing location.",
//   },
//   {
//     id: 4,
//     title: "Boys PG Accommodation",
//     category: "PG",
//     type: "PG",
//     location: "Nehru Nagar, Ghaziabad",
//     price: "₹7,500 / Month",
//     image:
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//     description:
//       "Clean and comfortable PG accommodation with basic facilities.",
//   },
// ];

// const Property = () => {
//   const [properties, setProperties] = useState([]);
//   const [category, setCategory] = useState("All");
//   const [search, setSearch] = useState("");

//   const [selectedProperty, setSelectedProperty] = useState(null);

//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     requirement: "",
//     budget: "",
//     date: "",
//     time: "",
//   });

//   const [message, setMessage] = useState("");

//   /* =========================
//      LOAD PROPERTIES
//   ========================= */

//   useEffect(() => {
//     const saved = localStorage.getItem("niss_properties");

//     if (saved) {
//       setProperties(JSON.parse(saved));
//     } else {
//       localStorage.setItem(
//         "niss_properties",
//         JSON.stringify(defaultProperties)
//       );

//       setProperties(defaultProperties);
//     }
//   }, []);

//   /* =========================
//      UPDATE PROPERTIES
//   ========================= */

//   useEffect(() => {
//     const updateProperties = () => {
//       const saved = localStorage.getItem("niss_properties");

//       if (saved) {
//         setProperties(JSON.parse(saved));
//       }
//     };

//     // Existing storage event
//     window.addEventListener("storage", updateProperties);

//     // Custom event from PropertyAdmin
//     window.addEventListener(
//       "niss-properties-updated",
//       updateProperties
//     );

//     return () => {
//       window.removeEventListener("storage", updateProperties);

//       window.removeEventListener(
//         "niss-properties-updated",
//         updateProperties
//       );
//     };
//   }, []);

//   /* =========================
//      FILTER
//   ========================= */

//   const filteredProperties = properties.filter((property) => {
//     const categoryMatch =
//       category === "All" || property.category === category;

//     const searchText = search.toLowerCase();

//     const searchMatch =
//       property.title.toLowerCase().includes(searchText) ||
//       property.location.toLowerCase().includes(searchText) ||
//       property.type.toLowerCase().includes(searchText);

//     return categoryMatch && searchMatch;
//   });

//   /* =========================
//      OPEN ENQUIRY
//   ========================= */

//   const openEnquiry = (property) => {
//     setSelectedProperty(property);

//     setCustomer((prev) => ({
//       ...prev,
//       requirement:
//         prev.requirement ||
//         `I am interested in ${property.title}.`,
//       budget:
//         prev.budget || property.price,
//     }));
//   };

//   /* =========================
//      CLOSE ENQUIRY
//   ========================= */

//   const closeEnquiry = () => {
//     setSelectedProperty(null);
//   };

//   /* =========================
//      FORM CHANGE
//   ========================= */

//   const handleCustomerChange = (e) => {
//     const { name, value } = e.target;

//     setCustomer((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* =========================
//      SUBMIT ENQUIRY
//   ========================= */

//   const submitEnquiry = async (e) => {
//     e.preventDefault();

//     if (
//       !customer.name.trim() ||
//       !customer.phone.trim() ||
//       !customer.address.trim() ||
//       !customer.requirement.trim()
//     ) {
//       setMessage(
//         "Please fill Name, Mobile, Address and Requirement."
//       );

//       setTimeout(() => setMessage(""), 3000);

//       return;
//     }

//     try {
//       const enquiryData = {
//         name: customer.name.trim(),

//         phone: customer.phone.trim(),

//         email: customer.email.trim(),

//         service:
//           selectedProperty?.title ||
//           "Property Enquiry",

//         requirement:
//           customer.requirement.trim(),

//         budget:
//           customer.budget ||
//           selectedProperty?.price ||
//           "",

//         date: customer.date || "",

//         time: customer.time || "",

//         address: customer.address.trim(),

//         propertyId:
//           selectedProperty?.id || "",

//         propertyTitle:
//           selectedProperty?.title || "",

//         propertyCategory:
//           selectedProperty?.category || "",

//         propertyType:
//           selectedProperty?.type || "",

//         propertyLocation:
//           selectedProperty?.location || "",

//         propertyPrice:
//           selectedProperty?.price || "",

//         source: "Property Page",

//         status: "New",

//         createdAt: serverTimestamp(),
//       };

//       /* =========================
//          FIREBASE
//       ========================= */

//       await addDoc(
//         collection(db, "consultantRequests"),
//         enquiryData
//       );

//       /* =========================
//          SAVE CUSTOMER
//       ========================= */

//       localStorage.setItem(
//         "propertyCustomer",
//         JSON.stringify(customer)
//       );

//       setSelectedProperty(null);

//       setMessage(
//         "Enquiry submitted successfully! Our property team will contact you."
//       );

//       setTimeout(() => setMessage(""), 4000);

//     } catch (error) {
//       console.error(
//         "Property enquiry error:",
//         error
//       );

//       setMessage(
//         "Enquiry submit nahi ho payi. Please try again."
//       );

//       setTimeout(() => setMessage(""), 3000);
//     }
//   };

//   /* =========================
//      LOAD CUSTOMER
//   ========================= */

//   useEffect(() => {
//     const savedCustomer =
//       JSON.parse(
//         localStorage.getItem("propertyCustomer")
//       ) || null;

//     if (savedCustomer) {
//       setCustomer((prev) => ({
//         ...prev,
//         ...savedCustomer,
//       }));
//     }
//   }, []);

//   return (
//     <div className="property-page">

//       {/* =========================
//           HERO
//       ========================= */}

//       <section className="property-hero">

//         <div className="property-hero-content">

//           <span>REHOUSE REALTORS</span>

//           <h1>
//             Your Trusted
//             <br />
//             <strong>Real Estate Partner</strong>
//           </h1>

//           <p>
//             Buy • Sell • Rent • PG • Commercial • Plots
//           </p>

//           <div className="property-hero-buttons">

//             <button
//               onClick={() => setCategory("Buy")}
//             >
//               Buy Property
//             </button>

//             <button
//               onClick={() => setCategory("Rent")}
//             >
//               Rent Property
//             </button>

//             <button
//               onClick={() => setCategory("PG")}
//             >
//               PG
//             </button>

//           </div>

//         </div>

//       </section>

//       {/* =========================
//           STAFF PANEL
//       ========================= */}

//       <div className="property-staff-panel">

//         <a href="/property-admin">
//           🔐 Staff Property Panel
//         </a>

//       </div>

//       {/* =========================
//           MESSAGE
//       ========================= */}

//       {message && (
//         <div className="property-message">
//           {message}
//         </div>
//       )}

//       {/* =========================
//           SEARCH
//       ========================= */}

//       <section className="property-search-section">

//         <input
//           type="text"
//           placeholder="Search property, location..."
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//         />

//       </section>

//       {/* =========================
//           CATEGORY
//       ========================= */}

//       <section className="property-categories">

//         {[
//           "All",
//           "Buy",
//           "Sell",
//           "Rent",
//           "PG",
//           "Commercial",
//           "Plot",
//         ].map((item) => (

//           <button
//             key={item}
//             className={
//               category === item
//                 ? "active-category"
//                 : ""
//             }
//             onClick={() =>
//               setCategory(item)
//             }
//           >
//             {item}
//           </button>

//         ))}

//       </section>

//       {/* =========================
//           PROPERTY LIST
//       ========================= */}

//       <section className="property-section">

//         <div className="property-heading">

//           <span>OUR PROPERTIES</span>

//           <h2>
//             Find Your Perfect Property
//           </h2>

//           <p>
//             Residential, Commercial, PG, Rent,
//             Buy & Plot properties
//           </p>

//         </div>

//         <div className="property-grid">

//           {filteredProperties.length === 0 ? (

//             <div className="no-property">

//               <h3>No Property Found</h3>

//               <p>
//                 Try another category or
//                 search location.
//               </p>

//             </div>

//           ) : (

//             filteredProperties.map((property) => (

//               <div
//                 className="property-card"
//                 key={property.id}
//               >

//                 <div className="property-image">

//                   <img
//                     src={property.image}
//                     alt={property.title}
//                   />

//                   <span>
//                     {property.category}
//                   </span>

//                 </div>

//                 <div className="property-info">

//                   <h3>
//                     {property.title}
//                   </h3>

//                   <p className="property-location">
//                     📍 {property.location}
//                   </p>

//                   <p className="property-description">
//                     {property.description}
//                   </p>

//                   <div className="property-bottom">

//                     <strong>
//                       {property.price}
//                     </strong>

//                     <button
//                       onClick={() =>
//                         openEnquiry(property)
//                       }
//                     >
//                       Enquire Now
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             ))

//           )}

//         </div>

//       </section>

//       {/* =========================
//           SERVICES
//       ========================= */}

//       <section className="property-services">

//         <h2>
//           OUR PROPERTY SERVICES
//         </h2>

//         <div className="property-services-grid">

//           <div>
//             🏠
//             <h3>Buy Property</h3>
//             <p>
//               Residential and commercial properties.
//             </p>
//           </div>

//           <div>
//             🤝
//             <h3>Sell Property</h3>
//             <p>
//               Get the right buyer for your property.
//             </p>
//           </div>

//           <div>
//             🔑
//             <h3>Rent Property</h3>
//             <p>
//               Houses, flats, offices and shops.
//             </p>
//           </div>

//           <div>
//             🛏️
//             <h3>PG Accommodation</h3>
//             <p>
//               Comfortable PG options for students
//               and professionals.
//             </p>
//           </div>

//           <div>
//             🏢
//             <h3>Commercial</h3>
//             <p>
//               Offices, shops, warehouses and buildings.
//             </p>
//           </div>

//           <div>
//             🌳
//             <h3>Plots & Land</h3>
//             <p>
//               Residential and commercial land deals.
//             </p>
//           </div>

//         </div>

//       </section>

//       {/* =========================
//           CTA
//       ========================= */}

//       <section className="property-cta">

//         <div>

//           <h2>
//             Looking For Your Dream Property?
//           </h2>

//           <p>
//             Our team will help you find
//             the right property.
//           </p>

//         </div>

//         <button
//           onClick={() =>
//             setSelectedProperty({
//               title: "General Property Consultation",
//               category: "Property",
//               type: "General",
//               location: "",
//               price: "",
//             })
//           }
//         >
//           Contact Us
//         </button>

//       </section>

//       {/* <Footer /> */}

//       {/* =========================
//           PROPERTY ENQUIRY MODAL
//       ========================= */}

//       {selectedProperty && (

//         <div
//           className="property-modal-overlay"
//           onClick={closeEnquiry}
//         >

//           <div
//             className="property-modal"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             <button
//               className="property-modal-close"
//               onClick={closeEnquiry}
//             >
//               ×
//             </button>

//             <div className="property-modal-heading">

//               <span>
//                 NISS PROPERTY
//               </span>

//               <h2>
//                 Property Enquiry
//               </h2>

//               <p>
//                 {selectedProperty.title}
//               </p>

//               {selectedProperty.location && (
//                 <small>
//                   📍 {selectedProperty.location}
//                 </small>
//               )}

//             </div>

//             <form
//               onSubmit={submitEnquiry}
//             >

//               <div className="property-form-row">

//                 <div className="property-form-group">

//                   <label>
//                     Your Name *
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your name"
//                     value={customer.name}
//                     onChange={handleCustomerChange}
//                   />

//                 </div>

//                 <div className="property-form-group">

//                   <label>
//                     Mobile Number *
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Enter mobile number"
//                     value={customer.phone}
//                     onChange={handleCustomerChange}
//                   />

//                 </div>

//               </div>

//               <div className="property-form-row">

//                 <div className="property-form-group">

//                   <label>
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter email"
//                     value={customer.email}
//                     onChange={handleCustomerChange}
//                   />

//                 </div>

//                 <div className="property-form-group">

//                   <label>
//                     Address *
//                   </label>

//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="City / Area / Address"
//                     value={customer.address}
//                     onChange={handleCustomerChange}
//                   />

//                 </div>

//               </div>

//               <div className="property-form-group">

//                 <label>
//                   Requirement *
//                 </label>

//                 <textarea
//                   name="requirement"
//                   rows="3"
//                   placeholder="Tell us what property you are looking for..."
//                   value={customer.requirement}
//                   onChange={handleCustomerChange}
//                 />

//               </div>

//               <div className="property-form-row">

//                 <div className="property-form-group">

//                   <label>
//                     Budget
//                   </label>

//                   <input
//                     type="text"
//                     name="budget"
//                     placeholder="Example: ₹50 Lakh"
//                     value={customer.budget}
//                     onChange={handleCustomerChange}
//                   />

//                 </div>

//                 <div className="property-form-group">

//                   <label>
//                     Preferred Date
//                   </label>

//                   <input
//                     type="date"
//                     name="date"
//                     value={customer.date}
//                     onChange={handleCustomerChange}
//                   />

//                 </div>

//               </div>

//               <div className="property-form-group">

//                 <label>
//                   Preferred Time
//                 </label>

//                 <select
//                   name="time"
//                   value={customer.time}
//                   onChange={handleCustomerChange}
//                 >

//                   <option value="">
//                     Select Time
//                   </option>

//                   <option value="Morning">
//                     Morning
//                   </option>

//                   <option value="Afternoon">
//                     Afternoon
//                   </option>

//                   <option value="Evening">
//                     Evening
//                   </option>

//                 </select>

//               </div>

//               <button
//                 type="submit"
//                 className="property-submit-btn"
//               >
//                 Submit Enquiry →
//               </button>

//             </form>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// };

// export default Property;




import React, { useEffect, useState } from "react";
import "./Property.css";

import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [loadingProperties, setLoadingProperties] =
    useState(true);

  const [selectedProperty, setSelectedProperty] =
    useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    requirement: "",
    budget: "",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState("");

  /* =========================================================
     FIREBASE SE PROPERTIES LIVE LOAD
     Collection: properties
  ========================================================= */

  useEffect(() => {
    const propertiesRef = collection(
      db,
      "properties"
    );

    const unsubscribe = onSnapshot(
      propertiesRef,

      (snapshot) => {
        const data = snapshot.docs.map(
          (item) => ({
            id: item.id,
            ...item.data(),
          })
        );

        /* Latest property first */

        data.sort((a, b) => {
          const timeA =
            a.createdAt?.seconds || 0;

          const timeB =
            b.createdAt?.seconds || 0;

          return timeB - timeA;
        });

        setProperties(data);
        setLoadingProperties(false);
      },

      (error) => {
        console.error(
          "Property Firebase Load Error:",
          error
        );

        setProperties([]);
        setLoadingProperties(false);

        setMessage(
          "Properties load nahi ho pa rahi hain."
        );
      }
    );

    return () => unsubscribe();
  }, []);

  /* =========================================================
     FILTER PROPERTIES
  ========================================================= */

  const filteredProperties =
    properties.filter((property) => {
      const propertyCategory =
        String(
          property.category || ""
        ).toLowerCase();

      const selectedCategory =
        String(category).toLowerCase();

      const categoryMatch =
        category === "All" ||
        propertyCategory ===
          selectedCategory;

      const searchText =
        search.trim().toLowerCase();

      const title =
        String(
          property.title || ""
        ).toLowerCase();

      const location =
        String(
          property.location || ""
        ).toLowerCase();

      const type =
        String(
          property.type || ""
        ).toLowerCase();

      const description =
        String(
          property.description || ""
        ).toLowerCase();

      const searchMatch =
        !searchText ||
        title.includes(searchText) ||
        location.includes(searchText) ||
        type.includes(searchText) ||
        description.includes(searchText);

      return (
        categoryMatch &&
        searchMatch
      );
    });

  /* =========================================================
     OPEN ENQUIRY
  ========================================================= */

  const openEnquiry = (property) => {
    setSelectedProperty(property);

    setCustomer((prev) => ({
      ...prev,

      requirement:
        `I am interested in ${
          property.title || "this property"
        }.`,

      budget:
        property.price ||
        prev.budget ||
        "",
    }));
  };

  /* =========================================================
     CLOSE ENQUIRY
  ========================================================= */

  const closeEnquiry = () => {
    setSelectedProperty(null);
  };

  /* =========================================================
     CUSTOMER FORM CHANGE
  ========================================================= */

  const handleCustomerChange = (e) => {
    const { name, value } =
      e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     SUBMIT ENQUIRY
     Firestore collection:
     consultantRequests
  ========================================================= */

  const submitEnquiry = async (e) => {
    e.preventDefault();

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim() ||
      !customer.requirement.trim()
    ) {
      setMessage(
        "Please fill Name, Mobile, Address and Requirement."
      );

      setTimeout(
        () => setMessage(""),
        3000
      );

      return;
    }

    try {
      const enquiryData = {
        name:
          customer.name.trim(),

        phone:
          customer.phone.trim(),

        email:
          customer.email.trim(),

        service:
          selectedProperty?.title ||
          "Property Enquiry",

        requirement:
          customer.requirement.trim(),

        budget:
          customer.budget ||
          selectedProperty?.price ||
          "",

        date:
          customer.date || "",

        time:
          customer.time || "",

        address:
          customer.address.trim(),

        propertyId:
          selectedProperty?.id ||
          "",

        propertyTitle:
          selectedProperty?.title ||
          "",

        propertyCategory:
          selectedProperty?.category ||
          "",

        propertyType:
          selectedProperty?.type ||
          "",

        propertyLocation:
          selectedProperty?.location ||
          "",

        propertyPrice:
          selectedProperty?.price ||
          "",

        source:
          "Property Page",

        status:
          "New",

        createdAt:
          serverTimestamp(),
      };

      /* =========================
         FIREBASE ENQUIRY SAVE
      ========================= */

      await addDoc(
        collection(
          db,
          "consultantRequests"
        ),
        enquiryData
      );

      /* =========================
         CUSTOMER DETAILS SAVE
      ========================= */

      localStorage.setItem(
        "propertyCustomer",
        JSON.stringify(customer)
      );

      setSelectedProperty(null);

      setMessage(
        "Enquiry submitted successfully! Our property team will contact you."
      );

      setTimeout(
        () => setMessage(""),
        4000
      );
    } catch (error) {
      console.error(
        "Property enquiry error:",
        error
      );

      setMessage(
        "Enquiry submit nahi ho payi. Please try again."
      );

      setTimeout(
        () => setMessage(""),
        3000
      );
    }
  };

  /* =========================================================
     LOAD SAVED CUSTOMER
  ========================================================= */

  useEffect(() => {
    const savedCustomer =
      JSON.parse(
        localStorage.getItem(
          "propertyCustomer"
        )
      ) || null;

    if (savedCustomer) {
      setCustomer((prev) => ({
        ...prev,
        ...savedCustomer,
      }));
    }
  }, []);

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <div className="property-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="property-hero">

        <div className="property-hero-content">

          <span>
            REHOUSE REALTORS
          </span>

          <h1>
            Your Trusted
            <br />

            <strong>
              Real Estate Partner
            </strong>
          </h1>

          <p>
            Buy • Sell • Rent • PG •
            Commercial • Plots
          </p>

          <div className="property-hero-buttons">

            <button
              type="button"
              onClick={() =>
                setCategory("Buy")
              }
            >
              Buy Property
            </button>

            <button
              type="button"
              onClick={() =>
                setCategory("Rent")
              }
            >
              Rent Property
            </button>

            <button
              type="button"
              onClick={() =>
                setCategory("PG")
              }
            >
              PG
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          STAFF PANEL
      ===================================================== */}

      <div className="property-staff-panel">

        <a href="/property-admin">
          🔐 Staff Property Panel
        </a>

      </div>

      {/* =====================================================
          MESSAGE
      ===================================================== */}

      {message && (
        <div className="property-message">
          {message}
        </div>
      )}

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="property-search-section">

        <input
          type="text"
          placeholder="Search property, location..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="property-categories">

        {[
          "All",
          "Buy",
          "Sell",
          "Rent",
          "PG",
          "Commercial",
          "Plot",
        ].map((item) => (

          <button
            type="button"
            key={item}
            className={
              category === item
                ? "active-category"
                : ""
            }
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>

        ))}

      </section>

      {/* =====================================================
          PROPERTY LIST
      ===================================================== */}

      <section className="property-section">

        <div className="property-heading">

          <span>
            OUR PROPERTIES
          </span>

          <h2>
            Find Your Perfect Property
          </h2>

          <p>
            Residential, Commercial,
            PG, Rent, Buy & Plot
            properties
          </p>

        </div>

        {/* LOADING */}

        {loadingProperties ? (

          <div className="no-property">

            <h3>
              Loading Properties...
            </h3>

            <p>
              Please wait while we load
              the latest properties.
            </p>

          </div>

        ) : (

          <div className="property-grid">

            {filteredProperties.length ===
            0 ? (

              <div className="no-property">

                <h3>
                  No Property Found
                </h3>

                <p>
                  Try another category
                  or search location.
                </p>

              </div>

            ) : (

              filteredProperties.map(
                (property) => (

                  <div
                    className="property-card"
                    key={property.id}
                  >

                    {/* IMAGE */}

                    <div className="property-image">

                      {property.image ? (

                        <img
                          src={
                            property.image
                          }
                          alt={
                            property.title ||
                            "Property"
                          }
                        />

                      ) : (

                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            minHeight:
                              "250px",
                            display: "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "center",
                            background:
                              "#f5edf1",
                            color:
                              "#a94c72",
                          }}
                        >
                          REHOUSE REALTORS
                        </div>

                      )}

                      <span>
                        {property.category ||
                          "Property"}
                      </span>

                    </div>

                    {/* INFO */}

                    <div className="property-info">

                      <h3>
                        {property.title}
                      </h3>

                      <p className="property-location">
                        📍{" "}
                        {property.location}
                      </p>

                      {property.type && (
                        <p
                          style={{
                            fontSize:
                              "12px",
                            color:
                              "#a94c72",
                            fontWeight:
                              "600",
                          }}
                        >
                          {property.type}
                        </p>
                      )}

                      {property.description && (
                        <p className="property-description">
                          {
                            property.description
                          }
                        </p>
                      )}

                      <div className="property-bottom">

                        <strong>
                          {property.price ||
                            "Price on Request"}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            openEnquiry(
                              property
                            )
                          }
                        >
                          Enquire Now
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )

            )}

          </div>

        )}

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="property-services">

        <h2>
          OUR PROPERTY SERVICES
        </h2>

        <div className="property-services-grid">

          <div>
            🏠

            <h3>
              Buy Property
            </h3>

            <p>
              Residential and commercial
              properties.
            </p>
          </div>

          <div>
            🤝

            <h3>
              Sell Property
            </h3>

            <p>
              Get the right buyer for your
              property.
            </p>
          </div>

          <div>
            🔑

            <h3>
              Rent Property
            </h3>

            <p>
              Houses, flats, offices
              and shops.
            </p>
          </div>

          <div>
            🛏️

            <h3>
              PG Accommodation
            </h3>

            <p>
              Comfortable PG options
              for students and
              professionals.
            </p>
          </div>

          <div>
            🏢

            <h3>
              Commercial
            </h3>

            <p>
              Offices, shops,
              warehouses and buildings.
            </p>
          </div>

          <div>
            🌳

            <h3>
              Plots & Land
            </h3>

            <p>
              Residential and
              commercial land deals.
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="property-cta">

        <div>

          <h2>
            Looking For Your Dream
            Property?
          </h2>

          <p>
            Our team will help you
            find the right property.
          </p>

        </div>

        <button
          type="button"
          onClick={() =>
            setSelectedProperty({
              id: "",
              title:
                "General Property Consultation",
              category:
                "Property",
              type:
                "General",
              location:
                "",
              price:
                "",
            })
          }
        >
          Contact Us
        </button>

      </section>

      {/* =====================================================
          PROPERTY ENQUIRY MODAL
      ===================================================== */}

      {selectedProperty && (

        <div
          className="property-modal-overlay"
          onClick={closeEnquiry}
        >

          <div
            className="property-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              type="button"
              className="property-modal-close"
              onClick={closeEnquiry}
            >
              ×
            </button>

            <div className="property-modal-heading">

              <span>
                REHOUSE REALTORS
              </span>

              <h2>
                Property Enquiry
              </h2>

              <p>
                {
                  selectedProperty.title
                }
              </p>

              {selectedProperty.location && (
                <small>
                  📍{" "}
                  {
                    selectedProperty.location
                  }
                </small>
              )}

            </div>

            <form
              onSubmit={
                submitEnquiry
              }
            >

              {/* NAME + PHONE */}

              <div className="property-form-row">

                <div className="property-form-group">

                  <label>
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={
                      customer.name
                    }
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

                <div className="property-form-group">

                  <label>
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter mobile number"
                    value={
                      customer.phone
                    }
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

              </div>

              {/* EMAIL + ADDRESS */}

              <div className="property-form-row">

                <div className="property-form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={
                      customer.email
                    }
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

                <div className="property-form-group">

                  <label>
                    Address *
                  </label>

                  <input
                    type="text"
                    name="address"
                    placeholder="City / Area / Address"
                    value={
                      customer.address
                    }
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

              </div>

              {/* REQUIREMENT */}

              <div className="property-form-group">

                <label>
                  Requirement *
                </label>

                <textarea
                  name="requirement"
                  rows="3"
                  placeholder="Tell us what property you are looking for..."
                  value={
                    customer.requirement
                  }
                  onChange={
                    handleCustomerChange
                  }
                />

              </div>

              {/* BUDGET + DATE */}

              <div className="property-form-row">

                <div className="property-form-group">

                  <label>
                    Budget
                  </label>

                  <input
                    type="text"
                    name="budget"
                    placeholder="Example: ₹50 Lakh"
                    value={
                      customer.budget
                    }
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

                <div className="property-form-group">

                  <label>
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={
                      customer.date
                    }
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

              </div>

              {/* TIME */}

              <div className="property-form-group">

                <label>
                  Preferred Time
                </label>

                <select
                  name="time"
                  value={
                    customer.time
                  }
                  onChange={
                    handleCustomerChange
                  }
                >

                  <option value="">
                    Select Time
                  </option>

                  <option value="Morning">
                    Morning
                  </option>

                  <option value="Afternoon">
                    Afternoon
                  </option>

                  <option value="Evening">
                    Evening
                  </option>

                </select>

              </div>

              <button
                type="submit"
                className="property-submit-btn"
              >
                Submit Enquiry →
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Property;
