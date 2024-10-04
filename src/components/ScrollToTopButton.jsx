import { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 transition-opacity duration-400 text-lg bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] text-white font-bold  p-3 sm:p-3.5 rounded-xl ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollToTopButton;