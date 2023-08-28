import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
  useEffect(() => {
    const hash = location.hash;

    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      const yOffset = -70;
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
