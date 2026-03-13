import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Coaching for Leaders",
  description:
    "Leadership development at scale. Build capability across your organization with group coaching that creates shared language, peer accountability, and lasting behavior change.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/group-coaching/",
  },
};

const outcomes = [
  "Practical strategies leaders can apply immediately",
  "Increased confidence and clarity in leadership decisions",
  "Peer support and accountability that accelerates growth",
  "Stronger ability to lead teams with trust and consistency",
  "Shared language and frameworks across leadership levels",
];

const topics = [
  "Leading through change and uncertainty",
  "Executive presence, influence, and visibility",
  "Communication, feedback, and courageous conversations",
  "Boundaries, workload management, and sustainable leadership",
  "Navigating conflict, team dynamics, and performance challenges",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Group Coaching for Leaders",
  description: "Leadership development at scale. Build capability across your organization with group coaching that creates shared language, peer accountability, and lasting behavior change.",
  provider: {
    "@type": "Organization",
    name: "Coaching Women of Color",
    url: "https://coachingwomenofcolor.com",
  },
  url: "https://coachingwomenofcolor.com/services/group-coaching/",
};

export default function GroupCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFF8E8] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/for-organizations" }, { label: "Group Coaching" }]} />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Group Coaching
              </h1>
              <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                Leadership development at scale. Build capability across your organization while creating shared language and stronger peer connection.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Request a Coaching Proposal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                  The Challenge
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Developing leaders one at a time doesn&apos;t scale.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  Organizations need leaders at every level equipped with the same skills, frameworks, and language. But traditional training often fails to create lasting behavior change.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  Group coaching combines the depth of coaching with the power of peer learning—creating accountability, connection, and momentum that sticks.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <p className="text-sm font-medium text-[#1A1A1A] uppercase tracking-widest mb-6">
                  What Leaders Gain
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#FFC425] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#525252]">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Focus <span className="text-gradient">Areas</span>
              </h2>
              <p className="body-large mt-4">
                Sessions are tailored to your organization&apos;s priorities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <div key={topic} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-2 h-2 bg-[#FFC425] rounded-full mb-4" />
                  <p className="text-[#1A1A1A] font-medium">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Flexible <span className="text-gradient">Formats</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "By Level", description: "Cohorts designed for emerging, mid-level, or senior leaders with relevant challenges." },
                { title: "Virtual or In-Person", description: "Delivered where it works best for your team—remote, on-site, or hybrid." },
                { title: "Short or Extended", description: "From focused 3-session sprints to longer engagements for deeper transformation." },
              ].map((format) => (
                <div key={format.title} className="text-center">
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{format.title}</h3>
                  <p className="text-[#737373] mt-2">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section bg-white">
          <div className="container-wide max-w-3xl mx-auto">
            <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-10">
              <blockquote className="text-lg text-[#525252] leading-relaxed">
                &ldquo;I was able to accomplish nearly everything in my action planning document. At the beginning of the cohort, I was jobless and depressed. Being a part of the cohort and working on my action planning document allowed me to achieve my goals alongside others who would hold me accountable. If there is anyone I would recommend as a coach, it&apos;s Wendy. She challenged me to not make excuses and to hold myself accountable. She reminded me that there is a beautiful life on the other side of fear.&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/testimonial-tiffany.jpg`}
                  alt="Tiffany Cordero"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Tiffany Cordero</p>
                  <p className="text-sm text-[#737373]">Bronx, NY</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Develop leaders at scale.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s design a group coaching program for your organization.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Request a Coaching Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
