import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Ring position tracked via refs so the RAF loop always gets fresh values
  const targetRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const ringDomRef = useRef(null);

  useEffect(() => {
    // Don't activate on touch-only devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const lerp = (a, b, t) => a + (b - a) * t;
    let animFrame;

    const animateRing = () => {
      const rx = lerp(ringRef.current.x, targetRef.current.x, 0.12);
      const ry = lerp(ringRef.current.y, targetRef.current.y, 0.12);
      ringRef.current = { x: rx, y: ry };

      if (ringDomRef.current) {
        ringDomRef.current.style.left = `${rx}px`;
        ringDomRef.current.style.top = `${ry}px`;
      }
      animFrame = requestAnimationFrame(animateRing);
    };
    animFrame = requestAnimationFrame(animateRing);

    const handleMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setDot({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const attachHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    // Hide native cursor
    document.documentElement.style.cursor = 'none';

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      observer.disconnect();
      document.documentElement.style.cursor = '';
    };
  }, []); // runs once only — refs provide fresh values to the loop

  if (!visible) return null;

  const ringSize = hovering ? 44 : 36;
  const ringOffset = ringSize / 2;

  return (
    <>
      {/* Outer ring — lags behind via lerp (DOM-mutated directly for perf) */}
      <div
        ref={ringDomRef}
        style={{
          position: 'fixed',
          width: ringSize,
          height: ringSize,
          marginLeft: -ringOffset,
          marginTop: -ringOffset,
          borderRadius: '50%',
          border: `1.5px solid rgba(124, 58, 237, ${hovering ? 0.85 : 0.5})`,
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 200ms, height 200ms, border-color 200ms, margin 200ms',
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot — snaps instantly via state */}
      <div
        style={{
          position: 'fixed',
          left: dot.x - 4,
          top: dot.y - 4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--accent-primary)',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 12px var(--accent-primary)',
          transform: hovering ? 'scale(0)' : 'scale(1)',
          transition: 'transform 200ms',
        }}
      />
    </>
  );
};

export default CustomCursor;
