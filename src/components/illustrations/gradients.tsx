/** Shared SVG gradient defs so every illustration pulls from the same palette. */
export function BrandDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--brand-blue)" />
        <stop offset="50%" stopColor="var(--brand-violet)" />
        <stop offset="100%" stopColor="var(--brand-cyan)" />
      </linearGradient>
      <linearGradient id={`${id}-grad-v`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="var(--brand-blue)" />
        <stop offset="100%" stopColor="var(--brand-cyan)" />
      </linearGradient>
      <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--brand-violet)" stopOpacity="0.45" />
        <stop offset="100%" stopColor="var(--brand-violet)" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}
