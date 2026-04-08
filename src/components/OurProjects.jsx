import TechMarquee from '@/components/TechMarquee';

const projects = [
  {
    id: "01",
    title: "Buildora Platform",
    category: "Web App · Design",
    year: "2024",
  },
  {
    id: "02",
    title: "Nexus Brand Identity",
    category: "Branding · Strategy",
    year: "2024",
  },
  {
    id: "03",
    title: "Pulse Mobile App",
    category: "Mobile · UX",
    year: "2023",
  },
  {
    id: "04",
    title: "Orbit Dashboard",
    category: "Web App · Development",
    year: "2023",
  },
];

export default function OurProjects() {
  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="w-11/12 mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Our work</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Projects we're<br />proud of
            </h2>
          </div>
          <button className="self-start lg:self-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200">
            View all projects
          </button>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group flex items-center justify-between py-8 cursor-pointer hover:pl-4 transition-all duration-300"
            >
              <div className="flex items-center gap-8">
                <span className="text-muted-foreground text-sm font-mono">{p.id}</span>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {p.title}
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <span className="text-muted-foreground text-sm">{p.category}</span>
                <span className="text-muted-foreground text-sm font-mono">{p.year}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">→</span>
              </div>
            </div>
          ))}
        </div>

        <TechMarquee />

      </div>
    </section>
  );
}
