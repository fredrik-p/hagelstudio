import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: 'hagel studio',
    description: 'Möbelsnickeri och formgivning',
    url: 'https://hagelstudio.com',
    siteName: 'hagel studio',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
