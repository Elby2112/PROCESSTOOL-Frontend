import React, { useState } from 'react';
import '../styles/TryFlowmax.css';

const TryFlowmax = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [showFullForm, setShowFullForm] = useState(false);
  const [fullFormData, setFullFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [fullFormSubmitted, setFullFormSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Send download link to:', email);
    handleBasicTrialRequest(email);  // Call the function to send the email for basic trial
    setSubmitted(true);
  };

  const handleFullFormChange = (e) => {
    const { name, value } = e.target;
    setFullFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFullFormSubmit = (e) => {
    e.preventDefault();
    console.log('Full Trial Request:', fullFormData);
    handleFullTrialRequest(fullFormData.company, fullFormData.name, fullFormData.email);  // Call the function for full trial
    setFullFormSubmitted(true);
  };

  //'https://processtool-backend.onrender.com/api/request-basic-trial', 
  // http://127.0.0.1:5000/api/request-basic-trial
  const handleBasicTrialRequest = (email) => {
    fetch('https://processtool-backend.onrender.com/api/request-basic-trial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }), // Send email as JSON
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle success, show message
    })
    .catch((error) => {
      console.error('Error:', error); // Handle errors
    });
  };
//'https://processtool-backend.onrender.com/api/request-full-trial'
  const handleFullTrialRequest = (companyName, userName, email) => {
    fetch('https://processtool-backend.onrender.com/api/request-full-trial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_name: companyName,
        user_name: userName,
        email: email,
      }), // Send form data as JSON
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle success, show message
    })
    .catch((error) => {
      console.error('Error:', error); // Handle errors
    });
  };

  return (
    <div className="try-flowmax-page">
      <div className="try-flowmax-header">
        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Start Your Flowmax Trial</h1>
        <h2 style={{ fontFamily: 'var(--font-body)' }}>
          Choose the trial that suits your needs – quick access or full functionality.
        </h2>
      </div>

      <div className="trial-cards-container">
        {/* Basic Trial Card */}
        <div className="trial-card">
          <h3 style={{ fontFamily: 'var(--font-heading)' }}>Basic Trial – Quick Download</h3>
          <p style={{ fontFamily: 'var(--font-body)' }}>
            Try Flowmax with core features, no installation key or form required.
            Ideal for testing interface layout and basic calculation functions.
          </p>
          <ul style={{ fontFamily: 'var(--font-body)' }}>
            <li>No sign-up</li>
            <li>Fast download</li>
            <li className="unavailable">Limited features</li>
            <li className="unavailable">Limited number of links</li>
          </ul>
          {!showEmailForm && !submitted && (
            <button className="trial-button" onClick={() => setShowEmailForm(true)}>
              Download Free Trial
            </button>
          )}

          {showEmailForm && !submitted && (
            <form className="email-form" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="trial-button">Get Download Link</button>
            </form>
          )}

          {submitted && (
            <p className="thank-you-message">
              ✅ Thank you! A download link has been sent to <strong>{email}</strong>.
            </p>
          )}
        </div>

        {/* Full Trial Card */}
        <div className="trial-card">
          <h3 style={{ fontFamily: 'var(--font-heading)' }}>Request Full Trial</h3>
          <p style={{ fontFamily: 'var(--font-body)' }}>
            Unlock all Flowmax features including pump sizing, transient analysis,
            water systems, and reporting tools. Great for technical evaluations or preparing real projects.
          </p>
          <ul style={{ fontFamily: 'var(--font-body)' }}>
            <li>Full functionality</li>
            <li>Firewater + Transient Analysis modules</li>
            <li>Scenario manager + full reporting</li>
            <li>Priority email support</li>
          </ul>

          {!showFullForm && !fullFormSubmitted && (
            <button className="trial-button" onClick={() => setShowFullForm(true)}>
              Request Full Trial Access
            </button>
          )}

          {showFullForm && !fullFormSubmitted && (
            <form className="full-trial-form" onSubmit={handleFullFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={fullFormData.name}
                onChange={handleFullFormChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={fullFormData.company}
                onChange={handleFullFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={fullFormData.email}
                onChange={handleFullFormChange}
                required
              />
              <textarea
                name="message"
                placeholder="Briefly describe your use case..."
                value={fullFormData.message}
                onChange={handleFullFormChange}
                rows={4}
              />
              <button type="submit" className="trial-button">Submit Request</button>
            </form>
          )}

          {fullFormSubmitted && (
            <p className="thank-you-message">
              ✅ Thank you! Your request has been submitted. We’ll review it and get back to you soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TryFlowmax;
