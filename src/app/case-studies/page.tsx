import Link from "next/link";
import { Header, Footer, Badge } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Impact Stories",
  description:
    "See how organizations across industries have transformed their leadership culture through CWC coaching, keynotes, retreats, and development programs. Real impact, real results.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/case-studies/",
  },
};

const successStories = [
  {
    name: "Nicole Carr",
    title: "CEO & Founder of P2P",
    location: "Long Island, New York",
    challenge: "Struggling with 'analysis paralysis' that was holding back both personal and professional growth.",
    results: [
      "Featured guest on the Donna Drake Show/Live It Up (aired on NBC and CBS)",
      "Served as guest speaker at multiple women's empowerment events",
      "Currently working on second book, soon to be published",
      "Lost 30 lbs after committing to health and wellness goals",
    ],
    quote: "Wendy's life and leadership coaching program has successfully equipped me with the effective mental mindset tools and techniques to overcome my own 'analysis paralysis.' She has supported me in developing a deeper self-awareness and increased accountability towards my proposed life and career goals.",
    color: "#3EBCE8",
    category: "Executive Coaching",
    image: "testimonial-nicolecarr.png",
  },
  {
    name: "Morgan Bullock",
    title: "Founder, Sportswomen.co",
    location: "Atlanta, GA",
    challenge: "Needed clarity and confidence to launch a new business venture.",
    results: [
      "Successfully launched Sportswomen.co",
      "Gained clarity on personal strengths and unique value",
      "Developed deep self-awareness for future growth",
    ],
    quote: "I recognize that because of the conversations that we've had and the calls that we've had, without them I wouldn't have gotten here, or I wouldn't have gotten here as quickly as I have. I appreciate you challenging me, showing me so much of myself and peeling back layers. I was able to really hone in on what's really in here to help others discover that as well.",
    color: "#FFC425",
    category: "Leadership Coaching",
    image: "testimonial-morgan.png",
  },
  {
    name: "Lori Bennett",
    title: "Costume Designer & Wardrobe Technician",
    location: "Brooklyn, NY",
    challenge: "A retired educator struggling to craft a plan and define a new identity after a long career.",
    results: [
      "Graduated from Fashion Institute of Technology",
      "Successfully transitioned to second career as Costume Designer",
      "Created a powerful growth plan with self-created timeframes",
    ],
    quote: "Wendy helped me to create a blueprint for my second act after retirement. Her approach was uniquely crafted and tailored specifically to my needs. She helped me to quickly identify my stuck spots, challenge my limiting beliefs and recognize and embrace all of the tools and resources around me that would facilitate my transformation.",
    color: "#C4D82E",
    category: "Career Transition",
    image: "testimonial-lori.png",
  },
  {
    name: "Melissa Delgado",
    title: "Corporate Leader",
    location: "California",
    challenge: "Seeking career advancement and recognition for contributions.",
    results: [
      "Received an off-cycle raise (significant increase)",
      "Recognized for leadership potential",
      "Now training team members for advancement",
    ],
    quote: "I wanted to share some amazing news. I am so grateful for your services and skills because I got an off cycle raise and it was huge. And they want to give more opportunities so I'm training my team up for the next level.",
    color: "#E91E8C",
    category: "Executive Coaching",
    image: "testimonial-melissa.png",
  },
  {
    name: "Lisa Morgan",
    title: "University Leader",
    location: "Ontario, Canada",
    challenge: "Concerned about stepping into a new leadership position and gaining the respect of peers to transform the workspace.",
    results: [
      "Successfully stepped into leadership role",
      "Transformed workspace into a high-functioning team",
      "Maintained energy and enthusiasm for continued growth",
    ],
    quote: "Wendy pushed me to consider my strengths and how to apply myself for best results. She also helped me work through difficult issues that I encountered by brainstorming solutions that work for me. The customized attention and sage advice made all of the difference on my journey.",
    color: "#9333EA",
    category: "Leadership Development",
    image: "testimonial-lisa.png",
  },
  {
    name: "Tiffany Cordero",
    title: "Professional",
    location: "Bronx, NY",
    challenge: "Jobless and depressed at the beginning of the coaching cohort.",
    results: [
      "Accomplished nearly everything in action planning document",
      "Achieved goals with accountability support",
      "Found renewed confidence and direction",
    ],
    quote: "Being a part of the cohort and working on my action planning document allowed me to achieve my goals alongside others who would hold me accountable. She challenged me to not make excuses and to hold myself accountable. She reminded me that there is a beautiful life on the other side of fear.",
    color: "#3EBCE8",
    category: "Group Coaching",
    image: "testimonial-tiffany.jpg",
  },
];

const organizationalImpact = [
  {
    name: "Lynne Toye",
    location: "Newark, NJ",
    type: "Board Retreat Facilitation",
    engagementType: "Strategic Retreat",
    industry: "Nonprofit",
    scope: "Board of Directors",
    quote: "Wendy facilitated a board retreat for us. She is a brilliant facilitator whose empathetic approach builds trust quickly. Wendy's superpower is the speed with which she is able to assess needs, navigate dynamics, and coalesce groups around shared goals. We were extremely pleased with the quality and clarity of Wendy's preparation, delivery, and follow up. She is in a class by herself!",
    image: "testimonial-lynne.jpg",
  },
  {
    name: "Emily Kurtz",
    location: "Brooklyn, NY",
    type: "Team Coaching",
    engagementType: "Executive Coaching",
    industry: "Education",
    scope: "Team of 2 Leaders",
    quote: "Working with Wendy kept me steady in a very, very difficult year. And not just me, but my colleague as well. The relationship has changed the emotionality of the workplace, allowing for better collaboration and better outcomes.",
    image: "testimonial-emily.png",
  },
  {
    name: "Tanya Ramos-Puig",
    location: "Florida",
    type: "Organizational Development",
    engagementType: "Organizational Development",
    industry: "Nonprofit",
    scope: "Organization-wide",
    quote: "Wendy's ability to connect with people and ensure that those she is working with get the most out of any engagement is truly unparalleled. She creates a collaborative atmosphere that is also thought provoking.",
    image: "testimonial-tanya.png",
  },
];

const industryBadges = [
  "Financial Services",
  "Healthcare",
  "Education",
  "Nonprofit",
  "Technology",
  "Government",
  "Arts & Culture",
];

const additionalTestimonials = [
  {
    name: "Catarina Campbell",
    location: "Vermont",
    quote: "With your coaching, I feel a sense of responsibility and purpose, but also potency and power. You said something to me that changed everything: 'You are not there to become an executive in the way that you're imagining it, you are there to become you and for the system to shift around you.' I know who I am in the world now, and I know the ancestors I carry with me.",
    image: "testimonial-catarina.png",
  },
  {
    name: "Stephanie Lopez",
    location: "California",
    quote: "Wendy is an incredible coach who understands women of color and helped me feel seen, heard, and understood. My experience with Wendy transformed coaching from a mere task on my to-do list into a nurturing experience that truly supported my growth.",
    image: "testimonial-stephanie.png",
  },
  {
    name: "Alexis Brown",
    location: "Washington, D.C.",
    quote: "I feel deeply appreciative of Wendy's support during some professionally challenging months. She catered our sessions to my needs, even when I didn't know what I needed. I am better at identifying, setting and communicating my boundaries. I feel more confident in my decision-making skills as it relates to my professional growth.",
    image: "testimonial-alexis.png",
  },
  {
    name: "Nicole Vlado",
    location: "Brooklyn, NY",
    quote: "I learned so much about myself while working with Wendy. Her careful listening and encouragement during each session combined with the innovative tools and resources that she shared helped guide me towards new ways of thinking about my strengths, skills, and abilities. Being able to connect so openly and honestly with someone who could relate how I moved through the world was an absolute gift.",
    image: "testimonial-nicolev.png",
  },
  {
    name: "Patricia Quintero",
    location: "New York, NY",
    quote: "Wendy has a holistic approach to coaching, seeing me not only as a professional, but as the multi-faceted woman that I am. Wendy seamlessly creates a safe and non-judgmental approach all while thoughtfully holding the mirror to some of my thoughts and actions that did not serve me.",
    image: "testimonial-patricia.png",
  },
  {
    name: "Teal Inzunza",
    location: "New York, NY",
    quote: "Wendy is an incredible coach and advocate for her clients. I worked with her for 6 months and found her guidance invaluable. She helped me grow as a professional and gave me tangible tools to use to better myself as a leader.",
    image: "testimonial-teal.png",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Case Studies
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Impact Across
                <br />
                <span className="text-gradient">Organizations</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                See how organizations across industries have partnered with CWC to develop their leaders, strengthen their cultures, and drive measurable results.
              </p>
              {/* Industry filter badges */}
              <div className="mt-8 flex flex-wrap gap-2">
                {industryBadges.map((industry) => (
                  <span key={industry} className="px-3 py-1 bg-[#E8F8FD] text-[#1A9FCC] text-sm rounded-full font-medium">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Impact — FIRST */}
        <section className="section bg-white">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Organizational Impact
            </h2>
            <p className="text-xl text-[#525252] mb-12 max-w-3xl">
              From board retreats to team coaching, we help organizations build stronger cultures through facilitation, coaching, and strategic development.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {organizationalImpact.map((item) => (
                <div key={item.name} className="bg-[#F5F5F5] rounded-2xl p-8 shadow-sm">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#3EBCE8] text-white mb-4">
                    {item.type}
                  </span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs text-[#737373] bg-white px-2 py-0.5 rounded">{item.engagementType}</span>
                    <span className="text-xs text-[#737373] bg-white px-2 py-0.5 rounded">{item.industry}</span>
                    <span className="text-xs text-[#737373] bg-white px-2 py-0.5 rounded">{item.scope}</span>
                  </div>
                  <blockquote className="text-[#525252] italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                    {item.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`${siteConfig.basePath}/images/${item.image}`}
                        alt={item.name}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#3EBCE8]/20 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">{item.name}</p>
                      <p className="text-sm text-[#737373]">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Success Stories — SECOND */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-12">
              Individual Success Stories
            </h2>
            <div className="space-y-12">
              {successStories.map((story) => (
                <div key={story.name} className="card-bordered">
                  <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
                    {/* Client Info */}
                    <div>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                        style={{ backgroundColor: story.color }}
                      >
                        {story.category}
                      </span>
                      {story.image && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={`${siteConfig.basePath}/images/${story.image}`}
                          alt={story.name}
                          loading="lazy"
                          className="w-20 h-20 rounded-full object-cover mb-4"
                        />
                      )}
                      <h3 className="heading-card">{story.name}</h3>
                      <p className="text-[#525252] font-medium">{story.title}</p>
                      <p className="text-sm text-[#737373]">{story.location}</p>
                    </div>

                    {/* Challenge & Results */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2">The Challenge</h4>
                        <p className="text-[#737373]">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2">Results Achieved</h4>
                        <ul className="space-y-2">
                          {story.results.map((result) => (
                            <li key={result} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-[#3EBCE8] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-[#525252]">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <blockquote className="border-l-4 border-[#3EBCE8] pl-4 italic text-[#525252]">
                        &ldquo;{story.quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Testimonials */}
        <section className="section bg-white">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              More Client Experiences
            </h2>
            <p className="text-xl text-[#525252] mb-12 max-w-3xl">
              Every coaching journey is unique. Here&apos;s what other clients have shared about their experience.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalTestimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-[#F5F5F5] rounded-2xl p-6">
                  <blockquote className="text-[#525252] text-sm mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    {testimonial.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`${siteConfig.basePath}/images/${testimonial.image}`}
                        alt={testimonial.name}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#3EBCE8]/20 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium text-[#1A1A1A] text-sm">{testimonial.name}</p>
                      <span className="text-[#737373] text-xs">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#3EBCE8]">25+</p>
                <p className="text-[#A3A3A3] mt-2">Years of Leadership Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#FFC425]">500+</p>
                <p className="text-[#A3A3A3] mt-2">Leaders Developed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#C4D82E]">50+</p>
                <p className="text-[#A3A3A3] mt-2">Organizations Served</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#E91E8C]">100%</p>
                <p className="text-[#A3A3A3] mt-2">Client Satisfaction</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Ready to create this kind of impact?
              </h2>
              <p className="mt-6 text-xl text-[#A3A3A3]">
                Let&apos;s discuss how CWC can support your organization&apos;s leadership development goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request a Proposal
                </Link>
                <a href="https://calendly.com/coachingwomenofcolor/organizational-inquiry-call" target="_blank" rel="noopener noreferrer" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#1A1A1A]">
                  Schedule an Executive Briefing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
