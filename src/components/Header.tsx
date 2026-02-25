"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config";
/* eslint-disable @next/next/no-img-element */

const navigation = [
  {
    name: "For Organizations",
    href: "/for-organizations",
    matchPaths: ["/for-organizations", "/services"],
  },
  {
    name: "For Individuals",
    href: "/for-individuals",
    matchPaths: ["/for-individuals", "/executive-coaching"],
  },
  {
    name: "About",
    href: "/about",
    matchPaths: ["/about", "/case-studies"],
  },
  {
    name: "Resources",
    href: "/#resources",
    matchPaths: [],
  },
  {
    name: "Gallery",
    href: "/gallery",
    matchPaths: ["/gallery"],
  },
  {
    name: "FAQ",
    href: "/faq",
    matchPaths: ["/faq"],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current path matches any of the nav item's matchPaths
  const isActive = (matchPaths?: string[]) => {
    if (!matchPaths) return false;
    return matchPaths.some((path) => pathname.startsWith(path));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#F5F5F5]">
      <nav
        className="container-wide flex items-center justify-between py-4"
        aria-label="Global"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={`${siteConfig.basePath}/logo.webp`}
            alt="Coaching Women of Color"
            width={280}
            height={70}
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.matchPaths)
                  ? "text-[#3EBCE8] hover:text-[#1A9FCC]"
                  : "text-[#525252] hover:text-[#1A1A1A]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="/book"
            className="px-6 py-2.5 bg-[#3EBCE8] text-white text-sm font-medium rounded-full transition-all hover:bg-[#1A9FCC] hover:scale-105"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-[#525252]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#F5F5F5]">
          <div className="container-wide py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-lg font-medium ${
                  isActive(item.matchPaths)
                    ? "text-[#3EBCE8]"
                    : "text-[#525252]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="block w-full text-center px-6 py-3 bg-[#3EBCE8] text-white font-medium rounded-full mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
