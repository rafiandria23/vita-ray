import type { TrainingDay } from '../data/types';
import ExerciseCard from './ExerciseCard';
import RestView from './RestView';

export default function SessionView({ day }: Readonly<{ day: TrainingDay }>) {
  if (day.type === 'rest') return <RestView day={day} />;

  return (
    <div className="flex flex-col gap-3">
      {day.exercises?.map((ex) => (
        <ExerciseCard key={ex.id} exercise={ex} />
      ))}
    </div>
  );
}