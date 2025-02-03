import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentryPasskey - Secure Password Generator",
  description: "Create strong, unique, and secure passwords instantly with SentryPasskey. Protect your accounts with random password generation.",
  keywords: ["password generator", "secure password", "strong password", "random password", "online security"],
  authors: [{ name: "SentryPasskey Team", url: "https://sentrypasskey.com" }],
  creator: "Jovin Shija",
  publisher: "SentryPasskey",
  metadataBase: new URL("https://sentrypasskey.com"),
  alternates: {
    canonical: "https://sentrypasskey.com",
  },
  openGraph: {
    title: "SentryPasskey - Secure Password Generator",
    description: "Create strong, unique, and secure passwords instantly with SentryPass.",
    url: "https://sentrypasskey.com",
    siteName: "SentryPasskey",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "SentryPasskey Password Generator UI",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SentryPasskey - Secure Password Generator",
    description: "Protect your online accounts with strong, secure passwords.",
    images: ["/preview.png"],
    creator: "@SentryPasskey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SentryPass",
            "url": "https://sentrypasskey.com",
            "description": "Generate strong, secure passwords instantly.",
            "image": "https://sentrypasskey.com/preview.png",
            "publisher": {
              "@type": "Organization",
              "name": "SentryPasskey",
              "logo": "https://sentrypasskey.com/sentrypass.svg"
            }
          })}
        </script>
      </head>
      <body className="font-helvetica antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
