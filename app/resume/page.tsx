import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

export const metadata: Metadata = {
    title: "Resume",
    description:
        "Resume of Gaurang Gujrati — Full-stack Software Engineer skilled in Python, TypeScript, React, Node.js, FastAPI, and AWS.",
    openGraph: {
        title: "Resume — Gaurang Gujrati",
        description:
            "Full-stack Software Engineer specializing in AI-driven automation and data pipeline solutions.",
        url: `${siteUrl}/resume`,
        type: "profile",
    },
    alternates: {
        canonical: `${siteUrl}/resume`,
    },
};

const skills: { label: string; items: string[] }[] = [
    {
        label: "Languages",
        items: ["Python", "JavaScript", "TypeScript"],
    },
    {
        label: "Frameworks",
        items: ["FastAPI", "Flask", "Django", "Selenium", "Next.js"],
    },
    {
        label: "Frontend",
        items: ["React", "UI Frameworks"],
    },
    {
        label: "Backend",
        items: ["Node.js"],
    },
    {
        label: "Tools",
        items: ["Git", "Docker", "Postman", "API Development", "CI/CD"],
    },
    {
        label: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Amazon DocumentDB"],
    },
    {
        label: "Platforms",
        items: ["AWS", "EC2", "S3", "RDS", "EKS"],
    },
    {
        label: "Other",
        items: [
            "Agile",
            "OOP",
            "Data Structures",
            "Product Lifecycle",
            "Roadmap Planning",
        ],
    },
];

const experience = [
    {
        company: "Headout",
        role: "Software Engineer",
        period: "Feb 2025 — Present",
        location: "Bangalore",
        bullets: [
            "Built a centralized full-stack platform using React and Node.js to automate pre-listing workflows spanning SEO research, AI content creation, competitor analysis, and assortment planning, enabling launches across 200+ cities.",
            "Implemented AI-driven market data analysis and recommendation pipelines, reducing research effort by over 80% for growth teams.",
            "Designed AI-assisted content and photo review processes, shrinking manual review time from hours to minutes and increasing operational throughput.",
            "Established competitor pricing monitors via RESTful APIs with real-time alerts, improving pricing responsiveness by 90% and supporting fast BizOps actions.",
        ],
    },
    {
        company: "Resistant Technology",
        role: "Python Developer",
        period: "May 2024 — Jan 2025",
        location: "Bangalore",
        bullets: [
            "Built RESTful APIs and backend ingestion workflows in Python with FastAPI to process WordPress content into vector stores, powering precise chatbot responses.",
            "Developed scraping and OCR pipelines for election datasets leveraging advanced data structures, achieving 95%+ extraction accuracy and storing results in a scalable database.",
            "Delivered interactive email campaigns and mini-games that increased customer engagement by 40% and boosted click-through rates.",
            "Implemented AI summarization for aggregated news feeds, reducing reading time by 25% and elevating user engagement.",
        ],
    },
    {
        company: "Kalvium",
        role: "SDE Intern",
        period: "Sep 2023 — Jan 2024",
        location: "Bangalore",
        bullets: [
            "Built digital feedback collection and management system that streamlined mentor-student communication process, improving feedback efficiency by 50%.",
            "Created a competitive ranking system for the company's coding platform, increasing user engagement by 30% and enhancing performance tracking capabilities.",
            "Conducted comprehensive QA testing on the coding platform, achieving over 95% coverage to ensure reliable user experience and platform stability.",
        ],
    },
];

const projects = [
    {
        name: "OpenHire",
        url: "https://openhire.work/",
        bullets: [
            "Achieved Product Hunt Top 23 ranking and onboarded 100+ users; optimized scraping for reliable job data.",
            "Implemented LinkedIn scraping pipelines processing 100s of postings/day and released a REST API, enabling third-party integrations.",
        ],
    },
    {
        name: "SunnAI — AI-powered Dictation Tool",
        url: "https://sunn-ai-five.vercel.app/",
        bullets: [
            "Delivered real-time dictation, increasing content production speed by 70% and reducing editing effort.",
            "Enabled voice assistant triggers with RobotJS overlay, reducing manual typing by 80% and improving task automation adoption by 50%.",
        ],
    },
    {
        name: "Headstart — AI-Powered Travel Assistant",
        url: "https://head-start-flax.vercel.app/",
        bullets: [
            "WhatsApp bot that extracts travel locations from YouTube and Instagram videos using Google Gemini to analyze transcripts, building personalized location databases for discovery.",
        ],
    },
];

export default function ResumePage() {
    return (
        <div className="min-h-screen">
            <Navigation currentPage="resume" />

            <main role="main" className="pt-36 pb-24 md:pt-48">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="decorative-line" />
                            <span className="text-sm tracking-[0.2em] uppercase text-ink-muted font-medium">
                                Resume
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                            <div>
                                <h1 className="font-serif text-display font-medium text-ink mb-2">
                                    Gaurang Gujrati
                                </h1>
                                <p className="text-ink-muted text-sm">
                                    Bangalore &nbsp;·&nbsp;{" "}
                                    <a
                                        href="mailto:gujratigaurang@gmail.com"
                                        className="hover:text-accent transition-colors duration-300"
                                    >
                                        gujratigaurang@gmail.com
                                    </a>
                                    &nbsp;·&nbsp;{" "}
                                    <a
                                        href="https://www.linkedin.com/in/gaurang-gujrati-088a931b8/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-accent transition-colors duration-300"
                                    >
                                        LinkedIn
                                    </a>
                                    &nbsp;·&nbsp;{" "}
                                    <a
                                        href="https://github.com/Gaurang105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-accent transition-colors duration-300"
                                    >
                                        GitHub
                                    </a>
                                </p>
                            </div>
                            <a
                                href="/resume/gaurang-gujrati-resume.pdf"
                                download="Gaurang-Gujrati-Resume.pdf"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors duration-300 shrink-0 self-start sm:self-auto"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download PDF
                            </a>
                        </div>
                    </header>

                    {/* Summary */}
                    <section className="mb-12">
                        <h2 className="resume-section-heading">
                            Professional Summary
                        </h2>
                        <p className="text-ink-muted leading-relaxed">
                            Full-stack engineer with over 1 year of experience
                            designing and building AI-driven automation and data
                            pipeline solutions. Skilled in Python, TypeScript,
                            React, Node.js, FastAPI, and AWS to develop scalable
                            APIs and user interfaces. Developed a centralized
                            platform automating pre-listing workflows across 200+
                            cities, boosting operational efficiency. Proven
                            ability to deliver end-to-end software solutions in
                            agile environments.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-12">
                        <h2 className="resume-section-heading">
                            Technical Skills
                        </h2>
                        <div className="space-y-3">
                            {skills.map((group) => (
                                <div
                                    key={group.label}
                                    className="flex gap-3 flex-wrap items-baseline"
                                >
                                    <span className="text-xs tracking-[0.12em] uppercase text-ink-muted font-medium w-24 shrink-0 pt-0.5">
                                        {group.label}
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-2.5 py-0.5 text-sm bg-cream border border-border text-ink rounded-md"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-12">
                        <h2 className="resume-section-heading">
                            Professional Experience
                        </h2>
                        <div className="space-y-10">
                            {experience.map((job) => (
                                <div key={job.company}>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                                        <h3 className="font-serif text-lg font-medium text-ink">
                                            {job.company}
                                        </h3>
                                        <span className="text-sm text-ink-muted tabular-nums shrink-0">
                                            {job.period}
                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                                        <span className="text-sm text-accent font-medium">
                                            {job.role}
                                        </span>
                                        <span className="text-sm text-ink-muted">
                                            {job.location}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {job.bullets.map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-sm text-ink-muted leading-relaxed"
                                            >
                                                <span
                                                    className="text-accent mt-1.5 shrink-0 text-xs"
                                                    aria-hidden="true"
                                                >
                                                    ▸
                                                </span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-12">
                        <h2 className="resume-section-heading">Projects</h2>
                        <div className="space-y-8">
                            {projects.map((project) => (
                                <div key={project.name}>
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                                        <h3 className="font-serif text-lg font-medium text-ink">
                                            {project.name}
                                        </h3>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-accent hover:text-accent-light transition-colors duration-300 link-underline"
                                        >
                                            {project.url}
                                        </a>
                                    </div>
                                    <ul className="space-y-2">
                                        {project.bullets.map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-sm text-ink-muted leading-relaxed"
                                            >
                                                <span
                                                    className="text-accent mt-1.5 shrink-0 text-xs"
                                                    aria-hidden="true"
                                                >
                                                    ▸
                                                </span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-12">
                        <h2 className="resume-section-heading">Education</h2>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                            <h3 className="font-serif text-lg font-medium text-ink">
                                SRM Institute of Science and Technology
                            </h3>
                            <span className="text-sm text-ink-muted tabular-nums shrink-0">
                                May 2024
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                            <span className="text-sm text-accent font-medium">
                                BTech, Computer Science
                            </span>
                            <span className="text-sm text-ink-muted">
                                Chennai, India
                            </span>
                        </div>
                        <p className="text-sm text-ink-muted">GPA: 8.71</p>
                    </section>

                    {/* Bottom download CTA */}
                    <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-sm text-ink-muted">
                            Want to keep a copy?
                        </p>
                        <a
                            href="/resume/gaurang-gujrati-resume.pdf"
                            download="Gaurang-Gujrati-Resume.pdf"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download PDF
                        </a>
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
