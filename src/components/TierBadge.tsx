import type { Tier } from '../data/types';

export default function TierBadge({ tier }: Readonly<{ tier: Tier }>) {
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wider"
      style={{
        backgroundColor: `var(--tier-${tier.toLowerCase()}-bg)`,
        color: `var(--tier-${tier.toLowerCase()}-text)`,
      }}
    >
      {tier}
    </span>
  );
}