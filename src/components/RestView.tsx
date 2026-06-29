import type { TrainingDay } from '@/data/types';

export default function RestView({ day }: Readonly<{ day: TrainingDay }>) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-4xl text-[var(--text-primary)] tracking-widest mb-2">{day.short}</p>
      <p className="text-[var(--text-muted)] text-[13px] uppercase tracking-wider">Rest Day</p>
      <p className="text-[var(--text-secondary)] text-[13px] mt-4 max-w-xs">
        Recovery is training. Sleep, eat, repeat.
      </p>
    </div>
  );
}
