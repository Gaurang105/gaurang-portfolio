"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

interface NavigationProps {
    currentPage?: "home" | "blog" | "post" | "about" | "contact" | "privacy" | "resume";
}

export function Navigation({ currentPage = "home" }: NavigationProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-xl border-b border-border/50">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="font-serif text-xl font-medium text-ink hover:text-accent transition-colors duration-300"
                    >
                        G.
                    </Link>
                    <div className="flex items-center gap-8">
                        <div className="hidden sm:flex items-center gap-8 text-sm">
                            <a
                                href={currentPage === "home" ? "#work" : "/#work"}
                                className="text-ink-muted hover:text-ink transition-colors duration-300"
                            >
                                Work
                            </a>
                            <a
                                href={currentPage === "home" ? "#projects" : "/#projects"}
                                className="text-ink-muted hover:text-ink transition-colors duration-300"
                            >
                                Projects
                            </a>
                            <Link
                                href="/blog"
                                className={`transition-colors duration-300 ${currentPage === "blog" || currentPage === "post"
                                        ? "text-ink"
                                        : "text-ink-muted hover:text-ink"
                                    }`}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about"
                                className={`transition-colors duration-300 ${currentPage === "about"
                                        ? "text-ink"
                                        : "text-ink-muted hover:text-ink"
                                    }`}
                            >
                                About
                            </Link>
                            <Link
                                href="/resume"
                                className={`transition-colors duration-300 ${currentPage === "resume"
                                        ? "text-ink"
                                        : "text-ink-muted hover:text-ink"
                                    }`}
                            >
                                Resume
                            </Link>
                            <Link
                                href="/contact"
                                className={`transition-colors duration-300 font-medium ${currentPage === "contact"
                                        ? "text-accent"
                                        : "text-accent hover:text-accent-light"
                                    }`}
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="h-4 w-px bg-border hidden sm:block" />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
