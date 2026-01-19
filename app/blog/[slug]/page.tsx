import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { Navigation } from "../../components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    const postUrl = `${siteUrl}/blog/${slug}`;

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        authors: [{ name: "Gaurang Gujrati", url: siteUrl }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: postUrl,
            publishedTime: new Date(post.date).toISOString(),
            authors: ["Gaurang Gujrati"],
            tags: post.tags,
            images: [
                {
                    url: "/images/profile.png",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            creator: "@GaurangGujrati",
            images: ["/images/profile.png"],
        },
        alternates: {
            canonical: postUrl,
        },
    };
}

// Generate JSON-LD for article
function generateArticleJsonLd(post: {
    title: string;
    excerpt: string;
    date: string;
    readingTime: number;
    tags?: string[];
    slug: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${siteUrl}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        url: `${siteUrl}/blog/${post.slug}`,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
            "@type": "Person",
            name: "Gaurang Gujrati",
            url: siteUrl,
            image: `${siteUrl}/images/profile.png`,
        },
        publisher: {
            "@type": "Person",
            name: "Gaurang Gujrati",
            url: siteUrl,
            image: `${siteUrl}/images/profile.png`,
        },
        image: `${siteUrl}/images/profile.png`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteUrl}/blog/${post.slug}`,
        },
        keywords: post.tags?.join(", "),
        wordCount: post.readingTime * 200, // Approximate based on reading time
        timeRequired: `PT${post.readingTime}M`,
        inLanguage: "en-US",
        isPartOf: {
            "@type": "Blog",
            "@id": `${siteUrl}/blog#blog`,
            name: "Gaurang Gujrati's Blog",
        },
    };
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleJsonLd = generateArticleJsonLd({
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        readingTime: post.readingTime,
        tags: post.tags,
        slug: slug,
    });

    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            <Navigation currentPage="post" />

            {/* Article */}
            <article className="pt-36 pb-24 md:pt-48" itemScope itemType="https://schema.org/BlogPosting">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300 mb-12 animate-fade-up"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M10 12L6 8L10 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Back to all posts
                    </Link>

                    {/* Header */}
                    <header className="mb-16">
                        <h1 className="font-serif text-display font-medium text-ink leading-tight mb-8 animate-fade-up delay-1" itemProp="headline">
                            {post.title}
                        </h1>
                        <meta itemProp="description" content={post.excerpt} />
                        <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted animate-fade-up delay-2">
                            <time itemProp="datePublished" dateTime={new Date(post.date).toISOString()}>{formatDate(post.date)}</time>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span>{post.readingTime} min read</span>
                            {post.tags && post.tags.length > 0 && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose animate-fade-up delay-3">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Author */}
                    <div className="mt-20 pt-10 border-t border-border">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-cream">
                                <Image
                                    src="/images/profile.png"
                                    alt="Gaurang Gujrati"
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-medium text-ink">
                                    Gaurang Gujrati
                                </p>
                                <p className="text-sm text-ink-muted">
                                    Software Engineer at Headout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Footer */}
            <footer className="py-12 border-t border-border">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
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
