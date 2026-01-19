"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream transition-all duration-300 group"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {/* Sun icon */}
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute text-ink-muted group-hover:text-ink transition-all duration-500 ${theme === "light"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    }`}
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            {/* Moon icon */}
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute text-ink-muted group-hover:text-ink transition-all duration-500 ${theme === "dark"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-75"
                    }`}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </button>
    );
}
