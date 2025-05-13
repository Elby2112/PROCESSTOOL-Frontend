import React, { useState, useEffect } from 'react';
import '../styles/GetFlowmax.css';

const GetFlowmax = () => {
  const [selectedEdition, setSelectedEdition] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
  });
  const [includeDynamicMode, setIncludeDynamicMode] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handlePurchaseClick = (edition) => {
    setSelectedEdition(edition);
  };

  const handleCloseModal = () => {
    setSelectedEdition(null);
    setFormData({ name: '', company: '', email: '', country: '' });
    setIncludeDynamicMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleRequestPurchase = async () => {
  const requestPayload = {
    ...formData,
    edition: selectedEdition,
    amount: getTotalPrice(),
    dynamicMode: includeDynamicMode,
  };

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
      }, 100);
    } else {
      setMessage('❌ There was an issue with your request. Please try again.');
      setShowNotification(true);
    }

  } catch (error) {
    setMessage('❌ There was an error submitting your request. Please try again.');
    setShowNotification(true);
    console.error('Error:', error);
  }
};



  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
        setMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const getTotalPrice = () => {
    let basePrice =
      selectedEdition === 'Flowmax Light'
        ? 250000
        : selectedEdition === 'Full Flowmax'
        ? 450000
        : 900000;
    if (includeDynamicMode) basePrice += 100000;
    return basePrice;
  };

  return (
    <div className="get-flowmax-page">
      <div className="get-flowmax-header">
        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Buy Flowmax</h1>
        <h2 style={{ fontFamily: 'var(--font-body)' }}>
          Select the Flowmax edition that best fits your needs.
        </h2>
      </div>

      <div className="flowmax-cards-container">
        {['Flowmax Light', 'Full Flowmax', 'Network License'].map((edition, index) => (
          <div className="flowmax-card" key={index}>
            <h3>{edition}</h3>
            <p>
              {edition === 'Flowmax Light' && 'Ideal for basic usage with essential features.'}
              {edition === 'Full Flowmax' && 'Comprehensive features for professional use.'}
              {edition === 'Network License' && 'Designed for organizations requiring multiple users.'}
            </p>
            <ul>
              <li>All functionalities</li>
              <li>Advanced analytics</li>
              <li className={edition === 'Network License' ? '' : 'unavailable'}>
                Multi-user support
              </li>
            </ul>
            <button className="flowmax-button" onClick={() => handlePurchaseClick(edition)}>
              Purchase
            </button>
          </div>
        ))}
      </div>

      {selectedEdition && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>🧾 Request Flowmax Purchase</h2>
            <p><strong>Edition:</strong> {selectedEdition}</p>
            <form className="purchase-form">
              <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
              <input name="company" type="text" placeholder="Your Company" value={formData.company} onChange={handleInputChange} />
              <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
              <input name="country" type="text" placeholder="Your Country" value={formData.country} onChange={handleInputChange} />
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
                />
                Include Dynamic Modeling Mode (+100,000 DZD)
              </label>
              {showTooltip && (
                <div className="tooltip">
                  Enables time-dependent simulations and transient flow analysis.
                </div>
              )}
            </div>

            <p><strong>Total:</strong> {getTotalPrice().toLocaleString()} DZD</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCloseModal}>Cancel</button>
              <button className="confirm-button" onClick={handleRequestPurchase}>
                Request Purchase
              </button>
            </div>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="notification-toast">
          {message}
        </div>
      )}
    </div>
  );
};

export default GetFlowmax;
