import React, { useState } from "react";
import "./Home.css";
import hm from "../hm.jpeg";
import { Link } from "react-router-dom";
import flat1 from "../flat1.jpg";
import flat2 from "../flat2.jpg";
import flat3 from "../flat3.jpg";
import flat4 from "../flat4.jpg";
import flat5 from "../flat5.jpg";
import Property from "../Property/Property";
import { sendEnquiry } from "../sendEnquiry";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
const properties = [
    
  {
    title: "Luxury 3 BHK Residence",
    location: "Noida Extension",
    price: "₹85 Lakh",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Premium Commercial Office",
    location: "Greater Noida West",
    price: "₹1.25 Cr",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Prime Residential Plot",
    location: "Noida Extension",
    price: "₹45 Lakh",
    type: "Plot",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
];


function Home() {

  const [contactForm, setContactForm] = useState({
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
});

const [contactLoading, setContactLoading] = useState(false);

const handleContactChange = (e) => {
  setContactForm({
    ...contactForm,
    [e.target.name]: e.target.value,
  });
};

const handleContactSubmit = async (e) => {
  e.preventDefault();

  if (
    !contactForm.name ||
    !contactForm.phone ||
    !contactForm.email ||
    !contactForm.interest
  ) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    setContactLoading(true);

    await sendEnquiry(contactForm);

    alert("Your enquiry has been submitted successfully!");

    setContactForm({
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert(
      "Enquiry save ho gayi hai, lekin email send nahi ho payi."
    );
  } finally {
    setContactLoading(false);
  }
};



  return (
    <div className="nep-site">
        <HeroCarousel />
        <Property />
      

            {/* HERO */}
      <section className="nep-hero" id="home">

        <div className="nep-hero-overlay"></div>

        <div className="nep-hero-content">

          <div className="nep-eyebrow">
            <span></span>
            NOIDA  PROPERTY EXPERT
            <span></span>
          </div>

          <h1>
            FIND A PLACE
            <br />
            <em>YOU'LL LOVE</em>
            <br />
            TO CALL HOME.
          </h1>

          <p>
            Discover premium residential and commercial properties
            with trusted guidance, transparent deals and personalised
            real estate solutions.
          </p>

          <div className="nep-hero-buttons">
            <a href="#properties" className="nep-gold-btn">
              Explore Properties <span>↗</span>
            </a>

            <a href="#contact" className="nep-outline-btn">
              Talk To An Expert
            </a>
          </div>

        </div>

        <div className="nep-hero-bottom">
          <div>
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Properties</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Trusted Service</span>
          </div>
        </div>

        <div className="nep-scroll">
          SCROLL TO EXPLORE
          <span></span>
        </div>

      </section>


      {/* ABOUT */}
      <section className="nep-about" id="about">

        <div className="nep-section-number">01</div>

        <div className="nep-about-grid">

          <div className="nep-about-heading">
            <span className="nep-label">WHO WE ARE</span>

            <h2>
              MORE THAN
              <br />
              <em>PROPERTY.</em>
            </h2>

            <div className="nep-gold-line"></div>
          </div>

          <div className="nep-about-text">
            <p className="nep-big-text">
              We believe that finding a property should feel
              <strong> exciting, simple and trustworthy.</strong>
            </p>

            <p>
              Rehouse Realtors is a professional real estate
              consultancy focused on helping customers discover the
              right property for their needs, lifestyle and investment goals.
            </p>

            <p>
              From finding your dream home to identifying the right
              investment opportunity, our team provides end-to-end
              assistance with transparency and personal attention.
            </p>

            <a href="#contact" className="nep-text-link">
              KNOW MORE ABOUT US <span>→</span>
            </a>
          </div>

        </div>
      </section>
{/* ================= PROPERTY VIDEO SHOWCASE ================= */}
<section className="property-video-section">
  <div className="video-overlay-content">
    <span>EXPLORE NOIDA EXTENSION</span>
    <h2>Find Your Perfect Property</h2>
    <p>
      Discover premium apartments, modern homes and excellent
      investment opportunities in Noida Extension.
    </p>

    <Link to="/properties" className="video-btn">
      Explore Properties
    </Link>
  </div>

  <video
    className="property-background-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/property-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>


{/* ================= WHY CHOOSE US ================= */}
<section className="why-section">

  <div className="why-heading">
    <span>WHY CHOOSE US</span>
    <h2>Everything You Need For A Better Property Decision</h2>
    <p>
      We help you find the right property with better information,
      genuine options and professional guidance.
    </p>
  </div>

  <div className="why-carousel">
    <div className="why-track">

      <div className="why-card">
        <div className="why-icon">🏠</div>
        <h3>Premium Properties</h3>
        <p>
          Carefully selected residential and commercial properties
          in prime locations.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">📍</div>
        <h3>Prime Locations</h3>
        <p>
          Explore properties close to major roads, metro routes,
          schools and commercial hubs.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">💰</div>
        <h3>Smart Investment</h3>
        <p>
          Get better property options for both living and long-term
          investment.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">🤝</div>
        <h3>Expert Guidance</h3>
        <p>
          Get professional assistance throughout your property
          selection journey.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">🔍</div>
        <h3>Better Choices</h3>
        <p>
          Compare different property options and choose according
          to your needs and budget.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">⭐</div>
        <h3>Customer First</h3>
        <p>
          Our focus is on creating a smooth and transparent property
          buying experience.
        </p>
      </div>

      {/* Duplicate cards for smooth infinite carousel */}

      <div className="why-card">
        <div className="why-icon">🏠</div>
        <h3>Premium Properties</h3>
        <p>Carefully selected properties in prime locations.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">📍</div>
        <h3>Prime Locations</h3>
        <p>Properties near important connectivity and facilities.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">💰</div>
        <h3>Smart Investment</h3>
        <p>Property options suitable for future growth.</p>
      </div>

    </div>
  </div>

</section>
<section className="category-section">

  <div className="section-heading center">
    <span className="section-tag">WHAT ARE YOU LOOKING FOR?</span>

    <h2>
      EXPLORE PROPERTY
      <br />
      <span>CATEGORIES</span>
    </h2>

    <p>
      Find properties designed around your lifestyle, business and investment
      goals.
    </p>
  </div>

  <div className="category-grid">

    <div className="category-card">
      <div className="category-number">01</div>
      <h3>Residential Properties</h3>
      <p>
        Modern apartments, villas, independent houses and premium residential
        spaces for comfortable living.
      </p>
      <span>EXPLORE →</span>
    </div>

    <div className="category-card">
      <div className="category-number">02</div>
      <h3>Commercial Properties</h3>
      <p>
        Offices, shops, commercial spaces and business properties in strategic
        locations.
      </p>
      <span>EXPLORE →</span>
    </div>

    <div className="category-card">
      <div className="category-number">03</div>
      <h3>Plots & Land</h3>
      <p>
        Residential and investment plots selected for long-term growth and
        development potential.
      </p>
      <span>EXPLORE →</span>
    </div>

    <div className="category-card">
      <div className="category-number">04</div>
      <h3>Rental Properties</h3>
      <p>
        Quality rental options for families, professionals, students and
        businesses.
      </p>
      <span>EXPLORE →</span>
    </div>

  </div>

</section>

{/* FEATURED PROPERTIES CAROUSEL */}

<section className="featured-properties">

  <div className="featured-heading">

    <span>FEATURED PROPERTIES</span>

    <h2>
      Explore Our <strong>Featured Homes</strong>
    </h2>

    <p>
      Discover thoughtfully selected residential properties in
      Noida Extension, Greater Noida and nearby locations.
    </p>

  </div>


  <div className="property-carousel">

    <div className="property-track">

      {/* CARD 1 */}
      <div className="property-slide">

        <div className="property-image">
          <img
            src={flat1}
            alt="Modern Apartment"
          />

          <span className="property-tag">FEATURED</span>
        </div>

        <div className="property-info">

          <small>NOIDA EXTENSION</small>

          <h3>Modern Luxury Apartments</h3>

          <p>
            Premium 2 & 3 BHK apartments with modern amenities
            and excellent connectivity.
          </p>

          <div className="property-bottom">
            <span>2 & 3 BHK</span>
            <span>View Property →</span>
          </div>

        </div>

      </div>


      {/* CARD 2 */}
      <div className="property-slide">

        <div className="property-image">
          <img
            src={flat2}
            alt="Premium Apartment"
          />

          <span className="property-tag">POPULAR</span>
        </div>

        <div className="property-info">

          <small>GREATER NOIDA WEST</small>

          <h3>Premium Family Residences</h3>

          <p>
            Spacious homes designed for comfortable family
            living with lifestyle amenities.
          </p>

          <div className="property-bottom">
            <span>2 & 3 BHK</span>
            <span>View Property →</span>
          </div>

        </div>

      </div>


      {/* CARD 3 */}
      <div className="property-slide">

        <div className="property-image">
          <img
            src={flat3}
            alt="Luxury Residence"
          />

          <span className="property-tag">NEW</span>
        </div>

        <div className="property-info">

          <small>NOIDA</small>

          <h3>Contemporary City Homes</h3>

          <p>
            Beautifully planned residences located close to
            major roads, offices and daily conveniences.
          </p>

          <div className="property-bottom">
            <span>2, 3 & 4 BHK</span>
            <span>View Property →</span>
          </div>

        </div>

      </div>


      {/* CARD 4 */}
      <div className="property-slide">

        <div className="property-image">
          <img
            src={flat4}
            alt="Premium Home"
          />

          <span className="property-tag">FEATURED</span>
        </div>

        <div className="property-info">

          <small>NOIDA EXTENSION</small>

          <h3>Elegant High-Rise Living</h3>

          <p>
            A perfect combination of comfort, connectivity and
            modern lifestyle.
          </p>

          <div className="property-bottom">
            <span>3 BHK</span>
            <span>View Property →</span>
          </div>

        </div>

      </div>


      {/* CARD 5 */}
      <div className="property-slide">

        <div className="property-image">
          <img
            src={flat5}
            alt="Luxury Apartment"
          />

          <span className="property-tag">HOT</span>
        </div>

        <div className="property-info">

          <small>GREATER NOIDA</small>

          <h3>Luxury Lifestyle Residences</h3>

          <p>
            Premium residential spaces created for a modern
            and comfortable lifestyle.
          </p>

          <div className="property-bottom">
            <span>2 & 3 BHK</span>
            <span>View Property →</span>
          </div>

        </div>

      </div>

    </div>

  </div>


  {/* DOTS */}

  <div className="carousel-dots">
    <span className="active"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

</section>
      {/* PROPERTIES */}
      <section className="nep-properties" id="properties">

        <div className="nep-section-head">
          <div>
            <span className="nep-label">OUR COLLECTION</span>
            <h2>
              FEATURED <em>PROPERTIES</em>
            </h2>
          </div>

          <a href="/properties" className="nep-text-link">
            VIEW ALL PROPERTIES →
          </a>
        </div>

        <div className="nep-property-grid">

          {properties.map((property, index) => (
            <div className="nep-property-card" key={index}>

              <div className="nep-property-image">
                <img src={property.image} alt={property.title} />

                <span className="nep-property-tag">
                  {property.type}
                </span>

                <div className="nep-property-arrow">↗</div>
              </div>

              <div className="nep-property-info">
                <span>{property.location}</span>
                <h3>{property.title}</h3>

                <div className="nep-property-bottom">
                  <strong>{property.price}</strong>
                  <small>VIEW PROPERTY →</small>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
<section className="why-section">

  <div className="why-content">

    <div className="section-heading">
      <span className="section-tag">WHY REHOUSE REALTORS</span>

      <h2>
        MORE THAN A
        <br />
        <span>PROPERTY DEAL.</span>
      </h2>

      <p>
        We believe buying or selling property should be transparent,
        comfortable and well-informed.
      </p>
    </div>

    <div className="why-grid">

      <div className="why-card">
        <strong>01</strong>
        <h3>Local Expertise</h3>
        <p>
          Strong understanding of Noida Extension and surrounding real estate
          markets.
        </p>
      </div>

      <div className="why-card">
        <strong>02</strong>
        <h3>Verified Options</h3>
        <p>
          We focus on presenting suitable property options based on your
          requirements.
        </p>
      </div>

      <div className="why-card">
        <strong>03</strong>
        <h3>Personalised Guidance</h3>
        <p>
          Every client receives assistance according to their budget and
          property goals.
        </p>
      </div>

      <div className="why-card">
        <strong>04</strong>
        <h3>Complete Assistance</h3>
        <p>
          From property discovery to discussions and final decisions, we stay
          connected throughout the journey.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="process-section">

  <div className="section-heading center">

    <span className="section-tag">OUR PROCESS</span>

    <h2>
      A SIMPLE WAY TO
      <br />
      <span>FIND YOUR PROPERTY.</span>
    </h2>

  </div>

  <div className="process-grid">

    <div className="process-item">
      <div className="process-icon">01</div>
      <h3>Understand</h3>
      <p>
        We understand your budget, preferred location, property type and
        expectations.
      </p>
    </div>

    <div className="process-item">
      <div className="process-icon">02</div>
      <h3>Shortlist</h3>
      <p>
        We identify suitable property options matching your requirements.
      </p>
    </div>

    <div className="process-item">
      <div className="process-icon">03</div>
      <h3>Visit</h3>
      <p>
        Explore shortlisted properties and understand the opportunity better.
      </p>
    </div>

    <div className="process-item">
      <div className="process-icon">04</div>
      <h3>Decide</h3>
      <p>
        Make your property decision with clear information and professional
        guidance.
      </p>
    </div>

  </div>

</section>
<section className="stats-section">

  <div className="stats-box">

    <div>
      <strong>100+</strong>
      <span>PROPERTY OPTIONS</span>
    </div>

    <div>
      <strong>50+</strong>
      <span>CLIENT ENQUIRIES</span>
    </div>

    <div>
      <strong>10+</strong>
      <span>LOCAL AREAS</span>
    </div>

    <div>
      <strong>24/7</strong>
      <span>CLIENT SUPPORT</span>
    </div>

  </div>

</section>

<section className="testimonial-section">

  <div className="section-heading center">

    <span className="section-tag">CLIENT EXPERIENCE</span>

    <h2>
      TRUST THAT
      <br />
      <span>MATTERS.</span>
    </h2>

  </div>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <div className="quote">“</div>

      <p>
        The team understood our requirements properly and helped us explore
        suitable property options without making the process complicated.
      </p>

      <h4>Property Buyer</h4>
      <span>NOIDA EXTENSION</span>
    </div>

    <div className="testimonial-card">
      <div className="quote">“</div>

      <p>
        Professional communication, personalised guidance and a very smooth
        property search experience.
      </p>

      <h4>Residential Client</h4>
      <span>GREATER NOIDA</span>
    </div>

    <div className="testimonial-card">
      <div className="quote">“</div>

      <p>
        We were looking for a commercial property and received clear guidance
        throughout the process.
      </p>

      <h4>Business Client</h4>
      <span>NOIDA REGION</span>
    </div>

  </div>

</section>

<section className="faq-section">

  <div className="section-heading">

    <span className="section-tag">FAQ</span>

    <h2>
      FREQUENTLY ASKED
      <br />
      <span>QUESTIONS.</span>
    </h2>

  </div>

  <div className="faq-list">

    <details>
      <summary>What type of properties do you deal in?</summary>
      <p>
        We deal in residential properties, commercial spaces, plots, land and
        rental opportunities.
      </p>
    </details>

    <details>
      <summary>Can you help me find a property according to my budget?</summary>
      <p>
        Yes. You can share your preferred location, budget and property
        requirement and our team can help shortlist suitable options.
      </p>
    </details>

    <details>
      <summary>Do you deal with commercial properties?</summary>
      <p>
        Yes. Commercial offices, shops and other business-oriented properties
        can be explored according to availability and requirement.
      </p>
    </details>

    <details>
      <summary>How can I contact your team?</summary>
      <p>
        You can use the Get In Touch button or Contact Us section to submit
        your enquiry.
      </p>
    </details>

  </div>

</section>

      {/* FOUNDER */}
      <section className="nep-founder" id="founder">

        <div className="nep-founder-image">

         <img src={hm} alt="Harsh Mohan Jha" />

          <div className="nep-founder-image-caption">
            <span>FOUNDER & CEO</span>
            <strong>REHOUSE REALTOR</strong>
          </div>

        </div>

        <div className="nep-founder-content">

          <span className="nep-label">
            MEET OUR FOUNDER & CEO
          </span>

          <h2>
            Karan
            <br />
            <em> Jha.</em>
          </h2>

          <h4>FOUNDER & CHIEF EXECUTIVE OFFICER</h4>

          <div className="nep-gold-line"></div>

          <p className="nep-founder-intro">
            "A property is not just a transaction.
            It is a decision that shapes someone's future."
          </p>

          <p>
            With a clear vision and a strong commitment to excellence,
            <strong> Karan Jha</strong> founded Rehouse Realtors with the goal of providing a better property
            Property with the belief that real estate should be built
            on trust, transparency and long-term relationships.
          </p>

          <p>
            His customer-first approach and understanding of the
            evolving Noida Extension market continue to drive the
            company's vision of delivering genuine opportunities
            and personalised property solutions.
          </p>

          <div className="nep-founder-sign">
            <strong>Karan Jha</strong>
            <span>Founder & CEO</span>
          </div>

        </div>

      </section>
<section className="final-cta">

  <div className="cta-inner">

    <span>READY TO FIND YOUR NEXT PROPERTY?</span>

    <h2>
      LET'S FIND THE
      <br />
      <em>RIGHT PLACE.</em>
    </h2>

    <p>
      Tell us what you're looking for and let our team help you explore the
      right property opportunities.
    </p>

    <button
      className="cta-button"
     onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    >
      GET IN TOUCH →
    </button>

  </div>

</section>

{/* EXPERIENCE + PORTFOLIO + FUTURE VISION SECTION */}

<section className="experience-vision-section">

  <div className="experience-vision-container">

    {/* HEADING */}
    <div className="experience-vision-heading">

      <span>OUR EXPERIENCE & FUTURE VISION</span>

      <h2>
        Experience You Can Trust.
        <br />
        <strong>Vision for the Future.</strong>
      </h2>

      <p>
        Our journey in real estate has given us valuable experience across
        Noida, Greater Noida and Noida Extension. We have worked with
        established projects and understand the market, property and
        investment requirements of our customers.
      </p>

    </div>


    {/* EXPERIENCE */}
    <div className="experience-block">

      <div className="experience-title">
        <span className="experience-icon">01</span>

        <div>
          <small>OUR EXPERIENCE</small>
          <h3>Our Previous Work & Portfolio</h3>
        </div>
      </div>


      <div className="portfolio-items">

        {/* PROJECT 1 */}
        <div className="portfolio-item">

          <div className="portfolio-item-top">
            <span>01</span>
            <h4>Satyavilla</h4>
          </div>

          <p>
            Our experience with Satyavilla has helped us understand
            residential property development, customer requirements and
            the importance of quality and transparency in real estate.
          </p>

          <strong>Residential Real Estate</strong>

        </div>


        {/* PROJECT 2 */}
        <div className="portfolio-item">

          <div className="portfolio-item-top">
            <span>02</span>
            <h4>Shankari Noida</h4>
          </div>

          <p>
            We have gained valuable experience through our association
            with projects in Noida, developing a strong understanding of
            the local property market and customer expectations.
          </p>

          <strong>Noida Property</strong>

        </div>


        {/* PROJECT 3 */}
        <div className="portfolio-item">

          <div className="portfolio-item-top">
            <span>03</span>
            <h4>Beton Noida</h4>
          </div>

          <p>
            Our work with established real estate developments has given
            us practical knowledge of property development, investment
            opportunities and the evolving Noida real estate market.
          </p>

          <strong>Property Development</strong>

        </div>


        {/* PROJECT 4 */}
        <div className="portfolio-item">

          <div className="portfolio-item-top">
            <span>04</span>
            <h4>Greater Noida Projects</h4>
          </div>

          <p>
            Our journey across Greater Noida has helped us identify
            promising property opportunities and understand the changing
            needs of home buyers and investors.
          </p>

          <strong>Greater Noida Real Estate</strong>

        </div>

      </div>

    </div>


    {/* FUTURE VISION */}
    <div className="future-vision-block">

      <div className="future-vision-content">

        <small>02 — OUR FUTURE VISION</small>

        <h3>
          Building a Better Future
          <br />
          Through <strong>Real Estate</strong>
        </h3>

        <p>
          Noida Extension and Greater Noida are rapidly becoming some of
          the most promising real estate destinations in the NCR. Our goal
          is to grow with this transformation and become a trusted name
          for property buyers, sellers and investors.
        </p>

        <p>
          We believe that choosing a property is not just a transaction.
          It is an important decision about your home, your investment and
          your future. That is why we focus on transparency, genuine
          opportunities and long-term relationships with our customers.
        </p>


        {/* VISION POINTS */}

        <div className="vision-points">

          <div>
            <span>✓</span>
            <p>Trusted Property Opportunities</p>
          </div>

          <div>
            <span>✓</span>
            <p>Transparent & Reliable Guidance</p>
          </div>

          <div>
            <span>✓</span>
            <p>Smart Investment Opportunities</p>
          </div>

          <div>
            <span>✓</span>
            <p>Customer First Approach</p>
          </div>

        </div>

      </div>


      {/* VISION CARD */}

      <div className="vision-card">

        <div className="vision-card-inner">

          <span>OUR PROMISE</span>

          <h4>
            Your Trust.
            <br />
            Our Commitment.
          </h4>

          <div className="vision-card-line"></div>

          <p>
            Connecting people with the right property opportunities
            today, while building lasting value for tomorrow.
          </p>

          <strong>
            REHOUSE REALTORS
          </strong>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ================= PROPERTY SEARCH SECTION ================= */}

<section className="property-search-section">

  <div className="property-search-inner">

    <div className="property-search-heading">
      <span>FIND YOUR PROPERTY</span>

      <h2>
        Search Your Dream Property
      </h2>

      <p>
        Find the right home in Noida Extension with just a few clicks.
      </p>
    </div>


    <div className="property-search-box">

      {/* TABS */}

      <div className="search-tabs">

        <button className="search-tab active">
          Buy
        </button>

        <button className="search-tab">
          Rent
        </button>

      </div>


      {/* SEARCH OPTIONS */}

      <div className="search-options">

        <div className="search-option">

          <small>LOCATION</small>

          <div>
            📍 <strong>Noida Extension</strong>
          </div>

        </div>


        <div className="search-option">

          <small>PROPERTY TYPE</small>

          <div>
            🏠 <strong>Apartment / Flat</strong>
          </div>

        </div>


        <div className="search-option">

          <small>BUDGET</small>

          <div>
            ₹ <strong>Select Budget</strong>
          </div>

        </div>


        <Link
          to="/properties"
          className="search-property-btn"
        >
          Search
        </Link>

      </div>

    </div>

  </div>

</section>



      {/* SERVICES */}
      <section className="nep-services" id="services">

        <div className="nep-section-head">
          <div>
            <span className="nep-label">WHAT WE DO</span>
            <h2>
              REAL ESTATE
              <br />
              <em>MADE SIMPLE.</em>
            </h2>
          </div>

          <p>
            From your first property search to the final deal,
            we are with you at every step.
          </p>
        </div>

        <div className="nep-services-grid">

          <div className="nep-service">
            <span>01</span>
            <div className="nep-service-icon">⌂</div>
            <h3>BUY PROPERTY</h3>
            <p>
              Find carefully selected residential and commercial
              properties matching your requirements.
            </p>
            <a href="#contact">EXPLORE →</a>
          </div>

          <div className="nep-service">
            <span>02</span>
            <div className="nep-service-icon">◇</div>
            <h3>SELL PROPERTY</h3>
            <p>
              Get professional guidance to market your property
              and connect with genuine buyers.
            </p>
            <a href="#contact">EXPLORE →</a>
          </div>

          <div className="nep-service">
            <span>03</span>
            <div className="nep-service-icon">▱</div>
            <h3>RENT PROPERTY</h3>
            <p>
              Discover comfortable homes and suitable commercial
              spaces according to your needs.
            </p>
            <a href="#contact">EXPLORE →</a>
          </div>

          <div className="nep-service">
            <span>04</span>
            <div className="nep-service-icon">✦</div>
            <h3>CONSULTATION</h3>
            <p>
              Make smarter real estate decisions with experienced
              property consultation.
            </p>
            <a href="#contact">EXPLORE →</a>
          </div>

        </div>
      </section>


      {/* WHY US */}
      <section className="nep-why" id="why-us">

        <div className="nep-why-left">
          <span className="nep-label">WHY CHOOSE US</span>

          <h2>
            TRUST IS OUR
            <br />
            <em>FOUNDATION.</em>
          </h2>

          <p>
            We don't just show properties. We understand your
            requirement, guide your decision and stay beside you
            throughout your property journey.
          </p>

          <a href="#contact" className="nep-gold-btn">
            START YOUR JOURNEY <span>↗</span>
          </a>
        </div>

        <div className="nep-why-right">

          <div className="nep-why-item">
            <strong>01</strong>
            <div>
              <h3>LOCAL EXPERTISE</h3>
              <p>
                Deep understanding of Noida Extension and
                Greater Noida real estate.
              </p>
            </div>
          </div>

          <div className="nep-why-item">
            <strong>02</strong>
            <div>
              <h3>TRANSPARENT DEALS</h3>
              <p>
                Clear communication and straightforward
                property transactions.
              </p>
            </div>
          </div>

          <div className="nep-why-item">
            <strong>03</strong>
            <div>
              <h3>PERSONALISED SERVICE</h3>
              <p>
                Property recommendations based on your
                exact requirements.
              </p>
            </div>
          </div>

          <div className="nep-why-item">
            <strong>04</strong>
            <div>
              <h3>LONG-TERM RELATIONSHIPS</h3>
              <p>
                Our relationship with clients doesn't end
                after the transaction.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="nep-cta">

        <div className="nep-cta-bg"></div>

        <div className="nep-cta-content">

          <span className="nep-label">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2>
            LET'S FIND YOUR
            <br />
            <em>PERFECT PLACE.</em>
          </h2>

          <p>
            Tell us what you're looking for.
            We'll help you find it.
          </p>

          <a href="#contact" className="nep-gold-btn">
            TALK TO AN EXPERT <span>↗</span>
          </a>

        </div>

      </section>


      {/* CONTACT */}
      <section className="nep-contact" id="contact">

        <div className="nep-contact-heading">
          <span className="nep-label">GET IN TOUCH</span>

          <h2>
            LET'S TALK
            <br />
            <em>PROPERTY.</em>
          </h2>

          <p>
            Have a property requirement?
            Our team is ready to help.
          </p>
        </div>

        {/* <form className="nep-contact-form"> */}
<form
  className="nep-contact-form"
  onSubmit={handleContactSubmit}
>
          <input
  type="text"
  name="name"
  value={contactForm.name}
  onChange={handleContactChange}
  placeholder="Your Name"
  required
/>

<input
  type="tel"
  name="phone"
  value={contactForm.phone}
  onChange={handleContactChange}
  placeholder="Phone Number"
  required
/>

<input
  type="email"
  name="email"
  value={contactForm.email}
  onChange={handleContactChange}
  placeholder="Email Address"
  required
/>

<select
  name="interest"
  value={contactForm.interest}
  onChange={handleContactChange}
  required
>
  <option value="" disabled>
    I am interested in...
  </option>

  <option>Buying Property</option>
  <option>Selling Property</option>
  <option>Renting Property</option>
  <option>Property Consultation</option>
</select>

<textarea
  name="message"
  value={contactForm.message}
  onChange={handleContactChange}
  rows="5"
  placeholder="Tell us about your requirement..."
></textarea>

<button
  type="submit"
  className="nep-gold-btn"
  disabled={contactLoading}
>
  {contactLoading ? "SENDING..." : "SEND ENQUIRY"}
  <span>↗</span>
</button>

        </form>

      </section>


      {/* FOOTER */}
     

    </div>
  );
}

export default Home;