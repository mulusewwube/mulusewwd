import React, { useState, useEffect } from "react";
import "../assets/AboutMe.css";
import { FaGraduationCap, FaCode, FaBriefcase, FaLaptopCode, FaStar } from "react-icons/fa";
import myImage from "../assets/images/my-photo.jpg";

function AboutMe() {
  const timelineItems = [
    { 
      year: "2025-Present",
      description: "Full-time ERP Implementer at Ashewa Technology Solutions", 
      icon: <FaBriefcase />
    },
    { 
      year: "2024", 
      description: "Earned a Bachelor's degree in Computer Science", 
      icon: <FaGraduationCap />
    },
    { 
      year: "2023", 
      description: "Certified Web Developer from Udemy", 
      icon: <FaLaptopCode />
    },
    { 
      year: "2022", 
      description: "ERP System Specialist Certification", 
      icon: <FaStar />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [timelineItems.length]);

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="about-me" id="about">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span>Mulusew Wube</span>
          </h1>
          <p className="hero-subtitle">ERP Implementer | Web Developer | Tech Solutions Specialist</p>
          <button className="cta-button" onClick={openResume}>View Resume</button>
        </div>
        <img src={myImage} alt="Profile" className="hero-image" />
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">Professional Profile</h2>
        <p className="about-text">
          As a certified ERP Implementer and full-stack developer, I bridge the gap between business processes and technology solutions. At Ashewa Technology, I lead successful ERP implementations while developing custom web solutions that enhance system capabilities and user experience.
        </p>
      </div>

      <div className="content-container">
        {/* Timeline Section */}
        <div className="timeline-section">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div
                className={`timeline-item ${index === currentIndex ? "active" : ""}`}
                key={index}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="timeline-icon">{item.icon}</div>
                <span className="timeline-year">{item.year}</span>
                <p className="timeline-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;