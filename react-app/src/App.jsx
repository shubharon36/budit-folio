import React, { useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import LeadEngine from './components/LeadEngine';
import SuccessStories from './components/SuccessStories';
import Founder from './components/Founder';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = document.getElementById('nav')?.offsetHeight || 0;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <Philosophy />
      <Gallery />
      <LeadEngine />
      <SuccessStories />
      <Founder />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
