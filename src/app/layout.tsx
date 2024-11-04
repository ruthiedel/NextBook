import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import React from "react"
import useBookStore from '@/store/useBookStore';




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  
  return (
    <html lang="en">
      <body>
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/book">Catalog</Link></li>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  );
}
