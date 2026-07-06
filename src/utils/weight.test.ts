import { describe, it, expect } from 'vitest';
import { roundWeight, calcSetWeight, convertWeight } from './weight';

describe('roundWeight', () => {
  it('rounds to nearest 5 lbs', () => {
    expect(roundWeight(102, 'lbs')).toBe(100);
    expect(roundWeight(103, 'lbs')).toBe(105);
    expect(roundWeight(100, 'lbs')).toBe(100);
  });

  it('rounds to nearest 2.5 kg', () => {
    expect(roundWeight(46, 'kg')).toBe(45);
    expect(roundWeight(46.5, 'kg')).toBe(47.5);
    expect(roundWeight(47.5, 'kg')).toBe(47.5);
  });

  it('floors a nonzero weight at one increment instead of rounding down to 0', () => {
    expect(roundWeight(1.5, 'lbs')).toBe(5);
    expect(roundWeight(2, 'lbs')).toBe(5);
    expect(roundWeight(1, 'kg')).toBe(2.5);
  });

  it('keeps zero as zero', () => {
    expect(roundWeight(0, 'lbs')).toBe(0);
    expect(roundWeight(0, 'kg')).toBe(0);
  });
});

describe('calcSetWeight', () => {
  it('returns dash when topWeight is 0', () => {
    expect(calcSetWeight(0, 0.75, 'lbs')).toBe('—');
  });

  it('returns dash when topWeight is negative', () => {
    expect(calcSetWeight(-10, 1, 'lbs')).toBe('—');
  });

  it('calculates lbs set weight', () => {
    expect(calcSetWeight(200, 0.5, 'lbs')).toBe('100 lbs');
    expect(calcSetWeight(200, 0.75, 'lbs')).toBe('150 lbs');
    expect(calcSetWeight(200, 1, 'lbs')).toBe('200 lbs');
  });

  it('calculates kg set weight', () => {
    expect(calcSetWeight(100, 0.5, 'kg')).toBe('50 kg');
    expect(calcSetWeight(100, 0.75, 'kg')).toBe('75 kg');
  });

  it('never displays 0 for a very light but nonzero top weight', () => {
    expect(calcSetWeight(2, 0.5, 'lbs')).toBe('5 lbs');
    expect(calcSetWeight(1, 0.75, 'kg')).toBe('2.5 kg');
  });
});

describe('convertWeight', () => {
  it('returns same value when from === to', () => {
    expect(convertWeight(100, 'lbs', 'lbs')).toBe(100);
    expect(convertWeight(50, 'kg', 'kg')).toBe(50);
  });

  it('converts lbs to kg and rounds to nearest 2.5', () => {
    expect(convertWeight(200, 'lbs', 'kg')).toBe(90);
    expect(convertWeight(100, 'lbs', 'kg')).toBe(45);
  });

  it('converts kg to lbs and rounds to nearest 5', () => {
    expect(convertWeight(100, 'kg', 'lbs')).toBe(220);
    expect(convertWeight(50, 'kg', 'lbs')).toBe(110);
  });
});
