import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { UnitProvider } from '@/context/UnitContext';
import SetTable from './SetTable';

function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <UnitProvider>{children}</UnitProvider>;
}

describe('SetTable', () => {
  it('renders 5 rows for T1', () => {
    render(<SetTable tier="T1" topWeight={0} />, { wrapper: Wrapper });
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(6); // 1 header + 5 data
  });

  it('renders 4 rows for T2', () => {
    render(<SetTable tier="T2" topWeight={0} />, { wrapper: Wrapper });
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5); // 1 header + 4 data
  });

  it('renders 3 rows for T3', () => {
    render(<SetTable tier="T3" topWeight={0} />, { wrapper: Wrapper });
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4); // 1 header + 3 data
  });

  it('shows dash when no weight entered', () => {
    render(<SetTable tier="T1" topWeight={0} />, { wrapper: Wrapper });
    const dashes = screen.getAllByText('—');
    expect(dashes.length).toBeGreaterThan(0);
  });

  it('shows calculated weights when topWeight is set', () => {
    render(<SetTable tier="T1" topWeight={200} />, { wrapper: Wrapper });
    expect(screen.getByText('100 lbs')).toBeInTheDocument();
    expect(screen.getByText('200 lbs')).toBeInTheDocument();
  });
});
