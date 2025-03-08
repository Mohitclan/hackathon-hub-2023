
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  animation?: 
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'scale-in'
    | 'slide-in-right'
    | 'slide-in-left';
}

const Transition: React.FC<TransitionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 500,
  once = true,
  threshold = 0.1,
  animation = 'fade-in-up',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    const initialStyle = {
      opacity: '0',
      transform: 
        animation === 'fade-in-up' 
          ? 'translateY(20px)' 
          : animation === 'fade-in-down'
          ? 'translateY(-20px)'
          : animation === 'scale-in'
          ? 'scale(0.95)'
          : animation === 'slide-in-right'
          ? 'translateX(20px)'
          : animation === 'slide-in-left'
          ? 'translateX(-20px)'
          : 'translateY(0)',
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    };
    
    Object.assign(element.style, initialStyle);
    
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!once || !animatedRef.current)) {
          const animatedStyle = {
            opacity: '1',
            transform: 'translateY(0) scale(1) translateX(0)',
          };
          
          Object.assign(element.style, animatedStyle);
          animatedRef.current = true;
          
          if (once && observerRef.current) {
            observerRef.current.unobserve(element);
          }
        } else if (!entry.isIntersecting && !once && animatedRef.current) {
          const resetStyle = {
            opacity: '0',
            transform: 
              animation === 'fade-in-up' 
                ? 'translateY(20px)' 
                : animation === 'fade-in-down'
                ? 'translateY(-20px)'
                : animation === 'scale-in'
                ? 'scale(0.95)'
                : animation === 'slide-in-right'
                ? 'translateX(20px)'
                : animation === 'slide-in-left'
                ? 'translateX(-20px)'
                : 'translateY(0)',
          };
          
          Object.assign(element.style, resetStyle);
          animatedRef.current = false;
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px',
    });
    
    observerRef.current.observe(element);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animation, delay, duration, once, threshold]);
  
  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default Transition;
