import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/\\|';

const useScramble = (targetText, { duration = 1200, delay = 0, trigger = true } = {}) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    let animFrame;
    let timeout;

    timeout = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const resolvedCount = Math.floor(progress * targetText.length);

        let result = '';
        for (let i = 0; i < targetText.length; i++) {
          if (i < resolvedCount) {
            result += targetText[i];
          } else if (targetText[i] === ' ' || targetText[i] === '.' || targetText[i] === ',') {
            result += targetText[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(result);

        if (progress < 1) {
          animFrame = requestAnimationFrame(animate);
        } else {
          setDisplay(targetText);
        }
      };
      animFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animFrame);
    };
  }, [targetText, duration, delay, trigger]);

  return display;
};

export default useScramble;
