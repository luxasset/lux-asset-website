const columns = [
  {
    title: "Explore",
    links: ["Home", "Properties", "About", "Testimonials", "Contact"],
  },
  {
    title: "Property Types",
    links: ["Villas", "Penthouses", "Estates", "Apartments"],
  },
  {
    title: "Company",
    links: ["Careers", "Press", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#142a63] px-6 pt-20 text-white/80 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-bold text-white">
              LUX<span className="text-[#d8b88a]">ASSET</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Premium real estate, redefined. Connecting discerning clients
              with extraordinary properties since 2008.
            </p>
            <div className="mt-6 flex gap-3">
              {["F", "X", "IG", "IN"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold transition-colors hover:bg-[#d8b88a] hover:text-[#142a63]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-[#d8b88a]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Lux Asset. All rights reserved.</p>
          <p>Designed with care for those who appreciate the exceptional.</p>
        </div>
      </div>
    </footer>
  );
}
