import SearchBar from "@/components/SearchBar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 gradient-overlay" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        <span className="fade-in mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          Premium Real Estate
        </span>
        <h1
          className="fade-in font-heading text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Find a Home as
          <br />
          <span className="text-[#d8b88a]">Exceptional as You</span>
        </h1>
        <p
          className="fade-in mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Curated estates, modern residences, and once-in-a-lifetime
          properties — handpicked by Lux Asset&apos;s expert advisors.
        </p>
        <div
          className="fade-in mt-9 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#properties"
            className="rounded-full bg-[#6b4423] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:scale-105 hover:bg-[#8a5c33]"
          >
            Explore Properties
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/50 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
          >
            Speak to an Advisor
          </a>
        </div>
      </div>

      <div
        className="relative z-10 mx-6 -mb-10 w-full max-w-5xl translate-y-1/2 fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <SearchBar />
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v15m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
