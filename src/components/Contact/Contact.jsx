import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  // Replace this mock function with actual backend API
  const sendMessage = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    try {
      await sendMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // ============================================
  // CHANGE GITHUB PROFILE HERE
  // ============================================
  const githubProfile = "YOUR_GITHUB_PROFILE";

  const contactInfo = [
    {
      type: "Email",
      value: "chnikhil3232@gmail.com",
      link: "mailto:chnikhil3232@gmail.com",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '1em', height: '1em'}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
      type: "Phone",
      value: "+91 7330950337",
      link: "tel:+917330950337",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '1em', height: '1em'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    },
    {
      type: "LinkedIn",
      value: "Ch Nikhil Madhukar",
      link: "https://www.linkedin.com/in/ch-nikhil1024",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '1em', height: '1em'}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      type: "GitHub",
      value: "GitHub Profile",
      link: githubProfile,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '1em', height: '1em'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title slide-up">
          Get In <span>Touch</span>
        </h2>
        <div className="contact-wrapper slide-up delay-1">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-card" key={index}>
                <div className="contact-icon">{info.icon}</div>
                <div>
                  <h4 className="contact-type">{info.type}</h4>
                  <p className="contact-value">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <span style={{color: '#ff4d4d', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block'}}>{errors.name}</span>}
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <span style={{color: '#ff4d4d', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block'}}>{errors.email}</span>}
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                {errors.subject && <span style={{color: '#ff4d4d', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block'}}>{errors.subject}</span>}
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                {errors.message && <span style={{color: '#ff4d4d', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block'}}>{errors.message}</span>}
              </div>

              {status === 'success' && <div style={{color: 'var(--accent-color)', marginBottom: '1rem', textAlign: 'center', fontWeight: '500'}}>Message sent successfully.</div>}
              {status === 'error' && <div style={{color: '#ff4d4d', marginBottom: '1rem', textAlign: 'center', fontWeight: '500'}}>Failed to send message.</div>}

              <button 
                type="submit" 
                className="btn-primary form-submit"
                disabled={status === 'loading'}
                style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'loading' ? 'Loading...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
