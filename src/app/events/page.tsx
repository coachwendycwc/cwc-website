"use client";

import { useState, useCallback } from "react";
import { Header, Footer, ImageLightbox, LazyImage } from "@/components";
import { siteConfig } from "@/config";

const upcomingEvents = [
  {
    title: "Overcoming Self-Doubt to Lead with Confidence",
    subtitle: "Imposter Syndrome Webinar",
    date: "Friday, February 27, 2026",
    time: "12:00 PM – 1:00 PM EST",
    location: "Virtual Session | Zoom",
    image: "imposter-syndrome-webinar.jpg",
    description:
      "Join Wendy Perdomo — Imposter Syndrome Coach Practitioner — for a powerful webinar on overcoming self-doubt and leading with confidence. Register on Eventbrite.",
  },
  {
    title: "Be the Change Weekend at Colgate University",
    subtitle: "Celebrating 25 Years of Service",
    date: "Friday & Saturday, March 6–7, 2026",
    time: "All Day",
    location: "Colgate University, Hamilton, NY",
    image: "be-the-change-colgate.jpg",
    description:
      "Wendy Perdomo '96 joins fellow alumni panelists to explore careers in the common good — education, nonprofit leadership, medicine, public research, law, and more.",
  },
];

const pastEventFlyers = [
  {
    image: "affinity-healing-circle-flyer.jpg",
    title: "March Affinity Leadership Healing Circle — Developing Capacity Coaching",
    date: "March 26, 2026",
  },
  {
    image: "rise-leadership-conference.jpg",
    title: "R.I.S.E Women's Leadership Conference — Panel Moderator",
    date: "2025",
  },
  {
    image: "wocip-conference-flyer.jpg",
    title: "WOCIP 9th Annual Conference — Panelist",
    date: "October 22–26, 2025",
  },
  {
    image: "reinvention-summit-flyer.png",
    title: "Reinvention: An Elevation Summit",
    date: "April 5, 2025",
  },
  {
    image: "womens-retreat-flyer.png",
    title: "Finding Your Purpose Women's Retreat",
    date: "October 25–26, 2025",
  },
  {
    image: "burnout-webinar-flyer.png",
    title: "How to Ditch the Burnout: From Burnout to Breakthrough",
    date: "March 2024",
  },
  {
    image: "bold-woc-series-flyer.png",
    title: "Bold Women of Color — Take Action Now!",
    date: "2023",
  },
  {
    image: "virtual-series-may-2022.jpg",
    title: "Virtual Series for Professional Women of Color",
    date: "May 19, 2022",
  },
  {
    image: "virtual-series-flyer.png",
    title: "Virtual Series for Professional Women of Color",
    date: "October 2022",
  },
  {
    image: "quote-graphic.png",
    title: "Accomplishment Coaching Feature",
    date: "2022",
  },
  {
    image: "fsp-personal-brand.jpg",
    title: "How to Elevate Your Personal Brand — FSP Chicago",
    date: "2022",
  },
  {
    image: "bold-woc-self-saboteur.jpg",
    title: "Bold Women of Color — Self Saboteur No More",
    date: "November 17, 2021",
  },
  {
    image: "bold-woc-full-flyer.jpg",
    title: "Bold Women of Color — Take Action Now! Virtual Series",
    date: "2021",
  },
  {
    image: "bold-woc-ig-share.png",
    title: "Bold Women of Color — Community Share",
    date: "2021",
  },
  {
    image: "ellevate-mentoring-meetup.jpg",
    title: "Ellevate Network — Mentoring Meetup: Being an Ally or Accomplice",
    date: "March 25, 2021",
  },
  {
    image: "fierce-vulnerability-ig-live.jpg",
    title: "Fierce Vulnerability IG Live with Coach Sophia Casey",
    date: "January 13, 2021",
  },
  {
    image: "latina-emergence-conference-2020.jpg",
    title: "Latina Emergence and Empowerment Conference — The Future of Work",
    date: "October 5, 2020",
  },
  {
    image: "inner-critic-ig-live.jpg",
    title: "How to Get Rid of Your Inner Critic — Network By Her IG Live",
    date: "April 30, 2020",
  },
  {
    image: "network-by-her-flyer.jpg",
    title: "Network By Her — Learn with Us IG Live",
    date: "April 30, 2020",
  },
  {
    image: "ultimate-career-leap.jpg",
    title: "Ultimate Career Leap with VJ Niles — LinkedIn Live",
    date: "February 25, 2020",
  },
  {
    image: "woman-of-impact-collective.jpg",
    title: "Woman of Impact Collective — IG Live",
    date: "2020",
  },
  {
    image: "bloomberg-quicktake-1.jpg",
    title: "Featured on Bloomberg QuickTake",
    date: "2020",
  },
  {
    image: "bloomberg-quicktake-2.png",
    title: "Featured on Bloomberg QuickTake",
    date: "2020",
  },
  {
    image: "wonder-girls-feature.jpg",
    title: "Wonder Girls Feature",
    date: "2020",
  },
  {
    image: "breakfast-with-champions.jpg",
    title: "Breakfast with Champions — Women CEOs, Butterfly Dreamz",
    date: "October 26, 2019",
  },
  {
    image: "proud-to-be-latina-flyer.jpg",
    title: "Proud to Be Latina — 9th Annual Empowerment & Leadership Conference",
    date: "June 3, 2019",
  },
];

export default function EventsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine all event images for lightbox navigation
  const allEventImages = [
    ...upcomingEvents.map((e) => ({
      src: `${siteConfig.basePath}/images/events/${e.image}`,
      alt: e.title,
    })),
    ...pastEventFlyers.map((e) => ({
      src: `${siteConfig.basePath}/images/events/${e.image}`,
      alt: e.title,
    })),
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allEventImages.length - 1 : prev - 1));
  }, [allEventImages.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allEventImages.length - 1 ? 0 : prev + 1));
  }, [allEventImages.length]);

  const handleClose = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide text-center">
            <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
              Workshops, Webinars & Speaking Engagements
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
              Events
            </h1>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              Upcoming and past events — from webinars and workshops to retreats,
              summits, and keynote appearances.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={`${event.title}-${index}`}
                  className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <LazyImage
                      src={`${siteConfig.basePath}/images/events/${event.image}`}
                      alt={event.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-2">
                      {event.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[#525252] text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-[#737373]">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#3EBCE8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#3EBCE8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#3EBCE8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Past <span className="text-gradient">Events</span>
              </h2>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {pastEventFlyers.map((event, index) => (
                <div
                  key={`${event.title}-${index}`}
                  className="mb-6 break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => openLightbox(upcomingEvents.length + index)}
                >
                  <LazyImage
                    src={`${siteConfig.basePath}/images/events/${event.image}`}
                    alt={event.title}
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1A1A1A] text-sm">{event.title}</h3>
                    <p className="text-xs text-[#737373] mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ImageLightbox
        images={allEventImages}
        currentIndex={currentIndex}
        open={lightboxOpen}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <Footer />
    </>
  );
}
