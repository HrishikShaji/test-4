import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "test-4",
  description: "test-4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
