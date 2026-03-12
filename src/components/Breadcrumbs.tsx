import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://coachingwomenofcolor.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="w-3.5 h-3.5 text-[#A3A3A3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {isLast || !item.href ? (
                <span className="text-[#737373]">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
