// import React, { useMemo, useState } from "react";
// import "./ProjectJourney.css";

// const projects = [
//   {
//     id: 1,
//     title: "The Grand Residency",
//     location: "Greater Noida",
//     type: "Residential",
//     configuration: "2, 3 & 4 BHK",
//     price: "₹68 Lakh - ₹1.35 Cr",
//     status: "New Launch",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: 2,
//     title: "Royal Palm Heights",
//     location: "Noida Extension",
//     type: "Residential",
//     configuration: "2 & 3 BHK",
//     price: "₹52 Lakh - ₹89 Lakh",
//     status: "Verified",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: 3,
//     title: "Urban Crest",
//     location: "Noida Sector 150",
//     type: "Residential",
//     configuration: "3 & 4 BHK",
//     price: "₹1.10 Cr - ₹2.25 Cr",
//     status: "Featured",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: 4,
//     title: "The Business Avenue",
//     location: "Greater Noida West",
//     type: "Commercial",
//     configuration: "Retail & Office",
//     price: "₹45 Lakh onwards",
//     status: "Commercial",
//     image:
//       "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
//   },
// ];

// const assistance = [
//   {
//     icon: "⌂",
//     title: "Home Search",
//     text: "Discover properties that match your budget, location and lifestyle.",
//   },
//   {
//     icon: "✓",
//     title: "Builder Check",
//     text: "Get guidance on project information, builder details and documentation.",
//   },
//   {
//     icon: "▣",
//     title: "Legal Help",
//     text: "Understand important property documents and transaction requirements.",
//   },
//   {
//     icon: "↗",
//     title: "Negotiation Support",
//     text: "Get professional assistance while discussing property pricing and terms.",
//   },
// ];

// const reasons = [
//   {
//     icon: "✓",
//     title: "Verified & Trusted Projects",
//     text: "Explore carefully selected projects with important property information presented clearly.",
//   },
//   {
//     icon: "◆",
//     title: "Direct Deal Assistance",
//     text: "We help you understand builder offerings, pricing and available options.",
//   },
//   {
//     icon: "♡",
//     title: "Personalized Guidance",
//     text: "Your property search is supported according to your requirements and budget.",
//   },
//   {
//     icon: "✦",
//     title: "Dedicated Customer Support",
//     text: "From your first enquiry to property selection, our team stays available to assist.",
//   },
// ];

// function ProjectJourney() {
//   const [city, setCity] = useState("");
//   const [status, setStatus] = useState("");
//   const [search, setSearch] = useState("");

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     requirement: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const filteredProjects = useMemo(() => {
//     return projects.filter((project) => {
//       const cityMatch =
//         !city ||
//         project.location.toLowerCase().includes(city.toLowerCase());

//       const statusMatch =
//         !status ||
//         project.status.toLowerCase().includes(status.toLowerCase()) ||
//         project.type.toLowerCase().includes(status.toLowerCase());

//       const searchMatch =
//         !search ||
//         project.title.toLowerCase().includes(search.toLowerCase()) ||
//         project.location.toLowerCase().includes(search.toLowerCase()) ||
//         project.type.toLowerCase().includes(search.toLowerCase());

//       return cityMatch && statusMatch && searchMatch;
//     });
//   }, [city, status, search]);

//   const handleFormChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.phone) {
//       alert("Please enter your name and phone number.");
//       return;
//     }

//     const oldData = JSON.parse(
//       localStorage.getItem("rehouse_project_enquiries") || "[]"
//     );

//     const enquiry = {
//       ...form,
//       createdAt: new Date().toISOString(),
//       source: "REHOUSE REALTORS Project Page",
//     };

//     localStorage.setItem(
//       "rehouse_project_enquiries",
//       JSON.stringify([...oldData, enquiry])
//     );

//     window.dispatchEvent(
//       new CustomEvent("rehouse-project-enquiry", {
//         detail: form,
//       })
//     );

//     setSubmitted(true);

//     setForm({
//       name: "",
//       phone: "",
//       email: "",
//       requirement: "",
//       message: "",
//     });
//   };

//   const scrollToExpert = () => {
//     document
//       .getElementById("rehouse-expert")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <main className="project-journey-page">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="pj-hero">
//         <div className="pj-hero-overlay"></div>

//         <div className="pj-hero-content">

//           <div className="pj-hero-text">
//             <div className="pj-eyebrow">
//               CURATED REAL ESTATE PROJECTS
//             </div>

//             <h1>
//               Find a Place
//               <br />
//               <span>You'll Love Coming Home To.</span>
//             </h1>

//             <p>
//               Discover thoughtfully selected residential and commercial
//               projects with professional guidance, transparent information
//               and personalized property assistance.
//             </p>

//             <div className="pj-hero-buttons">
//               <button
//                 className="pj-primary-btn"
//                 onClick={() =>
//                   document
//                     .getElementById("pj-projects")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//               >
//                 Explore Projects →
//               </button>

//               <button
//                 className="pj-outline-btn"
//                 onClick={scrollToExpert}
//               >
//                 Talk to an Expert
//               </button>
//             </div>
//           </div>

//           <div className="pj-hero-search">

//             <div className="pj-search-heading">
//               <span>Find Your Property</span>
//               <small>Tell us what you're looking for</small>
//             </div>

//             <div className="pj-search-box">

//               <div className="pj-search-field">
//                 <span className="pj-search-icon">⌖</span>

//                 <div>
//                   <small>City / Location</small>

//                   <select
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                   >
//                     <option value="">Select City</option>
//                     <option value="Noida">Noida</option>
//                     <option value="Greater Noida">
//                       Greater Noida
//                     </option>
//                     <option value="Noida Extension">
//                       Noida Extension
//                     </option>
//                   </select>
//                 </div>
//               </div>

//               <div className="pj-search-divider"></div>

//               <div className="pj-search-field">
//                 <span className="pj-search-icon">◇</span>

//                 <div>
//                   <small>Property Type</small>

//                   <select
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                   >
//                     <option value="">All Properties</option>
//                     <option value="Residential">
//                       Residential
//                     </option>
//                     <option value="Commercial">
//                       Commercial
//                     </option>
//                     <option value="New Launch">
//                       New Launch
//                     </option>
//                     <option value="Verified">
//                       Verified
//                     </option>
//                   </select>
//                 </div>
//               </div>

//               <button className="pj-search-button">
//                 🔍
//               </button>

//             </div>

//             <div className="pj-trust-tags">
//               <span>✓ Verified Projects</span>
//               <span>✓ Transparent Information</span>
//               <span>✓ Expert Assistance</span>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROJECT SEARCH
//       ===================================================== */}

//       <section className="pj-project-section" id="pj-projects">

//         <div className="pj-container">

//           <div className="pj-section-heading-row">
//             <div>
//               <span className="pj-small-title">
//                 DISCOVER YOUR NEXT ADDRESS
//               </span>

//               <h2>
//                 Featured <span>Projects</span>
//               </h2>

//               <p>
//                 Explore selected residential and commercial opportunities
//                 across growing locations.
//               </p>
//             </div>

//             <div className="pj-project-search">
//               <input
//                 type="text"
//                 placeholder="Search project or location..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="pj-project-grid">

//             {filteredProjects.length > 0 ? (
//               filteredProjects.map((project) => (
//                 <article className="pj-project-card" key={project.id}>

//                   <div className="pj-project-image">

//                     <img
//                       src={project.image}
//                       alt={project.title}
//                     />

//                     <span className="pj-project-status">
//                       {project.status}
//                     </span>

//                     <button className="pj-heart">
//                       ♡
//                     </button>

//                   </div>

//                   <div className="pj-project-content">

//                     <span className="pj-project-type">
//                       {project.type}
//                     </span>

//                     <h3>{project.title}</h3>

//                     <p className="pj-project-location">
//                       ⌖ {project.location}
//                     </p>

//                     <p className="pj-project-config">
//                       {project.configuration}
//                     </p>

//                     <div className="pj-project-bottom">

//                       <strong>{project.price}</strong>

//                       <button
//                         onClick={() => {
//                           setForm({
//                             ...form,
//                             requirement: project.title,
//                           });

//                           scrollToExpert();
//                         }}
//                       >
//                         See Details ↗
//                       </button>

//                     </div>

//                   </div>

//                 </article>
//               ))
//             ) : (
//               <div className="pj-no-results">
//                 <div>⌂</div>
//                 <h3>No projects found</h3>
//                 <p>
//                   Try another location or property type.
//                 </p>
//               </div>
//             )}

//           </div>

//         </div>

//       </section>
// {/* =====================================================
//     REHOUSE — OUR PROJECT JOURNEY
// ===================================================== */}

// <section className="pj-history-section">

//   <div className="pj-container">

//     {/* SECTION HEADER */}
//     <div className="pj-section-title">

//       <span className="pj-small-title">
//         OUR REAL ESTATE JOURNEY
//       </span>

//       <h2>
//         From Experience
//         <span> To What's Next.</span>
//       </h2>

//       <p>
//         Our journey is built on experience, property understanding
//         and a clear vision for the future of real estate.
//       </p>

//     </div>


//     {/* =================================================
//         PAST PROJECTS
//     ================================================= */}

//     <div className="pj-history-block">

//       <div className="pj-history-heading">

//         <div>
//           <span className="pj-history-label">
//             OUR EXPERIENCE
//           </span>

//           <h3>
//             Past <span>Projects</span>
//           </h3>

//           <p>
//             Our previous work and project associations have helped us
//             understand the real estate market, customer expectations
//             and the importance of making better property decisions.
//           </p>
//         </div>

//         <div className="pj-history-badge">
//           <strong>01</strong>
//           <span>PAST</span>
//         </div>

//       </div>


//       <div className="pj-history-grid">

//         {/* PROJECT 01 */}
//         <article className="pj-history-card">

//           <div className="pj-history-number">
//             01
//           </div>

//           <div className="pj-history-icon">
//             ◆
//           </div>

//           <span className="pj-history-status">
//             COMPLETED EXPERIENCE
//           </span>

//           <h4>
//             Super Tech
//           </h4>

//           <p>
//             A part of our earlier real estate journey, contributing
//             to our understanding of property opportunities,
//             project evaluation and customer requirements.
//           </p>

//           <div className="pj-history-line"></div>

//           <span className="pj-history-link">
//             Past Project Experience
//           </span>

//         </article>


//         {/* PROJECT 02 */}
//         <article className="pj-history-card">

//           <div className="pj-history-number">
//             02
//           </div>

//           <div className="pj-history-icon">
//             ◇
//           </div>

//           <span className="pj-history-status">
//             COMPLETED EXPERIENCE
//           </span>

//           <h4>
//             Butani Group
//           </h4>

//           <p>
//             An important part of our previous project experience,
//             helping us build practical knowledge across property
//             opportunities and real estate requirements.
//           </p>

//           <div className="pj-history-line"></div>

//           <span className="pj-history-link">
//             Past Project Experience
//           </span>

//         </article>


//         {/* PROJECT 03 */}
//         <article className="pj-history-card">

//           <div className="pj-history-number">
//             03
//           </div>

//           <div className="pj-history-icon">
//             ▦
//           </div>

//           <span className="pj-history-status">
//             PAST WORK
//           </span>

//           <h4>
//             Retail & Shop Spaces
//           </h4>

//           <p>
//             Experience across retail and shop space opportunities,
//             giving us valuable insight into commercial property
//             requirements and business-focused locations.
//           </p>

//           <div className="pj-history-line"></div>

//           <span className="pj-history-link">
//             Commercial Experience
//           </span>

//         </article>

//       </div>

//     </div>


//     {/* =================================================
//         PRESENT
//     ================================================= */}

//     <div className="pj-present-strip">

//       <div className="pj-present-content">

//         <span className="pj-history-label">
//           WHERE WE ARE TODAY
//         </span>

//         <h3>
//           Building Better
//           <span> Property Experiences.</span>
//         </h3>

//         <p>
//           Today, REHOUSE REALTORS focuses on helping customers
//           discover residential and commercial properties with
//           personalized guidance, transparent communication and
//           professional assistance throughout their property journey.
//         </p>

//       </div>

//       <div className="pj-present-items">

//         <span>
//           ✓ Residential Properties
//         </span>

//         <span>
//           ✓ Commercial Properties
//         </span>

//         <span>
//           ✓ Property Consultation
//         </span>

//         <span>
//           ✓ Project Assistance
//         </span>

//       </div>

//     </div>


//     {/* =================================================
//         FUTURE PROJECTS
//     ================================================= */}

//     <div className="pj-future-block">

//       <div className="pj-future-heading">

//         <div>

//           <span className="pj-history-label">
//             THE ROAD AHEAD
//           </span>

//           <h3>
//             Our <span>Future Vision</span>
//           </h3>

//           <p>
//             We are working towards creating a stronger and more
//             connected real estate ecosystem where customers can
//             discover, understand and explore property opportunities
//             with greater confidence.
//           </p>

//         </div>

//         <div className="pj-history-badge future-badge">
//           <strong>02</strong>
//           <span>FUTURE</span>
//         </div>

//       </div>


//       <div className="pj-future-grid">

//         {/* SATYAVILLA */}
//         <article className="pj-future-card pj-satyavilla-card">

//           <div className="pj-future-glow"></div>

//           <div className="pj-future-top">

//             <span className="pj-coming-badge">
//               FUTURE VISION
//             </span>

//             <span className="pj-future-number">
//               01
//             </span>

//           </div>

//           <div className="pj-future-icon">
//             ✦
//           </div>

//           <h4>
//             Satyavilla
//           </h4>

//           <p>
//             A future-focused real estate vision under the REHOUSE
//             journey, designed to represent the next chapter of our
//             property and development ecosystem.
//           </p>

//           <div className="pj-future-tags">

//             <span>Future Project</span>
//             <span>Real Estate</span>
//             <span>New Vision</span>

//           </div>

//           <div className="pj-future-bottom">
//             <span>
//               Coming Ahead
//             </span>

//             <strong>
//               Explore Future →
//             </strong>
//           </div>

//         </article>


//         {/* PROPERTY NETWORK */}
//         <article className="pj-future-card">

//           <div className="pj-future-top">

//             <span className="pj-coming-badge">
//               IN DEVELOPMENT
//             </span>

//             <span className="pj-future-number">
//               02
//             </span>

//           </div>

//           <div className="pj-future-icon">
//             ◇
//           </div>

//           <h4>
//             Premium Property Network
//           </h4>

//           <p>
//             Building a stronger network of residential and commercial
//             property opportunities to make property discovery easier
//             and more accessible.
//           </p>

//           <div className="pj-future-tags">
//             <span>Residential</span>
//             <span>Commercial</span>
//             <span>Property Network</span>
//           </div>

//           <div className="pj-future-bottom">
//             <span>
//               Future Direction
//             </span>

//             <strong>
//               Coming Soon →
//             </strong>
//           </div>

//         </article>


//         {/* NEW PROJECTS */}
//         <article className="pj-future-card">

//           <div className="pj-future-top">

//             <span className="pj-coming-badge">
//               FUTURE OPPORTUNITIES
//             </span>

//             <span className="pj-future-number">
//               03
//             </span>

//           </div>

//           <div className="pj-future-icon">
//             ⌂
//           </div>

//           <h4>
//             New Property Projects
//           </h4>

//           <p>
//             Exploring new residential, commercial and investment-led
//             property opportunities as the REHOUSE portfolio continues
//             to grow.
//           </p>

//           <div className="pj-future-tags">
//             <span>New Launches</span>
//             <span>Investment</span>
//             <span>Growth</span>
//           </div>

//           <div className="pj-future-bottom">
//             <span>
//               Future Direction
//             </span>

//             <strong>
//               Stay Connected →
//             </strong>
//           </div>

//         </article>


//         {/* SMART REAL ESTATE */}
//         <article className="pj-future-card">

//           <div className="pj-future-top">

//             <span className="pj-coming-badge">
//               LONG TERM VISION
//             </span>

//             <span className="pj-future-number">
//               04
//             </span>

//           </div>

//           <div className="pj-future-icon">
//             ✧
//           </div>

//           <h4>
//             Smart Real Estate Experience
//           </h4>

//           <p>
//             Our long-term vision is to bring property discovery,
//             consultation, project information and customer support
//             together through a modern digital experience.
//           </p>

//           <div className="pj-future-tags">
//             <span>Digital</span>
//             <span>Smart Property</span>
//             <span>Customer First</span>
//           </div>

//           <div className="pj-future-bottom">
//             <span>
//               Long Term Vision
//             </span>

//             <strong>
//               Our Next Chapter →
//             </strong>
//           </div>

//         </article>

//       </div>

//     </div>


//     {/* =================================================
//         JOURNEY CTA
//     ================================================= */}

//     <div className="pj-history-cta">

//       <div>

//         <span>
//           EXPERIENCE • PRESENT • FUTURE
//         </span>

//         <h3>
//           The Journey Continues.
//         </h3>

//         <p>
//           From our previous experiences to the opportunities we are
//           building for tomorrow, REHOUSE REALTORS continues to move
//           forward with a clear focus on better property experiences.
//         </p>

//       </div>

//       <button
//         onClick={() =>
//           document
//             .getElementById("rehouse-expert")
//             ?.scrollIntoView({ behavior: "smooth" })
//         }
//       >
//         Start Your Property Journey →
//       </button>

//     </div>

//   </div>

// </section>

// {/* =====================================================
//     PAST PROJECTS — IMAGE CARDS
// ===================================================== */}

// <div className="pj-history-grid">

//   {/* SUPER TECH */}
//   <article className="pj-property-card">

//     <div className="pj-property-image">
//       <img
//         src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
//         alt="Super Tech Project"
//       />

//       <span className="pj-property-badge">
//         COMPLETED
//       </span>

//       <span className="pj-property-year">
//         PAST PROJECT
//       </span>
//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         COMMERCIAL • REAL ESTATE
//       </span>

//       <h4>
//         Super Tech
//       </h4>

//       <p>
//         A significant part of our earlier real estate journey,
//         contributing to our experience in project understanding,
//         property opportunities and customer requirements.
//       </p>

//       <div className="pj-property-bottom">
//         <span>
//           Past Project Experience
//         </span>

//         <strong>
//           View Experience ↗
//         </strong>
//       </div>

//     </div>

//   </article>


//   {/* BUTANI GROUP */}
//   <article className="pj-property-card">

//     <div className="pj-property-image">
//       <img
//         src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
//         alt="Butani Group Project"
//       />

//       <span className="pj-property-badge">
//         COMPLETED
//       </span>

//       <span className="pj-property-year">
//         PAST PROJECT
//       </span>
//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         PREMIUM • PROPERTY
//       </span>

//       <h4>
//         Butani Group
//       </h4>

//       <p>
//         An important part of our previous project experience,
//         helping us develop practical knowledge across property
//         opportunities and real estate requirements.
//       </p>

//       <div className="pj-property-bottom">
//         <span>
//           Past Project Experience
//         </span>

//         <strong>
//           View Experience ↗
//         </strong>
//       </div>

//     </div>

//   </article>


//   {/* RETAIL & SHOP SPACES */}
//   <article className="pj-property-card">

//     <div className="pj-property-image">
//       <img
//         src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=85"
//         alt="Retail and Shop Spaces"
//       />

//       <span className="pj-property-badge">
//         COMPLETED
//       </span>

//       <span className="pj-property-year">
//         PAST WORK
//       </span>
//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         RETAIL • COMMERCIAL
//       </span>

//       <h4>
//         Retail & Shop Spaces
//       </h4>

//       <p>
//         Experience across retail and commercial property
//         opportunities with a focus on location, usability and
//         business-oriented property requirements.
//       </p>

//       <div className="pj-property-bottom">
//         <span>
//           Commercial Experience
//         </span>

//         <strong>
//           View Experience ↗
//         </strong>
//       </div>

//     </div>

//   </article>

// </div>


// {/* =====================================================
//     FUTURE PROJECTS — IMAGE CARDS
// ===================================================== */}

// <div className="pj-future-grid">

//   {/* SATYAVILLA */}
//   <article className="pj-property-card pj-future-property-card">

//     <div className="pj-property-image">

//       <img
//         src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90"
//         alt="Satyavilla Future Project"
//       />

//       <span className="pj-property-badge pj-future-badge">
//         FUTURE VISION
//       </span>

//       <span className="pj-property-year">
//         01
//       </span>

//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         UPCOMING • REAL ESTATE
//       </span>

//       <h4>
//         Satyavilla
//       </h4>

//       <p>
//         A future-focused real estate vision representing the next
//         chapter of our property and development journey.
//       </p>

//       <div className="pj-property-tags">
//         <span>Future Project</span>
//         <span>Real Estate</span>
//         <span>New Vision</span>
//       </div>

//       <div className="pj-property-bottom">
//         <span>
//           Coming Ahead
//         </span>

//         <strong>
//           Explore Future ↗
//         </strong>
//       </div>

//     </div>

//   </article>


//   {/* PREMIUM PROPERTY NETWORK */}
//   <article className="pj-property-card pj-future-property-card">

//     <div className="pj-property-image">

//       <img
//         src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=90"
//         alt="Premium Property Network"
//       />

//       <span className="pj-property-badge pj-future-badge">
//         IN DEVELOPMENT
//       </span>

//       <span className="pj-property-year">
//         02
//       </span>

//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         RESIDENTIAL • COMMERCIAL
//       </span>

//       <h4>
//         Premium Property Network
//       </h4>

//       <p>
//         Building a stronger network of residential and commercial
//         property opportunities for a better property discovery
//         experience.
//       </p>

//       <div className="pj-property-tags">
//         <span>Residential</span>
//         <span>Commercial</span>
//         <span>Network</span>
//       </div>

//       <div className="pj-property-bottom">
//         <span>
//           Future Direction
//         </span>

//         <strong>
//           Coming Soon ↗
//         </strong>
//       </div>

//     </div>

//   </article>


//   {/* NEW PROPERTY PROJECTS */}
//   <article className="pj-property-card pj-future-property-card">

//     <div className="pj-property-image">

//       <img
//         src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90"
//         alt="New Property Projects"
//       />

//       <span className="pj-property-badge pj-future-badge">
//         FUTURE OPPORTUNITIES
//       </span>

//       <span className="pj-property-year">
//         03
//       </span>

//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         NEW LAUNCHES • INVESTMENT
//       </span>

//       <h4>
//         New Property Projects
//       </h4>

//       <p>
//         Exploring new residential, commercial and investment-led
//         property opportunities as the REHOUSE portfolio continues
//         to grow.
//       </p>

//       <div className="pj-property-tags">
//         <span>New Launches</span>
//         <span>Investment</span>
//         <span>Growth</span>
//       </div>

//       <div className="pj-property-bottom">
//         <span>
//           Future Direction
//         </span>

//         <strong>
//           Stay Connected ↗
//         </strong>
//       </div>

//     </div>

//   </article>


//   {/* SMART REAL ESTATE */}
//   <article className="pj-property-card pj-future-property-card">

//     <div className="pj-property-image">

//       <img
//         src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90"
//         alt="Smart Real Estate Experience"
//       />

//       <span className="pj-property-badge pj-future-badge">
//         LONG TERM VISION
//       </span>

//       <span className="pj-property-year">
//         04
//       </span>

//     </div>

//     <div className="pj-property-content">

//       <span className="pj-property-category">
//         DIGITAL • SMART PROPERTY
//       </span>

//       <h4>
//         Smart Real Estate Experience
//       </h4>

//       <p>
//         Bringing property discovery, consultation, project
//         information and customer support together through a
//         modern digital experience.
//       </p>

//       <div className="pj-property-tags">
//         <span>Digital</span>
//         <span>Smart Property</span>
//         <span>Customer First</span>
//       </div>

//       <div className="pj-property-bottom">
//         <span>
//           Long Term Vision
//         </span>

//         <strong>
//           Our Next Chapter ↗
//         </strong>
//       </div>

//     </div>

//   </article>

// </div>
//       {/* =====================================================
//           JOURNEY BANNER
//       ===================================================== */}

//       <section className="pj-journey-banner">

//         <div className="pj-container">

//           <div className="pj-journey-layout">

//             <div className="pj-journey-text">

//               <span className="pj-small-title light">
//                 YOUR PROPERTY JOURNEY
//               </span>

//               <h2>
//                 Your New Home
//                 <br />
//                 <span>Journey Starts Here.</span>
//               </h2>

//               <p>
//                 Finding the right property should feel exciting, not
//                 complicated. REHOUSE REALTORS brings property discovery,
//                 professional guidance and transaction support together
//                 in one seamless experience.
//               </p>

//               <button
//                 className="pj-white-btn"
//                 onClick={scrollToExpert}
//               >
//                 Get Free Assistance →
//               </button>

//             </div>

//             <div className="pj-journey-decoration">

//               <div className="pj-orbit orbit-one"></div>
//               <div className="pj-orbit orbit-two"></div>

//               <div className="pj-house-symbol">
//                 ⌂
//               </div>

//               <div className="pj-floating-card card-one">
//                 <strong>Property Search</strong>
//                 <span>Made Personal</span>
//               </div>

//               <div className="pj-floating-card card-two">
//                 <strong>Expert Support</strong>
//                 <span>When You Need It</span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FREE ASSISTANCE
//       ===================================================== */}

//       <section className="pj-assistance-section">

//         <div className="pj-container">

//           <div className="pj-section-title">

//             <span className="pj-small-title">
//               FREE PERSONALIZED SUPPORT
//             </span>

//             <h2>
//               Everything You Need,
//               <span> Under One Roof.</span>
//             </h2>

//             <p>
//               Whether you're buying your first home, upgrading your
//               lifestyle or looking for an investment, our team helps
//               simplify every important step.
//             </p>

//           </div>

//           <div className="pj-assistance-grid">

//             {assistance.map((item, index) => (
//               <div
//                 className="pj-assistance-card"
//                 key={index}
//               >

//                 <div className="pj-assistance-icon">
//                   {item.icon}
//                 </div>

//                 <span className="pj-card-number">
//                   0{index + 1}
//                 </span>

//                 <h3>{item.title}</h3>

//                 <p>{item.text}</p>

//                 <button onClick={scrollToExpert}>
//                   Know More →
//                 </button>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           EXPERT FORM
//       ===================================================== */}

//       <section
//         className="pj-expert-section"
//         id="rehouse-expert"
//       >

//         <div className="pj-container">

//           <div className="pj-expert-layout">

//             <div className="pj-expert-content">

//               <span className="pj-small-title">
//                 PERSONAL PROPERTY ASSISTANCE
//               </span>

//               <h2>
//                 Talk With Our
//                 <br />
//                 <span>Property Expert.</span>
//               </h2>

//               <p>
//                 Share your requirement with us and our team will help
//                 you understand suitable property options based on
//                 your location, budget and requirements.
//               </p>

//               <div className="pj-expert-points">

//                 <div>
//                   <span>✓</span>
//                   <p>Personalized property recommendations</p>
//                 </div>

//                 <div>
//                   <span>✓</span>
//                   <p>Guidance on projects and locations</p>
//                 </div>

//                 <div>
//                   <span>✓</span>
//                   <p>Support during property discussions</p>
//                 </div>

//                 <div>
//                   <span>✓</span>
//                   <p>One-to-one assistance</p>
//                 </div>

//               </div>

//             </div>

//             <div className="pj-expert-form-card">

//               <div className="pj-form-heading">

//                 <span>FREE CONSULTATION</span>

//                 <h3>
//                   Let's Find Your
//                   <br />
//                   <em>Perfect Property.</em>
//                 </h3>

//               </div>

//               {submitted ? (
//                 <div className="pj-form-success">

//                   <div className="pj-success-icon">
//                     ✓
//                   </div>

//                   <h3>Thank You!</h3>

//                   <p>
//                     Your enquiry has been received.
//                     Our property team will connect with you shortly.
//                   </p>

//                   <button
//                     onClick={() => setSubmitted(false)}
//                   >
//                     Send Another Enquiry
//                   </button>

//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>

//                   <div className="pj-form-row">

//                     <div className="pj-form-group">
//                       <label>Full Name</label>

//                       <input
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleFormChange}
//                         placeholder="Enter your name"
//                         required
//                       />
//                     </div>

//                     <div className="pj-form-group">
//                       <label>Phone Number</label>

//                       <input
//                         type="tel"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleFormChange}
//                         placeholder="Enter phone number"
//                         required
//                       />
//                     </div>

//                   </div>

//                   <div className="pj-form-row">

//                     <div className="pj-form-group">
//                       <label>Email Address</label>

//                       <input
//                         type="email"
//                         name="email"
//                         value={form.email}
//                         onChange={handleFormChange}
//                         placeholder="Your email"
//                       />
//                     </div>

//                     <div className="pj-form-group">
//                       <label>Requirement</label>

//                       <select
//                         name="requirement"
//                         value={form.requirement}
//                         onChange={handleFormChange}
//                       >
//                         <option value="">
//                           Select Requirement
//                         </option>

//                         <option value="Buy Property">
//                           Buy Property
//                         </option>

//                         <option value="Residential Property">
//                           Residential Property
//                         </option>

//                         <option value="Commercial Property">
//                           Commercial Property
//                         </option>

//                         <option value="Investment">
//                           Property Investment
//                         </option>

//                         <option value="Project Enquiry">
//                           Project Enquiry
//                         </option>
//                       </select>
//                     </div>

//                   </div>

//                   <div className="pj-form-group">
//                     <label>Your Requirement</label>

//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleFormChange}
//                       placeholder="Tell us about your budget, preferred location or property requirement..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="pj-form-submit"
//                   >
//                     Submit Enquiry →
//                   </button>

//                   <small className="pj-form-note">
//                     Your information will only be used to contact you
//                     regarding your property enquiry.
//                   </small>

//                 </form>
//               )}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           WHY CHOOSE
//       ===================================================== */}

//       <section className="pj-why-section">

//         <div className="pj-container">

//           <div className="pj-section-title">

//             <span className="pj-small-title">
//               WHY REHOUSE REALTORS
//             </span>

//             <h2>
//               Property Decisions,
//               <span> Made Simpler.</span>
//             </h2>

//             <p>
//               We combine local property understanding, personalized
//               assistance and a customer-first approach to make your
//               real estate journey more comfortable.
//             </p>

//           </div>

//           <div className="pj-why-grid">

//             {reasons.map((reason, index) => (
//               <div
//                 className="pj-why-card"
//                 key={index}
//               >

//                 <div className="pj-why-icon">
//                   {reason.icon}
//                 </div>

//                 <span>
//                   0{index + 1}
//                 </span>

//                 <h3>{reason.title}</h3>

//                 <p>{reason.text}</p>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="pj-final-cta">

//         <div className="pj-final-pattern"></div>

//         <div className="pj-final-content">

//           <span>
//             READY TO TAKE THE NEXT STEP?
//           </span>

//           <h2>
//             Let's Find Your
//             <br />
//             <em>Next Address.</em>
//           </h2>

//           <p>
//             Tell us what you're looking for and let REHOUSE REALTORS
//             help you move closer to the right property.
//           </p>

//           <button
//             className="pj-final-btn"
//             onClick={scrollToExpert}
//           >
//             Talk to an Expert →
//           </button>

//         </div>

//       </section>

//       {/* =====================================================
//           DISCLAIMER
//       ===================================================== */}

//       <div className="pj-disclaimer">
//         REHOUSE REALTORS provides property information and assistance
//         for general guidance. Availability, pricing, specifications and
//         project details may change and should be independently verified
//         before making a transaction decision.
//       </div>

//     </main>
//   );
// }

// export default ProjectJourney;



import React, { useEffect, useMemo, useState } from "react";
import "./ProjectJourney.css";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

/* =========================================================
   STATIC FEATURED PROJECTS
   ========================================================= */

const featuredProjects = [
  {
    id: "featured-1",
    title: "The Grand Residency",
    projectName: "The Grand Residency",
    location: "Greater Noida",
    type: "Residential",
    propertyType: "Residential",
    configuration: "2, 3 & 4 BHK",
    price: "₹68 Lakh - ₹1.35 Cr",
    status: "New Launch",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "featured-2",
    title: "Royal Palm Heights",
    projectName: "Royal Palm Heights",
    location: "Noida Extension",
    type: "Residential",
    propertyType: "Residential",
    configuration: "2 & 3 BHK",
    price: "₹52 Lakh - ₹89 Lakh",
    status: "Verified",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "featured-3",
    title: "Urban Crest",
    projectName: "Urban Crest",
    location: "Noida Sector 150",
    type: "Residential",
    propertyType: "Residential",
    configuration: "3 & 4 BHK",
    price: "₹1.10 Cr - ₹2.25 Cr",
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "featured-4",
    title: "The Business Avenue",
    projectName: "The Business Avenue",
    location: "Greater Noida West",
    type: "Commercial",
    propertyType: "Commercial",
    configuration: "Retail & Office",
    price: "₹45 Lakh onwards",
    status: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
];

/* =========================================================
   ASSISTANCE
========================================================= */

const assistance = [
  {
    number: "01",
    title: "Property Shortlisting",
    text:
      "We understand your requirement and shortlist suitable properties based on location, budget and purpose.",
  },
  {
    number: "02",
    title: "Site Visit",
    text:
      "Our team helps coordinate property visits and provides practical information before you make a decision.",
  },
  {
    number: "03",
    title: "Project Comparison",
    text:
      "Compare projects, configurations, locations and pricing so that you can make an informed choice.",
  },
  {
    number: "04",
    title: "Transaction Assistance",
    text:
      "From enquiry to documentation and closure, our team remains available throughout the process.",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const reasons = [
  {
    number: "01",
    title: "Requirement First",
    text:
      "We begin by understanding what you actually need instead of pushing a random property.",
  },
  {
    number: "02",
    title: "Transparent Guidance",
    text:
      "Clear communication and practical guidance at every stage of your property journey.",
  },
  {
    number: "03",
    title: "Local Understanding",
    text:
      "We focus on understanding projects, locations and surrounding developments.",
  },
  {
    number: "04",
    title: "Long-Term Relationship",
    text:
      "Our goal is not just one transaction. We aim to build a long-term relationship with every client.",
  },
];

/* =========================================================
   FIREBASE HELPERS
========================================================= */

const getStage = (project) => {
  return String(project.stage || "")
    .trim()
    .toLowerCase();
};

const formatPrice = (project, fallback = "Price on Request") => {
  if (project.price) {
    return project.price;
  }

  const from = project.priceFrom || "";
  const to = project.priceTo || "";

  if (from && to) {
    return `${from} - ${to}`;
  }

  if (from) {
    return `${from} onwards`;
  }

  if (to) {
    return to;
  }

  return fallback;
};

/* =========================================================
   COMPONENT
========================================================= */

function ProjectJourney() {
  /* =======================================================
     FILTER STATES
  ======================================================= */

  const [city, setCity] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  /* =======================================================
     ENQUIRY FORM
  ======================================================= */

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* =======================================================
     FIREBASE PROJECTS
  ======================================================= */

  const [firebaseProjects, setFirebaseProjects] = useState([]);
  // const [firebaseLoading, setFirebaseLoading] = useState(true);

  /* =======================================================
     LOAD FIREBASE PROJECTS IN REAL TIME
  ======================================================= */

  useEffect(() => {
    const projectsRef = collection(db, "projects");

    const unsubscribe = onSnapshot(
      projectsRef,
      (snapshot) => {
        const data = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        data.sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0;
          const bTime = b.createdAt?.seconds || 0;

          return bTime - aTime;
        });

        setFirebaseProjects(data);
        // setFirebaseLoading(false);
      },
      (error) => {
        console.error("Firebase Projects Error:", error);

        setFirebaseProjects([]);
        // setFirebaseLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  /* =======================================================
     FIREBASE PROJECT CATEGORIES
  ======================================================= */

  const pastProjects = useMemo(() => {
    return firebaseProjects.filter(
      (project) => getStage(project) === "past"
    );
  }, [firebaseProjects]);

  const ongoingProjects = useMemo(() => {
    return firebaseProjects.filter(
      (project) =>
        getStage(project) === "ongoing" ||
        getStage(project) === "present"
    );
  }, [firebaseProjects]);

  const futureProjects = useMemo(() => {
    return firebaseProjects.filter(
      (project) => getStage(project) === "future"
    );
  }, [firebaseProjects]);

  /* =======================================================
     ALL PROJECTS FOR FEATURED FILTER
  ======================================================= */

  const allFeaturedProjects = useMemo(() => {
    const firebaseAsFeatured = firebaseProjects.map((project) => ({
      ...project,

      title: project.projectName || "Untitled Project",

      type:
        project.propertyType ||
        project.type ||
        "Real Estate",

      configuration:
        project.configuration ||
        "",

      price: formatPrice(project),

      status:
        project.stage === "ongoing"
          ? "Ongoing"
          : project.stage === "future"
          ? "Upcoming"
          : project.stage === "past"
          ? "Past"
          : "Project",

      image:
        project.imageUrl ||
        project.image ||
        "",
    }));

    return [
      ...featuredProjects,
      ...firebaseAsFeatured,
    ];
  }, [firebaseProjects]);

  /* =======================================================
     CITY LIST
  ======================================================= */

  const cities = useMemo(() => {
    const values = allFeaturedProjects
      .map((project) => project.location)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [allFeaturedProjects]);

  /* =======================================================
     FILTERED PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    return allFeaturedProjects.filter((project) => {
      const projectCity = String(project.location || "").toLowerCase();

      const projectStatus = String(
        project.status || ""
      ).toLowerCase();

      const searchText = search.toLowerCase();

      const cityMatch =
        city === "All" ||
        project.location === city;

      const statusMatch =
        status === "All" ||
        projectStatus.includes(status.toLowerCase());

      const searchMatch =
        !search ||
        String(project.title || "")
          .toLowerCase()
          .includes(searchText) ||
        projectCity.includes(searchText) ||
        String(project.type || "")
          .toLowerCase()
          .includes(searchText);

      return cityMatch && statusMatch && searchMatch;
    });
  }, [
    allFeaturedProjects,
    city,
    status,
    search,
  ]);

  /* =======================================================
     EXPERT FORM SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiry = {
      ...form,
      createdAt: new Date().toISOString(),
    };

    const existing =
      JSON.parse(
        localStorage.getItem("rehouse_project_enquiries") || "[]"
      );

    existing.push(enquiry);

    localStorage.setItem(
      "rehouse_project_enquiries",
      JSON.stringify(existing)
    );

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      requirement: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  /* =======================================================
     SCROLL TO EXPERT FORM
  ======================================================= */

  const scrollToExpert = () => {
    const section = document.getElementById(
      "project-expert-form"
    );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =======================================================
     SET PROJECT IN FORM
  ======================================================= */

  const enquireProject = (projectName) => {
    setForm((previous) => ({
      ...previous,
      requirement: projectName,
    }));

    setTimeout(() => {
      scrollToExpert();
    }, 100);
  };

  /* =======================================================
     RENDER FIREBASE PROJECT CARD
  ======================================================= */

  const renderFirebaseProject = (
    project,
    badge
  ) => {
    const projectName =
      project.projectName ||
      project.title ||
      "Untitled Project";

    const image =
      project.imageUrl ||
      project.image ||
      "";

    const propertyType =
      project.propertyType ||
      project.type ||
      "Real Estate";

    return (
      <article
        className="pj-project-card"
        key={project.id}
      >
        <div className="pj-project-image">
          {image ? (
            <img
              src={image}
              alt={projectName}
            />
          ) : (
            <div className="pj-project-no-image">
              REHOUSE REALTORS
            </div>
          )}

          <span className="pj-project-status">
            {badge}
          </span>
        </div>

        <div className="pj-project-content">
          <span className="pj-project-type">
            {propertyType}
          </span>

          <h3>{projectName}</h3>

          {project.location && (
            <p className="pj-project-location">
              ⌖ {project.location}
            </p>
          )}

          {project.configuration && (
            <p className="pj-project-config">
              {project.configuration}
            </p>
          )}

          {project.developer && (
            <p className="pj-project-config">
              Developer: {project.developer}
            </p>
          )}

          {project.units && (
            <p className="pj-project-config">
              Units: {project.units}
            </p>
          )}

          {project.sizeFrom || project.sizeTo ? (
            <p className="pj-project-config">
              Size: {project.sizeFrom || ""}
              {project.sizeFrom && project.sizeTo
                ? " - "
                : ""}
              {project.sizeTo || ""}
            </p>
          ) : null}

          <div className="pj-project-bottom">
            <strong>
              {formatPrice(
                project,
                badge
              )}
            </strong>

            <button
              type="button"
              onClick={() =>
                enquireProject(projectName)
              }
            >
              Enquire ↗
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <main className="project-journey-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pj-hero">
        <div className="pj-hero-overlay"></div>

        <div className="pj-hero-content">
          <span className="pj-small-title">
            REHOUSE REALTORS
          </span>

          <h1>
            Find a Place You'll Love
            <span> Coming Home To.</span>
          </h1>

          <p>
            Explore thoughtfully selected residential,
            commercial and investment opportunities with
            professional real estate guidance.
          </p>

          <button
            type="button"
            onClick={scrollToExpert}
            className="pj-primary-btn"
          >
            Explore Properties ↗
          </button>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}

      <section className="pj-featured-section">

        <div className="pj-section-title">
          <span className="pj-small-title">
            CURATED FOR YOU
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Discover selected property opportunities
            presented by REHOUSE REALTORS.
          </p>
        </div>

        {/* FILTERS */}

        <div className="pj-filters">

          <div className="pj-filter-search">
            <input
              type="text"
              placeholder="Search project, location..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
          >
            {cities.map((item) => (
              <option
                value={item}
                key={item}
              >
                {item}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>
            <option value="Featured">
              Featured
            </option>
            <option value="New Launch">
              New Launch
            </option>
            <option value="Verified">
              Verified
            </option>
            <option value="Commercial">
              Commercial
            </option>
            <option value="Ongoing">
              Ongoing
            </option>
            <option value="Upcoming">
              Upcoming
            </option>
            <option value="Past">
              Past
            </option>
          </select>

        </div>

        {/* PROJECT GRID */}

        {filteredProjects.length > 0 ? (
          <div className="pj-project-grid">

            {filteredProjects.map(
              (project) => (
                <article
                  className="pj-project-card"
                  key={project.id}
                >

                  <div className="pj-project-image">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={
                          project.title ||
                          project.projectName
                        }
                      />
                    ) : (
                      <div className="pj-project-no-image">
                        REHOUSE REALTORS
                      </div>
                    )}

                    <span className="pj-project-status">
                      {project.status ||
                        "Project"}
                    </span>

                  </div>

                  <div className="pj-project-content">

                    <span className="pj-project-type">
                      {project.type ||
                        project.propertyType ||
                        "Real Estate"}
                    </span>

                    <h3>
                      {project.title ||
                        project.projectName}
                    </h3>

                    {project.location && (
                      <p className="pj-project-location">
                        ⌖ {project.location}
                      </p>
                    )}

                    {project.configuration && (
                      <p className="pj-project-config">
                        {project.configuration}
                      </p>
                    )}

                    <div className="pj-project-bottom">

                      <strong>
                        {project.price ||
                          formatPrice(project)}
                      </strong>

                      <button
                        type="button"
                        onClick={() =>
                          enquireProject(
                            project.title ||
                              project.projectName
                          )
                        }
                      >
                        Enquire ↗
                      </button>

                    </div>

                  </div>

                </article>
              )
            )}

          </div>
        ) : (
          <div className="pj-empty-state">
            <h3>
              No projects found
            </h3>

            <p>
              Try changing your search or
              filters.
            </p>
          </div>
        )}

      </section>

      {/* =====================================================
          REHOUSE — OUR PROJECT JOURNEY
      ===================================================== */}

      <section className="pj-journey-section">

        <div className="pj-section-title">
          <span className="pj-small-title">
            REHOUSE — OUR PROJECT JOURNEY
          </span>

          <h2>
            From Experience to
            <span> What's Next</span>
          </h2>

          <p>
            A growing real estate journey built around
            projects, relationships and long-term vision.
          </p>
        </div>

        {/* ===================================================
            PAST
        =================================================== */}

        {/* <div className="pj-history-block">

          <div className="pj-history-heading">
            <span>
              01 — PAST
            </span>

            <h3>
              Projects & Experience
            </h3>

            <p>
              Our experience across residential,
              commercial and retail opportunities.
            </p>
          </div>

          <div className="pj-history-grid">

            <div className="pj-history-card">
              <span>PAST PROJECT</span>

              <h4>
                Super Tech
              </h4>

              <p>
                Residential property opportunities
                and project assistance.
              </p>
            </div>

            <div className="pj-history-card">
              <span>PAST PROJECT</span>

              <h4>
                Butani Group
              </h4>

              <p>
                Commercial and retail property
                opportunities.
              </p>
            </div>

            <div className="pj-history-card">
              <span>PAST EXPERIENCE</span>

              <h4>
                Retail & Shop Spaces
              </h4>

              <p>
                Property opportunities for
                business owners and investors.
              </p>
            </div>

          </div>

        </div> */}

        {/* ===================================================
            FIREBASE PAST PROJECTS
        =================================================== */}

        {pastProjects.length > 0 && (
          <div className="pj-admin-project-section">

            <div className="pj-section-title">

              <span className="pj-small-title">
                FROM OUR ADMIN PORTFOLIO
              </span>

              <h2>
                Past <span>Projects</span>
              </h2>

              <p>
                Projects added and managed through
                the REHOUSE REALTORS administration
                system.
              </p>

            </div>

            <div className="pj-project-grid">

              {pastProjects.map(
                (project) =>
                  renderFirebaseProject(
                    project,
                    "Past Project"
                  )
              )}

            </div>

          </div>
        )}

        {/* ===================================================
            PRESENT / ONGOING
        =================================================== */}

        <div className="pj-present-block">

          <div className="pj-present-heading">
            <span>
              02 — PRESENT
            </span>

            <h3>
              What We Are Doing Today
            </h3>

            <p>
              Connecting buyers, investors and
              property opportunities.
            </p>
          </div>

          <div className="pj-present-strip">

            <div>
              <strong>
                Residential
              </strong>

              <span>
                Homes & Apartments
              </span>
            </div>

            <div>
              <strong>
                Commercial
              </strong>

              <span>
                Offices & Retail
              </span>
            </div>

            <div>
              <strong>
                Consultation
              </strong>

              <span>
                Professional Guidance
              </span>
            </div>

            <div>
              <strong>
                Project Assistance
              </strong>

              <span>
                From Search to Closure
              </span>
            </div>

          </div>

        </div>

        {/* ===================================================
            FIREBASE ONGOING PROJECTS
        =================================================== */}

        {ongoingProjects.length > 0 && (
          <div className="pj-admin-project-section">

            <div className="pj-section-title">

              <span className="pj-small-title">
                CURRENTLY ACTIVE
              </span>

              <h2>
                Ongoing <span>Projects</span>
              </h2>

              <p>
                Explore the projects currently being
                presented through REHOUSE REALTORS.
              </p>

            </div>

            <div className="pj-project-grid">

              {ongoingProjects.map(
                (project) =>
                  renderFirebaseProject(
                    project,
                    "Ongoing"
                  )
              )}

            </div>

          </div>
        )}

        {/* ===================================================
            FUTURE
        =================================================== */}

        <div className="pj-future-block">

          <div className="pj-section-title">

            <span className="pj-small-title">
              03 — FUTURE VISION
            </span>

            <h2>
              What's <span>Next</span>
            </h2>

            <p>
              Building a broader and smarter property
              experience for the future.
            </p>

          </div>

          <div className="pj-future-grid">

            <div className="pj-future-card">
              <span>
                FUTURE
              </span>

              <h4>
                Satyavilla
              </h4>

              <p>
                Exploring upcoming premium
                property opportunities.
              </p>
            </div>

            <div className="pj-future-card">
              <span>
                FUTURE
              </span>

              <h4>
                Premium Property Network
              </h4>

              <p>
                Expanding access to quality
                real estate projects.
              </p>
            </div>

            <div className="pj-future-card">
              <span>
                FUTURE
              </span>

              <h4>
                New Property Projects
              </h4>

              <p>
                Continuously discovering
                upcoming developments.
              </p>
            </div>

            <div className="pj-future-card">
              <span>
                FUTURE
              </span>

              <h4>
                Smart Real Estate Experience
              </h4>

              <p>
                Making property discovery simpler,
                clearer and more transparent.
              </p>
            </div>

          </div>

        </div>

        {/* ===================================================
            FIREBASE FUTURE PROJECTS
        =================================================== */}

        {futureProjects.length > 0 && (
          <div className="pj-admin-project-section">

            <div className="pj-section-title">

              <span className="pj-small-title">
                WHAT'S COMING NEXT
              </span>

              <h2>
                Future <span>Projects</span>
              </h2>

              <p>
                Upcoming opportunities and future
                projects added by the REHOUSE REALTORS
                team.
              </p>

            </div>

            <div className="pj-project-grid">

              {futureProjects.map(
                (project) =>
                  renderFirebaseProject(
                    project,
                    "Future Project"
                  )
              )}

            </div>

          </div>
        )}

      </section>

      {/* =====================================================
          JOURNEY BANNER
      ===================================================== */}

      <section className="pj-journey-banner">

        <div className="pj-journey-banner-overlay"></div>

        <div className="pj-journey-banner-content">

          <span className="pj-small-title">
            YOUR PROPERTY JOURNEY
          </span>

          <h2>
            One Requirement.
            <br />
            The Right Direction.
          </h2>

          <p>
            Let REHOUSE REALTORS help you explore,
            compare and understand your options.
          </p>

          <button
            type="button"
            onClick={scrollToExpert}
            className="pj-primary-btn"
          >
            Talk to an Expert ↗
          </button>

        </div>

      </section>

      {/* =====================================================
          FREE ASSISTANCE
      ===================================================== */}

      <section className="pj-assistance-section">

        <div className="pj-section-title">

          <span className="pj-small-title">
            OUR SUPPORT
          </span>

          <h2>
            Free <span>Assistance</span>
          </h2>

          <p>
            Professional support designed to make
            your property search easier.
          </p>

        </div>

        <div className="pj-assistance-grid">

          {assistance.map((item) => (
            <div
              className="pj-assistance-card"
              key={item.number}
            >

              <span className="pj-card-number">
                {item.number}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          EXPERT FORM
      ===================================================== */}

      <section
        className="pj-expert-section"
        id="project-expert-form"
      >

        <div className="pj-expert-wrapper">

          <div className="pj-expert-content">

            <span className="pj-small-title">
              LET'S DISCUSS
            </span>

            <h2>
              Speak With a
              <span> Property Expert</span>
            </h2>

            <p>
              Tell us what you are looking for.
              Our team will help you explore suitable
              property opportunities.
            </p>

            <div className="pj-expert-points">

              <div>
                <span>✓</span>
                Requirement-based suggestions
              </div>

              <div>
                <span>✓</span>
                Property comparison assistance
              </div>

              <div>
                <span>✓</span>
                Site visit coordination
              </div>

              <div>
                <span>✓</span>
                Professional guidance
              </div>

            </div>

          </div>

          <form
            className="pj-expert-form"
            onSubmit={handleSubmit}
          >

            <div className="pj-form-row">

              <div className="pj-form-group">
                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="pj-form-group">
                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

            </div>

            <div className="pj-form-group">
              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="pj-form-group">
              <label>
                Requirement
              </label>

              <input
                type="text"
                placeholder="Example: 3 BHK in Noida"
                value={form.requirement}
                onChange={(e) =>
                  setForm({
                    ...form,
                    requirement: e.target.value,
                  })
                }
              />
            </div>

            <div className="pj-form-group">
              <label>
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Tell us about your requirement..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="pj-submit-btn"
            >
              Send Enquiry ↗
            </button>

            {submitted && (
              <div className="pj-success-message">
                Thank you. Your enquiry has been
                submitted successfully.
              </div>
            )}

          </form>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE REHOUSE
      ===================================================== */}

      <section className="pj-why-section">

        <div className="pj-section-title">

          <span className="pj-small-title">
            WHY REHOUSE REALTORS
          </span>

          <h2>
            A Better Way to
            <span> Explore Real Estate</span>
          </h2>

          <p>
            Property decisions become easier when
            you have the right guidance.
          </p>

        </div>

        <div className="pj-why-grid">

          {reasons.map((item) => (
            <div
              className="pj-why-card"
              key={item.number}
            >

              <span>
                {item.number}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pj-final-cta">

        <div className="pj-final-cta-content">

          <span className="pj-small-title">
            REHOUSE REALTORS
          </span>

          <h2>
            Your Next Property
            <span> Could Be Here.</span>
          </h2>

          <p>
            Whether you are buying, selling,
            investing or exploring, let us help
            you take the next step.
          </p>

          <button
            type="button"
            onClick={scrollToExpert}
            className="pj-primary-btn"
          >
            Start Your Property Journey ↗
          </button>

        </div>

      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <section className="pj-disclaimer">

        <p>
          Property information, prices, availability,
          images and project details are indicative and
          subject to change. Please verify the latest
          information with the respective developer or
          authorised representative before making any
          financial or purchase decision.
        </p>

      </section>

    </main>
  );
}

export default ProjectJourney;