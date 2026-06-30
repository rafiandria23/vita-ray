import { createContext, useEffect, useMemo, useState } from 'react';
import type { Unit } from '@/data/types';

interface UnitContextValue {
  unit: Unit;
  setUnit: (u: Unit) => void;
}

export const UnitContext = createContext<UnitContextValue>({
  unit: 'lbs',
  setUnit: () => {},
});

export function UnitProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [unit, setUnit] = useState<Unit>(() => {
    try {
      return (localStorage.getItem('vita-ray-unit') as Unit) ?? 'lbs';
    } catch {
      return 'lbs';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vita-ray-unit', unit);
    } catch {
      // storage unavailable — unit still works in-memory
    }
  }, [unit]);

  const value = useMemo(() => ({ unit, setUnit }), [unit]);

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
}
