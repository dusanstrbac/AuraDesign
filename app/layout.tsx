import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Serifni font za luksuzne naslove
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Čist sans font za čitljiv tekst
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aura Design | Studio za arhitekturu i enterijer",
  description: "Dizajniramo prostore koji dišu sa vama. Ekskluzivni enterijeri i arhitektonska rešenja u Beogradu.",
  keywords: ["dizajn enterijera", "arhitektura", "Beograd", "luksuzni stanovi", "Aura Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}