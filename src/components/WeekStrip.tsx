import type { TrainingDay, DayType } from '@/data/types';

const TYPE_LABEL: Record<DayType, string> = {
  push: 'Push',
  pull: 'Pull',
  legs: 'Legs',
  rest: 'Rest',
};

interface Props {
  readonly days: TrainingDay[];
  readonly activeIndex: number;
  readonly onSelect: (index: number) => void;
}

export default function WeekStrip({ days, activeIndex, onSelect }: Props) {
  return (
    <>
      {/* Mobile: horizontal scroll strip */}
      <div className="lg:hidden flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-1">
        {days.map((day, i) => {
          const isRest = day.type === 'rest';
          const isActive = i === activeIndex;
          return (
            <button
              key={day.id}
              disabled={isRest}
              onClick={() => onSelect(i)}
              className={`shrink-0 flex flex-col items-center px-3 py-2 rounded-lg border text-[13px] transition-colors ${isRest ? 'opacity-40 cursor-default' : 'cursor-pointer'}`}
              style={{
                borderColor: isActive ? 'var(--tier-t1-text)' : 'var(--border)',
                backgroundColor: isActive ? 'var(--tier-t1-bg)' : 'var(--bg-card)',
                color: isActive ? 'var(--tier-t1-text)' : 'var(--text-secondary)',
              }}
            >
              <span className="font-display tracking-wider text-[15px]">{day.short}</span>
              <span
                className="text-[10px] mt-0.5"
                style={{ color: isActive ? 'var(--tier-t1-text)' : 'var(--text-muted)' }}
              >
                {day.type === 'rest' ? 'Rest' : day.label.split('—')[0].trim()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop: vertical list */}
      <nav className="hidden lg:flex flex-col gap-1">
        {days.map((day, i) => {
          const isRest = day.type === 'rest';
          const isActive = i === activeIndex;
          return (
            <button
              key={day.id}
              disabled={isRest}
              onClick={() => onSelect(i)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-colors ${isRest ? 'opacity-40 cursor-default' : 'cursor-pointer'}`}
              style={{
                borderColor: isActive ? 'var(--tier-t1-text)' : 'var(--border)',
                backgroundColor: isActive ? 'var(--tier-t1-bg)' : 'var(--bg-card)',
              }}
            >
              <span
                className="font-display tracking-wider text-[18px] w-10 shrink-0"
                style={{ color: isActive ? 'var(--tier-t1-text)' : 'var(--text-primary)' }}
              >
                {day.short}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[13px] truncate"
                  style={{ color: isActive ? 'var(--tier-t1-text)' : 'var(--text-secondary)' }}
                >
                  {day.label}
                </p>
                {day.duration && (
                  <p className="text-[11px] text-[var(--text-muted)]">{day.duration}</p>
                )}
              </div>
              <span
                className="text-[10px] px-1.5 py-0.5 rounded font-semibold shrink-0"
                style={{
                  backgroundColor: `var(--${day.type}-bg)`,
                  color: `var(--${day.type}-text)`,
                }}
              >
                {TYPE_LABEL[day.type]}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
