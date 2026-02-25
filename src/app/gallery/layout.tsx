import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from keynotes, workshops, retreats, and coaching sessions with Coaching Women of Color — empowering leaders and transforming organizations.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
