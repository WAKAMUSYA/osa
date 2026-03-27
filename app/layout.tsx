import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "OSA | ORIGIN STRENGTH ARTS",
  description:
    "OSAは、強くなるための構造を学ぶ場所です。フォームを教わるだけでなく、自分で評価し、修正し、積み重ねられる人になるためのコンテンツを公開しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="siteHeader">
          <div className="siteHeaderInner">
            <Link href="/" className="siteBrand">
              <span className="siteLogo" aria-hidden="true" />
              <span className="siteBrandText">
                <span className="siteBrandName">OSA</span>
                <span className="siteBrandSub">ORIGIN STRENGTH ARTS</span>
              </span>
            </Link>

            <nav className="siteNav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contents">コンテンツ</Link>
              <Link href="/contact">相談</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}