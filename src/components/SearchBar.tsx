"use client";

import { useState } from "react";

const locations = ["Any Location", "Beverly Hills", "Manhattan", "Miami Beach", "Aspen", "Malibu"];
const priceRanges = [
  "Any Price",
  "$500K - $1M",
  "$1M - $3M",
  "$3M - $5M",
  "$5M+",
];
const propertyTypes = ["Any Type", "Villa", "Penthouse", "Estate", "Apartment", "Townhouse"];

export default function SearchBar() {
  const [location, setLocation] = useState(locations[0]);
  const [price, setPrice] = useState(priceRanges[0]);
  const [type, setType] = useState(propertyTypes[0]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const target = document.querySelector("#properties");
    target?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:gap-2 lg:p-3"
    >
      <Select label="Location" value={location} onChange={setLocation} options={locations} />
      <Select label="Price Range" value={price} onChange={setPrice} options={priceRanges} />
      <Select label="Property Type" value={type} onChange={setType} options={propertyTypes} />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#1e3a8a] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#142a63] lg:rounded-xl"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Search
      </button>
    </form>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col rounded-xl px-4 py-2 transition-colors hover:bg-[#f8f5f0]">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#6b4423]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="-ml-1 mt-1 bg-transparent text-sm font-medium text-[#1e3a8a] outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
