import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  const locationKey = useMemo(() => {
    const hash = location.hash;

    if (hash) {
      const key = location.key;
      return key;
    } else {
      return null;
    }
  }, [location]);

  const hashElement = useMemo(() => {
    const hash = location.hash;

    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    console.log('useEffect triggered');

    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: 'smooth',
        // block: "end",
        inline: 'nearest',
      });
    }
  }, [hashElement, locationKey]);

  return null;
};

export default ScrollToHashElement;
