import { useTheme, type Theme } from '../context/ThemeContext';

const CYCLE: Record<Theme, Theme> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
};

const ICONS: Record<Theme, string> = {
  system: '⊙',
  light: '○',
  dark: '●',
};

const LABELS: Record<Theme, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(CYCLE[theme])}
      className="flex items-center gap-1.5 text-[var(--text-muted)] text-[12px] uppercase tracking-wider hover:text-[var(--text-secondary)] transition-colors"
      title={`Theme: ${LABELS[theme]}`}
    >
      <span>{ICONS[theme]}</span>
      <span>{LABELS[theme]}</span>
    </button>
  );
}