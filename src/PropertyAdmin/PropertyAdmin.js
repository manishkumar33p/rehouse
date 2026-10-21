// import React, { useEffect, useState } from "react";
// import "./PropertyAdmin.css";

// const emptyForm = {
//   title: "",
//   category: "Buy",
//   type: "Residential",
//   location: "",
//   price: "",
//   image: "",
//   description: "",
// };

// const PropertyAdmin = () => {

//   const [properties, setProperties] = useState([]);
//   const [form, setForm] = useState(emptyForm);
//   const [editingId, setEditingId] = useState(null);
//   const [message, setMessage] = useState("");

//   useEffect(() => {

//     const saved = localStorage.getItem("niss_properties");

//     if (saved) {
//       setProperties(JSON.parse(saved));
//     }

//   }, []);

//   const saveProperties = (data) => {

//     setProperties(data);

//     localStorage.setItem(
//       "niss_properties",
//       JSON.stringify(data)
//     );

//     // same page ke components ko update karne ke liye
//     window.dispatchEvent(new Event("niss-properties-updated"));

//   };

//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });

//   };

//   const addProperty = (e) => {

//     e.preventDefault();

//     if (
//       !form.title ||
//       !form.location ||
//       !form.price ||
//       !form.image
//     ) {

//       setMessage("Please fill all required fields.");

//       setTimeout(() => setMessage(""), 2500);

//       return;
//     }

//     if (editingId) {

//       const updated = properties.map((property) =>
//         property.id === editingId
//           ? {
//               ...property,
//               ...form,
//             }
//           : property
//       );

//       saveProperties(updated);

//       setEditingId(null);

//       setMessage("Property updated successfully!");

//     } else {

//       const newProperty = {
//         id: Date.now(),
//         ...form,
//       };

//       saveProperties([
//         ...properties,
//         newProperty,
//       ]);

//       setMessage("Property added successfully!");

//     }

//     setForm(emptyForm);

//     setTimeout(() => setMessage(""), 2500);
//   };

//   const editProperty = (property) => {

//     setForm({
//       title: property.title,
//       category: property.category,
//       type: property.type,
//       location: property.location,
//       price: property.price,
//       image: property.image,
//       description: property.description,
//     });

//     setEditingId(property.id);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//   };

//   const deleteProperty = (id) => {

//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this property?"
//     );

//     if (!confirmDelete) return;

//     const updated = properties.filter(
//       (property) => property.id !== id
//     );

//     saveProperties(updated);

//     setMessage("Property deleted.");

//     setTimeout(() => setMessage(""), 2000);
//   };

//   const cancelEdit = () => {

//     setEditingId(null);
//     setForm(emptyForm);

//   };

//   return (

//     <div className="property-admin">

//       {/* HEADER */}

//       <div className="admin-header">

//         <div>
//           <span>NISS PROPERTY</span>

//           <h1>
//             Staff Property Panel
//           </h1>

//           <p>
//             Add, edit and manage properties
//           </p>
//         </div>

//         <div className="admin-count">
//           <strong>
//             {properties.length}
//           </strong>

//           <span>
//             Properties
//           </span>
//         </div>

//       </div>

//       {message && (
//         <div className="admin-message">
//           {message}
//         </div>
//       )}

//       {/* FORM */}

//       <section className="property-form-section">

//         <h2>
//           {editingId
//             ? "Edit Property"
//             : "Add New Property"}
//         </h2>

//         <form onSubmit={addProperty}>

//           <div className="form-grid">

//             <div className="form-group">

//               <label>
//                 Property Title *
//               </label>

//               <input
//                 name="title"
//                 value={form.title}
//                 onChange={handleChange}
//                 placeholder="Example: Luxury 3 BHK House"
//               />

//             </div>

//             <div className="form-group">

//               <label>
//                 Category *
//               </label>

//               <select
//                 name="category"
//                 value={form.category}
//                 onChange={handleChange}
//               >

//                 <option value="Buy">
//                   Buy
//                 </option>

//                 <option value="Sell">
//                   Sell
//                 </option>

//                 <option value="Rent">
//                   Rent
//                 </option>

//                 <option value="PG">
//                   PG
//                 </option>

//                 <option value="Commercial">
//                   Commercial
//                 </option>

//                 <option value="Plot">
//                   Plot / Land
//                 </option>

//               </select>

//             </div>

//             <div className="form-group">

//               <label>
//                 Property Type
//               </label>

//               <select
//                 name="type"
//                 value={form.type}
//                 onChange={handleChange}
//               >

//                 <option value="Residential">
//                   Residential
//                 </option>

//                 <option value="Commercial">
//                   Commercial
//                 </option>

//                 <option value="PG">
//                   PG
//                 </option>

//                 <option value="Land">
//                   Land / Plot
//                 </option>

//                 <option value="Shop">
//                   Shop
//                 </option>

//                 <option value="Office">
//                   Office
//                 </option>

//               </select>

//             </div>

//             <div className="form-group">

//               <label>
//                 Location *
//               </label>

//               <input
//                 name="location"
//                 value={form.location}
//                 onChange={handleChange}
//                 placeholder="Example: Ghaziabad, UP"
//               />

//             </div>

//             <div className="form-group">

//               <label>
//                 Price *
//               </label>

//               <input
//                 name="price"
//                 value={form.price}
//                 onChange={handleChange}
//                 placeholder="Example: ₹45 Lakh"
//               />

//             </div>

//             <div className="form-group">

//               <label>
//                 Image URL *
//               </label>

//               <input
//                 name="image"
//                 value={form.image}
//                 onChange={handleChange}
//                 placeholder="Paste image URL"
//               />

//             </div>

//           </div>

//           <div className="form-group">

//             <label>
//               Property Description
//             </label>

//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Write property details..."
//               rows="4"
//             />

//           </div>

//           <div className="form-buttons">

//             <button
//               type="submit"
//               className="save-property"
//             >
//               {editingId
//                 ? "Update Property"
//                 : "Add Property"}
//             </button>

//             {editingId && (

//               <button
//                 type="button"
//                 className="cancel-edit"
//                 onClick={cancelEdit}
//               >
//                 Cancel
//               </button>

//             )}

//           </div>

//         </form>

//       </section>

//       {/* PROPERTY TABLE */}

//       <section className="admin-property-list">

//         <div className="list-title">

//           <div>
//             <span>MANAGE LISTINGS</span>

//             <h2>
//               All Properties
//             </h2>
//           </div>

//         </div>

//         <div className="admin-table-wrapper">

//           <table>

//             <thead>

//               <tr>

//                 <th>Image</th>
//                 <th>Property</th>
//                 <th>Category</th>
//                 <th>Location</th>
//                 <th>Price</th>
//                 <th>Action</th>

//               </tr>

//             </thead>

//             <tbody>

//               {properties.map((property) => (

//                 <tr key={property.id}>

//                   <td>

//                     <img
//                       src={property.image}
//                       alt={property.title}
//                     />

//                   </td>

//                   <td>

//                     <strong>
//                       {property.title}
//                     </strong>

//                     <small>
//                       {property.type}
//                     </small>

//                   </td>

//                   <td>

//                     <span className="category-badge">
//                       {property.category}
//                     </span>

//                   </td>

//                   <td>
//                     {property.location}
//                   </td>

//                   <td>
//                     {property.price}
//                   </td>

//                   <td>

//                     <div className="action-buttons">

//                       <button
//                         className="edit-btn"
//                         onClick={() =>
//                           editProperty(property)
//                         }
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="delete-btn"
//                         onClick={() =>
//                           deleteProperty(property.id)
//                         }
//                       >
//                         Delete
//                       </button>

//                     </div>

//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>

//         </div>

//       </section>

//     </div>

//   );
// };

// export default PropertyAdmin;


import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import "./PropertyAdmin.css";

const emptyForm = {
  title: "",
  category: "Buy",
  type: "Residential",
  location: "",
  price: "",
  image: "",
  description: "",
};

const PropertyAdmin = () => {
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  /* =========================================================
     FIREBASE REAL-TIME PROPERTY LOAD
  ========================================================= */

  useEffect(() => {
    const propertiesRef = collection(db, "properties");

    const unsubscribe = onSnapshot(
      propertiesRef,
      (snapshot) => {
        const data = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        // Latest property first
        data.sort((a, b) => {
          const timeA = a.createdAt?.seconds || 0;
          const timeB = b.createdAt?.seconds || 0;

          return timeB - timeA;
        });

        setProperties(data);
        setLoading(false);
      },
      (error) => {
        console.error("Property load error:", error);

        setMessage(
          "Properties load nahi ho pa rahi hain."
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================================
     ADD / UPDATE PROPERTY
  ========================================================= */

  const addProperty = async (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.location.trim() ||
      !form.price.trim() ||
      !form.image.trim()
    ) {
      setMessage(
        "Please fill all required fields."
      );

      setTimeout(() => {
        setMessage("");
      }, 2500);

      return;
    }

    try {
      setSaving(true);
      setMessage("");

      /* ===============================
         EDIT EXISTING PROPERTY
      =============================== */

      if (editingId) {
        const propertyRef = doc(
          db,
          "properties",
          editingId
        );

        await updateDoc(propertyRef, {
          title: form.title.trim(),
          category: form.category,
          type: form.type,
          location: form.location.trim(),
          price: form.price.trim(),
          image: form.image.trim(),
          description: form.description.trim(),

          updatedAt: serverTimestamp(),
        });

        setMessage(
          "Property updated successfully!"
        );

        setEditingId(null);
      }

      /* ===============================
         ADD NEW PROPERTY
      =============================== */

      else {
        await addDoc(
          collection(db, "properties"),
          {
            title: form.title.trim(),
            category: form.category,
            type: form.type,
            location: form.location.trim(),
            price: form.price.trim(),
            image: form.image.trim(),
            description:
              form.description.trim(),

            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }
        );

        setMessage(
          "Property added successfully!"
        );
      }

      setForm(emptyForm);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error(
        "Property save error:",
        error
      );

      setMessage(
        "Property save nahi ho paayi. Firebase rules check karein."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     EDIT PROPERTY
  ========================================================= */

  const editProperty = (property) => {
    setForm({
      title: property.title || "",
      category: property.category || "Buy",
      type: property.type || "Residential",
      location: property.location || "",
      price: property.price || "",
      image: property.image || "",
      description:
        property.description || "",
    });

    setEditingId(property.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     DELETE PROPERTY
  ========================================================= */

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteDoc(
        doc(db, "properties", id)
      );

      setMessage(
        "Property deleted successfully."
      );

      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }

      setTimeout(() => {
        setMessage("");
      }, 2500);
    } catch (error) {
      console.error(
        "Property delete error:",
        error
      );

      setMessage(
        "Property delete nahi ho paayi."
      );
    }
  };

  /* =========================================================
     CANCEL EDIT
  ========================================================= */

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="property-admin">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="admin-header">

        <div>
          <span>
            REHOUSE REALTORS
          </span>

          <h1>
            Staff Property Panel
          </h1>

          <p>
            Add, edit and manage website
            properties
          </p>
        </div>

        <div className="admin-count">
          <strong>
            {properties.length}
          </strong>

          <span>
            Properties
          </span>
        </div>

      </div>

      {/* =====================================================
          MESSAGE
      ===================================================== */}

      {message && (
        <div className="admin-message">
          {message}
        </div>
      )}

      {/* =====================================================
          PROPERTY FORM
      ===================================================== */}

      <section className="property-form-section">

        <h2>
          {editingId
            ? "Edit Property"
            : "Add New Property"}
        </h2>

        <form onSubmit={addProperty}>

          <div className="form-grid">

            {/* PROPERTY TITLE */}

            <div className="form-group">

              <label>
                Property Title *
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Example: Luxury 3 BHK House"
                required
              />

            </div>

            {/* CATEGORY */}

            <div className="form-group">

              <label>
                Category *
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >

                <option value="Buy">
                  Buy
                </option>

                <option value="Sell">
                  Sell
                </option>

                <option value="Rent">
                  Rent
                </option>

                <option value="PG">
                  PG
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Plot">
                  Plot / Land
                </option>

              </select>

            </div>

            {/* PROPERTY TYPE */}

            <div className="form-group">

              <label>
                Property Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >

                <option value="Residential">
                  Residential
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="PG">
                  PG
                </option>

                <option value="Land">
                  Land / Plot
                </option>

                <option value="Shop">
                  Shop
                </option>

                <option value="Office">
                  Office
                </option>

              </select>

            </div>

            {/* LOCATION */}

            <div className="form-group">

              <label>
                Location *
              </label>

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Example: Noida Sector 150"
                required
              />

            </div>

            {/* PRICE */}

            <div className="form-group">

              <label>
                Price *
              </label>

              <input
                type="text"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Example: ₹45 Lakh"
                required
              />

            </div>

            {/* IMAGE */}

            <div className="form-group">

              <label>
                Image URL *
              </label>

              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Paste property image URL"
                required
              />

            </div>

          </div>

          {/* IMAGE PREVIEW */}

          {form.image && (
            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                IMAGE PREVIEW
              </p>

              <img
                src={form.image}
                alt="Property Preview"
                style={{
                  width: "220px",
                  height: "140px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                onError={(e) => {
                  e.currentTarget.style.display =
                    "none";
                }}
              />
            </div>
          )}

          {/* DESCRIPTION */}

          <div className="form-group">

            <label>
              Property Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write property details..."
              rows="5"
            />

          </div>

          {/* BUTTONS */}

          <div className="form-buttons">

            <button
              type="submit"
              className="save-property"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Property"
                : "Add Property"}
            </button>

            {editingId && (
              <button
                type="button"
                className="cancel-edit"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </section>

      {/* =====================================================
          PROPERTY LIST
      ===================================================== */}

      <section className="admin-property-list">

        <div className="list-title">

          <div>
            <span>
              MANAGE LISTINGS
            </span>

            <h2>
              All Properties
            </h2>
          </div>

        </div>

        {/* LOADING */}

        {loading ? (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
            }}
          >
            Loading properties...
          </div>
        ) : properties.length === 0 ? (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h3>
              No properties added yet.
            </h3>

            <p>
              ऊपर form से अपनी पहली property
              add करें।
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>Image</th>
                  <th>Property</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {properties.map(
                  (property) => (
                    <tr key={property.id}>

                      {/* IMAGE */}

                      <td>

                        <img
                          src={property.image}
                          alt={property.title}
                        />

                      </td>

                      {/* PROPERTY */}

                      <td>

                        <strong>
                          {property.title}
                        </strong>

                        <small>
                          {property.type}
                        </small>

                      </td>

                      {/* CATEGORY */}

                      <td>

                        <span className="category-badge">
                          {property.category}
                        </span>

                      </td>

                      {/* LOCATION */}

                      <td>
                        {property.location}
                      </td>

                      {/* PRICE */}

                      <td>
                        {property.price}
                      </td>

                      {/* ACTION */}

                      <td>

                        <div className="action-buttons">

                          <button
                            type="button"
                            className="edit-btn"
                            onClick={() =>
                              editProperty(
                                property
                              )
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="delete-btn"
                            onClick={() =>
                              deleteProperty(
                                property.id
                              )
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>
        )}

      </section>

    </div>
  );
};

export default PropertyAdmin;
