"use client";

import { useTheme } from "./ThemeProvider";

export function GitHubChart() {
    const { theme } = useTheme();

    return (
        <div className="w-full overflow-x-auto rounded-xl">
            <img
                src={`https://ghchart.rshah.org/${theme === "dark" ? "f59e0b" : "b45309"}/Gaurang105`}
                alt="Gaurang's GitHub Contribution Chart"
                className="w-full max-w-4xl mx-auto"
                style={{ minWidth: "700px" }}
            />
        </div>
    );
}
