import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [rainWords, setRainWords] = useState([]);

  useEffect(() => {
    const words = ['growth', 'sales', 'leads', 'collab', 'vendors', 'marketing', 'brands', 'consultation'];
    
    document.body.style.overflow = 'hidden';

    const createRainWord = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const word = words[Math.floor(Math.random() * words.length)];
      const left = Math.random() * 95 + 'vw';
      const duration = Math.random() * 1.5 + 1.5;

      setRainWords(prev => [...prev, { id, word, left, duration }]);

      setTimeout(() => {
        setRainWords(prev => prev.filter(w => w.id !== id));
      }, duration * 1000);
    };

    // Initial burst
    for (let i = 0; i < 20; i++) {
      setTimeout(createRainWord, Math.random() * 1200);
    }

    const rainInterval = setInterval(() => {
      createRainWord();
      createRainWord();
    }, 120);

    setTimeout(() => {
      clearInterval(rainInterval);
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 2800);

    return () => {
      clearInterval(rainInterval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="word-rain-loader" id="wordRainLoader">
      <div className="word-rain-container" id="wordRainContainer">
        {rainWords.map(({ id, word, left, duration }) => (
          <div
            key={id}
            className="rain-word"
            style={{ left, animationDuration: `${duration}s` }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
