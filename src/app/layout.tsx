import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Life OS - Your Complete Campus Companion",
  description: "A premium futuristic mobile-first college management web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen w-full overflow-x-hidden`}>
        <div className="w-full min-h-screen relative" style={{ backgroundColor: '#F4F4FB' }}>
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
