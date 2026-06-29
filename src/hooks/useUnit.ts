import { useContext } from 'react';
import { UnitContext } from '@/context/UnitContext';

export function useUnit() {
  const ctx = useContext(UnitContext);
  if (!ctx) throw new Error('useUnit must be used within UnitProvider');
  return ctx;
}