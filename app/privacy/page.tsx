import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../components/Navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for gaurang.blog - Learn how we collect, use, and protect your information.",
    alternates: {
        canonical: `${siteUrl}/privacy`,
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen">
            <Navigation currentPage="privacy" />

            <main role="main" className="pt-36 pb-24 md:pt-48">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <header className="mb-16">
                        <h1 className="font-serif text-display font-medium text-ink mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-ink-muted">
                            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </p>
                    </header>

                    <div className="prose">
                        <h2>Introduction</h2>
                        <p>
                            Welcome to gaurang.blog. This Privacy Policy explains how I collect, use, and protect your information when you visit my website.
                        </p>

                        <h2>Information Collection</h2>
                        <p>
                            This website collects minimal data to improve your experience:
                        </p>
                        <ul>
                            <li>
                                <strong>Analytics Data:</strong> I use Vercel Analytics to understand how visitors interact with my site. This includes anonymous data such as page views, referral sources, browser type, and device information.
                            </li>
                            <li>
                                <strong>No Personal Information:</strong> I do not collect personal information like names, email addresses, or any other identifiable data unless you voluntarily provide it via email contact.
                            </li>
                        </ul>

                        <h2>Cookies</h2>
                        <p>
                            This website may use essential cookies to remember your theme preference (light/dark mode). These cookies are stored locally on your device and are not shared with any third parties.
                        </p>

                        <h2>Third-Party Services</h2>
                        <p>
                            This website uses the following third-party services:
                        </p>
                        <ul>
                            <li>
                                <strong>Vercel:</strong> For website hosting and analytics. Their privacy policy can be found at{" "}
                                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                                    vercel.com/legal/privacy-policy
                                </a>
                            </li>
                            <li>
                                <strong>GitHub:</strong> For fetching blog content and contribution data. Their privacy policy can be found at{" "}
                                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                                    GitHub Privacy Statement
                                </a>
                            </li>
                        </ul>

                        <h2>Data Security</h2>
                        <p>
                            This website is served over HTTPS to ensure secure data transmission. I do not store any personal data on my servers.
                        </p>

                        <h2>Your Rights</h2>
                        <p>
                            Since I collect minimal data, there is generally no personal information to access, modify, or delete. If you have any concerns about your data, please contact me.
                        </p>

                        <h2>Changes to This Policy</h2>
                        <p>
                            I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>

                        <h2>Contact</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact me at{" "}
                            <a href="mailto:gujratigaurang@gmail.com">gujratigaurang@gmail.com</a>
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
