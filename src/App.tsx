import { useState } from 'react';
import { DAYS, getDefaultDayIndex } from './data/program';
import WeekStrip from './components/WeekStrip';
import SessionView from './components/SessionView';
import ThemeToggle from './components/ThemeToggle';

const REST_PERIODS = [
  { after: 'Top set — T1', rest: '3 min' },
  { after: 'Back-off sets', rest: '2 min' },
  { after: 'Top set — T2', rest: '2 min' },
  { after: 'Isolation working sets', rest: '90 sec' },
  { after: 'Warmup / activation sets', rest: '60–90 sec' },
  { after: 'Bridge set', rest: '90–120 sec' },
];

function RestPeriods() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[var(--bg-card-hover)] transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[var(--text-secondary)] text-[12px] uppercase tracking-wider">Rest periods</span>
        <svg
          className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-3 border-t border-[var(--border)]">
          <table className="w-full text-[13px] mt-2">
            <tbody>
              {REST_PERIODS.map((row) => (
                <tr key={row.after} className="border-b border-[var(--bg-card-hover)] last:border-0">
                  <td className="py-1.5 text-[var(--text-secondary)]">{row.after}</td>
                  <td className="py-1.5 text-right text-[var(--text-muted)]">{row.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(getDefaultDayIndex);
  const activeDay = DAYS[activeIndex];

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      {/* Mobile layout */}
      <div className="lg:hidden px-4 pb-8">
        <header className="py-5 border-b border-[var(--border)] mb-4 flex items-end justify-between">
          <div>
            <p className="text-[var(--text-muted)] text-[11px] uppercase tracking-widest mb-0.5">Operation</p>
            <h1 className="font-display text-3xl tracking-widest text-[var(--text-primary)]">Vita Ray</h1>
          </div>
          <ThemeToggle />
        </header>
        <div className="-mx-4 px-4 mb-4">
          <WeekStrip days={DAYS} activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>
        {activeDay.type !== 'rest' && (
          <div className="mb-4">
            <h2 className="font-display text-xl tracking-wider text-[var(--text-primary)] mb-0.5">{activeDay.label}</h2>
            <p className="text-[var(--text-muted)] text-[12px]">{activeDay.duration} · {activeDay.muscles}</p>
          </div>
        )}
        <SessionView day={activeDay} />
        <div className="mt-6">
          <RestPeriods />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex max-w-[1200px] mx-auto gap-8 px-8">
        <aside className="w-[320px] shrink-0 sticky top-0 h-screen overflow-y-auto py-8 flex flex-col gap-6">
          <header>
            <div className="flex items-start justify-between mb-1">
              <p className="text-[var(--text-muted)] text-[11px] uppercase tracking-widest">Operation</p>
              <ThemeToggle />
            </div>
            <h1 className="font-display text-3xl tracking-widest text-[var(--text-primary)]">Vita Ray</h1>
          </header>
          <WeekStrip days={DAYS} activeIndex={activeIndex} onSelect={setActiveIndex} />
          {activeDay.type !== 'rest' && (
            <div className="border-t border-[var(--border)] pt-4">
              <h2 className="font-display text-xl tracking-wider text-[var(--text-primary)] mb-0.5">{activeDay.label}</h2>
              <p className="text-[var(--text-muted)] text-[12px]">{activeDay.duration}</p>
              <p className="text-[var(--text-muted)] text-[12px]">{activeDay.muscles}</p>
            </div>
          )}
          <div className="mt-auto">
            <RestPeriods />
          </div>
        </aside>

        <main className="flex-1 py-8 min-w-0">
          <SessionView day={activeDay} />
        </main>
      </div>
    </div>
  );
}