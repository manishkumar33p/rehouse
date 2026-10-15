import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroCarousel.css";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95",
    eyebrow: "REHOUSE REALTORS",
    title: "Find a Home",
    highlight: "You Will Love.",
    description:
      "Discover beautifully selected homes, premium residences and property opportunities designed around the way you want to live.",
    category: "LUXURY RESIDENCES",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=95",
    eyebrow: "CURATED PROPERTIES",
    title: "Where Better Living",
    highlight: "Begins.",
    description:
      "Explore distinctive spaces in sought-after locations with professional guidance from your first search to your final decision.",
    category: "PREMIUM HOMES",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=95",
    eyebrow: "PROPERTY INVESTMENT",
    title: "Choose With Clarity.",
    highlight: "Invest With Confidence.",
    description:
      "Make smarter property decisions with personalised consultation, thoughtful comparisons and complete support.",
    category: "SMART INVESTMENT",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2400&q=95",
    eyebrow: "YOUR PROPERTY JOURNEY",
    title: "The Right Address",
    highlight: "Changes Everything.",
    description:
      "From residential homes to commercial opportunities, discover property with a more personal and professional approach.",
    category: "SELECTED PROPERTIES",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  /* ================================
     AUTO ROTATE
  ================================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev === slides.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* ================================
     NEXT
  ================================= */
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  /* ================================
     PREVIOUS
  ================================= */
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[current];

  return (
    <section className="rh-dark-hero">

      {/* BACKGROUND IMAGES */}
      <div className="rh-dark-hero-images">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`rh-dark-slide ${
              index === current ? "active" : ""
            }`}
            style={{
              backgroundImage: `url("${item.image}")`,
            }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="rh-dark-overlay"></div>
      <div className="rh-dark-left-overlay"></div>
      <div className="rh-dark-bottom-overlay"></div>

      {/* TOP BRAND */}
      <div className="rh-dark-topbar">
        <div className="rh-dark-brand">
          REHOUSE REALTORS
        </div>

        <div className="rh-dark-top-right">
          <span>PREMIUM REAL ESTATE</span>
          <span className="rh-top-line"></span>
          <span>01 — 04</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="rh-dark-container">

        <div className="rh-dark-content">

          <div className="rh-dark-eyebrow">
            <span></span>
            {slide.eyebrow}
          </div>

          <h1>
            {slide.title}
            <br />
            <em>{slide.highlight}</em>
          </h1>

          <p>{slide.description}</p>

          <div className="rh-dark-buttons">

            <Link
              to="/properties"
              className="rh-dark-primary-btn"
            >
              Explore Properties
              <span>↗</span>
            </Link>

            <Link
              to="/contact"
              className="rh-dark-outline-btn"
            >
              Talk To An Expert
            </Link>

          </div>

          {/* TRUST ITEMS */}
          <div className="rh-dark-trust">

            <div>
              <strong>01</strong>
              <span>PERSONALISED<br />GUIDANCE</span>
            </div>

            <div>
              <strong>02</strong>
              <span>CURATED<br />PROPERTIES</span>
            </div>

            <div>
              <strong>03</strong>
              <span>COMPLETE<br />SUPPORT</span>
            </div>

          </div>

        </div>

        {/* FEATURE CARD */}
        <div className="rh-dark-feature-card">

          <div
            className="rh-feature-image"
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />

          <div className="rh-feature-content">
            <span>FEATURED COLLECTION</span>

            <h3>{slide.category}</h3>

            <div className="rh-feature-bottom">

              <span>
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>

              <div className="rh-feature-arrows">
                <button onClick={prevSlide}>←</button>
                <button onClick={nextSlide}>→</button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* DOT NAVIGATION */}
      <div className="rh-dark-dots">

        {slides.map((item, index) => (
          <button
            key={item.id}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span></span>
          </button>
        ))}

      </div>

      {/* BOTTOM */}
      <div className="rh-dark-bottom">

        <span>SCROLL TO EXPLORE</span>

        <div className="rh-scroll-line"></div>

        <span>{String(current + 1).padStart(2, "0")}</span>

      </div>

      {/* AUTO PROGRESS */}
      <div className="rh-auto-progress">
        <div
          key={current}
          className="rh-auto-progress-bar"
        ></div>
      </div>

    </section>
  );
}

export default HeroCarousel;