import type { SetRow, Tier } from '@/data/types';
import { calcSetWeight } from '@/utils/weight';
import { useUnit } from '@/hooks/useUnit';

const T1_SETS: SetRow[] = [
  { name: 'Warmup', pct: 0.5, reps: '12–15' },
  { name: 'Bridge', pct: 0.7, reps: '10–12' },
  { name: 'Top set', pct: 1, reps: '4–6', isTop: true },
  { name: 'Back-off 1', pct: 0.75, reps: '8–10' },
  { name: 'Back-off 2', pct: 0.75, reps: '8–10' },
];

const T2_SETS: SetRow[] = [
  { name: 'Warmup', pct: 0.55, reps: '12' },
  { name: 'Top set', pct: 1, reps: '6–8', isTop: true },
  { name: 'Back-off 1', pct: 0.7, reps: '8–10' },
  { name: 'Back-off 2', pct: 0.7, reps: '8–10' },
];

const T3_SETS: SetRow[] = [
  { name: 'Activation', pct: 0.75, reps: '12–15' },
  { name: 'Working 1', pct: 1, reps: '10–12', isTop: true },
  { name: 'Working 2', pct: 1, reps: '10–12', isTop: true },
];

const SETS_BY_TIER: Record<Tier, SetRow[]> = { T1: T1_SETS, T2: T2_SETS, T3: T3_SETS };

interface Props {
  readonly tier: Tier;
  readonly topWeight: number;
}

export default function SetTable({ tier, topWeight }: Props) {
  const { unit } = useUnit();
  const sets = SETS_BY_TIER[tier];

  return (
    <table className="w-full text-[13px]">
      <thead>
        <tr className="text-[var(--text-muted)] border-b border-[var(--border)]">
          <th className="text-left font-normal pb-1.5">Set</th>
          <th className="text-right font-normal pb-1.5">Weight</th>
          <th className="text-right font-normal pb-1.5">Reps</th>
        </tr>
      </thead>
      <tbody>
        {sets.map((s) => (
          <tr key={s.name} style={{ color: s.isTop ? 'var(--tier-t1-text)' : 'var(--text-secondary)' }}>
            <td className="py-1">{s.name}</td>
            <td
              className="text-right py-1 font-semibold"
              style={{ color: s.isTop ? 'var(--tier-t1-text)' : 'var(--text-secondary)' }}
            >
              {calcSetWeight(topWeight, s.pct, unit)}
            </td>
            <td className="text-right py-1 text-[var(--text-muted)]">{s.reps}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}