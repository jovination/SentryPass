import type { Metadata } from "next";
import Head from 'next/head';
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: './favicon.ico', 
  },
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
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "SentryPasskey Password Generator",
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
  verification: {
    google: "0c9_BjWerDUIs0KC_tCkdKRXtYvm7T078iATqVk09aQ", 
  },
};

const GTAG_ID = "G-PQ24X4XHKJ";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SentryPasskey",
              url: "https://sentrypasskey.com",
              description: "Generate strong, secure passwords instantly.",
              image: "https://sentrypasskey.com/preview.png",
              publisher: {
                "@type": "Organization",
                name: "SentryPasskey",
                logo: "https://sentrypasskey.com/sentrypass.svg",
              },
            }),
          }}
        />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-helvetica antialiased">
        <AnalyticsProvider />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
