import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavMenu from "./components/navbar/menus";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Kombotron",
  description: "Lotto, svenska lotteriet, kombinationer, lottosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNavMenu />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
