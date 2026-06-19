import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Coaching Women of Color. Reach out about executive coaching, keynote speaking, workshops, or organizational development programs.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
