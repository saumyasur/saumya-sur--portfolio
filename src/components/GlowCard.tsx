import React, { useState, useRef, MouseEvent } from 'react';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  glowMode?: 'multi' | 'spectrum' | 'subtle';
  id?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  innerClassName = '',
  glowMode = 'multi',
  id,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative group rounded-sm p-[1.5px] transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Surrounding Multi-Color Glow Aura (Outer Diffusion) */}
      <div
        className={`absolute -inset-[3px] rounded-sm transition-opacity duration-300 pointer-events-none blur-md ${
          isHovered ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.45), rgba(124, 58, 237, 0.4), rgba(219, 39, 119, 0.35), rgba(234, 88, 12, 0.3), rgba(22, 163, 74, 0.3), rgba(8, 145, 178, 0.3), transparent 75%)`,
        }}
      />

      {/* Surrounding Multi-Color Border Layer (Sharp Dynamic Rainbow Spectrum) */}
      <div
        className={`absolute inset-0 rounded-sm transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `conic-gradient(from 180deg at ${mousePos.x}px ${mousePos.y}px, #2563eb, #7c3aed, #db2777, #ea580c, #ca8a04, #16a34a, #0891b2, #2563eb)`,
        }}
      />

      {/* Default Crisp Slate Border when NOT hovered */}
      <div
        className={`absolute inset-0 rounded-sm border border-slate-200 transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Card Content Body */}
      <div
        className={`relative z-10 w-full h-full bg-white rounded-sm overflow-hidden transition-all duration-200 ${innerClassName}`}
      >
        {/* Cursor-Following Multi-Color Ambient Spotlight inside Card */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.08), rgba(219, 39, 119, 0.06), rgba(22, 163, 74, 0.04), transparent 75%)`,
          }}
        />

        {/* Inner Content */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
