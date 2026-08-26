import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Philosophy = () => {
  useScrollReveal();

  const orbitItems = [
    { label: 'Brand Audit', ring: 1 },
    { label: 'Lead Gen', ring: 1 },
    { label: 'Strategy', ring: 2 },
    { label: 'Growth', ring: 2 },
    { label: 'Execution', ring: 3 },
    { label: 'Sustainable', ring: 3 },
  ];

  return (
    <section className="gaas section-pad" id="gaas">
      <div className="container gaas-inner">
        <div className="reveal">

          <h2 className="section-title">Growth <em>as a Service</em>—<br className="br-desktop" />not a one-time spike.</h2>
          <p className="gaas-lead">
            Our goal isn't to inflate numbers for a quarter. It's to build businesses that grow
            organically, generate quality leads consistently, and stay competitive for the long run.
            End-to-end solutions, delivered by in-house experts and a trusted network of specialists
            with over a decade of domain expertise.
          </p>
          <div className="gaas-stats">
            <div className="gaas-stat">
              <div className="n">End-to-End</div>
              <div className="l">Business solutions, one roof</div>
            </div>
            <div className="gaas-stat">
              <div className="n">10+ yrs</div>
              <div className="l">Partner network expertise</div>
            </div>
          </div>
        </div>
        <div className="gaas-visual reveal" id="gaasVisual">
          {/* Orbit ring 1 (inner) */}
          <div className="orbit-ring orbit-ring-1">
            <div className="orbit-planet planet-1"></div>
            <div className="orbit-planet planet-2"></div>
          </div>

          {/* Orbit ring 2 (middle) */}
          <div className="orbit-ring orbit-ring-2">
            <div className="orbit-planet planet-3"></div>
            <div className="orbit-planet planet-4"></div>
          </div>

          {/* Orbit ring 3 (outer) */}
          <div className="orbit-ring orbit-ring-3">
            <div className="orbit-planet planet-5"></div>
            <div className="orbit-planet planet-6"></div>
          </div>

          {/* Core */}
          <div className="gaas-core">
            <div className="t">Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
