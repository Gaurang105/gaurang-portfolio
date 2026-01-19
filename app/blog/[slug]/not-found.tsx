import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center px-6">
                <p className="text-sm tracking-widest uppercase text-ink-muted mb-4">
                    404
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-4">
                    Post not found
                </h1>
                <p className="text-ink-muted mb-8">
                    The blog post you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-light transition-colors"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 12L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Back to blog
                </Link>
            </div>
        </div>
    );
}
