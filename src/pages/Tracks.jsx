import React from 'react';
import './Tracks.css';

const Tracks = () => {
  const tracks = [
    {
      num: 1,
      title: 'Advanced Manufacturing and Materials',
      icon: 'fas fa-cogs',
      topics: [
        'Additive Manufacturing and 3D Printing',
        'Smart Materials and Shape Memory Alloys',
        'Industry 4.0, Digital Twin Technology and operations management system',
        'Sustainable and Green Manufacturing'
      ]
    },
    {
      num: 2,
      title: 'Aerospace and Aeronautical Innovations',
      icon: 'fas fa-plane',
      topics: [
        'Next-Gen Aircraft Propulsion Systems',
        'Hypersonic and Supersonic Technologies',
        'UAVs and Autonomous Flight Systems',
        'Space Exploration Technologies'
      ]
    },
    {
      num: 3,
      title: 'Automotive Engineering and Smart Mobility',
      icon: 'fas fa-car',
      topics: [
        'Electric and Hybrid Vehicle Technologies',
        'Hydrogen and Alternative Fuel Vehicles',
        'Autonomous and Connected Vehicles',
        'AI and IoT in Automotive Systems, sensors and Automotive safety systems'
      ]
    },
    {
      num: 4,
      title: 'Marine and Offshore Engineering',
      icon: 'fas fa-ship',
      topics: [
        'Green Shipping and Alternative Fuels for Ships',
        'Autonomous Ships and Maritime AI',
        'Advanced Ship Propulsion and Hydrodynamics',
        'Corrosion Prevention and Marine Coatings'
      ]
    },
    {
      num: 5,
      title: 'Thermal and Fluid Sciences',
      icon: 'fas fa-fire',
      topics: [
        'Advanced Heat Transfer and Cooling Techniques',
        'Computational Fluid Dynamics (CFD) and AI Applications',
        'Hydrogen Energy and Fuel Cell Technologies',
        'Microfluidics and Nanofluidics'
      ]
    },
    {
      num: 6,
      title: 'Robotics and Automation',
      icon: 'fas fa-robot',
      topics: [
        'Humanoid Robots and AI in Robotics, Mechatronics systems',
        'Collaborative Robots (Cobots) in Manufacturing',
        'Soft Robotics and Bio-Inspired Mechanisms',
        'Autonomous Systems in Defense and Aerospace'
      ]
    },
    {
      num: 7,
      title: 'Renewable Energy and Sustainability',
      icon: 'fas fa-leaf',
      topics: [
        'Solar, Wind, and Geothermal Energy Advances',
        'Energy Harvesting and Storage Technologies',
        'Carbon Capture and Sustainable Engineering Solutions',
        'AI and IoT in Energy Management'
      ]
    },
    {
      num: 8,
      title: 'Computational and AI-Driven Engineering',
      icon: 'fas fa-microchip',
      topics: [
        'AI, ML, and Big Data Analytics in Mechanical Engineering',
        'Digital Twin and Virtual Prototyping',
        'Optimization Techniques in Mechanical Design',
        'Quantum Computing in Mechanical Systems'
      ]
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="page-title">Conference Tracks</h1>
          <p className="page-subtitle">
            Explore the research areas covered at RTIMES-2026
          </p>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="section-white">
        <div className="container-custom">
          <p className="intro-text">
            RTIMES-2026 welcomes research contributions in the following tracks. Authors are
            encouraged to submit papers that align with one or more of these themes.
          </p>

          <div className="tracks-list">
            {tracks.map((track) => (
              <div key={track.num} className="track-item-card">
                <div className="track-header">
                  <div className="track-icon">
                    <i className={track.icon}></i>
                  </div>
                  <div className="track-title-section">
                    <span className="track-label">Track {track.num}</span>
                    <h3 className="track-name">{track.title}</h3>
                  </div>
                </div>
                <div className="track-content">
                  <ul className="track-topics">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="track-topic-item">
                        <i className="fas fa-thumbtack"></i>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="info-note">
            <i className="fas fa-info-circle"></i>
            <p>
              Papers addressing interdisciplinary topics spanning multiple tracks are also welcome.
              Authors should indicate the primary track during submission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tracks;
