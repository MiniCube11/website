'use client';

import "@/styles/globals.css";
import Link from "next/link";
import Head from "./head";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body className="bg-white text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >  
          <Link href="/">Home</Link>
          <Link href="/writing">Writing</Link>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
