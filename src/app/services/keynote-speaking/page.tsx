import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

const speakingTopics = [
  "The Business Case for Inclusion",
  "Leading with Authenticity",
  "Breaking Barriers: Women of Color in Leadership",
  "From Awareness to Action: Moving Beyond Performative DEI",
  "Building Psychological Safety in Teams",
  "The Power of Belonging",
];

export default function KeynoteSpeakingPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#F7FAE5] to-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/for-organizations" className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors">
                  ← Back to Solutions
                </Link>
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Keynote Speaking
                </h1>
                <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                  Powerful presentations that inspire, educate, and motivate your teams
                  to embrace inclusion as a competitive advantage.
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary">
                    Book a Speaker
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#C4D82E]/20 to-[#3EBCE8]/20 rounded-3xl blur-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/new/action-summit-talk.jpg`}
                  alt="Wendy Perdomo speaking to a large audience"
                  className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Inspire <span className="text-gradient">Action</span>
                </h2>
                <p className="body-large mt-6">
                  A great keynote doesn&apos;t just inform—it transforms. Our speakers combine
                  compelling storytelling with practical insights that leave audiences
                  energized and equipped to drive change.
                </p>
                <p className="body-large mt-4">
                  Whether it&apos;s a conference, leadership summit, or company-wide event,
                  we deliver presentations that resonate and inspire action.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <h3 className="heading-card mb-6">Popular Topics</h3>
                <ul className="space-y-4">
                  {speakingTopics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C4D82E] rounded-full" />
                      <span className="text-[#525252]">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Event <span className="text-gradient">Formats</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Keynote Address", duration: "45-60 min", description: "High-impact presentation for large audiences at conferences and summits." },
                { title: "Fireside Chat", duration: "30-45 min", description: "Intimate, conversational format perfect for leadership retreats." },
                { title: "Panel Moderation", duration: "Varies", description: "Expert facilitation of panel discussions on DEI topics." },
              ].map((format) => (
                <div key={format.title} className="card">
                  <p className="text-sm font-medium text-[#C4D82E] uppercase tracking-wider">{format.duration}</p>
                  <h3 className="heading-card mt-2">{format.title}</h3>
                  <p className="text-[#737373] mt-3">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Make your next event unforgettable.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s discuss how we can inspire and engage your audience.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Inquire About Availability
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
