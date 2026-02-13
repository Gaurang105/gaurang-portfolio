import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Gaurang Gujrati - Software Engineer at Headout, building full-stack platforms and AI-powered systems.",
    openGraph: {
        title: "About — Gaurang Gujrati",
        description: "Software Engineer building full-stack platforms and AI-powered systems.",
        url: `${siteUrl}/about`,
        type: "profile",
        images: [
            {
                url: "/images/profile.png",
                width: 1200,
                height: 630,
                alt: "Gaurang Gujrati",
            },
        ],
    },
    alternates: {
        canonical: `${siteUrl}/about`,
    },
};

// JSON-LD for About page
const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Gaurang Gujrati",
        url: siteUrl,
        image: `${siteUrl}/images/profile.png`,
        jobTitle: "Software Engineer",
        worksFor: {
            "@type": "Organization",
            name: "Headout",
            url: "https://www.headout.com",
        },
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "SRM Institute of Science and Technology",
        },
        sameAs: [
            "https://github.com/Gaurang105",
            "https://www.linkedin.com/in/gaurang-gujrati-088a931b8/",
            "https://x.com/GaurangGujrati",
        ],
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />

            <Navigation currentPage="about" />

            <main role="main" className="pt-36 pb-24 md:pt-48">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <header className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="decorative-line" />
                            <span className="text-sm tracking-[0.2em] uppercase text-ink-muted font-medium">
                                About Me
                            </span>
                        </div>
                        <h1 className="font-serif text-display font-medium text-ink mb-6">
                            Gaurang Gujrati
                        </h1>
                    </header>

                    {/* Profile */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
                        <div className="shrink-0">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-cream shadow-lg">
                                <Image
                                    src="/images/profile.png"
                                    alt="Gaurang Gujrati"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="prose">
                            <p className="text-lg text-ink-light leading-relaxed">
                                I&apos;m a Software Engineer currently working at <strong>Headout</strong>, where I build full-stack platforms and AI-powered systems that help automate workflows and improve business operations.
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose">
                        <h2>What I Do</h2>
                        <p>
                            I specialize in building robust, scalable applications using modern technologies. My expertise spans across:
                        </p>
                        <ul>
                            <li><strong>Full-Stack Development:</strong> React, TypeScript, Next.js, Node.js, and Python</li>
                            <li><strong>AI & Automation:</strong> Building intelligent systems that automate repetitive tasks</li>
                            <li><strong>Data Engineering:</strong> Web scraping, data pipelines, and analytics</li>
                            <li><strong>Cloud Infrastructure:</strong> AWS, Docker, and modern DevOps practices</li>
                        </ul>

                        <h2>Background</h2>
                        <p>
                            I graduated with a BTech in Computer Science from <strong>SRM Institute of Science and Technology</strong> in Chennai, India, with a CGPA of 8.71. Since then, I&apos;ve worked on diverse projects ranging from travel tech platforms to AI-powered content systems.
                        </p>

                        <h2>Beyond Code</h2>
                        <p>
                            When I&apos;m not coding, you&apos;ll find me lost in books or manga, strumming my guitar, or singing along to my favorite tunes. I also enjoy writing my own short stories, a creative outlet that where I can let my imagination run wild.
                        </p>

                        <h2>Get In Touch</h2>
                        <p>
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out via:
                        </p>
                        <ul>
                            <li>Email: <a href="mailto:gujratigaurang@gmail.com">gujratigaurang@gmail.com</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/gaurang-gujrati-088a931b8/" target="_blank" rel="noopener noreferrer">gaurang-gujrati</a></li>
                            <li>GitHub: <a href="https://github.com/Gaurang105" target="_blank" rel="noopener noreferrer">@Gaurang105</a></li>
                            <li>Twitter: <a href="https://x.com/GaurangGujrati" target="_blank" rel="noopener noreferrer">@GaurangGujrati</a></li>
                        </ul>
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
