import React from "react";
import "../assets/Footer.css"; // Reusing the same CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Mulusew | Designed with 💙 by{" "}
        <a href="https://www.linkedin.com/in/mulusew-wube-5b561624a/" target="_blank" rel="noopener noreferrer">
          Mulusew Wube
        </a>
      </p>
    </footer>
  );
};

export default Footer;
