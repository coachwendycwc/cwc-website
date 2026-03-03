import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Coaching Women of Color",
  description:
    "Upcoming and past events from Coaching Women of Color — webinars, workshops, retreats, summits, and speaking engagements.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
