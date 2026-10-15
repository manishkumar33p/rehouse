import React from "react";
import "./WhatsAppConnect.css";

function WhatsAppConnect() {
  // Country code ke saath number, + mat lagana
  const whatsappNumber = "919911924138";

  const message =
    "Hello Rehouse Realtors, I would like to know more about your property services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-connect"
      aria-label="Connect with Rehouse Realtors on WhatsApp"
    >
      <div className="whatsapp-icon">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.04 2.003A13.91 13.91 0 0 0 4.12 23.09L2 30l7.08-2.07A13.96 13.96 0 1 0 16.04 2.003Zm0 25.46a11.53 11.53 0 0 1-5.88-1.61l-.42-.25-4.2 1.23 1.26-4.09-.27-.42a11.55 11.55 0 1 1 9.51 5.14Zm6.34-8.65c-.35-.18-2.06-1.02-2.38-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.73-1.03-.92-1.73-2.06-1.93-2.41-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.89-1.07-2.59-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.91s1.25 3.38 1.42 3.61c.18.23 2.46 3.76 5.96 5.27.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.06-.84 2.35-1.66.29-.81.29-1.51.2-1.66-.08-.14-.31-.23-.66-.4Z"
          />
        </svg>
      </div>

      <div className="whatsapp-text">
        <span>LET'S CONNECT</span>
        <strong>WhatsApp Us</strong>
      </div>
    </a>
  );
}

export default WhatsAppConnect;