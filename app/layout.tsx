import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "SentryPass",
  description: "Generate strong & secure passwords for all your online accounts with sentryPass.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="font-helvetica antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
