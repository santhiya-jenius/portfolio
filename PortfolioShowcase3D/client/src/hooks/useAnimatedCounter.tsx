import { useState, useEffect, useRef } from "react";

export function useAnimatedCounter(target: number, triggerSelector: string) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(triggerSelector);
    
    if (!targetElement || hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(targetElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [triggerSelector, hasAnimated]);

  const animateCounter = () => {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        setCount(Math.ceil(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };
    
    updateCounter();
  };

  return count;
}
