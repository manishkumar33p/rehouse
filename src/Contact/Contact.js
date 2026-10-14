

// import React, { useState } from "react";
// import "./Contact.css";
// import { sendEnquiry } from "../sendEnquiry";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     interest: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.phone || !form.email || !form.interest) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     try {
//       setLoading(true);

//       await sendEnquiry(form);

//       alert(
//         "Thank you! Your enquiry has been submitted successfully."
//       );

//       setForm({
//         name: "",
//         phone: "",
//         email: "",
//         interest: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("EmailJS Error:", error);

//       alert(
//         "Enquiry save ho gayi hai, lekin email send nahi ho payi. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="contact-page">

//       {/* HERO */}
//       <section className="contact-video-hero">

//         <video
//           className="contact-bg-video"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source
//             src="/videos/contact-bg.mp4"
//             type="video/mp4"
//           />
//         </video>

//         <div className="video-overlay"></div>

//         <div className="contact-hero-content">

//           <span className="hero-small-title">
//             NOIDA EXTENSION PROPERTY
//           </span>

//           <h1>
//             Let's Find Your
//             <br />
//             <em>Perfect Place.</em>
//           </h1>

//           <p>
//             Whether you're looking to buy, sell, rent or invest,
//             we're here to make your real estate journey simple,
//             transparent and rewarding.
//           </p>

//           <div className="hero-actions">

//             <a href="#contact-form">
//               Start A Conversation →
//             </a>

//             <a
//               href="tel:+919876543210"
//               className="call-btn"
//             >
//               Call An Expert
//             </a>

//           </div>

//         </div>

//         <div className="scroll-indicator">
//           <span></span>
//           SCROLL TO EXPLORE
//         </div>

//       </section>

//       {/* CONTACT AREA */}
//       <section
//         className="contact-main"
//         id="contact-form"
//       >

//         <div className="contact-wrapper">

//           {/* LEFT */}
//           <div className="contact-information">

//             <span className="section-label">
//               GET IN TOUCH
//             </span>

//             <h2>
//               Your Next
//               <br />
//               <strong>Move Starts Here.</strong>
//             </h2>

//             <p className="contact-description">
//               Have a property requirement or looking for the
//               right investment opportunity? Tell us what you're
//               looking for and our property experts will get back
//               to you.
//             </p>

//             <div className="contact-details">

//               <div className="contact-detail-card">

//                 <div className="detail-icon">
//                   ☎
//                 </div>

//                 <div>
//                   <small>CALL US</small>
//                   <strong>+91 98765 43210</strong>
//                   <p>Mon – Sat, 9:00 AM – 7:00 PM</p>
//                 </div>

//               </div>

//               <div className="contact-detail-card">

//                 <div className="detail-icon">
//                   ✉
//                 </div>

//                 <div>
//                   <small>EMAIL US</small>
//                   <strong>
//                     info@noidaextensionproperty.com
//                   </strong>
//                   <p>We usually reply within 24 hours</p>
//                 </div>

//               </div>

//               <div className="contact-detail-card">

//                 <div className="detail-icon">
//                   ●
//                 </div>

//                 <div>
//                   <small>VISIT US</small>
//                   <strong>Greater Noida West</strong>
//                   <p>Uttar Pradesh, India</p>
//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* FORM */}
//           <div className="contact-form-card">

//             <div className="form-top">

//               <span>PROPERTY ENQUIRY</span>

//               <h3>
//                 Tell Us What
//                 <br />
//                 You're Looking For.
//               </h3>

//             </div>

//             <form onSubmit={handleSubmit}>

//               <div className="form-row">

//                 <div className="input-group">

//                   <label>Your Name</label>

//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                   />

//                 </div>

//                 <div className="input-group">

//                   <label>Phone Number</label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     placeholder="Enter phone number"
//                     required
//                   />

//                 </div>

//               </div>

//               <div className="input-group">

//                 <label>Email Address</label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                 />

//               </div>

//               <div className="input-group">

//                 <label>I'm Interested In</label>

//                 <select
//                   name="interest"
//                   value={form.interest}
//                   onChange={handleChange}
//                   required
//                 >

//                   <option value="">
//                     Select your requirement
//                   </option>

//                   <option>Buy Property</option>
//                   <option>Sell Property</option>
//                   <option>Rent Property</option>
//                   <option>Commercial Property</option>
//                   <option>Residential Property</option>
//                   <option>Plots</option>
//                   <option>PG</option>

//                 </select>

//               </div>

//               <div className="input-group">

//                 <label>Your Message</label>

//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows="4"
//                   placeholder="Tell us about your property requirement..."
//                 ></textarea>

//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading
//                   ? "Sending..."
//                   : "Send Enquiry"}

//                 <span>→</span>
//               </button>

//             </form>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";
import { sendEnquiry } from "../sendEnquiry";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.interest) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      await sendEnquiry(form);

      alert(
        "Thank you! Your enquiry has been submitted successfully. Our property consultant will contact you shortly."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Your enquiry could not be sent right now. Please try again or contact our support team directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}
      <section className="contact-hero">

        <div className="contact-hero-background"></div>

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <div className="contact-eyebrow">
            <span></span>
            REHOUSE REALTORS
            <span></span>
          </div>

          <h1>
            Let's Begin Your
            <br />
            <em>Property Journey.</em>
          </h1>

          <p>
            Whether you are buying, selling, renting or investing,
            our property consultants are here to guide you with
            clarity, discretion and professional attention.
          </p>

          <div className="contact-hero-actions">

            <a href="#contact-form" className="primary-contact-btn">
              Start A Conversation
              <span>↗</span>
            </a>

            <a
              href="tel:+919876543210"
              className="secondary-contact-btn"
            >
              <span className="phone-icon">☎</span>
              Speak With An Expert
            </a>

          </div>

        </div>

        <div className="hero-bottom-info">

          <div>
            <small>PROPERTY CONSULTATION</small>
            <strong>Private & Professional</strong>
          </div>

          <div>
            <small>LOCATION</small>
            <strong>Greater Noida West</strong>
          </div>

          <div>
            <small>AVAILABILITY</small>
            <strong>Mon – Sat · 9 AM – 7 PM</strong>
          </div>

        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="contact-intro">

        <div className="contact-intro-inner">

          <div className="intro-label">
            <span></span>
            GET IN TOUCH
          </div>

          <div className="intro-grid">

            <h2>
              Your next move
              <br />
              deserves the
              <em> right guidance.</em>
            </h2>

            <div className="intro-copy">

              <p>
                Real estate decisions are important. At REHOUSE
                REALTORS, we take the time to understand your
                requirements before presenting the right
                opportunities.
              </p>

              <p>
                Share your requirement with us and our team will
                connect with you to understand your property goals,
                budget, preferred location and timeline.
              </p>

              <div className="intro-line"></div>

              <span>
                PROFESSIONAL REAL ESTATE CONSULTATION
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}
      <section
        className="contact-main"
        id="contact-form"
      >

        <div className="contact-wrapper">

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}
          <div className="contact-information">

            <div className="section-label">
              <span></span>
              CONTACT REHOUSE
            </div>

            <h2>
              Tell us what
              <br />
              you're <em>looking for.</em>
            </h2>

            <p className="contact-description">
              From your first property search to the final
              decision, our team is available to provide
              professional assistance tailored to your
              requirements.
            </p>


            {/* PHONE */}
            <div className="contact-detail">

              <div className="detail-number">
                01
              </div>

              <div className="detail-icon">
                ☎
              </div>

              <div className="detail-content">

                <span>CALL OUR OFFICE</span>

                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>

                <p>
                  Mon – Sat · 9:00 AM – 7:00 PM
                </p>

              </div>

            </div>


            {/* EMAIL */}
            <div className="contact-detail">

              <div className="detail-number">
                02
              </div>

              <div className="detail-icon">
                ✉
              </div>

              <div className="detail-content">

                <span>EMAIL US</span>

                <a href="mailto:info@noidaextensionproperty.com">
                  info@noidaextensionproperty.com
                </a>

                <p>
                  For property enquiries & support
                </p>

              </div>

            </div>


            {/* LOCATION */}
            <div className="contact-detail">

              <div className="detail-number">
                03
              </div>

              <div className="detail-icon">
                ◉
              </div>

              <div className="detail-content">

                <span>OUR LOCATION</span>

                <strong>
                  Greater Noida West
                </strong>

                <p>
                  Uttar Pradesh, India
                </p>

              </div>

            </div>


            {/* TRUST NOTE */}
            <div className="contact-trust">

              <div className="trust-mark">
                ✓
              </div>

              <div>
                <strong>
                  Confidential Consultation
                </strong>

                <p>
                  Your enquiry details are used only to
                  understand and respond to your property
                  requirement.
                </p>
              </div>

            </div>

          </div>


          {/* =================================================
              PREMIUM FORM
          ================================================= */}
          <div className="contact-form-card">

            <div className="form-card-header">

              <div>
                <span>
                  PROPERTY ENQUIRY
                </span>

                <h3>
                  Let's discuss your
                  <br />
                  <em>requirements.</em>
                </h3>
              </div>

              <div className="form-number">
                01
              </div>

            </div>


            <div className="form-divider"></div>


            <form onSubmit={handleSubmit}>

              {/* NAME + PHONE */}
              <div className="form-row">

                <div className="input-group">

                  <label>
                    FULL NAME <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />

                </div>


                <div className="input-group">

                  <label>
                    PHONE NUMBER <span>*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}
              <div className="input-group">

                <label>
                  EMAIL ADDRESS <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

              </div>


              {/* INTEREST */}
              <div className="input-group">

                <label>
                  I'M INTERESTED IN <span>*</span>
                </label>

                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select your requirement
                  </option>

                  <option value="Buy Property">
                    Buy Property
                  </option>

                  <option value="Sell Property">
                    Sell Property
                  </option>

                  <option value="Rent Property">
                    Rent Property
                  </option>

                  <option value="Commercial Property">
                    Commercial Property
                  </option>

                  <option value="Residential Property">
                    Residential Property
                  </option>

                  <option value="Plots">
                    Plots
                  </option>

                  <option value="PG">
                    PG / Rental Accommodation
                  </option>

                  <option value="Investment">
                    Real Estate Investment
                  </option>

                  <option value="Loan Assistance">
                    Loan Assistance
                  </option>

                  <option value="Other">
                    Other Requirement
                  </option>

                </select>

              </div>


              {/* MESSAGE */}
              <div className="input-group">

                <label>
                  YOUR REQUIREMENT
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your preferred location, budget, property type or any other requirement..."
                ></textarea>

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="submit-contact-btn"
                disabled={loading}
              >

                <span>
                  {loading
                    ? "SUBMITTING ENQUIRY..."
                    : "SUBMIT ENQUIRY"}
                </span>

                <strong>
                  {loading ? "..." : "↗"}
                </strong>

              </button>


              <p className="form-note">
                By submitting this form, you agree to be
                contacted by the REHOUSE REALTORS team
                regarding your enquiry.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES STRIP
      ===================================================== */}
      <section className="contact-services">

        <div className="contact-services-header">

          <div>
            <span className="section-label">
              OUR EXPERTISE
            </span>

            <h2>
              More than a property search.
            </h2>
          </div>

          <p>
            Professional support across every important
            stage of your real estate journey.
          </p>

        </div>


        <div className="contact-services-grid">

          <div className="service-mini-card">

            <span>01</span>

            <h3>
              Property Buying
            </h3>

            <p>
              Find residential and investment properties
              aligned with your requirements.
            </p>

          </div>


          <div className="service-mini-card">

            <span>02</span>

            <h3>
              Property Selling
            </h3>

            <p>
              Professional assistance for presenting and
              connecting your property with buyers.
            </p>

          </div>


          <div className="service-mini-card">

            <span>03</span>

            <h3>
              Property Rentals
            </h3>

            <p>
              Assistance with residential and selected
              rental property requirements.
            </p>

          </div>


          <div className="service-mini-card">

            <span>04</span>

            <h3>
              Investment Guidance
            </h3>

            <p>
              Explore property opportunities according
              to your goals and preferred locations.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="contact-final">

        <div className="contact-final-content">

          <span>
            HAVE A PROPERTY REQUIREMENT?
          </span>

          <h2>
            Let's make your
            <br />
            <em>next move count.</em>
          </h2>

          <p>
            Speak with REHOUSE REALTORS and take the
            next step with professional property guidance.
          </p>

          <div className="final-actions">

            <a
              href="#contact-form"
              className="final-primary"
            >
              Send An Enquiry
              <span>↗</span>
            </a>

            <a
              href="tel:+919876543210"
              className="final-secondary"
            >
              Call +91 98765 43210
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;