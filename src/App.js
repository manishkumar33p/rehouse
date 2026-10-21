import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Property from "./Property/Property";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Services from "./Services/Services"; 
import PostProperty from "./PropertyAdmin/PropertyAdmin";
import Dashboard from "./Dashboard/Dashboard";
import ProjectJourney from "./ProjectJourney/ProjectJourney";
import Loan from "./Loan/Loan";
import About from "./About/About";
import ChatBot from "./Chatbot/Chatbot";
import WhatsAppConnect from "./WhatsAppConnect/WhatsAppConnect";
import ProjectAdmin from "./ProjectAdmin/ProjectAdmin";

function App() {
  return (
    <BrowserRouter>

      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>

        {/* HOME = LANDING PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PROPERTIES */}
        <Route
          path="/properties"
          element={<Property />}
        />

         <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/services"
          element={<Services />}
        />

        
<Route path="/loan" element={<Loan />} />
        <Route path="/our-journey" element={<ProjectJourney />} />
        <Route path="/login" element={<Login />} />

        <Route path="/post-property" element={<PostProperty />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route
  path="/project-admin"
  element={<ProjectAdmin />}
/>
      </Routes>
       <ChatBot />
<Footer/>
<WhatsAppConnect />
    </BrowserRouter>
  );
}

export default App;