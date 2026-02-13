import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Gaurang Gujrati. Reach out for collaborations, opportunities, or just to say hello.",
    openGraph: {
        title: "Contact — Gaurang Gujrati",
        description: "Get in touch with Gaurang Gujrati for collaborations and opportunities.",
        url: `${siteUrl}/contact`,
        type: "website",
    },
    alternates: {
        canonical: `${siteUrl}/contact`,
    },
};

// JSON-LD for Contact page
const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Gaurang Gujrati",
    description: "Get in touch with Gaurang Gujrati",
    url: `${siteUrl}/contact`,
    mainEntity: {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Gaurang Gujrati",
        email: "gujratigaurang@gmail.com",
    },
};

const contactMethods = [
    {
        name: "Email",
        value: "gujratigaurang@gmail.com",
        href: "mailto:gujratigaurang@gmail.com",
        description: "Best for detailed inquiries and collaborations",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        value: "gaurang-gujrati",
        href: "https://www.linkedin.com/in/gaurang-gujrati-088a931b8/",
        description: "Connect professionally",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        value: "@Gaurang105",
        href: "https://github.com/Gaurang105",
        description: "Check out my open source work",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "Twitter/X",
        value: "@GaurangGujrati",
        href: "https://x.com/GaurangGujrati",
        description: "Follow for updates and thoughts",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />

            <Navigation currentPage="contact" />

            <main role="main" className="pt-36 pb-24 md:pt-48">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <header className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="decorative-line" />
                            <span className="text-sm tracking-[0.2em] uppercase text-ink-muted font-medium">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="font-serif text-display font-medium text-ink mb-6">
                            Contact
                        </h1>
                        <p className="text-body-lg text-ink-light max-w-xl">
                            I&apos;m always interested in hearing about new projects, opportunities, or just connecting with fellow developers.
                        </p>
                    </header>

                    {/* Contact Methods */}
                    <div className="grid gap-6">
                        {contactMethods.map((method) => (
                            <a
                                key={method.name}
                                href={method.href}
                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="group flex items-start gap-6 p-6 bg-cream rounded-2xl hover:bg-sand/50 transition-all duration-300"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-ivory flex items-center justify-center text-ink-muted group-hover:text-accent transition-colors duration-300">
                                    {method.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="font-medium text-ink group-hover:text-accent transition-colors duration-300">
                                        {method.name}
                                    </h2>
                                    <p className="text-accent font-medium mt-1">
                                        {method.value}
                                    </p>
                                    <p className="text-sm text-ink-muted mt-2">
                                        {method.description}
                                    </p>
                                </div>
                                <div className="shrink-0 text-ink-muted group-hover:text-accent transition-colors duration-300">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                                        <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Location */}
                    <div className="mt-16 p-8 bg-ivory rounded-2xl border border-border">
                        <h2 className="font-serif text-title font-medium text-ink mb-4">
                            Location
                        </h2>
                        <p className="text-ink-light">
                            Based in <strong>Bangalore, India</strong>
                        </p>
                        <p className="text-sm text-ink-muted mt-2">
                            Open to remote collaborations worldwide
                        </p>
                    </div>
                </div>
            </main>

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
