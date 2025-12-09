import { useLayoutEffect, useRef, useState, useEffect } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-auto min-h-[360px] my-4 p-6 rounded-[28px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = ''
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Set up cards references
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    // Hide all cards except the first one initially
    cards.forEach((card, index) => {
      card.style.position = 'absolute';
      card.style.top = '0';
      card.style.left = index === 0 ? '0' : '100%';
      card.style.width = '100%';
      card.style.transition = 'left 0.5s ease-in-out';
    });

    return () => {
      cardsRef.current = [];
    };
  }, []);

  // Auto-advance cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Move current card to the left
      if (cardsRef.current[currentIndex]) {
        cardsRef.current[currentIndex].style.left = '-100%';
      }
      
      // Calculate next index
      const nextIndex = (currentIndex + 1) % cardsRef.current.length;
      
      // Position next card to the right
      if (cardsRef.current[nextIndex]) {
        cardsRef.current[nextIndex].style.left = '100%';
      }
      
      // After transition, reset positions
      setTimeout(() => {
        // Reset previous card
        if (cardsRef.current[currentIndex]) {
          cardsRef.current[currentIndex].style.left = '100%';
        }
        
        // Move next card to center
        if (cardsRef.current[nextIndex]) {
          cardsRef.current[nextIndex].style.left = '0';
        }
        
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const containerClassName = `relative w-full h-[460px] overflow-hidden ${className}`.trim();

  return (
    <div className={containerClassName} ref={containerRef}>
      <div className="relative w-full h-full">
        {children}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {cardsRef.current.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;