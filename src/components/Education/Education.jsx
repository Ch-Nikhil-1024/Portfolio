import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Vardhaman College of Engineering, Hyderabad, India",
      score: "",
      duration: "2024 - 2028"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title slide-up">
          My <span>Education</span>
        </h2>
        <div className="timeline slide-up delay-1">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <div className="edu-details">
                  <span className="score">{edu.score}</span>
                  <span className="duration">{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
