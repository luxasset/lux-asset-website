"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link
          href="#home"
          className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-[#1e3a8a]" : "text-white"
          }`}
        >
          LUX<span className="text-[#6b4423]">ASSET</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#6b4423] ${
                scrolled ? "text-[#1e3a8a]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#c9a227] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1e3a8a] hover:scale-105"
          >
            Get in Touch
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-[#1e3a8a]" : "bg-white"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-[#1e3a8a]" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-[#1e3a8a]" : "bg-white"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg mt-2 mx-4 rounded-2xl overflow-hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-[#1e3a8a] font-medium border-b border-gray-100 hover:bg-[#f8f5f0]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-[#6b4423] font-semibold"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
