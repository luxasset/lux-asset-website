import Image from "next/image";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-[#1e3a8a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {property.type}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b4423]">
          {property.location}
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold text-[#1e3a8a] transition-colors group-hover:text-[#6b4423]">
          {property.title}
        </h3>
        <p className="mt-3 text-2xl font-extrabold text-[#111111]">
          {property.price}
        </p>

        <div className="mt-5 flex items-center gap-5 border-t border-gray-100 pt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <BedIcon /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <BathIcon /> {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <AreaIcon /> {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </div>
  );
}

function BedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 18v-7a2 2 0 012-2h14a2 2 0 012 2v7M3 18v2M21 18v2M3 12V8a2 2 0 012-2h2a2 2 0 012 2v1M11 9V8a2 2 0 012-2h2a2 2 0 012 2v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3zM4 12V6a2 2 0 012-2h1v2M9 19v2M15 19v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h4M3 15h4M21 9h-4M21 15h-4M9 3v4M15 3v4M9 21v-4M15 21v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
