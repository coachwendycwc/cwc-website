import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

// TODO: Replace with your actual GA4 Measurement ID from analytics.google.com
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://coachingwomenofcolor.com"),
  title: {
    default: "Coaching Women of Color® | Executive Coaching & Leadership Development",
    template: "%s | Coaching Women of Color",
  },
  description:
    "Coaching Women of Color® — executive coaching, keynote speaking, workshops, and retreats for organizations and individuals. Trusted by 50+ organizations to develop, retain, and advance women of color in leadership.",
  keywords: [
    "coaching women of color",
    "executive coaching for women of color",
    "leadership coaching women of color",
    "keynote speaking",
    "leadership development",
    "women of color coaching",
    "DEI training",
    "diversity workshops",
    "inclusive workplace",
    "corporate training",
    "strategic retreats",
    "organizational development",
  ],
  authors: [{ name: "Coaching Women of Color" }],
  creator: "Coaching Women of Color",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coachingwomenofcolor.com",
    siteName: "Coaching Women of Color",
    title: "Coaching Women of Color® | Executive Coaching & Leadership Development",
    description:
      "Coaching Women of Color® — executive coaching, keynote speaking, workshops, and retreats for organizations and individuals. Trusted by 50+ organizations to develop, retain, and advance women of color in leadership.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coaching Women of Color",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Women of Color® | Executive Coaching & Leadership Development",
    description:
      "Coaching Women of Color® — executive coaching, keynote speaking, workshops, and retreats for organizations and individuals. Trusted by 50+ organizations to develop, retain, and advance women of color in leadership.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://coachingwomenofcolor.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Coaching Women of Color",
  alternateName: "CWC",
  url: "https://coachingwomenofcolor.com",
  description:
    "Professional coaching and consulting firm specializing in executive coaching, keynote speaking, leadership development, and organizational transformation. Trusted by Fortune 500 companies and 50+ organizations to develop, retain, and advance women of color in leadership.",
  email: "wendy@coachingwomenofcolor.com",
  sameAs: [
    "https://www.linkedin.com/in/wendyperdomoleadershipcoach/",
    "https://www.instagram.com/coachwendyp/",
    "https://www.facebook.com/coachingwomenofcolor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-900 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
