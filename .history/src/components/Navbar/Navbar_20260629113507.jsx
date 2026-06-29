import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Anbarasan Logo" className="navbar-logo" />
        </Link>

        {/* Hamburger Toggle - mobile only */}
        <button
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`navbar-nav ${isOpen ? "active" : ""}`}>
          <ul className="navbar-list">

            <li>
              <Link to="/" className="navbar-link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="navbar-link" onClick={closeMenu}>
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="navbar-link" onClick={closeMenu}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/products" className="navbar-link" onClick={closeMenu}>
                Products
              </Link>
            </li>

            {/* Contact goes to Landing Page */}
            <li>
              <a href="/#contact" className="navbar-link" onClick={closeMenu}>
                Contact
              </a>
            </li>

          </ul>

          {/* CTA Button - inside nav so it shows/hides with the mobile menu */}
          <a href="/#contact" className="navbar-cta" onClick={closeMenu}>
            Begin Journey
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;