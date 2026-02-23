import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coachingwomenofcolor.com"),
  title: {
    default: "Coaching Women of Color | DEI Training & Leadership Development",
    template: "%s | Coaching Women of Color",
  },
  description:
    "Transform your organization with DEI workshops, leadership development, and executive coaching designed to elevate women of color. Partner with CWC today.",
  keywords: [
    "DEI training",
    "diversity workshops",
    "leadership development",
    "women of color coaching",
    "executive coaching",
    "inclusive workplace",
    "corporate training",
  ],
  authors: [{ name: "Coaching Women of Color" }],
  creator: "Coaching Women of Color",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coachingwomenofcolor.com",
    siteName: "Coaching Women of Color",
    title: "Coaching Women of Color | DEI Training & Leadership Development",
    description:
      "Transform your organization with DEI workshops, leadership development, and executive coaching designed to elevate women of color.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coaching Women of Color",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Women of Color | DEI Training & Leadership Development",
    description:
      "Transform your organization with DEI workshops, leadership development, and executive coaching designed to elevate women of color.",
    images: ["/og-image.jpg"],
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
    "Professional coaching and consulting firm specializing in DEI training, leadership development, and organizational transformation for companies committed to empowering women of color.",
  email: "wendy@coachingwomenofcolor.com",
  sameAs: [
    "https://www.linkedin.com/in/wendyperdomoleadershipcoach/",
    "https://www.instagram.com/coachingwomenofcolor",
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
