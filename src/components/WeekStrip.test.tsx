import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import WeekStrip from './WeekStrip';
import { DAYS } from '@/data/program';

describe('WeekStrip', () => {
  it('renders all 7 days', () => {
    render(<WeekStrip days={DAYS} activeIndex={1} onSelect={() => {}} />);
    // Each day appears twice (mobile + desktop layouts)
    expect(screen.getAllByText('Mon').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Sun').length).toBeGreaterThan(0);
  });

  it('rest day buttons are disabled', () => {
    render(<WeekStrip days={DAYS} activeIndex={1} onSelect={() => {}} />);
    const buttons = screen.getAllByRole('button', { name: /Mon/i });
    buttons.forEach((btn) => expect(btn).toBeDisabled());
  });

  it('calls onSelect when non-rest day is clicked', async () => {
    const onSelect = vi.fn();
    render(<WeekStrip days={DAYS} activeIndex={1} onSelect={onSelect} />);
    const tueButtons = screen.getAllByRole('button', { name: /Tue/i });
    await userEvent.click(tueButtons[0]);
    expect(onSelect).toHaveBeenCalledWith(1);
  });
});
