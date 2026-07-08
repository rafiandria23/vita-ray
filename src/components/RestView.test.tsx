import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import RestView from './RestView';
import { DAYS } from '@/data/program';

const restDay = DAYS[0]; // Mon — rest
const nextDay = DAYS[1]; // Tue — Push Arms

describe('RestView — isToday=true', () => {
  it('renders rest day heading and today label', () => {
    render(<RestView day={restDay} isToday={true} />);
    expect(screen.getByText('Rest Day')).toBeInTheDocument();
    expect(screen.getByText(/Today/i)).toBeInTheDocument();
  });

  it('renders recovery message', () => {
    render(<RestView day={restDay} isToday={true} />);
    expect(screen.getByText(/Recovery is part of the program/i)).toBeInTheDocument();
  });

  it('shows next session card when nextDay and onSelectNext are provided', () => {
    render(<RestView day={restDay} isToday={true} nextDay={nextDay} onSelectNext={() => {}} />);
    expect(screen.getByText('Next session')).toBeInTheDocument();
    expect(screen.getByText(nextDay.label)).toBeInTheDocument();
    expect(screen.getByText(nextDay.short)).toBeInTheDocument();
  });

  it('does not show next session card when nextDay is absent', () => {
    render(<RestView day={restDay} isToday={true} />);
    expect(screen.queryByText('Next session')).not.toBeInTheDocument();
  });

  it('calls onSelectNext when next session card is clicked', async () => {
    const onSelectNext = vi.fn();
    render(<RestView day={restDay} isToday={true} nextDay={nextDay} onSelectNext={onSelectNext} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onSelectNext).toHaveBeenCalledOnce();
  });
});

describe('RestView — isToday=false', () => {
  it('renders simple rest view without today label', () => {
    render(<RestView day={restDay} isToday={false} />);
    expect(screen.getByText('Rest Day')).toBeInTheDocument();
    expect(screen.queryByText(/Today/i)).not.toBeInTheDocument();
  });

  it('does not show next session card even when nextDay is provided', () => {
    render(<RestView day={restDay} isToday={false} nextDay={nextDay} onSelectNext={() => {}} />);
    expect(screen.queryByText('Next session')).not.toBeInTheDocument();
  });

  it('renders recovery message', () => {
    render(<RestView day={restDay} isToday={false} />);
    expect(screen.getByText(/Recovery is training/i)).toBeInTheDocument();
  });
});
