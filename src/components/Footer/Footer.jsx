import React from 'react';
import './Footer.css';

const Footer = () => {
  // ============================================
  // CHANGE SOCIAL LINKS HERE
  // ============================================
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/ch-nikhil1024",
    github: "YOUR_GITHUB_PROFILE",
    email: "mailto:chnikhil3232@gmail.com"
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Ch Nikhil<span>.</span>
          </div>
          
          <div className="footer-socials">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              GitHub
            </a>
            <a href={socialLinks.email} target="_blank" rel="noopener noreferrer" className="social-icon">
              Email
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Ch Nikhil Madhukar. All rights reserved.</p>
          <p className="built-with">Built with <span className="react-text">React</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
