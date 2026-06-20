import Image from "next/image";
import Reveal from "@/components/Reveal";

const stats = [
  { label: "Properties Sold", value: "1,200+" },
  { label: "Years of Excellence", value: "18" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Cities Covered", value: "30+" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative h-[420px] w-full overflow-hidden rounded-3xl lg:h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop"
            alt="Modern luxury living room"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142a63]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur-sm">
            <p className="font-heading text-lg font-bold text-[#1e3a8a]">
              18 Years of Trusted Service
            </p>
            <p className="text-sm text-gray-600">
              Guiding clients to their dream properties since 2008.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b4423]">
              About Lux Asset
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#1e3a8a] sm:text-4xl">
              A Legacy Built on
              <br />
              Trust &amp; Excellence
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Lux Asset is a premier real estate agency dedicated to connecting
              discerning clients with extraordinary properties. Our team of
              expert advisors combines deep market knowledge with personalized
              service to deliver an unparalleled buying and selling experience.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              From sprawling estates to sky-high penthouses, we curate every
              listing with an eye for quality, design, and lasting value —
              because your next home should be nothing short of exceptional.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-extrabold text-[#1e3a8a]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
