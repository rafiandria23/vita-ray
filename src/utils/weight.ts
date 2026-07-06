import type { Unit } from '@/data/types';

const LBS_TO_KG = 0.453592;
const KG_TO_LBS = 2.20462;

export function roundWeight(n: number, unit: Unit): number {
  const step = unit === 'lbs' ? 5 : 2.5;
  const rounded = Math.round(n / step) * step;
  // A nonzero weight should never round down to 0 — floor it at one increment instead
  if (n > 0 && rounded <= 0) return step;
  return rounded;
}

export function calcSetWeight(topWeight: number, pct: number, unit: Unit): string {
  if (!topWeight || topWeight <= 0) return '—';
  return `${roundWeight(topWeight * pct, unit)} ${unit}`;
}

export function convertWeight(value: number, from: Unit, to: Unit): number {
  if (from === to) return value;
  const raw = from === 'lbs' ? value * LBS_TO_KG : value * KG_TO_LBS;
  return roundWeight(raw, to);
}
