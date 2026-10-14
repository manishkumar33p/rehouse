// import React from "react";
// import { Link } from "react-router-dom";
// import "./Dashboard.css";

// function Dashboard() {

//   return (
//     <main className="dashboard-page">

//       <div className="dashboard-container">

//         <div className="dashboard-header">

//           <div>
//             <span>DASHBOARD</span>

//             <h1>
//               Welcome Back 👋
//             </h1>

//             <p>
//               Manage your property listings and enquiries.
//             </p>
//           </div>

//           <Link
//             to="/post-property"
//             className="dashboard-post-btn"
//           >
//             + Post Property
//           </Link>

//         </div>


//         <div className="dashboard-stats">

//           <div className="dashboard-stat">
//             <div>🏠</div>
//             <span>Total Properties</span>
//             <strong>0</strong>
//           </div>

//           <div className="dashboard-stat">
//             <div>👁️</div>
//             <span>Total Views</span>
//             <strong>0</strong>
//           </div>

//           <div className="dashboard-stat">
//             <div>📩</div>
//             <span>Enquiries</span>
//             <strong>0</strong>
//           </div>

//           <div className="dashboard-stat">
//             <div>❤️</div>
//             <span>Saved Properties</span>
//             <strong>0</strong>
//           </div>

//         </div>


//         <div className="dashboard-empty">

//           <div className="dashboard-empty-icon">
//             🏡
//           </div>

//           <h2>
//             No Properties Yet
//           </h2>

//           <p>
//             You haven't posted any property yet.
//             Start by adding your first property.
//           </p>

//           <Link
//             to="/post-property"
//             className="dashboard-add-btn"
//           >
//             Post Your First Property
//           </Link>

//         </div>

//       </div>

//     </main>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("propertyEnquiries")) || [];

    setEnquiries(data);
  }, []);

  return (
    <div className="dashboard-page">

      <h1>Property Enquiries</h1>

      <p>Total Enquiries: {enquiries.length}</p>

      {enquiries.length === 0 ? (
        <div className="empty-dashboard">
          No enquiries received yet.
        </div>
      ) : (
        <div className="enquiry-list">

          {enquiries.map((item) => (
            <div className="enquiry-card" key={item.id}>

              <h3>{item.name}</h3>

              <p>
                <strong>Phone:</strong> {item.phone}
              </p>

              <p>
                <strong>Email:</strong> {item.email}
              </p>

              <p>
                <strong>Interested:</strong>{" "}
                {item.interest}
              </p>

              <p>
                <strong>Message:</strong>{" "}
                {item.message || "No message"}
              </p>

              <small>{item.date}</small>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Dashboard;