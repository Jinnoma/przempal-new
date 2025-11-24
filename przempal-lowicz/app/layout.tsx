import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Przempal Łowicz",
  description: "Skup i sprzedaż palet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
