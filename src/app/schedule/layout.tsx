import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Call | Coaching Women of Color",
  description:
    "Schedule a free discovery call with Wendy Perdomo. Discuss your coaching goals, leadership challenges, and explore the right program for you or your organization.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/schedule/",
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
