import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Verma's Portfolio",
  description: "Professional portfolio of Harsh, showcasing work in web development, applications and UI/UX design.",
  keywords: ["developer", "portfolio", "web developer", "javascript", "react", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <ClientBody>
        <Toaster position="top-right" />
        <main className="min-h-screen">
          {children}
        </main>
      </ClientBody>
    </html>
  );
}
