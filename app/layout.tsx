import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tout là-haut",
};

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-franklin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={libreFranklin.variable}>
      <body>{children}</body>
    </html>
  );
}
