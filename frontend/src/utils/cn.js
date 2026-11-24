/**
 * Utility to combine multiple class strings conditionally.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
