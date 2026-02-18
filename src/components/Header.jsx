import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="top-alert-bar">
      <div className="container">
        <div className="alert-content">
          <span className="alert-icon">📢</span>
          <span className="alert-text">
            <strong>Abstract Submission Open!</strong> Last date: 15th February 2026
          </span>
          <a href="/call-for-papers" className="alert-btn">Submit Now</a>
        </div>
      </div>
    </header >
  );
};

export default Header;