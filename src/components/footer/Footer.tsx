import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom mt-5">
      <div className="footer-content">
        <div className="row py-3">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="fw-bold mb-3">
              <img src="src/assets/react.svg" alt="Logo" /> React Basics
            </h4>
            <p className="textInfo">
              Learn how to create modern web <br/> applications with this React Course!
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="fw-bold mb-3">Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Contact</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope"></i>
                <a href="mailto:info@myapp.com" className="footer-link ms-2">
                  info@reactbasics.com
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone"></i>
                <span className="ms-2 textInfo">+1 (555) 123-4567</span>
              </li>
              <li className="mt-3">
                <a href="#/" className="footer-social me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#/" className="footer-social me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#/" className="footer-social me-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#/" className="footer-social">
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="textInfo small mb-0">
              &copy; {currentYear} React Basics. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="textInfo small mb-0">
              Designed with <i className="bi bi-heart-fill text-danger"></i> React + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
