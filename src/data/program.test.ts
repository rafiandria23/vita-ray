import { describe, it, expect } from 'vitest';
import { DAYS, getDefaultDayIndex, getTodayIndex, getNextTrainingIndex } from './program';

describe('getDefaultDayIndex', () => {
  it('returns a valid index within DAYS bounds', () => {
    const index = getDefaultDayIndex();
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(DAYS.length);
  });
});

describe('getTodayIndex', () => {
  it('returns same value as getDefaultDayIndex', () => {
    expect(getTodayIndex()).toBe(getDefaultDayIndex());
  });

  it('returns a valid index within DAYS bounds', () => {
    const index = getTodayIndex();
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(DAYS.length);
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
});
