"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Sarah Whitfield",
    role: "Beverly Hills Homeowner",
    quote:
      "Lux Asset made finding our dream home effortless. Their attention to detail and market expertise is unmatched.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "James Caldwell",
    role: "Manhattan Investor",
    quote:
      "From the first showing to closing day, the team's professionalism and insight gave us total confidence.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Olivia Bennett",
    role: "Miami Beach Buyer",
    quote:
      "An exceptional experience from start to finish. They truly understand luxury real estate and client needs.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-[#1e3a8a] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b88a]">
            Client Stories
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm sm:p-12">
            <svg
              className="mx-auto mb-6 text-[#d8b88a]"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 7c-2.2 0-4 1.8-4 4v6h6v-6H6c0-1.1.9-2 2-2V7zm10 0c-2.2 0-4 1.8-4 4v6h6v-6h-3c0-1.1.9-2 2-2V7z" />
            </svg>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Image
                src={current.avatar}
                alt={current.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-heading font-bold text-white">{current.name}</p>
                <p className="text-sm text-white/70">{current.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-[#d8b88a]" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              ›
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
