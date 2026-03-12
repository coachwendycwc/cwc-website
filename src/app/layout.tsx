import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coachingwomenofcolor.com"),
  title: {
    default: "Coaching Women of Color | Executive Coaching, Keynote Speaking & Leadership Development for Organizations",
    template: "%s | Coaching Women of Color",
  },
  description:
    "Trusted by Fortune 500 companies and 50+ organizations. Executive coaching, keynote speaking, workshops, and strategic retreats that develop, retain, and advance women of color in leadership.",
  keywords: [
    "executive coaching for organizations",
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
    title: "Coaching Women of Color | Executive Coaching, Keynote Speaking & Leadership Development for Organizations",
    description:
      "Trusted by Fortune 500 companies and 50+ organizations. Executive coaching, keynote speaking, workshops, and strategic retreats for leadership development.",
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
    title: "Coaching Women of Color | Executive Coaching, Keynote Speaking & Leadership Development for Organizations",
    description:
      "Trusted by Fortune 500 companies and 50+ organizations. Executive coaching, keynote speaking, workshops, and strategic retreats for leadership development.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
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
