import type { TrainingDay } from '@/data/types';
import ExerciseCard from '@/components/ExerciseCard';
import RestView from '@/components/RestView';

interface Props {
  readonly day: TrainingDay;
  readonly isToday: boolean;
  readonly nextDay?: TrainingDay;
  readonly onSelectNext?: () => void;
}

export default function SessionView({ day, isToday, nextDay, onSelectNext }: Props) {
  if (day.type === 'rest')
    return <RestView day={day} isToday={isToday} nextDay={nextDay} onSelectNext={onSelectNext} />;

  return (
    <div className="flex flex-col gap-3">
      {day.exercises?.map((ex) => (
        <ExerciseCard key={ex.id} exercise={ex} />
      ))}
    </div>
  );
}
