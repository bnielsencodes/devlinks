import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devlinks",
  description: "A link sharing web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}