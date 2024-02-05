import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'hagel studio',
  description: 'Möbelsnickeri och formgivning',
  metadataBase: new URL('https://hagelstudio-nqf91z4d6-fredrik-ps-projects.vercel.app/'),
  openGraph: {
    title: 'hagel studio',
    description: 'Möbelsnickeri och formgivning',
    url: 'https://hagelstudio.com',
    images:
    [
      {
        url: 'https://hagelstudio.com/opengraph-image.png',
      }, 
    ],
    locale: 'sv_SE',
    type: 'website',
  },  
  keywords: ['Möbelsnickeri', 'Henrik Johansson', 'Formgivning', 'Hagel Studio', 'Henrik Johansson', 'Henrik', 'Johansson', 'Snickeri', 'Möbler', 'Möbelsnickare'],
  publisher: 'Henrik Johansson',
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
