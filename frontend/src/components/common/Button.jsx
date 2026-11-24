import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Clean UI Button with brand primary color #8B5CF6.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  iconLeft,
  iconRight = true,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50';

  const variants = {
    primary: 'bg-[#8B5CF6] hover:bg-[#7c3aed] text-white shadow-primary-glow hover:shadow-lg',
    pink: 'bg-[#8B5CF6] hover:bg-[#7c3aed] text-white shadow-primary-glow hover:shadow-lg',
    outline:
      'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-slate-300',
    dark: 'bg-[#0f1d33] hover:bg-[#1a2d4b] text-white shadow-md',
    ghost: 'bg-transparent text-slate-600 hover:text-slate-900',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  };

  const content = (
    <>
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight === true ? (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      ) : (
        iconRight
      )}
    </>
  );

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} group ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
