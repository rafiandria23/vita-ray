export type DayType = 'rest' | 'push' | 'pull' | 'legs';
export type Tier = 'T1' | 'T2' | 'T3';
export type Unit = 'lbs' | 'kg';

export interface Exercise {
  id: string;
  tier: Tier;
  name: string;
  note: string;
}

export interface TrainingDay {
  id: string;
  short: string;
  label: string;
  type: DayType;
  duration?: string;
  muscles?: string;
  exercises?: Exercise[];
}

export interface SetRow {
  name: string;
  pct: number;
  reps: string;
  isTop?: boolean;
}
