import React, { useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GalleryVideo = ({ src, label }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }, []);

  return (
    <div
      className="gallery-item-inner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="gallery-overlay">
        <span>{label}</span>
      </div>
    </div>
  );
};

const Gallery = () => {
  useScrollReveal();

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="container">
        <div className="gallery-head reveal">
          <div>
            <h2 className="section-title">Moments that <em>define</em><br className="br-desktop" />our journey.</h2>
          </div>
          <p className="gallery-desc">A glimpse into the brands, events, and partnerships we've helped bring to life.</p>
        </div>

        <div className="gallery-grid reveal-stagger">
          {/* Row 1: tall video left + 2 images right */}
          <div className="gallery-item gallery-item--tall">
            <GalleryVideo src="/gallery/budit-cafe-reel.mp4" label="BudIt Café Reel" />
          </div>
          <div className="gallery-item">
            <img src="/gallery/behind-the-scenes.jpeg" alt="BudIt moments" loading="lazy" />
            <div className="gallery-overlay">
              <span>Behind the Scenes</span>
            </div>
          </div>
          <div className="gallery-item gallery-item--tall">
            <GalleryVideo src="/gallery/cleon-glidex-reel.mp4" label="Cleon GlideX" />
          </div>
          <div className="gallery-item">
            <img src="/gallery/team-moments.jpeg" alt="BudIt team" loading="lazy" />
            <div className="gallery-overlay">
              <span>Team Moments</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/gallery/brand-work.jpeg" alt="Brand work" loading="lazy" />
            <div className="gallery-overlay">
              <span>Brand Work</span>
            </div>
          </div>

          {/* Row 2: 3 tall videos */}
          <div className="gallery-item gallery-item--tall">
            <GalleryVideo src="/gallery/bsl-showcase.mp4" label="BSL Showcase" />
          </div>
          <div className="gallery-item gallery-item--tall">
            <GalleryVideo src="/gallery/dining-table.mp4" label="Dining Table" />
          </div>
          <div className="gallery-item gallery-item--tall">
            <GalleryVideo src="/gallery/roman-blinds-curtain.mp4" label="Roman Blinds" />
          </div>

          {/* Bottom images */}
          <div className="gallery-item">
            <img src="/gallery/jewellery-showcase.png" alt="Heritage Jewellery" loading="lazy" />
            <div className="gallery-overlay">
              <span>Heritage Jewellery</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/gallery/growth-journey.jpeg" alt="Growth journey" loading="lazy" />
            <div className="gallery-overlay">
              <span>Growth Journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
