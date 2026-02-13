import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gaurang Gujrati's Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "72px 80px",
                    background: "linear-gradient(135deg, #faf9f6 0%, #f3f1ec 50%, #e8e4db 100%)",
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                }}
            >
                {/* Decorative line */}
                <div
                    style={{
                        width: "60px",
                        height: "3px",
                        background: "#b45309",
                        marginBottom: "32px",
                        borderRadius: "2px",
                    }}
                />

                {/* Title */}
                <div
                    style={{
                        fontSize: "64px",
                        fontWeight: 500,
                        color: "#1c1917",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        marginBottom: "20px",
                    }}
                >
                    Blog
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: "24px",
                        color: "#78716c",
                        fontFamily: "system-ui, sans-serif",
                        maxWidth: "600px",
                        lineHeight: 1.5,
                    }}
                >
                    Thoughts on software engineering, AI, and building products.
                </div>

                {/* Author */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "60px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
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
