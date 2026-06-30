import { useUnit } from '@/hooks/useUnit';

export default function UnitToggle() {
  const { unit, setUnit } = useUnit();

  return (
    <div className="flex items-center rounded overflow-hidden border border-[var(--border)] text-[12px]">
      {(['lbs', 'kg'] as const).map((u) => (
        <button
          key={u}
          onClick={() => setUnit(u)}
          className="px-2 py-0.5 uppercase tracking-wider transition-colors"
          style={{
            backgroundColor: unit === u ? 'var(--tier-t1-bg)' : 'transparent',
            color: unit === u ? 'var(--tier-t1-text)' : 'var(--text-muted)',
          }}
        >
          {u}
        </button>
      ))}
    </div>
  );
}
