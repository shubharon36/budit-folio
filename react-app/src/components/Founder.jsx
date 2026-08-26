import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Founder = () => {
  useScrollReveal();

  return (
    <section className="founder section-pad" id="founder">
      <div className="container founder-inner">
        <div className="founder-img reveal">
          <div className="founder-monogram">SD</div>
          <span className="tag">Founder</span>
        </div>
        <div className="reveal">

          <p className="founder-quote">
            I started BudIt in 2025 with a simple belief: building a business shouldn't feel
            like <em>constant chaos.</em> BudIt brings structure, clarity, and ease to vision-driven
            founders — helping them move from survival mode to intentional, scalable growth.
          </p>
          <div className="founder-name">Shivani Diwakar</div>
          <div className="founder-role">Founder, BudIt</div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
