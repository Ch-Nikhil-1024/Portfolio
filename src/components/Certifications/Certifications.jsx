import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '1em', height: '1em'}}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    },
    {
      title: "Track Runner-Up",
      issuer: "Summer SaaS Hackathon",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '1em', height: '1em'}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title slide-up">
          Licenses & <span>Certifications</span>
        </h2>
        <div className="cert-grid slide-up delay-1">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <div className="cert-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
