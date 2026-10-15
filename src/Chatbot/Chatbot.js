import React, { useState } from "react";
import "./Chatbot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "919911924138";

  const sendToWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOption = (option) => {
    if (option === "services") {
      sendToWhatsApp(
        "Hello NISS Technologies, I want to know about your available services."
      );
    }

    if (option === "booking") {
      sendToWhatsApp(
        "Hello NISS Technologies, I want to book a service. Please contact me."
      );
    }

    if (option === "consultation") {
      window.dispatchEvent(
        new Event("open-consultant-popup")
      );
      setOpen(false);
    }

    if (option === "contact") {
      sendToWhatsApp(
        "Hello NISS Technologies, I want to contact your team."
      );
    }
  };

  return (
    <div className="niss-chatbot-wrapper">

      {/* CHAT WINDOW */}

      {open && (
        <div className="niss-chatbot-box">

          <div className="niss-chatbot-header">

            <div className="niss-chatbot-header-info">

              <div className="niss-chatbot-avatar">
                🤖
              </div>

              <div>
                <h3>Rehouse Realtor Assistant</h3>
                <span>
                  ● Online
                </span>
              </div>

            </div>

            <button
              className="niss-chatbot-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

          </div>


          {/* CHAT BODY */}

          <div className="niss-chatbot-body">

            <div className="niss-bot-message">

              👋 Hello!

              <br />

              Welcome to <strong>Rehouse Realtor</strong>.

              <br />

              How can we help you today?

            </div>


            <div className="niss-chatbot-options">

              <button
                onClick={() =>
                  handleOption("services")
                }
              >
                🔧 Our Services
              </button>

              <button
                onClick={() =>
                  handleOption("booking")
                }
              >
                📅 Book a Service
              </button>

              <button
                onClick={() =>
                  handleOption("consultation")
                }
              >
                💼 Free Consultation
              </button>

              <button
                onClick={() =>
                  handleOption("contact")
                }
              >
                📞 Contact Us
              </button>

            </div>


            <div className="niss-whatsapp-chat">

              <p>
                Need instant help?
              </p>

              <button
                onClick={() =>
                  sendToWhatsApp(
                    "Hello NISS Technologies, I need assistance."
                  )
                }
              >
                💬 Chat on WhatsApp
              </button>

            </div>

          </div>


          <div className="niss-chatbot-footer">
          Rehouse Realtor Assistant - Powered by NISS Technologies
          </div>

        </div>
      )}


      {/* FLOATING BUTTON */}

      <button
        className={`niss-chatbot-button ${
          open ? "active" : ""
        }`}
        onClick={() => setOpen(!open)}
        aria-label="Open NISS Chatbot"
      >

        {open ? (
          "×"
        ) : (
          <>
            🤖
            <span className="niss-chatbot-notification">
              1
            </span>
          </>
        )}

      </button>

    </div>
  );
};

export default ChatBot;