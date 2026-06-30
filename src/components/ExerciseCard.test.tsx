import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { UnitProvider } from '@/context/UnitContext';
import ExerciseCard from './ExerciseCard';
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
});
