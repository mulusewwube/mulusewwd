import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../assets/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      <div className="contact-header">
      <span className="title-decorator"></span>
        <h2 className="contact-title">Get in Touch</h2>
        <span className="title-decorator"></span>
        <p className="contact-subtitle">Let's create something amazing together</p>
      </div>

      <div className="contact-container">
        {/* Left Column - Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h3>Call Me</h3>
            <p>+251 988 540 393</p>
            <p>+251 712 177 404</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email Me</h3>
            <p>mulusewwube0@gmail.com</p>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="icon" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="icon" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FaPaperPlane className="icon" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane className="icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;