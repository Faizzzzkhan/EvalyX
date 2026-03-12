import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EvalyX | Technical Candidate Pre-Screening",
  description:
    "EvalyX helps product teams hire better engineers by pre-screening technical candidates through structured interviews before they reach the hiring team.",
  keywords: [
    "technical hiring",
    "engineering recruitment",
    "candidate screening",
    "structured interviews",
    "SaaS hiring platform",
  ],
  metadataBase: new URL("https://evalyx.com"),
  openGraph: {
    title: "EvalyX | Interview-Ready Engineers. Without Resume Noise.",
    description:
      "Pre-screen technical candidates with structured interviews and send only qualified engineers to your hiring team.",
    url: "https://evalyx.com",
    siteName: "EvalyX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvalyX | Technical Candidate Pre-Screening",
    description:
      "Structured technical screening for startups that want fewer first-round interviews and stronger engineering hires.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
