const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Fast, scalable, and accessible web applications built with modern frameworks.",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description: "Intuitive interfaces and seamless user experiences grounded in research.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description: "Visual systems that communicate your values and stand out in the market.",
  },
  {
    number: "04",
    title: "Mobile Apps",
    description: "Cross-platform mobile experiences that feel native on every device.",
  },
  {
    number: "05",
    title: "SEO & Performance",
    description: "Optimised for speed, discoverability, and conversion from day one.",
  },
  {
    number: "06",
    title: "CMS Based Web Apps",
    description: "Strategic guidance to help you make the right technical decisions.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="w-11/12 mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">What we do</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Services built for<br />modern businesses
            </h2>
          </div>
          <button className="self-start lg:self-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200">
            See all services
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((s) => (
            <div
              key={s.number}
              className="group bg-background p-8 hover:bg-muted transition-all duration-300 cursor-default"
            >
              <p className="font-heading text-primary text-sm font-bold mb-6">{s.number}</p>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
