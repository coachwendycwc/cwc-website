import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about coaching programs, pricing, session formats, and working with Coaching Women of Color.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/faq/",
  },
};

// FAQ structured data for Google rich snippets
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Coaching Women of Color (CWC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coaching Women of Color, LLC is a premier coaching and leadership development firm committed to advancing the voice, visibility, and impact of professional women of color in today's workforce. We partner with organizations and individuals through executive coaching, group coaching, keynote speaking, workshops, and strategic retreats.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Wendy Perdomo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wendy Perdomo is the Founder and Executive Leadership & Life Coach at CWC. With over 25 years of experience across the nonprofit, education, and public sectors, she is a certified executive coach, master facilitator, certified DiSC® facilitator, and organizational development strategist.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work across Financial Services, Higher Education, Nonprofits, Technology, Healthcare, Government, and Arts & Culture. To date, we've served 50+ organizations and developed 500+ leaders.",
      },
    },
    {
      "@type": "Question",
      name: "What makes CWC different from other coaching firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in the unique challenges professional women of color face in the workplace—from navigating bias and microaggressions to building psychological safety. Our approach is trauma-informed, culturally responsive, and grounded in over two decades of lived and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer for organizations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer seven core solutions: Executive Coaching for Leaders (1:1), Group Coaching, Keynote Speaking, Customized Webinars & Workshops, Multi-Session Virtual Series, Strategic Leadership & Board Retreats, and Performance-Based Coaching (The RESET Method®).",
      },
    },
    {
      "@type": "Question",
      name: "What is The RESET Method®?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The RESET Method® is our proprietary performance-based coaching framework. It engages both the leader and the team member from the start to close performance gaps, surface blind spots, build shared understanding, and produce lasting shifts in behavior and accountability—retaining talent instead of replacing it.",
      },
    },
    {
      "@type": "Question",
      name: "How does the engagement process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow a 6-step process: (1) Right Fit—assess alignment, (2) Needs Discovery—identify problems and opportunities with stakeholders, (3) Co-Create—develop a strategic approach, (4) Engagement Letter & Contract—confirm scope and terms, (5) Execute—deliver on commitments, and (6) Strategic Debrief—interpret results and plan next steps.",
      },
    },
    {
      "@type": "Question",
      name: "Who is individual coaching for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our individual coaching is designed for professional women of color at any career stage—whether you're navigating a leadership transition, building executive presence, overcoming imposter syndrome, or preparing for your next career move.",
      },
    },
    {
      "@type": "Question",
      name: "What coaching programs are available for individuals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer four pathways: the Leadership Clarity Session (a 90-minute deep dive), the 90-Day Executive Momentum Sprint (6 sessions), the Executive Leadership Coaching Program (6 months, 12 sessions), and the Executive Leadership Lab (a 12-month group program).",
      },
    },
    {
      "@type": "Question",
      name: "How much does coaching cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Individual coaching programs range from $697 for a Leadership Clarity Session to $9,900 for the 6-month Executive Leadership Coaching Program. Organizational pricing is customized based on the scope, format, and duration of the engagement.",
      },
    },
    {
      "@type": "Question",
      name: "How long are coaching engagements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement length varies based on your needs. Individual coaching ranges from a single 90-minute session to a 6-month program. Group coaching and virtual series can range from a short series to a longer engagement. Retreats are available as half-day or full-day sessions.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coaching sessions may be cancelled or rescheduled with a minimum of 24 hours' notice. If you do not provide at least 24 hours' notice, you will be charged the full session fee. Missed sessions (no-shows) are non-refundable.",
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {children}
    </>
  );
}
