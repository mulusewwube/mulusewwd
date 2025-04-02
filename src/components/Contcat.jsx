import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../assets/Contact.css";
// Import company logos (make sure to add these images to your assets)
import ashewaLogo from "../assets/images/ashewa-logo.png"; 
import company2Logo from "../assets/images/bridge.jpeg";
import company3Logo from "../assets/images/geregera.png";
import company4Logo from "../assets/images/union.jpg";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Add companies data
  const [companies] = useState([
    { id: 1, name: "Ashewa Technology", logo: ashewaLogo },
    { id: 2, name: "Company 2", logo: company2Logo },
    { id: 3, name: "Company 3", logo: company3Logo },
    { id: 4, name: "Company 4", logo: company4Logo },
  ]);

  // Keep existing functions unchanged
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Form Submitted!");
  };

  return (
    <section className="contact" id="contact">
      {/* Existing contact content... */}

      {/* Add this new companies section at the end */}
      <div className="company-section">
        <div className="contact-header">
          <span className="title-decorator"></span>
          <h2 className="contact-title">Companies I Work With</h2>
          <p className="contact-subtitle">Proud collaborators and partners</p>
        </div>
        
        <div className="company-logos">
          {companies.map((company) => (
            <div key={company.id} className="company-logo-container">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;