import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
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
});
