import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

function ThemeConsumer() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={() => setTheme('dark')}>set dark</button>
    </div>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('exposes a callable no-op default for consumers outside a provider', () => {
    render(<ThemeConsumer />);
    expect(() => screen.getByRole('button').click()).not.toThrow();
  });

  it('defaults to system when localStorage is empty', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('system');
  });

  it('reads theme from localStorage', () => {
    localStorage.setItem('vita-ray-theme', 'light');
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('writes theme to localStorage on change', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(localStorage.getItem('vita-ray-theme')).toBe('dark');
  });

  it('sets data-theme on documentElement', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('defaults to system when localStorage.getItem throws', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('unavailable');
    });
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('system');
    spy.mockRestore();
  });

  it('still updates theme in-memory when localStorage.setItem throws', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('unavailable');
    });
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    spy.mockRestore();
  });
});
