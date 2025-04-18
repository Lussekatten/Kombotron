import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavMenu from "./components/navbar/menus";
import Footer from "./components/footer/footer";
import NavMenu from "./components/navmenu/NavMenu";

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
        <NavMenu />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
