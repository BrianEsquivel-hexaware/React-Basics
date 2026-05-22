import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/section1', label: 'Section 1' },
    { path: '/section2', label: 'Section 2' },
    { path: '/section3', label: 'Section 3' },
    { path: '/section4', label: 'Section 4' },
    { path: '/section5', label: 'Section 5' },
    { path: '/section6', label: 'Section 6' },
    { path: '/section7', label: 'Section 7' },
    { path: '/section8', label: 'Section 8' },
    { path: '/section9', label: 'Section 9' },
    { path: '/section10', label: 'Section 10' }
  ];

  const handleClose = () => setExpanded(false);

  return (
    <>
      {/* Navbar */}
      <header className="navbar-custom shadow-sm sticky-top">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <img src="src/assets/react.svg" alt="Logo" /> 
            <h3 className="navbar-title">React Basics</h3>
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${expanded ? 'active' : ''}`}>
        <nav className="menu-links">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="menu-link"
              onClick={handleClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {expanded && <div className="menu-overlay" onClick={handleClose}></div>}
    </>
  );
}

export default Header;
