import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lee Payne | Senior Leader Portfolio",
  description:
    "Explore the CV and portfolio of Lee Payne, a senior leader passionaite about helping people achieve their full potential.",
  keywords: ["WebXR", "Virtual Reality", "CV", "Resume"],
  authors: [{ name: "Lee Payne" }],
  openGraph: {
    title: "Lee Payne | Senior Leader Portfolio",
    description:
      "Explore the professional experience, skills, and certifications of Lee Payne.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
