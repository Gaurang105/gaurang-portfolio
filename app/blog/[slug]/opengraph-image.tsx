import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    const title = post?.title || "Blog Post";
    const date = post
        ? new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : "";
    const tags = post?.tags?.slice(0, 3) || [];
    const readingTime = post?.readingTime || 0;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    background: "linear-gradient(135deg, #faf9f6 0%, #f3f1ec 50%, #e8e4db 100%)",
                    fontFamily: "Georgia, serif",
                }}
            >
                {/* Top: tag pills */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            style={{
                                padding: "6px 16px",
                                borderRadius: "9999px",
                                background: "rgba(180, 83, 9, 0.1)",
                                color: "#b45309",
                                fontSize: "16px",
                                fontFamily: "system-ui, sans-serif",
                                letterSpacing: "0.05em",
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Middle: title */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: title.length > 60 ? "42px" : "52px",
                            fontWeight: 500,
                            color: "#1c1917",
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            maxWidth: "900px",
                        }}
                    >
                        {title}
                    </div>
                </div>

                {/* Bottom: author + meta */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: "#1c1917",
                                fontFamily: "system-ui, sans-serif",
                            }}
                        >
                            Gaurang Gujrati
                        </div>
                        <div
                            style={{
                                fontSize: "16px",
                                color: "#78716c",
                                fontFamily: "system-ui, sans-serif",
                            }}
                        >
                            gaurang.blog
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "24px",
                            fontSize: "16px",
                            color: "#78716c",
                            fontFamily: "system-ui, sans-serif",
                        }}
                    >
                        {date && <span>{date}</span>}
                        {readingTime > 0 && <span>{readingTime} min read</span>}
                    </div>
                </div>

                {/* Accent bar at bottom */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "6px",
                        background: "linear-gradient(90deg, #b45309, #d97706, #f59e0b)",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
