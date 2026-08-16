import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { UnitProvider, UnitContext } from './UnitContext';
import { useContext } from 'react';

function UnitConsumer() {
  const { unit, setUnit } = useContext(UnitContext);
  return (
    <div>
      <span data-testid="unit">{unit}</span>
      <button onClick={() => setUnit('kg')}>set kg</button>
    </div>
  );
}

describe('UnitContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('exposes a callable no-op default for consumers outside a provider', () => {
    render(<UnitConsumer />);
    expect(() => screen.getByRole('button').click()).not.toThrow();
  });

  it('defaults to lbs when localStorage is empty', () => {
    render(
      <UnitProvider>
        <UnitConsumer />
      </UnitProvider>
    );
    expect(screen.getByTestId('unit').textContent).toBe('lbs');
  });

  it('reads unit from localStorage', () => {
    localStorage.setItem('vita-ray-unit', 'kg');
    render(
      <UnitProvider>
        <UnitConsumer />
      </UnitProvider>
    );
    expect(screen.getByTestId('unit').textContent).toBe('kg');
  });

  it('writes unit to localStorage on change', () => {
    render(
      <UnitProvider>
        <UnitConsumer />
      </UnitProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(localStorage.getItem('vita-ray-unit')).toBe('kg');
  });

  it('defaults to lbs when localStorage.getItem throws', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('unavailable');
    });
    render(
      <UnitProvider>
        <UnitConsumer />
      </UnitProvider>
    );
    expect(screen.getByTestId('unit').textContent).toBe('lbs');
    spy.mockRestore();
  });

  it('still updates unit in-memory when localStorage.setItem throws', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('unavailable');
    });
    render(
      <UnitProvider>
        <UnitConsumer />
      </UnitProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTestId('unit').textContent).toBe('kg');
    spy.mockRestore();
  });
});
