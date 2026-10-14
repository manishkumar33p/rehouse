import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_am56njy";
const TEMPLATE_ID = "template_poq5rdz";
const PUBLIC_KEY = "ghYI2GrS94WEOOYmI";

const WHATSAPP_NUMBER = "919871478730";

export async function sendEnquiry({
  name,
  phone,
  email,
  interest,
  message,
}) {
  const enquiry = {
    id: Date.now(),
    name,
    phone,
    email,
    interest,
    message,
    date: new Date().toLocaleString("en-IN"),
  };

  // Dashboard ke liye save
  const oldEnquiries =
    JSON.parse(localStorage.getItem("propertyEnquiries")) || [];

  localStorage.setItem(
    "propertyEnquiries",
    JSON.stringify([enquiry, ...oldEnquiries])
  );

  // EmailJS
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name,
      phone,
      email,
      interest,
      message,
    },
    {
      publicKey: PUBLIC_KEY,
    }
  );

  // WhatsApp message
  const whatsappMessage = `🏠 NEW PROPERTY ENQUIRY

Name: ${name}
Phone: ${phone}
Email: ${email}

Interested In:
${interest}

Message:
${message}

Source:
Noida Extension Property Website`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`,
    "_blank"
  );

  return enquiry;
}