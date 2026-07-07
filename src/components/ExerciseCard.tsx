import { useEffect, useState } from 'react';
import type { Exercise } from '@/data/types';
import { convertWeight } from '@/utils/weight';
import { useUnit } from '@/hooks/useUnit';
import TierBadge from '@/components/TierBadge';
import SetTable from '@/components/SetTable';

export default function ExerciseCard({ exercise }: Readonly<{ exercise: Exercise }>) {
  const [open, setOpen] = useState(false);
  const [topWeight, setTopWeight] = useState(0);
  const [rawInput, setRawInput] = useState('');
  const [error, setError] = useState('');
  const { unit } = useUnit();

  // Convert entered weight when unit switches
  const [prevUnit, setPrevUnit] = useState(unit);
  useEffect(() => {
    if (unit !== prevUnit && topWeight > 0) {
      const converted = convertWeight(topWeight, prevUnit, unit);
      setTopWeight(converted); // eslint-disable-line react-hooks/set-state-in-effect
      setRawInput(String(converted));
    }
    setPrevUnit(unit);
  }, [unit]); // eslint-disable-line react-hooks/exhaustive-deps

  const step = unit === 'lbs' ? 5 : 2.5;

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--bg-card-hover)] transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <TierBadge tier={exercise.tier} />
        <span className="flex-1 text-[var(--text-primary)] font-medium text-[14px]">
          {exercise.name}
        </span>
        <svg
          className={`w-4 h-4 text-[var(--text-muted)] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-[13px] mt-3 mb-4 italic">
            {exercise.note}
          </p>
          <label className="block mb-3">
            <span className="block text-[var(--text-muted)] text-[12px] uppercase tracking-wider mb-1">
              {exercise.tier === 'T3' ? `Working weight (${unit})` : `Top set weight (${unit})`}
            </span>
            <input
              type="number"
              inputMode="decimal"
              step={step}
              min={0}
              placeholder="0"
              value={rawInput}
              onChange={(e) => {
                const value = e.target.value;
                setRawInput(value);

                if (value === '') {
                  setError('');
                  setTopWeight(0);
                  return;
                }

                if (!/^-?\d+(\.\d+)?$/.test(value)) {
                  setError('Enter a valid number');
                  return;
                }

                const parsed = Number.parseFloat(value);
                if (parsed < 0) {
                  setError('Weight cannot be negative');
                  return;
                }

                setError('');
                setTopWeight(parsed);
              }}
              aria-invalid={error !== ''}
              className="w-full bg-[var(--bg-page)] border border-[var(--border)] rounded px-3 py-2 text-[var(--text-primary)] text-base focus:outline-none focus:border-[var(--text-muted)]"
            />
            {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
          </label>
          <SetTable tier={exercise.tier} topWeight={topWeight} />
        </div>
      )}
    </div>
  );
}
