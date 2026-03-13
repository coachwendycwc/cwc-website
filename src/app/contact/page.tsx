"use client";

import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { Header, Footer, Toast } from "@/components";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    type: "organization",
    service: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleCloseToast = useCallback(() => setShowToast(false), []);

  const organizationalServices = [
    "Keynote Speaking",
    "Strategic Leadership & Board Retreats",
    "Executive Coaching",
    "Workshops & Webinars",
    "Group Coaching",
    "Virtual Series",
    "Performance Coaching (RESET Method®)",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_email: "wendy@coachingwomenofcolor.com",
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      company: formData.company || "N/A",
      role: formData.role || "N/A",
      team_size: formData.teamSize || "N/A",
      interest_type: formData.type === "organization" ? "Organizational Services" : "Individual Coaching",
      service: formData.service || "N/A",
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_n62dsgh",
        "template_xl8go0s",
        templateParams,
        "y6UfKicpoRY2LvZNa"
      );
      setToastMessage("Message sent successfully! We'll get back to you within 1 business day.");
      setToastType("success");
      setShowToast(true);
      setFormData({ name: "", email: "", company: "", role: "", teamSize: "", type: "organization", service: "", message: "" });
    } catch (error: unknown) {
      const err = error as { status?: number; text?: string };
      console.error("EmailJS Error Status:", err?.status);
      console.error("EmailJS Error Text:", err?.text);
      console.error("EmailJS Error Full:", JSON.stringify(error));
      setToastMessage("Something went wrong. Please try again or email us directly at wendy@coachingwomenofcolor.com");
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Role/Title
                      </label>
                      <input
                        type="text"
                        id="role"
                        placeholder="e.g., VP of HR, L&D Director"
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl focus:border-[#3EBCE8] focus:ring-2 focus:ring-[#3EBCE8]/20 outline-none transition-all bg-white"
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      >
                        <option value="">Select...</option>
                        <option value="Individual">Individual</option>
                        <option value="Team (5-20)">Team (5-20)</option>
                        <option value="Department (20-100)">Department (20-100)</option>
                        <option value="Organization-wide (100+)">Organization-wide (100+)</option>
                      </select>
                    </div>
                  </div>

                  <fieldset>
                    <legend className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      I&apos;m interested in *
                    </legend>
                    <div className="flex gap-4" role="radiogroup" aria-label="Service type">
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
                  </fieldset>

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

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-sm text-[#737373] mt-3">
                    Typical response time: within 1 business day.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12 lg:sticky lg:top-32">
                  <h2 className="heading-card mb-6">Other Ways to Connect</h2>

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
                        Follow Us
                      </p>
                      <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/wendyperdomoleadershipcoach/" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#3EBCE8] transition-colors">
                          LinkedIn
                        </a>
                        <a href="https://www.instagram.com/coachwendyp/" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#3EBCE8] transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-[#E5E5E5] pt-6">
                      <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider mb-2">
                        For Your Team
                      </p>
                      <a
                        href="/cwc-capabilities-statement.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#525252] hover:text-[#3EBCE8] transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download our Capabilities Statement
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

      <Toast
        message={toastMessage}
        type={toastType}
        show={showToast}
        onClose={handleCloseToast}
      />
    </>
  );
}
