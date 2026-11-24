import React from 'react';

/**
 * Clean pill tag with brand purple (#8B5CF6) indicator dot.
 */
export default function PillTag({ children, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/80 border border-violet-100/90 text-[#8B5CF6] text-xs font-semibold tracking-wide shadow-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
      <span>{children}</span>
    </div>
  );
}
