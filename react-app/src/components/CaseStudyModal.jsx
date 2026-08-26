import React, { useEffect } from 'react';

const CaseStudyModal = ({ activeCaseStudy, onClose }) => {
  useEffect(() => {
    if (activeCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeCaseStudy) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCaseStudy, onClose]);

  if (!activeCaseStudy) return null;

  return (
    <>
      <div className={`cs-overlay ${activeCaseStudy ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`cs-modal ${activeCaseStudy ? 'active' : ''}`} role="dialog" aria-modal="true" aria-labelledby="csModalTitle">
        <button className="cs-close" onClick={onClose} aria-label="Close case study">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="cs-modal-inner">
          <div className="cs-badge">{activeCaseStudy.badge}</div>
          <h2 className="cs-title" dangerouslySetInnerHTML={{ __html: activeCaseStudy.title }}></h2>
          
          <div className="cs-meta">
            {activeCaseStudy.meta.map((m, i) => (
              <div key={i} className="cs-meta-item">
                <span className="cs-meta-label">{m.label}</span>
                <span className="cs-meta-value">{m.value}</span>
              </div>
            ))}
          </div>
          
          <div className="cs-section">
            <h3 className="cs-section-title">The Challenge</h3>
            <p>{activeCaseStudy.challenge.text}</p>
          </div>
          
          <div className="cs-section">
            <h3 className="cs-section-title">Our Approach</h3>
            {activeCaseStudy.approachIntro && <p>{activeCaseStudy.approachIntro}</p>}
            <ul>
              {activeCaseStudy.approach.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {activeCaseStudy.approachSubs && activeCaseStudy.approachSubs.map((sub, i) => (
              <div key={i} style={{marginTop: '1.25rem'}}>
                <h4 style={{fontSize: '1rem', marginBottom: '0.75rem'}}>{sub.title}</h4>
                <ul>
                  {sub.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
            {activeCaseStudy.approachOutro && <p style={{marginTop: '1.25rem'}}>{activeCaseStudy.approachOutro}</p>}
          </div>
          
          <div className="cs-section">
            <h3 className="cs-section-title">The Result</h3>
            <ul>
              {activeCaseStudy.result.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          
          {activeCaseStudy.highlight && (
            <div className="cs-highlight">
              {activeCaseStudy.highlight}
            </div>
          )}
          
          {activeCaseStudy.note && (
            <p className="cs-note" style={{fontSize: '0.85rem', color: 'var(--sage)', marginTop: '2rem', fontStyle: 'italic'}}>{activeCaseStudy.note}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudyModal;
