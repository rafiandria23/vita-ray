import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';

function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it('renders with system theme label by default', () => {
    render(<ThemeToggle />, { wrapper: Wrapper });
    expect(screen.getByTitle(/System/i)).toBeInTheDocument();
  });

  it('cycles system → light on first click', () => {
    render(<ThemeToggle />, { wrapper: Wrapper });
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTitle(/Light/i)).toBeInTheDocument();
    expect(localStorage.getItem('vita-ray-theme')).toBe('light');
  });

  it('cycles light → dark on second click', () => {
    render(<ThemeToggle />, { wrapper: Wrapper });
    act(() => {
      screen.getByRole('button').click();
    });
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTitle(/Dark/i)).toBeInTheDocument();
    expect(localStorage.getItem('vita-ray-theme')).toBe('dark');
  });

  it('cycles dark → system on third click', () => {
    render(<ThemeToggle />, { wrapper: Wrapper });
    act(() => {
      screen.getByRole('button').click();
    });
    act(() => {
      screen.getByRole('button').click();
    });
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTitle(/System/i)).toBeInTheDocument();
    expect(localStorage.getItem('vita-ray-theme')).toBe('system');
  });
});
