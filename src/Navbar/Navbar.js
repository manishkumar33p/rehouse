// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <header className="main-navbar">
// //       <div className="navbar-inner">

// //         {/* LOGO */}
// //         <Link to="/" className="brand-logo" onClick={closeMenu}>
// //           <div className="brand-mark">
// //             NEP
// //           </div>

// //           <div className="brand-text">
// //             <strong>NOIDA EXTENSION</strong>
// //             <span>PROPERTY</span>
// //           </div>
// //         </Link>

// //         {/* LOCATION
// //         <div className="nav-location">
// //           <span className="location-icon">●</span>
// //           <span>Greater Noida West</span>
// //         </div> */}

// //         {/* DESKTOP MENU */}
// //         <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

// //           <Link to="/" onClick={closeMenu}>
// //             Home
// //           </Link>

// //           <Link to="/properties" onClick={closeMenu}>
// //             Properties
// //           </Link>

// //           <Link to="/contact" onClick={closeMenu}>
// //             Contact Us
// //           </Link>

// //           {/* <Link
// //             to="/contact"
// //             className="quote-button"
// //             onClick={closeMenu}
// //           >
// //             Get In Touch
// //           </Link> */}

// //         </nav>

// //         {/* MOBILE MENU BUTTON */}
// //         <button
// //           className="mobile-menu"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Open menu"
// //         >
// //           {menuOpen ? "×" : "☰"}
// //         </button>

// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar;


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";
// // import logo from "../logo.jpeg";

// // function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <header className="main-navbar">
// //       <div className="navbar-inner">

// //         {/* LOGO */}
// //         <Link to="/" className="brand-logo" onClick={closeMenu}>
// //           <img
// //             src="{logo}"
// //             alt="Noida Extension Property"
// //             className="logo-image"
// //           />
// //         </Link>

// //         {/* DESKTOP MENU */}
// //         <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

// //           <Link to="/" onClick={closeMenu}>
// //             Home
// //           </Link>

// //           <Link to="/properties" onClick={closeMenu}>
// //             Properties
// //           </Link>

// //           <Link to="/contact" onClick={closeMenu}>
// //             Contact Us
// //           </Link>

// //         </nav>

// //         {/* MOBILE MENU BUTTON */}
// //         <button
// //           className="mobile-menu"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Open menu"
// //         >
// //           {menuOpen ? "×" : "☰"}
// //         </button>

// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../logo.jpeg";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="main-navbar">
//       <div className="navbar-inner">

//         {/* LOGO */}
//         <Link to="/" className="brand-logo" onClick={closeMenu}>
//           <img
//             src={logo}
//             alt="Noida Extension Property"
//             className="logo-image"
//           />
//         </Link>

//         {/* DESKTOP MENU */}
//         <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

//           <Link to="/" onClick={closeMenu}>
//             Home
//           </Link>

//           <Link to="/properties" onClick={closeMenu}>
//             Properties
//           </Link>


//           <Link to="/contact" onClick={closeMenu}>
//             Contact Us
//           </Link>

          
//           <Link to="/services" onClick={closeMenu}>
//             Services
//           </Link>
           
//           <Link to="/contact" onClick={closeMenu}>
//             Post Property
//           </Link>
          

//         </nav>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           className="mobile-menu"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Open menu"
//         >
//           {menuOpen ? "×" : "☰"}
//         </button>

//       </div>
//     </header>
//   );
// }

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="main-navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Noida Extension Property"
            className="logo-image"
          /> <h2>Rehouse Realtor</h2>
        </Link>

        {/* DESKTOP / MOBILE MENU */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

            <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/our-journey" onClick={closeMenu}>
            Projects
          </Link>

           <Link to="/loan" onClick={closeMenu}>
            Apply Loan
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact Us
          </Link>

        

          {/* MORE DROPDOWN */}
          <div className="more-dropdown" ref={moreRef}>

            <button
              className="more-button"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More
              <span className={moreOpen ? "arrow rotate" : "arrow"}>
                ▾
              </span>
            </button>

            {moreOpen && (
              <div className="more-menu">

                <Link
                  to="/login?role=post-property"
                  onClick={closeMenu}
                >
                  <span>🏠</span>
                  Post Property
                </Link>

                <Link
                  to="/login?role=dashboard"
                  onClick={closeMenu}
                >
                  <span>📊</span>
                  Dashboard
                </Link>

              </div>
            )}

          </div>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;