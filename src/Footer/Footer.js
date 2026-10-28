// import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";
// import logo from "../logo.jpeg";

// function Footer() {
//   return (
//     <footer className="main-footer">

//       <div className="footer-container">

//         {/* COMPANY */}
//         <div className="footer-about">
//           <Link to="/" className="footer-logo">
//             <img
//               src={logo}
//               alt="Noida Extension Property"
//             />
//           </Link>

//           <p>
//             Your trusted destination for buying, selling, renting and
//             investing in properties in Noida Extension and Greater Noida.
//           </p>

//           <div className="footer-social">
//             <a href="" aria-label="Facebook">f</a>
//             <a href="" aria-label="Instagram">◎</a>
//             <a href="" aria-label="YouTube">▶</a>
//             <a href="" aria-label="WhatsApp">◉</a>
//           </div>
//         </div>

//         {/* QUICK LINKS */}
//         <div className="footer-column">
//           <h3>Quick Links</h3>

//           <Link to="/">Home</Link>
//           <Link to="/properties">Properties</Link>
//           <Link to="/contact">Contact Us</Link>
//         </div>

//         {/* PROPERTY */}
//         <div className="footer-column">
//           <h3>Properties</h3>

//           <Link to="/properties">Buy Property</Link>
//           <Link to="/properties">Rent Property</Link>
//           <Link to="/properties">Residential Property</Link>
//           <Link to="/properties">Commercial Property</Link>
//         </div>

//         {/* CONTACT */}
//         <div className="footer-column footer-contact">
//           <h3>Contact Us</h3>

//           <p>
//             <span>📍</span>
//            Vaidpura, Noida Extension, Greater Noida, Uttar Pradesh
//           </p>

//           <p>
//             <span>📞</span>
//             <a href="tel:+919999999999">
//               +91 9871478730
//             </a>
//           </p>

//           <p>
//             <span>✉</span>
//             <a href="mailto:info@noidaextensionproperty.com">
//               noidaextensionproperty1@gmail.com
//             </a>
//           </p>
//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="footer-bottom">
//         <div className="footer-bottom-inner">
//           <p>
//             © {new Date().getFullYear()} NISS TECHNOLOGY.
//             All Rights Reserved.
//           </p>

//           <div>
//             <Link to="/privacy-policy">Privacy Policy</Link>
//             <Link to="/terms">Terms & Conditions</Link>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../logo.jpeg";

function Footer() {
  return (
    <footer className="main-footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <img
              src={logo}
              alt="Noida Extension Property"
            />
          </Link>

          <p>
            Your trusted destination for buying, selling, renting and
            investing in properties in Noida Extension and Greater Noida.
          </p>

          <div className="footer-social">
            <button type="button" aria-label="Facebook">f</button>
            <button type="button" aria-label="Instagram">◎</button>
            <button type="button" aria-label="YouTube">▶</button>
            <button type="button" aria-label="WhatsApp">◉</button>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* PROPERTY */}
        <div className="footer-column">
          <h3>Properties</h3>

          <Link to="/properties">Buy Property</Link>
          <Link to="/properties">Rent Property</Link>
          <Link to="/properties">Residential Property</Link>
          <Link to="/properties">Commercial Property</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <span>📍</span>
           Villa no.21, Sindhuja Green, Vedpura, Noida Extension, Greater Noida, Uttar Pradesh
          </p>

          <p>
            <span>📞</span>
            <a href="tel:+919911924138">
              +91 9911924138
            </a>
          </p>

          <p>
            <span>✉</span>
            <a href="mailto: karan@rehouserealtor.com">
              karan@rehouserealtor.com
            </a>
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} NISS TECHNOLOGY.
            All Rights Reserved.
          </p>

          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;