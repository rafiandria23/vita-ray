import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { UnitProvider } from '@/context/UnitContext';
import ExerciseCard from './ExerciseCard';
import UnitToggle from './UnitToggle';
import type { Exercise } from '@/data/types';

const exercise: Exercise = {
  id: 'test-exercise',
  tier: 'T1',
  name: 'DB Shoulder Press',
  note: 'Anchor of session',
};

function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <UnitProvider>{children}</UnitProvider>;
}

describe('ExerciseCard', () => {
  it('renders exercise name', () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    expect(screen.getByText('DB Shoulder Press')).toBeInTheDocument();
  });

  it('is collapsed by default', () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    expect(screen.queryByText('Anchor of session')).not.toBeInTheDocument();
  });

  it('expands when header is clicked', async () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Anchor of session')).toBeInTheDocument();
  });

  it('shows set table when expanded', async () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Warmup')).toBeInTheDocument();
    expect(screen.getByText('Top set')).toBeInTheDocument();
  });

  it('updates set weights when top set weight is entered', async () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    await userEvent.click(screen.getByRole('button'));
    const input = screen.getByRole('spinbutton');
    await userEvent.clear(input);
    await userEvent.type(input, '200');
    expect(screen.getByText('200 lbs')).toBeInTheDocument();
    expect(screen.getByText('100 lbs')).toBeInTheDocument();
  });

  it('clears the error and resets to dashes when the input is emptied', async () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    await userEvent.click(screen.getByRole('button'));
    const input = screen.getByRole('spinbutton');
    await userEvent.type(input, '200');
    await userEvent.clear(input);
    expect(screen.queryByText(/enter a valid number/i)).not.toBeInTheDocument();
    expect(screen.getAllByText('—').length).toBeGreaterThan(0);
  });

  it('shows an error for a non-numeric value (input tampered to accept text)', async () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    await userEvent.click(screen.getByRole('button', { name: /DB Shoulder Press/i }));
    const input = screen.getByPlaceholderText('0') as HTMLInputElement;
    // real number inputs strip non-numeric chars — simulate a tampered/legacy input that doesn't
    input.type = 'text';
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(screen.getByText('Enter a valid number')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows an error for a negative value', async () => {
    render(<ExerciseCard exercise={exercise} />, { wrapper: Wrapper });
    await userEvent.click(screen.getByRole('button', { name: /DB Shoulder Press/i }));
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '-10' } });
    expect(screen.getByText('Weight cannot be negative')).toBeInTheDocument();
  });

  it('converts the entered weight when the unit is switched', async () => {
    render(
      <>
        <UnitToggle />
        <ExerciseCard exercise={exercise} />
      </>,
      { wrapper: Wrapper }
    );
    await userEvent.click(screen.getByRole('button', { name: /DB Shoulder Press/i }));
    const input = screen.getByRole('spinbutton');
    await userEvent.clear(input);
    await userEvent.type(input, '200');
    await userEvent.click(screen.getByRole('button', { name: 'kg' }));
    expect(input).toHaveValue(90);
  });
});
