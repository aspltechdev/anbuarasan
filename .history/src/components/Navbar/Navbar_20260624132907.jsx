import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-brand">
          <span>Anbu Arasan</span>
        </Link>

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

            <li>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className="navbar-cta">
          Begin Journey
        </Link>
      </div>
    </header>
  );
}

export default Navbar;