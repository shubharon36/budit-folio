import React, { useEffect, useRef, useState } from 'react';

const cubeFaces = [
  { label: 'Brand Audit', transform: 'rotateY(0deg)' },
  { label: 'Lead Gen', transform: 'rotateY(90deg)' },
  { label: 'Strategy', transform: 'rotateY(180deg)' },
  { label: 'Execution', transform: 'rotateY(-90deg)' },
  { label: 'Growth', transform: 'rotateX(90deg)' },
  { label: 'Sustainable', transform: 'rotateX(-90deg)' },
];

const WORDS = ['Fueling', 'Business', 'Growth...'];

const Hero = () => {
  const cubeRef = useRef(null);
  const gripRef = useRef(null);
  const [typedChars, setTypedChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  // Total characters including spaces between words
  const fullText = WORDS.join(' ');
  const totalChars = fullText.length;

  // Typewriter effect
  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        i++;
        setTypedChars(i);
        if (i >= totalChars) {
          clearInterval(typeInterval);
          setTypingDone(true);
        }
      }, 70);

      return () => clearInterval(typeInterval);
    }, 3000); // Start after loader finishes

    return () => clearTimeout(startDelay);
  }, [totalChars]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Build the display: figure out which characters have been typed per word
  const getTypedWords = () => {
    let charIndex = 0;
    return WORDS.map((word, wordIdx) => {
      const wordStart = charIndex;
      const wordEnd = charIndex + word.length;
      charIndex = wordEnd + 1; // +1 for space

      const charsTypedInWord = Math.max(0, Math.min(word.length, typedChars - wordStart));
      const typedPart = word.slice(0, charsTypedInWord);
      const isCurrentWord = typedChars >= wordStart && typedChars < wordEnd;
      const isCursorHere = isCurrentWord || (wordIdx === WORDS.length - 1 && typedChars >= wordEnd);

      return { typedPart, isCursorHere, wordIdx };
    });
  };

  const typedWords = getTypedWords();

  useEffect(() => {
    // Hero reveal animations
    const revealTimeout = setTimeout(() => {
      const reveals = document.querySelectorAll('.hero-reveal');
      reveals.forEach((el, index) => {
        setTimeout(() => el.classList.add('in'), index * 150);
      });

      const stats = document.querySelectorAll('.hero-stat .n');
      setTimeout(() => {
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          const duration = 2000;
          const startTime = performance.now();

          const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            stat.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              stat.textContent = target + suffix;
            }
          };
          requestAnimationFrame(update);
        });
      }, 300);
    }, 2800);

    return () => clearTimeout(revealTimeout);
  }, []);

  // Interactive cube logic
  useEffect(() => {
    const cube = cubeRef.current;
    const grip = gripRef.current;
    if (!cube || !grip) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rx = -18;
    let ry = -28;
    let vx = 0;
    let vy = reduced ? 0 : 0.22;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let raf = 0;

    const onDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      grip.setPointerCapture(e.pointerId);
      grip.style.cursor = 'grabbing';
    };

    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      vy = dx * 0.35;
      vx = -dy * 0.35;
      ry += vy;
      rx += vx;
    };

    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      try {
        grip.releasePointerCapture(e.pointerId);
      } catch { /* noop */ }
      grip.style.cursor = 'grab';
    };

    const tick = () => {
      if (!dragging) {
        vy += (0.22 - vy) * 0.02;
        vx += (0 - vx) * 0.05;
        ry += vy;
        rx += vx;
        rx += (Math.sin(Date.now() / 3400) * 14 - rx) * 0.004;
      }
      cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      raf = requestAnimationFrame(tick);
    };

    grip.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      grip.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      {/* 3D Cube Scene */}
      <div className="cube-scene" aria-hidden="true">
        {/* Soft glow */}
        <div className="cube-glow"></div>

        {/* Orbiting ring */}
        <div className="cube-orbit-wrapper">
          <div className="cube-orbit-ring">
            <span className="orbit-dot orbit-dot-top"></span>
            <span className="orbit-dot orbit-dot-bottom"></span>
          </div>
        </div>

        {/* Drag surface */}
        <div ref={gripRef} className="cube-grip">
          <div ref={cubeRef} className="cube-3d">
            {cubeFaces.map((face) => (
              <div
                key={face.label}
                className="cube-face"
                style={{ transform: `${face.transform} translateZ(var(--half))` }}
              >
                <span>{face.label}</span>
              </div>
            ))}
          </div>

          <span className="cube-drag-hint">Drag to explore</span>

          {/* Floor reflection */}
          <div className="cube-reflection"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-typewriter">
            {typedWords.map(({ typedPart, isCursorHere, wordIdx }) => (
              <span className="hero-line" key={wordIdx}>
                <span className={wordIdx === 2 ? 'accent' : wordIdx === 0 ? '' : 'hero-italic'}>
                  {typedPart}
                </span>
                {isCursorHere && (
                  <span className={`typewriter-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
                )}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="hero-meta">
        <div className="container hero-meta-inner">
          <div className="hero-stat hero-reveal">
            <span className="n" data-count="2024">0</span>
            <span className="l">Founded</span>
          </div>
          <div className="hero-stat hero-reveal">
            <span className="n" data-count="13">0</span>
            <span className="l">Consultation cycles</span>
          </div>
          <div className="hero-stat hero-reveal">
            <span className="n" data-count="20" data-suffix="+">0</span>
            <span className="l">Brands grown</span>
          </div>
          <div className="scroll-hint hero-reveal">
            Scroll <span className="line"></span>
          </div>
        </div>

        <div className="hero-mobile-cta">
          <a href="#cta" className="btn-primary">
            Book a Brand Audit →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
