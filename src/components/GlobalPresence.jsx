import GlobeCanvas, { cities } from "@/components/Globe";
import { MapPin } from "lucide-react";

const regions = [
  "North America",
  "Europe",
  "Middle East",
  "South Asia",
  "Southeast Asia",
  "Latin America",
  "East Asia",
];

export default function GlobalPresence() {
  return (
    <section className="bg-background py-24 border-t border-border overflow-hidden">
      <div className="w-11/12 mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Global presence</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Serving clients<br />
                <span className="text-primary">across 6 regions.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Our solutions are built for the markets you're entering — not just the one you're in.
                From San Francisco to Singapore, we're already there.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {regions.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-sm border border-border bg-muted hover:border-primary/40 hover:bg-muted/80 transition-all duration-200 group cursor-default"
                >
                  <MapPin size={13} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm font-medium text-foreground">{r}</span>
                </div>
              ))}
            </div>

            <button className="self-start px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200">
              Work with us
            </button>
          </div>

          {/* Right — globe */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] mx-auto">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 2%, transparent) 0%, transparent 50%)" }}
              />
              <GlobeCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
