import React from 'react';
import './InvitedSpeakers.css';

const InvitedSpeakers = () => {
  const invitedSpeakers = [];

  return (
    <div className="speakers-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="page-title">Invited Speakers</h1>
          <p className="page-subtitle">
            Industry experts and researchers presenting at RTIMES-2026
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section">
        <div className="container-custom">
          <p className="intro-text">
            RTIMES-2026 features distinguished invited speakers from academia and industry who will
            present their cutting-edge research and developments in mechanical engineering sciences.
          </p>

          <div className="speakers-grid invited-grid">
            {invitedSpeakers.map((speaker, index) => (
              <div key={index} className="speaker-card">
                <div className="speaker-image-wrapper">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                  />
                  <div className="speaker-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#" className="social-link"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-info">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-designation">{speaker.designation}</p>
                  <p className="speaker-department">{speaker.department}</p>
                  <p className="speaker-institution">{speaker.institution}</p>
                  <div className="speaker-expertise">
                    {speaker.expertise.map((skill, i) => (
                      <span key={i} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="more-speakers-note">
            <i className="fas fa-info-circle"></i>
            <p>More invited speakers will be announced soon. Stay tuned for updates!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvitedSpeakers;
