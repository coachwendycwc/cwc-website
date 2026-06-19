import Link from "next/link";
import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Coaching Women of Color. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-[#F5F5F5] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
                Privacy Policy
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
                  <h2 className="heading-card mb-4">Introduction</h2>
                  <p className="text-[#525252] leading-relaxed">
                    Coaching Women of Color (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
                    respects your privacy and is committed to protecting your personal data. This
                    privacy policy explains how we collect, use, and safeguard your information
                    when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Information We Collect</h2>
                  <p className="text-[#525252] leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="space-y-3 text-[#525252]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Contact information:</strong> Name, email address, phone number, and organization name when you fill out forms or contact us.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Usage data:</strong> Information about how you use our website, including pages visited and time spent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Communication records:</strong> Records of our correspondence if you contact us.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-card mb-4">How We Use Your Information</h2>
                  <p className="text-[#525252] leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="space-y-3 text-[#525252]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Provide and improve our coaching and consulting services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Send you relevant updates and marketing communications (with your consent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Analyze website usage to improve user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Comply with legal obligations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Data Security</h2>
                  <p className="text-[#525252] leading-relaxed">
                    We implement appropriate technical and organizational measures to protect
                    your personal data against unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission over the internet is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Your Rights</h2>
                  <p className="text-[#525252] leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-3 text-[#525252]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Access the personal data we hold about you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Request correction of inaccurate data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Request deletion of your data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3EBCE8] rounded-full mt-2 flex-shrink-0" />
                      <span>Opt out of marketing communications</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Cookies</h2>
                  <p className="text-[#525252] leading-relaxed">
                    Our website may use cookies to enhance your browsing experience. You can
                    control cookie settings through your browser preferences. Note that
                    disabling cookies may affect some website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Third-Party Services</h2>
                  <p className="text-[#525252] leading-relaxed">
                    We may use third-party services (such as scheduling tools, email services,
                    and analytics) that collect and process data according to their own privacy
                    policies. We encourage you to review the privacy policies of any third-party
                    services you interact with through our website.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Changes to This Policy</h2>
                  <p className="text-[#525252] leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of
                    any changes by posting the new policy on this page and updating the
                    &ldquo;Last updated&rdquo; date.
                  </p>
                </div>

                <div>
                  <h2 className="heading-card mb-4">Contact Us</h2>
                  <p className="text-[#525252] leading-relaxed">
                    If you have questions about this privacy policy or our data practices,
                    please contact us:
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
