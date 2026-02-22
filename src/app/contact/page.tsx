"use client";

import { useState } from "react";
import { Header, Footer } from "@/components";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "organization",
    service: "",
    message: "",
  });

  const organizationalServices = [
    "Executive Coaching",
    "Group Coaching",
    "Keynote Speaking",
    "Workshops & Webinars",
    "Virtual Series",
    "Strategic Leadership & Board Retreats",
    "Performance Coaching (RESET Method™)",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Inquiry from ${formData.name}${formData.service ? ` — ${formData.service}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nInterested In: ${formData.type === "organization" ? "Organizational Services" : "Individual Coaching"}\nService: ${formData.service || "N/A"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:wendy@coachingwomenofcolor.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Let&apos;s start the
                <br />
                <span className="text-gradient">conversation.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Ready to transform your organization or take your career to the next level?
                We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      I&apos;m interested in *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="organization"
                          checked={formData.type === "organization"}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value, service: "" })}
                          className="w-4 h-4 text-[#3EBCE8] focus:ring-[#3EBCE8]"
                        />
                        <span className="text-[#525252]">Organizational Services</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="individual"
                          checked={formData.type === "individual"}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value, service: "" })}
                          className="w-4 h-4 text-[#3EBCE8] focus:ring-[#3EBCE8]"
                        />
                        <span className="text-[#525252]">Individual Coaching</span>
                      </label>
                    </div>
                  </div>

                  {formData.type === "organization" && (
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Which service are you interested in? *
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all bg-white"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">Select a service...</option>
                        {organizationalServices.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                  <h3 className="heading-card mb-6">Other Ways to Connect</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider mb-2">
                        Email
                      </p>
                      <a href="mailto:wendy@coachingwomenofcolor.com" className="text-[#1A1A1A] hover:text-[#3EBCE8] transition-colors">
                        wendy@coachingwomenofcolor.com
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider mb-2">
                        Phone
                      </p>
                      <a href="tel:+19172241343" className="text-[#1A1A1A] hover:text-[#3EBCE8] transition-colors">
                        (917) 224-1343
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider mb-2">
                        Follow Us
                      </p>
                      <div className="flex gap-4">
                        <a href="https://linkedin.com/company/coachingwomenofcolor" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#3EBCE8] transition-colors">
                          LinkedIn
                        </a>
                        <a href="https://instagram.com/coachingwomenofcolor" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#3EBCE8] transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E5E5E5]">
                      <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider mb-2">
                        Book a Consultation
                      </p>
                      <p className="text-[#737373] mb-4">
                        Prefer to schedule a call directly? Book a free 30-minute consultation.
                      </p>
                      <a href="/book" className="link-arrow text-sm">
                        Schedule Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
