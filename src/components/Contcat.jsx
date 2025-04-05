import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../assets/Contact.css";
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

  const [companies] = useState([
    { id: 1, name: "Ashewa Technology", logo: ashewaLogo },
    { id: 2, name: "Company 2", logo: company2Logo },
    { id: 3, name: "Company 3", logo: company3Logo },
    { id: 4, name: "Company 4", logo: company4Logo },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Form Submitted!");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="title-decorator"></span>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">Have a project in mind? Let's make it happen!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>mulusewwube@gmail.com</p> <br />
                <p>mulusewwube0@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+251 988-54-03-93</p><br />
                <p>+251 712-17-74-04</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="input-group">
                <FaUser className="input-icon" />
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="input-group">
              <textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane className="btn-icon" />
            </button>
          </form>
        </div>

        <div className="company-section">
          <div className="contact-header">
            <span className="title-decorator"></span>
            <h2 className="contact-title">Trusted Partners</h2>
            <p className="contact-subtitle">Companies I collaborate with</p>
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
      </div>
    </section>
  );
}

export default Contact;