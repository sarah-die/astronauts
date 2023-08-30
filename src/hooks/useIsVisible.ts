import { useState, useEffect, RefObject } from 'react';

export function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current as Element);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}