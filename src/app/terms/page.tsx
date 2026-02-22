import Link from "next/link";
import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Coaching Women of Color. Review the terms and conditions governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-[#F5F5F5] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
                Terms of Service
              </h1>
              <p className="mt-4 text-[#737373]">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="max-w-3xl prose prose-lg prose-neutral">
              <div className="space-y-12">
                <div>
                  <h2 className="heading-card mb-4">Agreement to Terms</h2>
                  <p className="text-[#525252] leading-relaxed">
                    By accessing or using the Coaching Women of Color website and services,
                    you agree to be bound by these Terms of Service. If you disagree with
                    any part of these terms, you may not access our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Services</h2>
                  <p className="text-[#525252] leading-relaxed">
                    Coaching Women of Color provides executive coaching, life coaching,
                    leadership development, DEI consulting, and related services. Our services
                    are designed to support professional and personal growth but do not
                    constitute therapy, counseling, or medical advice.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Client Responsibilities</h2>
                  <p className="text-[#525252] leading-relaxed mb-4">
                    As a client, you agree to:
                  </p>
                  <ul className="space-y-3 text-[#525252]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Provide accurate information during consultations and coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Attend scheduled sessions or provide at least 24 hours&apos; notice for cancellations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Take responsibility for your own decisions and actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Respect confidentiality in group coaching settings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Confidentiality</h2>
                  <p className="text-[#525252] leading-relaxed">
                    We maintain strict confidentiality regarding all client information and
                    coaching conversations. Information shared in coaching sessions will not
                    be disclosed to third parties without your consent, except as required
                    by law or to prevent imminent harm.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Payment Terms</h2>
                  <p className="text-[#525252] leading-relaxed mb-4">
                    Payment terms for our services:
                  </p>
                  <ul className="space-y-3 text-[#525252]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Fees are agreed upon before services begin and outlined in your service agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Payment is due according to the schedule specified in your agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Refund policies are outlined in individual service agreements</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Cancellation Policy</h2>
                  <p className="text-[#525252] leading-relaxed mb-4">
                    Coaching sessions may be cancelled or rescheduled with a minimum of
                    24 hours&apos; notice prior to your scheduled session time.
                  </p>
                  <ul className="space-y-3 text-[#525252]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>If you fail to provide at least 24 hours&apos; notice, you will be charged the full session fee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Missed sessions (no-shows) are non-refundable and will not be rescheduled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>In the event of a late cancellation or no-show, rescheduling is at the sole discretion of the coach and subject to availability</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Intellectual Property</h2>
                  <p className="text-[#525252] leading-relaxed">
                    All content on this website, including text, graphics, logos, and
                    materials provided during coaching sessions, is the property of
                    Coaching Women of Color and is protected by copyright and other
                    intellectual property laws. You may not reproduce, distribute, or
                    create derivative works without our written permission.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Limitation of Liability</h2>
                  <p className="text-[#525252] leading-relaxed">
                    Coaching Women of Color shall not be liable for any indirect, incidental,
                    special, or consequential damages arising from your use of our services.
                    Our services are provided &ldquo;as is&rdquo; and we make no warranties
                    regarding specific outcomes or results from coaching.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Termination</h2>
                  <p className="text-[#525252] leading-relaxed">
                    Either party may terminate coaching services at any time with written
                    notice. Upon termination, any prepaid fees for unused sessions will be
                    handled according to the refund policy in your service agreement.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Governing Law</h2>
                  <p className="text-[#525252] leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance
                    with the laws of the state in which Coaching Women of Color operates,
                    without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Changes to Terms</h2>
                  <p className="text-[#525252] leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be
                    effective immediately upon posting to this website. Your continued use
                    of our services constitutes acceptance of any modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Contact Information</h2>
                  <p className="text-[#525252] leading-relaxed">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4">
                    <Link href="/contact" className="text-[#3EBCE8] hover:text-[#1A9FCC] font-medium">
                      Contact Us →
                    </Link>
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
