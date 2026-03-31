"use client";

import Link from "next/link";
import { Header, Footer, TestimonialsCarousel, AnimatedCounter, VideoHero } from "@/components";
import { siteConfig } from "@/config";

// Organizational solutions - reordered by revenue potential
const solutions = [
  {
    id: "keynote-speaking",
    title: "Keynote Speaking",
    description: "Inspire change. Ignite action.",
    color: "#C4D82E",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
  {
    id: "strategic-retreats",
    title: "Strategic Retreats",
    description: "Align, strategize, and move forward together.",
    color: "#FFC425",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    description: "1:1 high-impact coaching for leaders.",
    color: "#3EBCE8",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: "workshops",
    title: "Workshops & Webinars",
    description: "Interactive learning experiences.",
    color: "#E91E8C",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: "group-coaching",
    title: "Group Coaching",
    description: "Leadership development at scale.",
    color: "#FFC425",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    id: "virtual-series",
    title: "Virtual Series",
    description: "Sustained behavior change.",
    color: "#9333EA",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    id: "performance-coaching",
    title: "Performance Coaching",
    description: "The RESET Method® for navigating underperformance.",
    color: "#E91E8C",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const stats = [
  { value: 25, suffix: "+", label: "Years in Leadership Development" },
  { value: 500, suffix: "+", label: "Leaders Coached Across Industries" },
  { value: 50, suffix: "+", label: "Organizational Partnerships" },
  { value: 100, suffix: "%", label: "Client Satisfaction Rating" },
];

const testimonials = [
  {
    quote:
      "Wendy facilitated a board retreat for us. She is a brilliant facilitator whose empathetic approach builds trust quickly. Wendy's superpower is the speed with which she is able to assess needs, navigate dynamics, and coalesce groups around shared goals. We were extremely pleased with the quality and clarity of Wendy's preparation, delivery, and follow up. She is in a class by herself! I would recommend her without hesitation.",
    author: "Lynne Toye",
    role: "Newark, NJ",
    image: "testimonial-lynne.jpg",
  },
  {
    quote:
      "Working with Wendy kept me steady in a very, very difficult year. And not just me, but my colleague as well. The relationship has changed the emotionality of the workplace, allowing for better collaboration and better outcomes.",
    author: "Emily Kurtz",
    role: "Brooklyn, NY",
    image: "testimonial-emily.png",
  },
  {
    quote:
      "Wendy Perdomo is in a class by herself; they truly broke the \"mold\" with her. Ms. Perdomo's level of expertise, compassion and ability to engage, inform and foster meaningful connections, and discussion, sets her apart from other coaches and facilitators. Her ability to connect with people and ensure that those she is working with get the most out of any engagement is truly unparalleled. She creates a collaborative atmosphere that is also thought provoking. I can't thank her enough for creating a space where growth and learning could thrive. It has been both an honor and privilege to work with Wendy. I have left all our interactions inspired and excited for what is yet to come. Wendy is a thoughtful leader who truly cares about supporting and developing her team, her colleagues, her clients and any organization that she serves. She is a high impact leader who authentically mentors and coaches. I can not recommend her enough!",
    author: "Tanya Ramos-Puig",
    role: "Florida",
    image: "testimonial-tanya.png",
  },
  {
    quote:
      "Wendy is an incredible coach and advocate for her clients. I worked with her for 6 months and found her guidance invaluable. She helped me grow as a professional and gave me tangible tools to use to better myself as a leader. I highly recommend working with Wendy, she is the absolute best!",
    author: "Teal Inzunza",
    role: "New York, NY",
    image: "testimonial-teal.png",
  },
  {
    quote:
      "Wendy is an amazing coach and an inspiring leader. I feel deeply appreciative of Wendy's support during some professionally challenging months. She catered our sessions to my needs, even when I didn't know what I needed, I am better at identifying, setting and communicating my boundaries. I feel more confident in my decision-making skills as it relates to my professional growth. Wendy is also just a dope human-being with amazing experience and I genuinely enjoyed meeting with her during our coaching calls.",
    author: "Alexis Brown",
    role: "Washington, D.C.",
    image: "testimonial-alexis.png",
  },
  {
    quote:
      "I wanted to share some amazing news. I wanted to let you know that I am so grateful for your services and skills because I got an off cycle raise and it was huge. And they want to give more opportunities so I'm training my team up for the next level.",
    author: "Melissa Delgado",
    role: "California",
    image: "testimonial-melissa.png",
  },
  {
    quote:
      "With your coaching, I feel I am doing this. It's not a matter of, you could… I can. I'm feeling a sense of responsibility and purpose, but I'm also feeling a sense of potency and power, and, you know, I've really had to recommit to why I'm doing this. You really have supported all of me, I just want to say that one of the biggest changes was in communication, the self saboteur, inventory. In our first session, you said something to me that has changed everything, the essence of it was you are not there to become an executive in the way that you're imagining it, you are there to become you and for the system to shift around you. You don't have to conform to a toxic system. You are there to bring something that is nourishing into a toxic system and that has changed everything like I am what an executive can be, you know, an executive can be disabled, an executive can be indigenous, you know, an executive can identify as a non binary woman, and now I identify more as trans masculine, and that has happened so an Executive leader can be trans and can transition, and can, serve tea at meetings and ask people how they're doing, and that has given me permission. I don't feel like I'm trying to become anything other than myself..I know who I am in the world now, and I know the ancestors I carry with me, and I know what they have done. And I feel like my roots are back, and I know what they are, and I've never really had that in this way. And so to just see a person, you, who has done so much work to be embodied in your own power, and is looking back at me that looks a little like my face is just…priceless",
    author: "Catarina Campbell",
    role: "Vermont",
    image: "testimonial-catarina.png",
  },
  {
    quote:
      "Wendy's life and leadership coaching program has successfully equipped me with the effective mental mindset tools and techniques to overcome my own \"analysis paralysis.\" She has supported me in developing a deeper self-awareness and increased accountability towards my proposed life and career goals. As CEO & Founder of P2P, some of my accomplishments include: Served as a guest speaker and participated in vending opportunities at various women's empowerment events. Featured guest on the Donna Drake Show/Live It Up to discuss my business (show aired on both NBC and CBS). Currently working on my second book which is soon to be published. Decided to take control of my health and became a gym member. Released 30 lbs. of weight since I have been exercising after several months.",
    author: "Nicole Carr",
    role: "Long Island, NY",
    image: "testimonial-nicolecarr.png",
  },
  {
    quote:
      "I really appreciate you and the coaching that I've had with you. Coming to this place has been huge. I recognize that because of the conversations that we've had and the calls that we've had, without them I don't think I wouldn't have gotten here, or I wouldn't have gotten here as quickly as I have. So I appreciate your perspective. I appreciate you challenging me, I appreciate you, showing me so much of myself and peeling back layers. I was able to really hone in on what's really in here to help others discover that as well. Thank you for what you do. I'm so excited for what the future holds for me.",
    author: "Morgan Bullock",
    role: "Atlanta, GA",
    image: "testimonial-morgan.png",
  },
  {
    quote:
      "Wendy is an incredible coach who understands women of color and helped me feel seen, heard, and understood. She approached all of our sessions with patience, grace, and compassion. Even so, she wasn't afraid to share hard truths and insights that supported my personal and professional journey during our year of working together. Connecting with Wendy was typically the highlight of my week, as it gave me the opportunity to reflect and troubleshoot issues I was experiencing at work in a supportive and non-judgemental environment. My experience with Wendy transformed coaching from a mere task on my to-do list into a nurturing experience that truly supported my growth. I highly recommend Wendy to anyone looking for a transformative coaching experience.",
    author: "Stephanie Lopez",
    role: "California",
    image: "testimonial-stephanie.png",
  },
  {
    quote:
      "I started working with Wendy prior to assuming a position of leadership in my university. I was concerned about my ability to step fully into the role and gain the respect of my peers, in order to transform my workspace into a high functioning team. Wendy pushed me to consider my strengths and how to apply myself for best results. She also helped me work through difficult issues that I encountered by brainstorming solutions that work for me. The customized attention and sage advice made all of the difference on my journey, and has helped me maintain the energy and enthusiasm for the road ahead.",
    author: "Lisa Morgan",
    role: "Ontario, Canada",
    image: "testimonial-lisa.png",
  },
  {
    quote:
      "At any stage of your career or life journey, along the way you can get stuck. At the time I reached out to Wendy, I was a retired educator struggling to craft a plan to define a new identity. I chose to be coached by Wendy because I TRUSTED that she would help me to break through the barriers that were holding me back from achieving my next level dreams and goals. Wendy helped me to create a blueprint for my second act after retirement. Her approach was uniquely crafted and tailored specifically to my needs. She helped me to quickly identify my stuck spots, challenge my limiting beliefs and to recognize and embrace all of the tools and resources around me that would facilitate my transformation. I appreciated being coached by Wendy and I feel that she has established a unique approach to personal growth and development. Wendy listened and was attentive to my specific needs. She is straightforward and her coaching conversations always felt highly individualized. Wendy's coaching gave me the opportunity to craft a powerful and compelling growth plan with self-created time frames. My work with Wendy was indeed challenging and thought provoking but certainly more than worth it and with her encouragement, inspiration and support, I did indeed accomplish my second act dream of graduating from Fashion Institute of Technology as a Costume Designer and Wardrobe Technician. I highly endorse Wendy as a professional coach.",
    author: "Lori Bennett",
    role: "Brooklyn, NY",
    image: "testimonial-lori.png",
  },
  {
    quote:
      "I had met Wendy and participated in her Women of Color series in 2020 while undergoing some serious challenges with a previous role. During that time, Wendy provided some great feedback that resonated with me so when I had the opportunity to work with her as my Executive Coach, it was a no brainer. Wendy has a holistic approach to coaching, seeing me not only as a professional, but as the multi faceted woman that I am. Wendy seamlessly creates a safe and non judgmental approach all while thoughtfully holding the mirror to some of my thoughts and actions that did not serve me. I cannot recommend Wendy enough.",
    author: "Patricia Quintero",
    role: "New York, NY",
    image: "testimonial-patricia.png",
  },
  {
    quote:
      "I recently began a mid-career exploration of what new professional chapters might lie ahead and reached out to Wendy to help me polish my (dusty) CV. During our consultation call, it quickly became apparent that Wendy could offer me so much more than resume editing -- her dynamic personality and candor captured my attention immediately and so began my first coaching experience. I learned so much about myself while working with Wendy. Her careful listening and encouragement during each session combined with the innovative tools and resources that she shared helped guide me towards new ways of thinking about my strengths, skills, and abilities. This was only made more meaningful by Wendy sharing with me her own lived experience as a woman of color. Being able to connect so openly and honestly with someone who could relate how I moved through the world was an absolute gift.",
    author: "Nicole Vlado",
    role: "Brooklyn, NY",
    image: "testimonial-nicolev.png",
  },
  {
    quote:
      "Working with you has given me a clarity I haven't had in a long time. I would not have felt qualified to pursue a new role if it wasn't for the work we did together, regardless of what it says on paper.",
    author: "Adrianne Rosario",
    role: "New York, NY",
    image: "testimonial-adrianne.png",
  },
  {
    quote:
      "I was able to accomplish nearly everything in my action planning document. At the beginning of the cohort, I was jobless and depressed. Being a part of the cohort and working on my action planning document allowed me to achieve my goals alongside others who would hold me accountable. If there is anyone I would recommend as a coach, it's Wendy. She challenged me to not make excuses and to hold myself accountable. She reminded me that there is a beautiful life on the other side of fear.",
    author: "Tiffany Cordero",
    role: "Bronx, NY",
    image: "testimonial-tiffany.jpg",
  },
];

// Client logos for carousel
const clientLogos = [
  { name: "Johnson & Johnson", image: "logos/Johnson-and-Johnson.jpg" },
  { name: "Genentech", image: "logos/Genentech.jpg" },
  { name: "Novo Nordisk", image: "logos/Novo-Nordisk.jpg" },
  { name: "VaynerMedia", image: "logos/VaynerMedia.jpg" },
  { name: "DataRobot", image: "logos/DataRobot.jpg" },
  { name: "TD Bank", image: "logos/TD-Bank.jpg" },
  { name: "NYC Dept of Education", image: "logos/NYC-Department-of-Education.jpg" },
  { name: "Colgate University", image: "logos/Colgate-University.jpg" },
  { name: "University of Michigan", image: "logos/University-of-Michigan.jpg" },
  { name: "Bloomberg Quicktake", image: "logos/Bloomberg-Quicktake.jpg" },
  { name: "Ellevate", image: "logos/Ellevate.jpg" },
  { name: "SURGE Institute", image: "logos/Surge-Institute.jpg" },
  { name: "RiseBoro", image: "logos/RiseBoro-Community-Partnership.jpg" },
  { name: "ALPFA", image: "logos/ALPFA.jpg" },
  { name: "HACE", image: "logos/HACE-Hispanic-Alliance-for-Career-Enhancement.jpg" },
  { name: "URI NYC", image: "logos/URI-NYC-Urban-Resource-Institute.jpg" },
  { name: "Poderistas", image: "logos/Poderistas.jpg" },
  { name: "Hills", image: "logos/Hills.jpg" },
  { name: "ATD Maryland", image: "logos/ATD-Maryland.jpg" },
  { name: "Developing Capacity Coaching", image: "logos/Developing-Capacity-Coaching.jpg" },
  { name: "Howard Center", image: "logos/Howard-Center.jpg" },
  { name: "ICLI Rising", image: "logos/ICLI-Rising-International-Coaching-Leadership-Institute.jpg" },
  { name: "Latinas Represent", image: "logos/Latinas-Represent.jpg" },
  { name: "Monique Burr Foundation", image: "logos/Monique-Burr-Foundation.jpg" },
  { name: "NJ Arts & Culture Renewal Fund", image: "logos/NJ-Arts-and-Culture-Renewal-Fund.jpg" },
  { name: "Proud To Be Latina", image: "logos/Proud-To-Be-Latina.jpg" },
  { name: "VillageCareMAX", image: "logos/VillageCareMAX.jpg" },
  { name: "Women in Housing & Finance", image: "logos/Women-in-Housing-and-Finance.jpg" },
];


export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section - Video Background */}
        <VideoHero
          videoSrc="videos/wendy-keynote.mp4"
          posterSrc="images/wendy-hero.jpg"
          headlineTop="Invest in"
          headlineGradient="your leaders."
          subheadline="Invest in the leaders who are already transforming your organization—through executive coaching, keynotes, workshops, and strategic retreats."
          ctaLabel="Request a Proposal"
          ctaHref="/contact"
          secondaryCtaLabel="Download Capabilities Brief"
          footerLink={{
            label: "Looking for individual coaching? Start here →",
            href: "/for-individuals",
          }}
          overlayOpacity={0.5}
        />

        {/* Trusted By - Client Logos Carousel */}
        <section className="section-tight bg-white border-y border-[#E5E5E5] overflow-hidden">
          <div className="container-wide">
            <p className="text-center text-sm font-medium text-[#737373] uppercase tracking-widest mb-10">
              Transforming Leaders From
            </p>
          </div>
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Scrolling container - logos repeat twice for seamless loop */}
            <div className="flex animate-scroll hover:[animation-play-state:paused]" style={{ width: "max-content", animationDuration: "70s" }}>
              {[...clientLogos, ...clientLogos].map((org, index) => (
                <div key={`${org.name}-${index}`} className="flex items-center justify-center mx-8 flex-shrink-0" style={{ width: "180px", height: "90px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/${org.image}`}
                    alt={org.name}
                    loading="lazy"
                    width={180}
                    height={90}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="container-wide">
            <p className="text-center text-xs text-[#737373] mt-8">
              And many more across Fortune 500, Government, Higher Education, Healthcare, Technology, Finance & Non-Profit sectors
            </p>
          </div>
        </section>

        {/* Organizational Solutions */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Solutions that close
                <br />
                <span className="text-gradient">leadership gaps.</span>
              </h2>
              <p className="body-large mt-6">
                From keynotes to year-long coaching engagements—programs designed to develop, retain, and advance your leaders.
              </p>
            </div>

            {/* Solution cards - simple grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {solutions.map((solution) => (
                <Link
                  key={solution.id}
                  href={`/for-organizations#${solution.id}`}
                  className="card-bordered group hover:border-[#3EBCE8] w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <svg className="w-5 h-5" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={solution.icon} />
                    </svg>
                  </div>
                  <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-[#737373] mt-2">{solution.description}</p>
                  <span className="link-arrow mt-6 text-sm">Learn more</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/for-organizations" className="btn-primary">
                Explore All Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1A1A] tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-base md:text-lg text-[#737373] mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The CWC Difference - Dark section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                  We don&apos;t just
                  <br />
                  train teams.
                  <br />
                  <span className="text-[#3EBCE8]">We transform cultures.</span>
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-xl text-[#A3A3A3] leading-relaxed">
                  Every organization says they value diversity. We help you live it. Our approach goes beyond checkboxes and compliance to create environments where women of color genuinely thrive in leadership.
                </p>
                <ul className="space-y-4">
                  {[
                    "Customized engagements scoped to your organization's goals and timeline",
                    "Measurable outcomes tied to retention, engagement, and leadership readiness",
                    "Post-engagement strategic debriefs and sustained support",
                    "25+ years of cross-industry expertise across 50+ organizations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#D4D4D4]">
                      <svg
                        className="w-6 h-6 text-[#3EBCE8] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#3EBCE8] font-medium hover:gap-3 transition-all"
                >
                  Learn our story
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Coaching — Compact Row */}
        <section className="section-tight bg-white border-y border-[#E5E5E5]">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#E8F8FD] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Looking for individual coaching?</p>
                  <p className="text-sm text-[#737373]">Executive coaching designed for women of color ready to lead with clarity and confidence.</p>
                </div>
              </div>
              <Link href="/for-individuals" className="btn-secondary whitespace-nowrap">
                View Individual Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section gradient-pink">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-display">
                Real impact.
                <br />
                <span className="text-gradient">Real stories.</span>
              </h2>
            </div>

            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Free Resources */}
        <section id="resources" className="section bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Resources
              </p>
              <h2 className="heading-display">
                Insights &
                <br />
                <span className="text-gradient">Resources.</span>
              </h2>
              <p className="body-large mt-6">
                Tools and frameworks for HR leaders, L&D professionals, and executives building inclusive cultures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CWC Capabilities Statement */}
              <a
                href={`${siteConfig.basePath}/cwc-capabilities-statement.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#E8F8FD] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  CWC Capabilities Statement
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  A comprehensive overview of our services, credentials, and organizational partnerships. Share with your procurement or HR team.
                </p>
                <span className="link-arrow mt-6 text-sm">Download PDF →</span>
              </a>

              {/* Promotion Readiness Scorecard */}
              <a
                href="https://coachwendycwc.github.io/CWC-automation-platform/cwc-executive-lab/promotion-readiness-scorecard.html"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#FFF4E8] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#FFC425]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  Promotion Readiness Scorecard
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  A 2-minute assessment that evaluates visibility, strategic positioning, and confidence across 5 key dimensions.
                </p>
                <span className="link-arrow mt-6 text-sm">Take the assessment →</span>
              </a>

              {/* LinkedIn Newsletter */}
              <a
                href="https://www.linkedin.com/newsletters/leading-while-woc-7301328637058842624/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#EDE8FD] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#8B7BB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  Leading While WOC Newsletter
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  Insights on leadership, navigating bias, and thriving as a woman of color in the workplace. Subscribe on LinkedIn.
                </p>
                <span className="link-arrow mt-6 text-sm">Subscribe on LinkedIn →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-white">
          <div className="container-tight text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A]">
              Ready to invest in your leaders?
            </h2>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              From a single keynote to a year-long coaching engagement, we design programs that fit your organization&apos;s goals, culture, and budget.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Proposal
              </Link>
              <a href="https://calendly.com/coachingwomenofcolor/organizational-inquiry-call" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
