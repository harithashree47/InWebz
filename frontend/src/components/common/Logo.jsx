import React from 'react';

/**
 * Inwebz Logo - Pure logo image with ZERO background color and NO tagline text.
 */
export default function Logo({
  theme = 'light',
  size = 'lg',
  className = '',
  imgClassName = '',
}) {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? '/inwebz-logo-trans.png' : '/inwebz-logo-dark.png';

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-14 lg:h-16',
    xl: 'h-16 sm:h-20 lg:h-24',
  };

  return (
    <a href="#home" className={`inline-flex items-center focus:outline-none bg-transparent ${className}`}>
      <img
        src={logoSrc}
        alt="Inwebz"
        className={`${imgClassName || heights[size] || heights.lg} w-auto object-contain bg-transparent`}
      />
    </a>
  );
}
