import React, { useState } from 'react';

interface MonogramBadgeProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
  styleVariant?: 'executive-serif' | 'interlocking-luxury' | 'modern-geometric';
}

export const MonogramBadge: React.FC<MonogramBadgeProps> = ({
  size = 'md',
  className = '',
  showSubtitle = false,
  styleVariant = 'interlocking-luxury',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Dimensions based on size
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16 sm:w-18 sm:h-18',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-28 h-28 sm:w-32 sm:h-32',
  };

  const fontSizes = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-md p-[1.5px] transition-all duration-300 flex-shrink-0 cursor-default select-none ${className}`}
    >
      {/* Outer Multi-Color Glow Aura on Hover */}
      <div
        className={`absolute -inset-1 rounded-md transition-opacity duration-300 blur-sm pointer-events-none ${
          isHovered ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.4), transparent 70%)',
        }}
      />

      {/* Subtle Metallic Outer Border */}
      <div
        className={`absolute inset-0 rounded-md transition-all duration-300 ${
          isHovered
            ? 'bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500'
            : 'bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900'
        }`}
      />

      {/* Inner Obsidian Badge Body */}
      <div
        className={`relative z-10 ${sizeClasses[size]} rounded-[5px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex flex-col items-center justify-center overflow-hidden shadow-md`}
      >
        {/* Subtle Radial Glass Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

        {/* Micro-Corner Accents */}
        <span className="absolute top-1 left-1 w-1 h-1 border-t border-l border-blue-400/40 rounded-tl-xs pointer-events-none" />
        <span className="absolute top-1 right-1 w-1 h-1 border-t border-r border-blue-400/40 rounded-tr-xs pointer-events-none" />
        <span className="absolute bottom-1 left-1 w-1 h-1 border-b border-l border-blue-400/40 rounded-bl-xs pointer-events-none" />
        <span className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-blue-400/40 rounded-br-xs pointer-events-none" />

        {/* Stylish Typography Monogram */}
        <div className="relative z-10 flex items-center justify-center leading-none">
          {styleVariant === 'interlocking-luxury' ? (
            /* Interlocking Luxury Serif Typography with Dual-Tone Gradient */
            <div className={`font-cinzel font-black ${fontSizes[size]} tracking-[-0.14em] flex items-center drop-shadow-sm`}>
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform -translate-x-[1px]">
                S
              </span>
              <span className="bg-gradient-to-br from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent transform translate-x-[1px] drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">
                S
              </span>
            </div>
          ) : styleVariant === 'executive-serif' ? (
            /* Classic High-End Cinzel Decorative */
            <div className={`font-cinzel-decorative font-black ${fontSizes[size]} tracking-tight text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text`}>
              SS
            </div>
          ) : (
            /* Modern Geometric Display (Syne) */
            <div className={`font-syne font-extrabold ${fontSizes[size]} tracking-tighter flex items-center`}>
              <span className="text-white">S</span>
              <span className="text-blue-400 -ml-1">S</span>
            </div>
          )}
        </div>

        {/* Micro Subtitle if requested */}
        {showSubtitle && size !== 'sm' && (
          <span className="relative z-10 text-[7px] sm:text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-0.5">
            EST. 2004
          </span>
        )}
      </div>
    </div>
  );
};
