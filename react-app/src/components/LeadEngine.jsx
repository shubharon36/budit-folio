import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LeadEngine = () => {
  useScrollReveal();

  return (
    <section className="skills section-pad" id="skills">
      <div className="container">
        <div className="skills-head reveal">
          <div>

            <h2 className="section-title">We deliver <em>revenue</em>,<br className="br-desktop" />not just leads.</h2>
          </div>
          <p className="desc">
            A precision-driven, end-to-end execution engine. We reach decision-makers,
            protect your calendar with high-intent prospects, and scale outreach in step with
            your revenue goals.
          </p>
        </div>

        <div className="skills-grid reveal-stagger">
          <div className="skill-card" id="skill01">
            <div>
              <div className="skill-num">01</div>
              <h4>Revenue Engine</h4>
              <p className="skill-desc">Precision-driven, end-to-end execution built to deliver revenue — not vanity metrics.</p>
            </div>
          </div>
          <div className="skill-card" id="skill02">
            <div>
              <div className="skill-num">02</div>
              <h4>Decision Access</h4>
              <p className="skill-desc">We reach decision-makers through LinkedIn and a high-authority partner network.</p>
            </div>
          </div>
          <div className="skill-card" id="skill03">
            <div>
              <div className="skill-num">03</div>
              <h4>High Intent</h4>
              <p className="skill-desc">We focus only on conversion-ready prospects, protecting your calendar from noise.</p>
            </div>
          </div>
          <div className="skill-card" id="skill04">
            <div>
              <div className="skill-num">04</div>
              <h4>Pipeline Visibility</h4>
              <p className="skill-desc">Clear reporting and transparency across every stage of the funnel, always.</p>
            </div>
          </div>
          <div className="skill-card" id="skill05">
            <div>
              <div className="skill-num">05</div>
              <h4>Scalable Outreach</h4>
              <p className="skill-desc">Continuous tracking and outreach systems designed to grow with your revenue goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadEngine;
