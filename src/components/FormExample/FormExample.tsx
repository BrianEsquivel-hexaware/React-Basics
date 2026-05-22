import { useState } from 'react';
import './FormExample.css';

function FormExample() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message && fullName) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setMessage('');
        setFullName('');
      }, 3000);
    }
  };

  return (
    <div className="form-example">
      <h4>Interactive Form Example</h4>
      <form onSubmit={handleSubmit} className="example-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            rows={4}
          />
        </div>

        <button type="submit" className="submit-btn">
          📤 Submit Form
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          ✅ Form submitted successfully!
          <p className="submitted-data">
            <strong>Name:</strong> {fullName} | <strong>Email:</strong> {email}
          </p>
        </div>
      )}

      <div className="form-state-display">
        <p className="state-info">
          <span className="label">Name:</span>
          <span className="value">{fullName || '(empty)'}</span>
        </p>
        <p className="state-info">
          <span className="label">Email:</span>
          <span className="value">{email || '(empty)'}</span>
        </p>
        <p className="state-info">
          <span className="label">Message Length:</span>
          <span className="value">{message.length} characters</span>
        </p>
      </div>
    </div>
  );
}

export default FormExample;
