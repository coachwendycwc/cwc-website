import Link from "next/link";
import { Header, Footer } from "@/components";

const workshopTopics = [
  "Understanding Unconscious Bias",
  "Inclusive Leadership Practices",
  "Allyship and Advocacy",
  "Microaggressions in the Workplace",
  "Building Psychological Safety",
  "ERG Development and Support",
];

export default function DEIWorkshopsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <Link href="/for-organizations" className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors">
                ← Back to Solutions
              </Link>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                DEI Workshops
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Interactive, engaging sessions that go beyond awareness to create
                actionable change. Transform your workplace culture one conversation at a time.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Request a Workshop
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Beyond <span className="text-gradient">Checkboxes</span>
                </h2>
                <p className="body-large mt-6">
                  Our workshops aren&apos;t about making your team feel uncomfortable or
                  guilty. They&apos;re about creating understanding, building skills, and
                  establishing practices that make inclusion a natural part of how
                  your organization operates.
                </p>
                <p className="body-large mt-4">
                  Every workshop is customized to your organization&apos;s industry, culture,
                  and specific challenges. We meet you where you are and help you get
                  where you want to be.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <h3 className="heading-card mb-6">Workshop Topics</h3>
                <ul className="space-y-4">
                  {workshopTopics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3EBCE8] rounded-full" />
                      <span className="text-[#525252]">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Format Options */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Flexible <span className="text-gradient">Formats</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Half-Day Workshop", duration: "4 hours", description: "Focused session on a single topic with interactive exercises." },
                { title: "Full-Day Intensive", duration: "8 hours", description: "Deep dive into multiple topics with hands-on practice and action planning." },
                { title: "Workshop Series", duration: "Multi-week", description: "Ongoing program for sustained learning and cultural transformation." },
              ].map((format) => (
                <div key={format.title} className="card">
                  <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider">{format.duration}</p>
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
              Ready to transform your workplace?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s design a workshop that meets your organization&apos;s unique needs.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
