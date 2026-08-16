import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createContext } from 'react';
import { useUnit } from './useUnit';
import { UnitProvider } from '@/context/UnitContext';

describe('useUnit', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('returns unit context value when used within UnitProvider', () => {
    const { result } = renderHook(() => useUnit(), { wrapper: UnitProvider });
    expect(result.current.unit).toBe('lbs');
    expect(typeof result.current.setUnit).toBe('function');
  });

  it('throws when the resolved context is falsy', async () => {
    vi.doMock('@/context/UnitContext', () => ({
      UnitContext: createContext(undefined),
    }));
    const { useUnit: isolatedUseUnit } = await import('./useUnit');
    expect(() => renderHook(() => isolatedUseUnit())).toThrow(
      'useUnit must be used within UnitProvider'
    );
  });
});
