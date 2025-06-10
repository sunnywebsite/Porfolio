import React, { Component } from 'react';
import './footer.css';
import { NavLink } from "react-router-dom";


class Footer extends Component {
  handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We are Here</p>
            <div className="contact-info">
              <p>Email: info@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>

          <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul className='footer-link'>
            <li>
              <NavLink to="/"><button className="footer-link">Home</button></NavLink>
            </li>
            <li>
              <NavLink to="/about"><button className="footer-link">About</button></NavLink>
            </li>
            <li>
              <NavLink to="/service"><button className="footer-link">Services</button></NavLink>
            </li>
            <li>
              <NavLink to="/contact"><button className="footer-link">Contact</button></NavLink>
            </li>
          </ul>
          </div>

          <div className="footer-section social">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/" target='_blank' className="social-icon">Facebook</a>
              <a href="https://www.youtube.com" target='_blank' className="social-icon">Youtube</a>
              <a href="https://www.linkedin.com/" target='_blank' className="social-icon">LinkedIn</a>
              <a href="https://www.instagram.com/accounts/login/" target='_blank' className="social-icon">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;