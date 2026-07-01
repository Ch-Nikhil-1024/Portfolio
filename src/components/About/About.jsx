import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title slide-up">
          About <span>Me</span>
        </h2>
        <div className="about-content slide-up delay-1">
          <div className="about-card">
            <div className="about-card-inner">
              <p>
                Computer Science undergraduate specializing in Full-Stack Development, Backend Engineering, and AI-powered applications. Proficient in JavaScript, React, Node.js, Express.js, PostgreSQL, MongoDb and Supabase with hands-on experience building scalable web applications, secure REST APIs, authentication systems, and database-driven solutions.
              </p>
              <p>
                Strong interest in Agentic AI, workflow automation, and intelligent software systems, with practical experience developing AI-assisted platforms that integrate LLMs, automation tools, and modern backend architectures.
              </p>
              <p>
                Adept at rapidly learning new technologies, solving complex engineering problems, and delivering production-oriented solutions through structured development practices. Committed to building reliable, high-performance software that creates measurable real-world impact.
              </p>
            </div>
            {/* Decorative Elements */}
            <div className="card-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
