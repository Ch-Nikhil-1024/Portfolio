import React, { useEffect, useState } from 'react';
import './Hero.css';
import profileImage from '../../assets/profile.png';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Full-Stack Developer", "AI Applications Developer", "ML Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Nikhil_Chennuru_Resume.pdf";
    link.click();
  };

  // Find the longest title to ensure the container width remains fixed and prevents CLS
  const longestTitle = titles.reduce((a, b) => a.length > b.length ? a : b, "");


  return (
    <section id="home" className="hero-section">
      <div className="hero-content container">
        <div className="hero-text fade-in">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Ch Nikhil Madhukar</h1>
          <div className="title-wrapper">
            <h2 className="title">

              <span className="dynamic-text-container">
                {/* Invisible placeholder to reserve exact space */}
                <span className="placeholder-text">{longestTitle}</span>

                {/* Actual animated text */}
                <span className="dynamic-text" key={titleIndex}>
                  {titles[titleIndex]}
                </span>
              </span>
            </h2>
          </div>
          <p className="intro">
            Computer Science undergraduate specializing in Full-Stack Development, Backend Engineering, and AI-powered applications. Passionate about Agentic AI, workflow automation, and intelligent software systems.
          </p>
          <div className="hero-buttons slide-up delay-1">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn-secondary" onClick={handleDownload}>
              Download Resume
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper slide-up delay-2">
          <div className="hero-image-container">
            <img src={profileImage} alt="Nikhil Chennuru Profile" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
