import React, { useState, useEffect } from 'react';
import '../styles/GetFlowmax.css'; // your custom CSS

const GetFlowmax = () => {
  const [selectedEdition, setSelectedEdition] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
  });
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [includeDynamicMode, setIncludeDynamicMode] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // track submission state

  const editionNames = ['Flowmax Light', 'Single User License', 'Network License'];

  const handlePurchaseClick = (edition) => {
    setSelectedEdition(edition);
  };

  const handleCloseModal = () => {
    if (isSubmitting) return; // prevent closing while submitting
    setSelectedEdition(null);
    setFormData({ name: '', company: '', email: '', country: '' });
    setPhone('');
    setQuantity(1);
    setIncludeDynamicMode(false);
    setMessage('');
    setShowNotification(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRequestPurchase = async () => {
    if (isSubmitting) return; // prevent multiple submits

    if (!formData.name.trim()) {
      setMessage('❌ Please enter your name.');
      setShowNotification(true);
      return;
    }
    if (!formData.company.trim()) {
      setMessage('❌ Please enter your company name.');
      setShowNotification(true);
      return;
    }
    if (!isValidEmail(formData.email)) {
      setMessage('❌ Please enter a valid business email.');
      setShowNotification(true);
      return;
    }
    if (!phone || phone.length < 6) {
      setMessage('❌ Please enter a valid phone number.');
      setShowNotification(true);
      return;
    }
    if (!formData.country.trim) {
      setMessage('❌ Please select your country.');
      setShowNotification(true);
      return;
    }

    setIsSubmitting(true);
    setMessage('⏳ Sending your request...');
    setShowNotification(true);

    const requestPayload = {
      ...formData,
      phone,
      edition: selectedEdition,
      amount: quantity,
      dynamic: includeDynamicMode,
    };
    //http://127.0.0.1:5000/api/request-quotation
    //https://processtool-backend.onrender.com/api/request-quotation
    try {
      const response = await fetch('https://processtool-backend.onrender.com/api/request-quotation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      const data = await response.json();

      if (response.ok) {
        handleCloseModal();
        setTimeout(() => {
          setMessage('✅ Your purchase request has been submitted. We will contact you soon.');
          setShowNotification(true);
          setIsSubmitting(false);
        }, 100);
      } else {
        setMessage(`❌ Request failed: ${data.message || 'Please try again.'}`);
        setShowNotification(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      setMessage('❌ There was an error submitting your request. Please check your connection and try again.');
      setShowNotification(true);
      setIsSubmitting(false);
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
        setMessage('');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="get-flowmax-page">
      <div className="get-flowmax-header">
        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Buy Flowmax</h1>
        <h2 style={{ fontFamily: 'var(--font-body)' }}>
          Select the Flowmax edition that best fits your needs.
        </h2>
      </div>

      <div className="flowmax-cards-container">
        {editionNames.map((edition, index) => (
          <div className="flowmax-card" key={index}>
            <h3>{edition}</h3>
            <p>
              {edition === 'Flowmax Light' && 'Ideal for basic usage with essential features.'}
              {edition === 'Single User License' && 'Comprehensive features for professional use.'}
              {edition === 'Network License' && 'Designed for multi-user organizations.'}
            </p>
            <ul>
              <li>All functionalities</li>
              <li>Advanced analytics</li>
              {edition === 'Flowmax Light' && <li className='unavailable'>Limited number of pipes</li>}
              {edition === 'Single User License' && <li>Unlimited number of pipes</li>}
              {edition === 'Network License' && (
                <>
                  <li>Unlimited number of pipes</li>
                  <li>Multi-user support</li>
                </>
              )}
              {edition !== 'Network License' && <li className="unavailable">Multi-user support</li>}
            </ul>
            <button
              className="flowmax-button"
              onClick={() => handlePurchaseClick(edition)}
              disabled={isSubmitting}
            >
              Request Quote
            </button>
          </div>
        ))}
      </div>

      {selectedEdition && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>🧾 Request Flowmax Purchase</h2>
            <p><strong>License Type:</strong> {selectedEdition}</p>
            <form className="purchase-form" onSubmit={(e) => e.preventDefault()}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <input
                name="company"
                type="text"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <input
                name="email"
                type="email"
                placeholder="Your Business Email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <input
                name="country"
                type="text"
                placeholder="Your Country"
                value={formData.country}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
             <input
  name="phone"
  type="tel"
  placeholder="Your Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  disabled={isSubmitting}
/>


              <div className="license-quantity">
                <label>License Quantity:</label>
                <div className="quantity-selector">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={isSubmitting}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={isSubmitting}
                  >
                    +
                  </button>
                </div>
              </div>
            </form>

            <div
              className="dynamic-option"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <label>
                <input
                  type="checkbox"
                  checked={includeDynamicMode}
                  onChange={() => setIncludeDynamicMode(!includeDynamicMode)}
                  disabled={isSubmitting}
                />
                Include Dynamic Modeling Mode 
              </label>
              {showTooltip && (
                <div className="tooltip">
                  Enables time-dependent simulations and transient flow analysis.
                </div>
              )}
            </div>

            <div className="modal-buttons">
              <button
                className="cancel-button"
                onClick={handleCloseModal}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                className="confirm-button"
                onClick={handleRequestPurchase}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request Quote'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="notification-toast" role="alert" aria-live="assertive">
          {message}
        </div>
      )}
    </div>
  );
};

export default GetFlowmax;
