'use client';

import "@/styles/globals.css";
import Link from "next/link";
import Head from "./head";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
