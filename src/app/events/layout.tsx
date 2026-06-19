import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from Coaching Women of Color — webinars, workshops, retreats, summits, and speaking engagements.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/events/",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
