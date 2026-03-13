import Link from "next/link";
import { Header, Footer } from "@/components";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights on Leadership, Coaching & Career Growth",
  description:
    "Articles and insights from Coaching Women of Color® on executive coaching, leadership development, imposter syndrome, and building inclusive workplaces.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/blog/",
  },
};

export default function BlogPage() {
  // Sort posts by date, newest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Blog
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Insights &
                <br />
                <span className="text-gradient">perspectives.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Practical strategies for leadership, career growth, and building
                workplaces where women of color thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/blog/${post.slug}/`} className="block">
                    {post.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-[#3EBCE8] uppercase tracking-wider bg-[#E8F8FD] px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#737373]">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[#1A1A1A] group-hover:text-[#3EBCE8] transition-colors leading-snug mb-3">
                      {post.title}
                    </h2>
                    <p className="text-[#525252] text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#F5F5F5]">
                      <span className="text-sm text-[#737373]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-sm font-medium text-[#3EBCE8] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read more
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to take the next step?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Whether you&apos;re an organization or an individual leader, we&apos;d
              love to hear from you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/" className="btn-primary">
                Book a Free Consultation
              </Link>
              <Link
                href="/contact/"
                className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#1A1A1A]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
