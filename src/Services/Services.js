// import React from "react";
// import "./Services.css";

// function Services() {

//   const services = [
//     {
//       icon: "🏠",
//       title: "Property Buying",
//       text: "We help you find the right property according to your budget and requirements."
//     },
//     {
//       icon: "🏢",
//       title: "Property Selling",
//       text: "Professional assistance for selling your residential and commercial property."
//     },
//     {
//       icon: "🔑",
//       title: "Property Rental",
//       text: "Find suitable properties for rent with a simple and transparent process."
//     },
//     {
//       icon: "📋",
//       title: "Property Consultation",
//       text: "Get expert guidance before making your property investment."
//     },
//     {
//       icon: "📍",
//       title: "Property Search",
//       text: "We help customers search for properties in their preferred location."
//     },
//     {
//       icon: "🤝",
//       title: "Deal Assistance",
//       text: "Complete assistance from property selection to final deal."
//     }
//   ];

//   return (
//     <section className="services-page">

//       <div className="services-container">

//         <p className="services-label">
//           OUR SERVICES
//         </p>

//         <h1>
//           Complete Property Solutions
//         </h1>

//         <div className="services-grid">

//           {services.map((service, index) => (

//             <div className="service-card" key={index}>

//               <div className="service-icon">
//                 {service.icon}
//               </div>

//               <h3>{service.title}</h3>

//               <p>{service.text}</p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Services;

import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Property Buying",
      text: "Find the right residential or commercial property according to your budget, location and requirements.",
    },
    {
      icon: "🏢",
      title: "Property Selling",
      text: "Get professional assistance to market, present and sell your property with a smooth process.",
    },
    {
      icon: "🔑",
      title: "Property Rental",
      text: "Discover suitable rental properties with transparent information and hassle-free assistance.",
    },
    {
      icon: "📋",
      title: "Property Consultation",
      text: "Get practical property guidance to make confident decisions before buying, selling or investing.",
    },
    {
      icon: "📍",
      title: "Property Search",
      text: "We help you explore properties in your preferred location, budget and property category.",
    },
    {
      icon: "🤝",
      title: "Deal Assistance",
      text: "From property selection to final discussion, we provide complete assistance throughout the deal.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tell Us Your Requirement",
      text: "Share your location, budget and property requirements with our team.",
    },
    {
      number: "02",
      title: "Explore Properties",
      text: "We help you shortlist suitable residential, commercial and plot options.",
    },
    {
      number: "03",
      title: "Property Visit",
      text: "Visit shortlisted properties and understand the location and available options.",
    },
    {
      number: "04",
      title: "Close Your Deal",
      text: "Get assistance through the final discussion and property transaction.",
    },
  ];

  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <span className="services-badge">
            NOIDA EXTENSION PROPERTY
          </span>

          <h1>
            Complete Property
            <span> Solutions</span>
          </h1>

          <p>
            From finding your dream property to completing the deal,
            we provide reliable and professional real-estate assistance.
          </p>

          <div className="services-hero-buttons">
            <Link to="/properties" className="services-primary-btn">
              Explore Properties
            </Link>

            <Link to="/contact" className="services-secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="services-section">

        <div className="services-container">

          <div className="services-heading">
            <span>WHAT WE OFFER</span>

            <h2>
              Our Real Estate Services
            </h2>

            <p>
              Whether you are buying, selling, renting or investing,
              our services are designed to make your property journey
              easier and more transparent.
            </p>
          </div>


          <div className="services-grid">

            {services.map((service, index) => (
              <div className="service-card" key={index}>

                <div className="service-card-top">
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <span className="service-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <Link to="/contact" className="service-link">
                  Get Assistance →
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="services-why">

        <div className="services-container">

          <div className="services-why-grid">

            <div className="services-why-content">

              <span>WHY CHOOSE US</span>

              <h2>
                Making Property Decisions
                <strong> Simple &amp; Confident</strong>
              </h2>

              <p>
                Property buying and selling can be complicated.
                Our goal is to simplify the process by helping you
                understand your options and choose the right property.
              </p>

              <div className="services-points">

                <div>
                  <b>✓</b>
                  <span>Local Property Knowledge</span>
                </div>

                <div>
                  <b>✓</b>
                  <span>Transparent Communication</span>
                </div>

                <div>
                  <b>✓</b>
                  <span>Personalised Property Assistance</span>
                </div>

                <div>
                  <b>✓</b>
                  <span>End-to-End Deal Support</span>
                </div>

              </div>

              <Link to="/contact" className="services-dark-btn">
                Talk To Our Team
              </Link>

            </div>


            <div className="services-why-box">

              <div className="why-box-icon">
                🏡
              </div>

              <h3>
                Your Property,
                <br />
                Our Assistance.
              </h3>

              <p>
                We focus on understanding your requirement first
                and then helping you explore suitable property options.
              </p>

              <div className="why-box-line"></div>

              <strong>
                Noida Extension Property
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="services-process">

        <div className="services-container">

          <div className="services-heading">
            <span>HOW IT WORKS</span>

            <h2>
              Simple Property Process
            </h2>

            <p>
              A straightforward process designed to save your time
              and make your property journey easier.
            </p>
          </div>


          <div className="process-grid">

            {steps.map((step, index) => (
              <div className="process-card" key={index}>

                <div className="process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <div className="services-cta-content">

          <span>
            LET'S FIND YOUR NEXT PROPERTY
          </span>

          <h2>
            Looking For The Right Property?
          </h2>

          <p>
            Tell us what you are looking for and let our team
            help you find suitable property options.
          </p>

          <div className="services-cta-buttons">

            <Link to="/properties" className="services-primary-btn">
              View Properties
            </Link>

            <Link to="/contact" className="services-outline-btn">
              Get In Touch
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Services;