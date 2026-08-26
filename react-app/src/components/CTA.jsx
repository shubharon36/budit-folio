import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTA = () => {
  useScrollReveal();

  return (
    <section className="cta-section section-pad" id="cta">
      <div className="container">
        <div className="cta-box reveal">

          <h2>Identify what's stopping you.<br className="br-desktop" /><em>Fix what matters.</em> Grow on purpose.</h2>
          <p>Book a comprehensive brand audit with BudIt. We'll uncover the gaps, realign the priorities, and chart a roadmap for sustainable growth — together.</p>
          <div className="cta-actions">
            <a href="https://budit.co.in/" target="_blank" rel="noopener noreferrer" className="btn-gold" id="ctaEmailBtn">
              Book a Brand Audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
