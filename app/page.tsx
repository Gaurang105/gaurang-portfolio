import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./components/Navigation";
import { GitHubChart } from "./components/GitHubChart";

const experiences = [
  {
    company: "Headout",
    logo: "/images/headout.jpeg",
    role: "Software Engineer",
    period: "Feb 2025 – Present",
    location: "Bangalore, India",
    highlights: [
      "Engineered a full-stack centralised operating platform using React, TypeScript, and Node.js to automate pre-listing workflows including SEO keyword research, AI content generation, competitor analysis, assortment planning, and BizOps operations for launching travel experiences across 200+ global cities.",
      "Built an automated system that gathers and analyzes market data from multiple sources, using AI to create strategic product recommendations for business growth teams, reducing their research time by over 80%.",
      "Created an automated quality control system using AI to review customer-submitted photos and content, reducing hours of manual review work to just minutes.",
      "Developed a competitive intelligence system that monitors competitor pricing and sends real-time alerts to business teams.",
    ],
  },
  {
    company: "Resistant Technology",
    logo: "/images/resistant.jpeg",
    role: "Python Developer",
    period: "May 2024 – Jan 2025",
    location: "Remote",
    highlights: [
      "Built a backend system that fetches, processes, and stores WordPress content in a vector database, delivering precise responses for user queries via the website's chatbot.",
      "Built a scraping and OCR pipeline for Indian voting data with 95%+ extraction accuracy, storing results in a scalable database.",
      "Developed interactive email campaigns and digital games that increased customer engagement rates by 40%.",
      "Built automated news aggregation tools with AI-powered summarization, creating bite-sized content that reduced reading time by 25% and improved user engagement.",
    ],
  },
  {
    company: "Kalvium",
    logo: "/images/kalvium.jpeg",
    role: "Software Development Engineer - Intern",
    period: "Sep 2023 – Jan 2024",
    location: "Bangalore, India",
    highlights: [
      "Developed a digital feedback collection and management system that streamlined mentor-student communication processes, improving feedback efficiency by 50%.",
      "Created a competitive ranking system for the company's coding platform, increasing user engagement by 30% and enhancing performance tracking capabilities.",
      "Conducted comprehensive quality assurance testing on the coding platform, achieving over 95% coverage to ensure reliable user experience and platform stability.",
    ],
  },
];

const projects = [
  {
    name: "OpenHire",
    tagline: "LinkedIn Job Search Platform",
    description:
      "A modern job search platform that scrapes LinkedIn job postings and offers both a sleek web interface and a REST API. Ranked 23rd on ProductHunt and went viral on X (Twitter), attracting over 100+ signed-up users.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind", "Clerk", "Supabase"],
    date: "May 2025",
    github: "https://github.com/Gaurang105/openhire",
    demo: "https://openhire.work/",
  },
  {
    name: "SunnAI",
    tagline: "Voice-to-Text for macOS",
    description:
      "Cross-platform Electron app with real-time speech-to-text using OpenAI Whisper and AI content generation via GPT-4o-mini. Features dual-mode functionality: standard dictation and voice-activated AI assistant ('Hey Sun') for contextual content creation.",
    tech: ["Electron", "OpenAI APIs", "RobotJS"],
    date: "May 2025",
    github: "https://github.com/Gaurang105/SunnAI",
    demo: "https://sunn-ai-five.vercel.app/",
  },
  {
    name: "Headstart",
    tagline: "AI Travel Assistant",
    description:
      "A WhatsApp bot that automatically extracts travel locations from YouTube and Instagram videos shared by users. Uses Google Gemini AI to analyze video transcripts and identify Points of Interest. Builds personalized location databases for travel planning.",
    tech: ["Python", "FastAPI", "PostgreSQL", "AWS", "Next.js"],
    date: "June 2025",
    github: "https://github.com/Gaurang105/headstart-backend",
  },
];

const skills = {
  "Languages & Libraries": ["Python", "JavaScript", "TypeScript", "React", "Next.js"],
  "Frameworks & Tools": ["FastAPI", "Node.js", "Flask", "Django", "Selenium"],
  "Infrastructure": ["Git", "Docker", "AWS (EC2, S3, RDS, EKS)", "Postman"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Amazon DocumentDB"],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <header className="pt-36 pb-32 md:pt-48 md:pb-40 relative overflow-hidden texture-mesh">

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16 lg:gap-24 items-start">
            <div>
              {/* Greeting line */}
              <div className="flex items-center gap-4 mb-8 animate-fade-up">
                <div className="decorative-line" />
                <span className="text-sm tracking-[0.2em] uppercase text-ink-muted font-medium">
                  Software Engineer
                </span>
              </div>

              {/* Name */}
              <h1 className="font-serif text-display font-medium text-ink mb-8 animate-fade-up delay-1">
                Gaurang<br />
                <span className="text-ink-muted">Gujrati</span>
              </h1>

              {/* Bio */}
              <p className="text-body-lg text-ink-light max-w-xl mb-12 animate-fade-up delay-2">
                Building full-stack platforms and AI-powered systems at{" "}
                <span className="text-highlight">Headout</span>.
                I create tools that automate the mundane and amplify human potential.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-8 animate-fade-up delay-3">
                <a
                  href="mailto:gujratigaurang@gmail.com"
                  className="text-sm text-ink-muted hover:text-accent transition-colors duration-300"
                >
                  gujratigaurang@gmail.com
                </a>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/gaurang-gujrati-088a931b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-accent transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Gaurang105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-accent transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/GaurangGujrati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-accent transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="animate-scale-in delay-2 lg:justify-self-end order-first lg:order-last">
              <div className="profile-image w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden bg-cream shadow-2xl shadow-ink/5">
                <Image
                  src="/images/profile.png"
                  alt="Gaurang Gujrati"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Work Experience Section */}
      <section id="work" className="py-24 md:py-32 bg-cream texture-paper texture-linen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-end gap-6 mb-20">
            <span className="section-number">01</span>
            <div>
              <h2 className="font-serif text-headline font-medium text-ink">
                Experience
              </h2>
              <p className="text-ink-muted mt-2">Where I&apos;ve been building</p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <article
                key={i}
                className="group grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16"
              >
                {/* Left column - Meta */}
                <div className="flex lg:flex-col gap-6 lg:gap-4">
                  <div className="company-logo w-14 h-14 rounded-xl overflow-hidden bg-ivory border border-border shadow-sm">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{exp.period}</p>
                    <p className="text-sm text-ink-muted">{exp.location}</p>
                  </div>
                </div>

                {/* Right column - Content */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 bottom-0 w-px bg-border hidden lg:block" />
                  <div className="absolute -left-[33px] top-2 w-2 h-2 rounded-full bg-accent hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h3 className="font-serif text-title font-medium text-ink mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-medium mb-8">
                    {exp.company}
                  </p>
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="text-ink-light leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1.5 before:h-1.5 before:bg-sand before:rounded-full"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 texture-lines">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-end gap-6 mb-20">
            <span className="section-number">02</span>
            <div>
              <h2 className="font-serif text-headline font-medium text-ink">
                Projects
              </h2>
              <p className="text-ink-muted mt-2">Things I&apos;ve built</p>
            </div>
          </div>

          {/* Project Cards */}
          <div className="space-y-12">
            {projects.map((project, i) => (
              <article
                key={i}
                className="project-card group bg-cream rounded-2xl p-8 md:p-10 transition-all duration-500 hover:bg-sand/50"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-12">
                  <div>
                    {/* Project header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-serif text-title font-medium text-ink group-hover:text-accent transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-sm text-ink-muted mt-1">{project.tagline}</p>
                      </div>
                      <span className="text-sm text-ink-muted shrink-0">{project.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-ink-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-300"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-300"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-24 md:py-32 bg-cream texture-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-end gap-6 mb-12">
            <span className="section-number">03</span>
            <div>
              <h2 className="font-serif text-headline font-medium text-ink">
                Open Source
              </h2>
              <p className="text-ink-muted mt-2">Contribution activity</p>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <a
              href="https://github.com/Gaurang105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink hover:text-accent transition-colors duration-300 font-medium"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              @Gaurang105
            </a>
            <span className="text-border">|</span>
            <span className="text-sm text-ink-muted">58 repositories</span>
            <span className="text-border">|</span>
            <span className="text-sm text-ink-muted">66 followers</span>
          </div>

          <div className="bg-ivory rounded-2xl p-6 md:p-8 border border-border">
            <GitHubChart />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 md:py-32 texture-mesh">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-end gap-6 mb-20">
            <span className="section-number">04</span>
            <div>
              <h2 className="font-serif text-headline font-medium text-ink">
                Skills
              </h2>
              <p className="text-ink-muted mt-2">Technologies I work with</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-6">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill} className="skill-item text-ink-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 md:py-32 bg-cream texture-paper texture-linen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-end gap-6 mb-20">
            <span className="section-number">05</span>
            <div>
              <h2 className="font-serif text-headline font-medium text-ink">
                Education
              </h2>
              <p className="text-ink-muted mt-2">Academic background</p>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-ivory rounded-2xl p-8 md:p-10 border border-border">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-sm font-medium text-ink">Sep 2020 – May 2024</p>
                <p className="text-sm text-ink-muted">Chennai, India</p>
              </div>
              <div>
                <h3 className="font-serif text-title font-medium text-ink mb-2">
                  BTech in Computer Science
                </h3>
                <p className="text-accent font-medium mb-4">
                  SRM Institute of Science and Technology
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-lg">
                  <span className="text-sm text-ink-muted">CGPA</span>
                  <span className="text-lg font-serif font-medium text-ink">8.71</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 border-t border-border footer-pattern">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-title font-medium text-ink mb-4">
                Let&apos;s work together
              </h2>
              <p className="text-ink-muted max-w-md">
                I&apos;m always interested in hearing about new projects and opportunities.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="mailto:gujratigaurang@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium text-accent hover:text-accent-light transition-colors duration-300"
              >
                gujratigaurang@gmail.com
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-border">
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/gaurang-gujrati-088a931b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Gaurang105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://x.com/GaurangGujrati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300"
              >
                Twitter
              </a>
              <Link
                href="/blog"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
            <p className="text-sm text-ink-muted">
              © {new Date().getFullYear()} Gaurang Gujrati
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
