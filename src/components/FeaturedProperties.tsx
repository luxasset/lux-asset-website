"use client";

import { useMemo, useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";

const filters = ["All", "Villa", "Penthouse", "Estate", "Apartment"] as const;

export default function FeaturedProperties() {
  const [active, setActive] = useState<typeof filters[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? properties
        : properties.filter((p) => p.type === active),
    [active]
  );

  return (
    <section id="properties" className="bg-[#f8f5f0] px-6 pb-24 pt-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b4423]">
            Featured Listings
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#1e3a8a] sm:text-4xl">
            Exceptional Properties
          </h2>
          <p className="mt-4 text-gray-600">
            Browse our handpicked selection of the most sought-after homes and
            estates currently on the market.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all ${
                active === f
                  ? "bg-[#1e3a8a] text-white"
                  : "bg-white text-[#1e3a8a] hover:bg-[#1e3a8a]/10"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property, i) => (
            <Reveal key={property.id} delay={i * 80}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
