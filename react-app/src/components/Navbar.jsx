import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <nav id="nav" role="navigation" aria-label="Main navigation" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#" className="logo" id="logo">
          <img src="/logo-transparent.png" alt="BudIt" className="logo-img" />
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <a href="#gaas" onClick={() => setMenuOpen(false)}>Growth as a Service</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#founder" onClick={() => setMenuOpen(false)}>Founder</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Lead Engine</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Work</a>
        </div>
        <a href="#cta" className="nav-cta" id="navCtaBtn">
          Book a Brand Audit
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          id="menuToggle" 
          aria-label="Open menu" 
          aria-expanded={menuOpen} 
          aria-controls="navLinks"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
