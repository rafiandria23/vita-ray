import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { UnitProvider } from '@/context/UnitContext';
import SessionView from './SessionView';
import { DAYS } from '@/data/program';

const restDay = DAYS[0]; // Mon — rest
const trainingDay = DAYS[1]; // Tue — Push Arms
const nextDay = DAYS[1]; // Tue

function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <UnitProvider>{children}</UnitProvider>;
}

describe('SessionView', () => {
  it('renders RestView when day type is rest', () => {
    render(<SessionView day={restDay} isToday={true} nextDay={nextDay} onSelectNext={() => {}} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByText('Rest Day')).toBeInTheDocument();
  });

  it('renders exercise cards for a training day', () => {
    render(<SessionView day={trainingDay} isToday={true} />, { wrapper: Wrapper });
    expect(screen.getByText('DB Shoulder Press')).toBeInTheDocument();
  });

  it('passes isToday and next session props through to RestView', async () => {
    const onSelectNext = vi.fn();
    render(
      <SessionView day={restDay} isToday={true} nextDay={nextDay} onSelectNext={onSelectNext} />,
      { wrapper: Wrapper }
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onSelectNext).toHaveBeenCalledOnce();
  });

  it('does not show next session card when isToday is false', () => {
    render(
      <SessionView day={restDay} isToday={false} nextDay={nextDay} onSelectNext={() => {}} />,
      { wrapper: Wrapper }
    );
    expect(screen.queryByText('Next session')).not.toBeInTheDocument();
  });
});
