import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { UnitProvider } from '@/context/UnitContext';
import UnitToggle from './UnitToggle';

function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <UnitProvider>{children}</UnitProvider>;
}

describe('UnitToggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders lbs and kg buttons', () => {
    render(<UnitToggle />, { wrapper: Wrapper });
    expect(screen.getByRole('button', { name: /lbs/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /kg/i })).toBeInTheDocument();
  });

  it('defaults to lbs active', () => {
    render(<UnitToggle />, { wrapper: Wrapper });
    expect(localStorage.getItem('vita-ray-unit')).toBe('lbs');
  });

  it('switches to kg on click and persists', () => {
    render(<UnitToggle />, { wrapper: Wrapper });
    act(() => {
      screen.getByRole('button', { name: /kg/i }).click();
    });
    expect(localStorage.getItem('vita-ray-unit')).toBe('kg');
  });

  it('switches back to lbs on click', () => {
    render(<UnitToggle />, { wrapper: Wrapper });
    act(() => {
      screen.getByRole('button', { name: /kg/i }).click();
      screen.getByRole('button', { name: /lbs/i }).click();
    });
    expect(localStorage.getItem('vita-ray-unit')).toBe('lbs');
  });
});
