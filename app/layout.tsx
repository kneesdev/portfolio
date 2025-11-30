import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hello, i'm lee!",
  description: "a full-stack dev's portfolio",
  twitter: {
    card: "summary_large_image",
    title: "hello, i'm lee!",
    description: "a full-stack dev's portfolio",
    images: [
      {
        url: "https://lee.is-a.dev/og/image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    title: "hello, i'm lee!",
    description: "a full-stack dev's portfolio",
    images: [
      {
        url: "https://lee.is-a.dev/og/image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />

          {/* questionable color choices, i know */}
          <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
