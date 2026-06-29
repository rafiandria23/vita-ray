import { useState } from 'react';
import type { Exercise } from '../data/types';
import TierBadge from './TierBadge';
import SetTable from './SetTable';

export default function ExerciseCard({ exercise }: Readonly<{ exercise: Exercise }>) {
  const [open, setOpen] = useState(false);
  const [topLbs, setTopLbs] = useState(0);

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--bg-card-hover)] transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <TierBadge tier={exercise.tier} />
        <span className="flex-1 text-[var(--text-primary)] font-medium text-[14px]">{exercise.name}</span>
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
          <p className="text-[var(--text-secondary)] text-[13px] mt-3 mb-4 italic">{exercise.note}</p>
          <label className="block mb-3">
            <span className="block text-[var(--text-muted)] text-[12px] uppercase tracking-wider mb-1">
              {exercise.tier === 'T3' ? 'Working weight (lbs)' : 'Top set weight (lbs)'}
            </span>
            <input
              type="number"
              step={5}
              min={0}
              placeholder="0"
              value={topLbs || ''}
              onChange={(e) => setTopLbs(Number(e.target.value))}
              className="w-full bg-[var(--bg-page)] border border-[var(--border)] rounded px-3 py-2 text-[var(--text-primary)] text-[14px] focus:outline-none focus:border-[var(--text-muted)]"
            />
          </label>
          <SetTable tier={exercise.tier} topLbs={topLbs} />
        </div>
      )}
    </div>
  );
}