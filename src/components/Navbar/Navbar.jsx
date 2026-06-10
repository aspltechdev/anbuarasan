import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Anbu Arasan</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;