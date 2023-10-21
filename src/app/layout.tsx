import "./globals.css";
import type { Metadata } from "next";
// import { Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";

// const instrumentSans = Instrument_Sans({
//   subsets: ["latin"],
//   variable: "--custom-font-instrument-sans",
// });

const instrumentSans = localFont({
  src: [
    {
      path: "../../public/fonts/static/InstrumentSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/static/InstrumentSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/static/InstrumentSans-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-instrument-sans",
});

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
    <html lang="en" className={`${instrumentSans.variable} font-sans`}>
      <body
      // className={`${instrumentSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
