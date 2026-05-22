import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="error-icon">
          <i className="bi bi-exclamation-circle"></i>
        </div>
        <Link to="/" className="back-button">
          <i className="bi bi-house"></i> Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
