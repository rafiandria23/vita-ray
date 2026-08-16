import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createContext } from 'react';
import { useTheme } from './useTheme';
import { ThemeProvider } from '@/context/ThemeContext';

describe('useTheme', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('returns theme context value when used within ThemeProvider', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    expect(result.current.theme).toBe('system');
    expect(typeof result.current.setTheme).toBe('function');
  });

  it('throws when the resolved context is falsy', async () => {
    vi.doMock('@/context/ThemeContext', () => ({
      ThemeContext: createContext(undefined),
    }));
    const { useTheme: isolatedUseTheme } = await import('./useTheme');
    expect(() => renderHook(() => isolatedUseTheme())).toThrow(
      'useTheme must be used within ThemeProvider'
    );
  });
});
