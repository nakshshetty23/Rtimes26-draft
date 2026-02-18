import React from 'react';
import { Link } from 'react-router-dom';
import './Fee.css';

const Fee = () => {


  const includes = [
    { icon: 'fas fa-chalkboard-teacher', text: 'Access to all technical sessions and keynote presentations' },
    { icon: 'fas fa-book', text: 'Conference kit with proceedings (Soft copy)' },
    { icon: 'fas fa-utensils', text: 'Lunch and refreshments during conference days' },
    { icon: 'fas fa-certificate', text: 'Certificate of participation' },
    { icon: 'fas fa-users', text: 'Networking opportunities with experts' },
    { icon: 'fas fa-door-open', text: 'Access to exhibition area' },
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="page-title">Registration Fees</h1>
          <p className="page-subtitle">Choose your category and register for RTIMES-2026</p>
        </div>
      </section>

      {/* Fee Table Section */}
      <section className="section-white">
        <div className="container-custom">
          <h2 className="section-heading">Fee <span>Structure</span></h2>
          <p className="section-intro">
            The registration fee covers access to all conference sessions, conference materials,
            lunch and refreshments during the conference days, and the conference proceedings.
          </p>

          <div className="fee-table-wrapper">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Registration Category</th>
                  <th>
                    <span className="badge-header">Indian Participants</span>
                    <span className="highlight-text">Early bird *</span>
                    <span className="date-text">On or Before 15/4/2026</span>
                  </th>
                  <th>
                    <span className="badge-header">International Participants</span>
                    <span className="highlight-text">Early bird **</span>
                    <span className="date-text">On or Before 15/4/2026</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Delegates(Without Paper)</td>
                  <td>INR 2000</td>
                  <td>USD 75</td>
                </tr>
                <tr>
                  <td>Faculty Delegates</td>
                  <td>INR 12000</td>
                  <td>USD 135</td>
                </tr>
                <tr>
                  <td>Additional paper(s)</td>
                  <td>INR 10000</td>
                  <td>USD 100</td>
                </tr>
                <tr>
                  <td>Research Scholars</td>
                  <td>INR 11000</td>
                  <td>USD 125</td>
                </tr>
                <tr>
                  <td>Industry Delegates</td>
                  <td>INR 12000</td>
                  <td>USD 135</td>
                </tr>
              </tbody>
            </table>
            <div className="fee-footer-note">
              <p>* INR 500 & ** USD 5 extra after 15/04/2026</p>
            </div>
            <div className="fee-publication-note">
              <p>The registered papers will be submitted for possible inclusion in SCOPUS-indexed conference proceedings. The registration amount also includes the publication charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-light">
        <div className="container-custom">
          <h2 className="section-heading">What's <span>Included</span></h2>
          <div className="includes-grid">
            {includes.map((item, index) => (
              <div key={index} className="include-card">
                <div className="include-icon">
                  <i className={item.icon}></i>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="section-white">
        <div className="container-custom">
          <div className="notes-card">
            <div className="notes-header">
              <i className="fas fa-exclamation-triangle"></i>
              <h4>Important Notes</h4>
            </div>
            <ul className="notes-list">
              <li>Registration fee is non-refundable and non-transferable.</li>
              <li>Authors must complete registration before the final submission deadline.</li>
              <li>One registration covers presentation of up to ONE paper.</li>
              <li>Student registrations must include a valid student ID card copy.</li>
              <li>All fees are inclusive of applicable taxes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment CTA Section */}
      <section className="section-cta-alt">
        <div className="container-custom">
          <div className="payment-cta">
            <div className="cta-info">
              <h3>Ready to Register?</h3>
              <p>View bank details and complete your payment to secure your spot.</p>
            </div>
            <div className="cta-actions">
              <Link to="/bank-details" className="btn-primary-custom">
                <i className="fas fa-university"></i> Bank Details
              </Link>
              <Link to="/contact" className="btn-secondary-custom">
                <i className="fas fa-envelope"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fee;
