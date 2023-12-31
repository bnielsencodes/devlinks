import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const instrumentSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/static/InstrumentSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/static/InstrumentSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/static/InstrumentSans-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "devlinks",
  description: "A link sharing web app for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} font-sans`}>
      <body
      // className={`${instrumentSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
