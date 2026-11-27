import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/shell/footer";
import { Gnb } from "@/components/shell/gnb";
import { THEME_SCRIPT } from "@/lib/theme";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["400", "500", "600"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: { default: "The Value", template: "%s · The Value" },
  description: "How culture, politics, industry, and finance are connected through one concept: value.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg text-ink">
        <Gnb />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
