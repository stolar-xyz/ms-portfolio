import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
  iconClassName?: string;
  ariaLabelDark?: string;
  ariaLabelLight?: string;
}

const DEFAULT_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-lg bg-[var(--color-foreground)] p-2 transition-colors hover:bg-[var(--color-surface)]";
const DEFAULT_ICON_CLASS = "size-5";

function SunHighIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v1.5" />
      <path d="M12 19.5v1.5" />
      <path d="M3 12h1.5" />
      <path d="M19.5 12H21" />
      <path d="M5.64 5.64l1.06 1.06" />
      <path d="M17.3 17.3l1.06 1.06" />
      <path d="M5.64 18.36l1.06 -1.06" />
      <path d="M17.3 6.7l1.06 -1.06" />
      <path d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0 -8z" />
    </svg>
  );
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
}

export default function ThemeToggle({
  className,
  iconClassName,
  ariaLabelDark = "Przełącz na tryb jasny",
  ariaLabelLight = "Przełącz na tryb ciemny",
}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  if (!mounted) {
    return (
      <button
        type="button"
        className={className ?? DEFAULT_BUTTON_CLASS}
        aria-label={ariaLabelLight}
      >
        <SunHighIcon className={iconClassName ?? DEFAULT_ICON_CLASS} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        const root = document.documentElement;
        root.classList.add('theme-transition');
        setIsDark(!isDark);
        const next = isDark ? 'light' : 'dark';
        root.style.backgroundColor = next === 'dark' ? '#111111' : '#fefefe';
        root.style.colorScheme = next;
        setTimeout(() => root.classList.remove('theme-transition'), 400);
      }}
      className={className ?? DEFAULT_BUTTON_CLASS}
      aria-label={isDark ? ariaLabelDark : ariaLabelLight}
    >
      {isDark ? (
        <SunHighIcon className={iconClassName ?? DEFAULT_ICON_CLASS} />
      ) : (
        <MoonIcon className={iconClassName ?? DEFAULT_ICON_CLASS} />
      )}
    </button>
  );
}
