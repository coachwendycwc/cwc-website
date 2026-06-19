import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Breadcrumbs } from "@/components";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://coachingwomenofcolor.com/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://coachingwomenofcolor.com/blog/${post.slug}/`,
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && {
        images: [
          {
            url: `https://coachingwomenofcolor.com${post.image}`,
            width: 1200,
            height: 675,
            alt: post.title,
          },
        ],
      }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Article structured data for SEO
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://coachingwomenofcolor.com/about/",
    },
    publisher: {
      "@type": "Organization",
      name: "Coaching Women of Color",
      url: "https://coachingwomenofcolor.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://coachingwomenofcolor.com/blog/${post.slug}/`,
    },
  };

  // Find related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: post.title },
                  ]}
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-[#3EBCE8] uppercase tracking-wider bg-[#E8F8FD] px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-[#737373]">{post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-4">
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">
                    {post.author}
                  </p>
                  <p className="text-sm text-[#737373]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="bg-white pt-8">
            <div className="container-wide">
              <div className="max-w-3xl">
                <div className="rounded-2xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover object-top aspect-[16/9]"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-[#1A1A1A] prose-headings:font-semibold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-[#525252] prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-[#3EBCE8] prose-a:font-medium hover:prose-a:text-[#1A9FCC] prose-a:no-underline
                  prose-ul:text-[#525252] prose-ul:my-4
                  prose-li:mb-2 prose-li:leading-relaxed
                  prose-strong:text-[#1A1A1A]
                  prose-em:text-[#525252]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="pb-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-wider mb-2">
                  About the Author
                </p>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  Wendy Perdomo
                </h3>
                <p className="text-[#525252] text-sm leading-relaxed mb-4">
                  Founder & Executive Leadership Coach at Coaching Women of
                  Color&reg;. With 25+ years of experience, Wendy has developed
                  500+ leaders across 50+ organizations through executive
                  coaching, keynote speaking, and leadership development.
                </p>
                <Link
                  href="/about/"
                  className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors"
                >
                  Learn more about Wendy &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section bg-[#FAFAFA] border-t border-[#E5E5E5]">
            <div className="container-wide">
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8">
                More from the blog
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link
                      href={`/blog/${related.slug}/`}
                      className="block p-8"
                    >
                      <span className="text-xs font-medium text-[#3EBCE8] uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-[#1A1A1A] group-hover:text-[#3EBCE8] transition-colors leading-snug">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#525252] line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to invest in your leadership?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Book a free consultation and let&apos;s talk about your goals.
            </p>
            <div className="mt-10">
              <Link href="/schedule/" className="btn-primary">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
