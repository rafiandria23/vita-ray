import type { TrainingDay } from '@/data/types';

const TYPE_COLOR: Record<string, string> = {
  push: 'var(--push-text)',
  pull: 'var(--pull-text)',
  legs: 'var(--legs-text)',
};

interface Props {
  readonly day: TrainingDay;
  readonly isToday: boolean;
  readonly nextDay?: TrainingDay;
  readonly onSelectNext?: () => void;
}

export default function RestView({ day, isToday, nextDay, onSelectNext }: Props) {
  if (isToday) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <p className="text-[var(--text-muted)] text-[11px] uppercase tracking-widest mb-2">
          {day.short} · Today
        </p>
        <p className="font-display text-5xl text-[var(--text-primary)] tracking-widest mb-3">
          Rest Day
        </p>
        <p className="text-[var(--text-secondary)] text-[14px] max-w-xs leading-relaxed mb-8">
          Recovery is part of the program. Sleep, eat, stay loose.
        </p>
        {nextDay && onSelectNext && (
          <button
            onClick={onSelectNext}
            className="flex flex-col items-center gap-1 border border-[var(--border)] rounded-lg px-6 py-4 hover:bg-[var(--bg-card-hover)] transition-colors"
          >
            <span className="text-[var(--text-muted)] text-[11px] uppercase tracking-widest">
              Next session
            </span>
            <span
              className="font-display text-xl tracking-wider"
              style={{ color: TYPE_COLOR[nextDay.type] ?? 'var(--text-primary)' }}
            >
              {nextDay.label}
            </span>
            <span className="text-[var(--text-muted)] text-[12px]">{nextDay.short}</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-4xl text-[var(--text-primary)] tracking-widest mb-2">
        {day.short}
      </p>
      <p className="text-[var(--text-muted)] text-[13px] uppercase tracking-wider">Rest Day</p>
      <p className="text-[var(--text-secondary)] text-[13px] mt-4 max-w-xs">
        Recovery is training. Sleep, eat, repeat.
      </p>
    </div>
  );
}
