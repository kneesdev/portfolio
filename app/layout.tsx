import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper";
import SmoothCursor from "@/components/smooth-cursor";

const manrope = Manrope({
  variable: "--manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lee's Portfolio",
  description: "Learn more about what I do. Website built with Next.js + TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} selection:bg-white selection:text-black`}>
        <SmoothScrollWrapper>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <SmoothCursor />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
