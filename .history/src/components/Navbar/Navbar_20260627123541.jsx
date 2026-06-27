import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
       <Link to="/" className="navbar-brand">
  <img src={logo} alt="Anbarasan Logo" className="navbar-logo" />
  <span>Anbarasan</span>
</Link>

        {/* Navigation */}
        <nav className="navbar-nav">
          <ul className="navbar-list">

            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="navbar-link">
                Services
              </Link>
            </li>

            <li>
              <Link to="/products" className="navbar-link">
                Products
              </Link>
            </li>

            {/* Contact goes to Landing Page */}
            <li>
              <a href="/#contact" className="navbar-link">
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* CTA Button */}
        <a href="/#contact" className="navbar-cta">
          Begin Journey
        </a>

      </div>
    </header>
  );
}

export default Navbar;