import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wendy Perdomo (Preview)",
  description:
    "Photo-led design preview of the About page for Coaching Women of Color.",
  robots: { index: false, follow: false },
};

/**
 * PROTOTYPE / PREVIEW ONLY — /about-preview
 * A photo-led, one-focal-point-per-section take on the About page, inspired by
 * the clean Catherine (unbounded-potential.com) layout. Does NOT touch /about.
 * Warm palette, large Wendy photography, conversational first-person copy,
 * generous-but-anchored whitespace. Uses real photos + real facts only.
 */
export default function AboutPreviewPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="bg-[#FBF7F2]">
        {/* ─── HERO: big photo right, few words left ─── */}
        <section className="bg-[#FBF7F2]">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 pt-28 pb-12 md:grid-cols-2 md:gap-16 md:px-10 md:pt-36 md:pb-20 lg:px-16">
            {/* Text — one focal point */}
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#14739C]">
                Hey there — welcome
              </p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
                I&apos;m Wendy — and I help leaders{" "}
                <span className="text-gradient">believe in their own greatness.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#525252] md:text-xl">
                Executive coach, keynote speaker, and founder of Coaching Women
                of Color&reg; — here to change how organizations develop and
                retain women of color in leadership.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/schedule/organizations/" className="btn-primary">
                  Book a Call
                </Link>
                <Link href="/case-studies/" className="btn-secondary">
                  See the Impact
                </Link>
              </div>
            </div>

            {/* Photo — warm close portrait; soft warm panel bridges it to the cream page */}
            <div className="relative">
              <div
                className="absolute -inset-3 -z-0 rounded-[2.5rem] bg-gradient-to-br from-[#F3E4D8] via-[#F7EDE3] to-[#EDE3F0]"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${siteConfig.basePath}/images/wendy-about-face.jpg`}
                alt="Wendy Perdomo, founder of Coaching Women of Color"
                className="relative z-10 w-full rounded-[2rem] object-cover shadow-xl"
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
          </div>
        </section>

        {/* ─── STAT BAR: one quiet line ─── */}
        <section className="border-y border-[#EBE2D8] bg-[#FBF7F2]">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6 px-6 py-10 text-center md:py-12">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Leaders Developed" },
              { value: "50+", label: "Organizations Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-semibold text-[#14739C] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-tight text-[#737373] md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── STORY: photo left, quote + story right ─── */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28 lg:px-16">
            {/* Photo anchor */}
            <div className="order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${siteConfig.basePath}/images/wendy-hero.jpg`}
                alt="Wendy Perdomo facilitating a leadership workshop"
                className="w-full rounded-[2rem] object-cover shadow-lg"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>

            {/* One focal point: the quote + a short story */}
            <div className="order-1 md:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#14739C]">
                My why
              </p>
              <blockquote className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-[#1A1A1A] md:text-[2rem]">
                &ldquo;I&apos;m here to reframe what success and leadership can
                look like for women of color — without the burnout, and without
                anyone dimming their light to fit in.&rdquo;
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-[#525252]">
                With 25+ years across the nonprofit, education, and public
                sectors, I&apos;ve seen how much talent gets overlooked when
                systems aren&apos;t built with women of color in mind. Coaching
                Women of Color&reg; exists to close that gap — one leader, one
                team, one culture at a time.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#525252]">
                I&apos;m a certified executive coach, master facilitator, and
                DiSC&reg; practitioner, with an M.P.A. and M.S.Ed. from Baruch
                College and executive education from Columbia Business School.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CTA: single, warm ─── */}
        <section className="bg-[#FBF7F2]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] md:text-4xl">
              Let&apos;s build the leadership your people deserve.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#525252]">
              Whether it&apos;s a keynote, a coaching engagement, or a
              whole-culture shift — let&apos;s start the conversation.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/schedule/organizations/" className="btn-primary">
                Book a Call
              </Link>
              <Link href="/contact/" className="btn-secondary">
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
