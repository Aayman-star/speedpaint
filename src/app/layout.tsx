import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "SpeedPaint",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full bg-[#0A0A0A]`}>{children}</body>
    </html>
  );
}
