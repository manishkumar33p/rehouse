import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {

  const points = [
    {
      icon: "✓",
      title: "Trusted Properties",
      text: "We focus on providing genuine property options."
    },
    {
      icon: "✓",
      title: "Transparent Process",
      text: "Clear communication and straightforward dealing."
    },
    {
      icon: "✓",
      title: "Expert Support",
      text: "Professional guidance throughout your property journey."
    },
    {
      icon: "✓",
      title: "Customer First",
      text: "Your requirements and satisfaction are our priority."
    }
  ];

  return (
    <section className="why-page">

      <div className="why-container">

        <p className="why-label">
          WHY CHOOSE US
        </p>

        <h1>
          Why Customers Choose Us
        </h1>

        <div className="why-grid">

          {points.map((item, index) => (

            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;