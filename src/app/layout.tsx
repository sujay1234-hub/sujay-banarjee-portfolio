import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Sujay Banarjee | B.Tech CSE Student & Web Developer",
    description: "Portfolio of Sujay Banarjee — a First-Year Computer Science Engineering student at LPU building useful tools for students.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
