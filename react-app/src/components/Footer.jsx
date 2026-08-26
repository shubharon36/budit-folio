import React from 'react';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/logo-transparent.png" alt="BudIt" className="logo-img" />
            </a>
            <p>A brand consulting and growth management company. We identify what's stopping your business from growing, fix what matters most, and become the partner that builds sustainable success.</p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#founder">Founder</a></li>
              <li><a href="#stories">Success Stories</a></li>
              <li><a href="#cta">Book an Audit</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#skills">Lead Generation</a></li>
              <li><a href="#gaas">Growth as a Service</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:info.budit@gmail.com">info.budit@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/company/budit-co/">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/budit_co">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 BudIt. Growth as a Service.</div>
          <div>Creating clarity · Driving execution · Delivering measurable growth.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
