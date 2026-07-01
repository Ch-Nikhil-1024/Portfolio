import React from 'react';
import './Projects.css';
import { FaLaptopMedical, FaBrain, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoCheckmarkCircle } from "react-icons/io5";

const Projects = () => {
  const projects = [
    {
      title: "MediFlow",
      tagline: "AI-powered Pharmacy ERP",
      description: "Automating medicine inventory and procurement using AI Agents. Features intelligent tracking, automated reorder workflows, and interactive operational dashboards.",
      tech: ["React", "Node.js", "Express.js", "Supabase", "AI", "n8n"],
      highlights: [
        "AI Agent Based Automation",
        "Real-Time Dashboard",
        "Inventory Monitoring",
        "Automated Reorder Workflows",
        "Scalable REST API Architecture"
      ],
      github: "https://github.com/Ch-Nikhil-1024/MediFlow",
      demo: "#",
      icon: <FaLaptopMedical />,
      badge: "Featured",
      metrics: {
        category: "ERP System",
        duration: "Full-Stack"
      }
    },
    {
      title: "PathWise",
      tagline: "AI-powered Personalized Career Intelligence",
      description: "Transforms user skills and learning behavior into adaptive growth roadmaps. Generates dynamic educational pathways tailored to individual career goals.",
      tech: ["AI", "Machine Learning", "React", "Node.js", "Python"],
      highlights: [
        "94% Recommendation Accuracy",
        "Behavioral Analysis Models",
        "Dynamic Educational Pathways",
        "Skill Gap Analysis",
        "Personalized Career Insights"
      ],
      github: "https://github.com/Ch-Nikhil-1024/Pathwise",
      demo: "#",
      icon: <FaBrain />,
      badge: "AI Project",
      metrics: {
        category: "SaaS Platform",
        duration: "End-to-End"
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title slide-up">
          Featured <span>Projects</span>
        </h2>
        <div className="projects-grid slide-up delay-1">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-inner">
                {/* Header */}
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    {project.icon}
                  </div>
                  <div className="project-title-wrapper">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>
                  <div className="project-badge">{project.badge}</div>
                </div>

                {/* Metrics */}
                <div className="project-metrics">
                  <span className="metric">{project.metrics.category}</span>
                  <span className="metric-dot">•</span>
                  <span className="metric">{project.metrics.duration}</span>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Highlights */}
                <div className="project-highlights">
                  <h4 className="highlights-title">Key Highlights</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>
                        <IoCheckmarkCircle className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-action">
                    <FaGithub /> View GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-action btn-outline">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
