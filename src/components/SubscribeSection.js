import React, { useState } from 'react';
import '../styles/SubscribeSection.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (API call, validation, etc.)
    console.log('Subscribed with email:', email);
    setEmail(''); // clear input after submit
  };

  return (
    <section className="subscribe-section">
      <h2 className="subscribe-title">Stay Updated</h2>
      <p className="subscribe-subtitle">Subscribe to receive our latest news and insights directly to your inbox.</p>

      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default SubscribeSection;
