import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../assets/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`portfolio-header ${showHeader ? "visible" : "hidden"} ${isDarkTheme ? "dark" : ""}`}>
      <div className="container">
        <div className="logo">
          <h1>
            <a href="/">M<span>ulusew</span></a>
          </h1>
        </div>

        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          </button>

          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        <nav className={`navigation ${isOpen ? "open" : ""}`}>
          <ul>
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  <span>0{item}</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
