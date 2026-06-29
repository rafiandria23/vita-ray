import type { Unit } from '@/data/types';

const LBS_TO_KG = 0.453592;
const KG_TO_LBS = 2.20462;

export function roundWeight(n: number, unit: Unit): number {
  if (unit === 'lbs') return Math.round(n / 5) * 5;
  return Math.round(n / 2.5) * 2.5;
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
