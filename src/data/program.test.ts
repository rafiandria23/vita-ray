import { describe, it, expect, vi, afterEach } from 'vitest';
import { DAYS, getDefaultDayIndex, getTodayIndex, getNextTrainingIndex } from './program';
import type { TrainingDay } from './types';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('getDefaultDayIndex', () => {
  it('returns a valid index within DAYS bounds', () => {
    const index = getDefaultDayIndex();
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(DAYS.length);
  });

  it('falls back to 1 when getDay returns an unmapped value', () => {
    vi.spyOn(Date.prototype, 'getDay').mockReturnValue(7);
    expect(getDefaultDayIndex()).toBe(1);
  });
});

describe('getTodayIndex', () => {
  it('returns same value as getDefaultDayIndex', () => {
    expect(getTodayIndex()).toBe(getDefaultDayIndex());
  });

  it('falls back to 1 when getDay returns an unmapped value', () => {
    vi.spyOn(Date.prototype, 'getDay').mockReturnValue(7);
    expect(getTodayIndex()).toBe(1);
  });
});

describe('getNextTrainingIndex', () => {
  it('returns a non-rest day', () => {
    for (let i = 0; i < DAYS.length; i++) {
      const next = getNextTrainingIndex(i);
      expect(DAYS[next].type).not.toBe('rest');
    }
  });

  it('wraps around the week', () => {
    // Sat (index 5) → next training is Sun (index 6)
    expect(getNextTrainingIndex(5)).toBe(6);
    // Sun (index 6) → next training is Tue (index 1)
    expect(getNextTrainingIndex(6)).toBe(1);
  });

  it('skips consecutive rest days', () => {
    // Mon (index 0, rest) → next training is Tue (index 1)
    expect(getNextTrainingIndex(0)).toBe(1);
    // Thu (index 3, rest) → next training is Fri (index 4)
    expect(getNextTrainingIndex(3)).toBe(4);
  });

  it('returns 1 when all days are rest', () => {
    const allRest: TrainingDay[] = [
      { id: 'a', short: 'A', label: 'Rest', type: 'rest' },
      { id: 'b', short: 'B', label: 'Rest', type: 'rest' },
    ];
    expect(getNextTrainingIndex(0, allRest)).toBe(1);
  });
});
