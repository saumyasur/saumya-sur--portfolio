import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
}

export const GoldenCursorTrail: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleCount = 0;
    let lastMoveTime = 0;

    const colors = ['#FACC15', '#FEF08A', '#F59E0B', '#EAB308', '#FFFFFF', '#D97706'];

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle sparkle creation on movement
      if (now - lastMoveTime < 45) return;
      lastMoveTime = now;

      // Add a subtle golden sparkle at the pen tip (e.clientX, e.clientY)
      const newSparkle: Sparkle = {
        id: ++sparkleCount,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.5 + 0.5,
      };

      setSparkles((prev) => [...prev.slice(-18), newSparkle]);
    };

    const handleClick = (e: MouseEvent) => {
      // Golden ink burst on click
      const clickSparkles: Sparkle[] = Array.from({ length: 6 }).map((_, i) => ({
        id: ++sparkleCount,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 5 + 3,
        color: colors[i % colors.length],
        angle: (i * Math.PI * 2) / 6 + (Math.random() * 0.4 - 0.2),
        speed: Math.random() * 2 + 1.5,
      }));

      setSparkles((prev) => [...prev.slice(-15), ...clickSparkles]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // Clean up expired sparkles
    const interval = setInterval(() => {
      setSparkles((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 90);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(interval);
    };
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute rounded-full animate-ping opacity-80"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 6px ${sparkle.color}, 0 0 10px #F59E0B`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out',
          }}
        />
      ))}
    </div>
  );
};
