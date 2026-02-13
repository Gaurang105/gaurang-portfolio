import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, BlogPostMeta } from "@/lib/blog";
import { Navigation } from "../components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

export const metadata: Metadata = {
    title: "Blog — Software Engineering & AI Articles",
    description: "Thoughts on software engineering, AI, web scraping, and building products. Technical articles and tutorials by Gaurang Gujrati.",
    keywords: [
        "software engineering blog",
        "web development tutorials",
        "AI articles",
        "Python tutorials",
        "React tutorials",
        "TypeScript",
        "web scraping",
        "tech blog",
    ],
    openGraph: {
        title: "Blog — Gaurang Gujrati",
        description: "Thoughts on software engineering, AI, and building products.",
        url: `${siteUrl}/blog`,
        type: "website",
        images: [
            {
                url: "/images/profile.png",
                width: 1200,
                height: 630,
                alt: "Gaurang Gujrati's Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog — Gaurang Gujrati",
        description: "Thoughts on software engineering, AI, and building products.",
        images: ["/images/profile.png"],
    },
    alternates: {
        canonical: `${siteUrl}/blog`,
    },
};

// JSON-LD for Blog listing page
const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    name: "Gaurang Gujrati's Blog",
    description: "Thoughts on software engineering, AI, and building products.",
    url: `${siteUrl}/blog`,
    author: {
        "@type": "Person",
        name: "Gaurang Gujrati",
        url: siteUrl,
    },
    publisher: {
        "@type": "Person",
        name: "Gaurang Gujrati",
        url: siteUrl,
    },
    inLanguage: "en-US",
};

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />

            <Navigation currentPage="blog" />

            {/* Header */}
            <header className="pt-36 pb-16 md:pt-48 md:pb-20">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-4 mb-8 animate-fade-up">
                        <div className="decorative-line" />
                        <span className="text-sm tracking-[0.2em] uppercase text-ink-muted font-medium">
                            Writing
                        </span>
                    </div>
                    <h1 className="font-serif text-display font-medium text-ink mb-6 animate-fade-up delay-1">
                        Blog
                    </h1>
                    <p className="text-body-lg text-ink-light max-w-xl animate-fade-up delay-2">
                        Thoughts on software engineering, building products, and experiments with AI.
                    </p>
                </div>
            </header>

            {/* Posts List */}
            <main className="pb-24">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    {posts.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="space-y-0 divide-y divide-border">
                            {posts.map((post, index) => (
                                <PostCard key={post.slug} post={post} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-border">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <Link
                            href="/"
                            className="font-serif text-lg font-medium text-ink hover:text-accent transition-colors duration-300"
                        >
                            Gaurang Gujrati
                        </Link>
                        <p className="text-sm text-ink-muted">
                            © {new Date().getFullYear()} Gaurang Gujrati
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function PostCard({ post, index }: { post: BlogPostMeta; index: number }) {
    return (
        <article
            className="py-10 first:pt-0 animate-fade-up group"
            style={{ animationDelay: `${(index + 3) * 0.1}s` }}
        >
            <Link href={`/blog/${post.slug}`} className="block">
                <div className="grid md:grid-cols-[1fr_160px] gap-4 md:gap-8">
                    <div>
                        <h2 className="font-serif text-title font-medium text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                            {post.title}
                        </h2>
                        <p className="text-ink-light leading-relaxed line-clamp-2 mb-4">
                            {post.excerpt}
                        </p>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="md:text-right">
                        <p className="text-sm text-ink-muted">
                            {formatDate(post.date)}
                        </p>
                        <p className="text-xs text-ink-muted mt-1">
                            {post.readingTime} min read
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    );
}

function EmptyState() {
    return (
        <div className="py-20 animate-fade-up delay-3">
            <div className="max-w-lg">
                <p className="text-ink-light mb-8">
                    No posts yet. Blog posts will appear here once they&apos;re added to the GitHub repository.
                </p>
                <div className="bg-cream rounded-2xl p-8">
                    <p className="text-sm font-medium text-ink mb-4">
                        To add blog posts:
                    </p>
                    <ol className="text-sm text-ink-muted space-y-3">
                        <li className="flex gap-3">
                            <span className="text-accent font-medium">1.</span>
                            Create a GitHub repo named <code className="px-2 py-0.5 bg-ivory rounded">blog</code>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-accent font-medium">2.</span>
                            Create a <code className="px-2 py-0.5 bg-ivory rounded">posts</code> folder
                        </li>
                        <li className="flex gap-3">
                            <span className="text-accent font-medium">3.</span>
                            Add <code className="px-2 py-0.5 bg-ivory rounded">.md</code> files with frontmatter
                        </li>
                    </ol>
                    <pre className="mt-6 text-xs bg-ink text-ivory p-4 rounded-xl overflow-x-auto">
                        {`---
title: My First Post
date: 2025-01-19
excerpt: A brief summary
tags: [tech, ai]
---

# Your content here...`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
