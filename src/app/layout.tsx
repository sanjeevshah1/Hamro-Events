import type { Metadata } from "next";
import { Geist, Geist_Mono,Josefin_Slab } from "next/font/google";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hamro Events",
  description: "Welcome to your event hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSlab.variable} antialiased bg-mainColor`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
