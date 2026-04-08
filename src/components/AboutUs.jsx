import Image from 'next/image';
import CardSwap, { Card } from '@/components/CardSwap';

const projects = [
  {
    title: "Buildora Platform",
    category: "Web App · Design",
    year: "2024",
    img: "https://picsum.photos/seed/buildora/600/400",
  },
  {
    title: "Nexus Brand Identity",
    category: "Branding · Strategy",
    year: "2024",
    img: "https://picsum.photos/seed/nexus/600/400",
  },
  {
    title: "Pulse Mobile App",
    category: "Mobile · UX",
    year: "2023",
    img: "https://picsum.photos/seed/pulse/600/400",
  },
];

function ProjectCard({ title, category, year, img }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-xl">
      {/* Image */}
      <div className="relative w-full flex-1 min-h-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="360px"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>

      {/* Footer */}
      <div className="px-5 py-4 flex items-end justify-between bg-card">
        <div>
          <p className="font-heading text-base font-semibold text-card-foreground leading-tight">{title}</p>
          <p className="text-muted-foreground text-xs mt-0.5">{category}</p>
        </div>
        <span className="text-primary text-xs font-mono font-semibold">{year}</span>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="w-11/12 mx-auto">

        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Who we are</p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              We build digital products that make a difference
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tekprova is a full-service digital agency focused on crafting high-performance web experiences, scalable software, and bold brand identities.
            </p>
            <div className="flex gap-12 mb-10">
              {[["50+", "Projects delivered"], ["8+", "Years of experience"], ["30+", "Happy clients"]].map(([num, label]) => (
                <div key={label}>
                  <p className="font-heading text-4xl font-bold text-primary">{num}</p>
                  <p className="text-muted-foreground text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200">
              Learn more about us
            </button>
          </div>

          {/* CardSwap — contained so it never bleeds outside */}
          <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
            <CardSwap
              width={500}
              height={360}
              cardDistance={55}
              verticalDistance={55}
              delay={4000}
              skewAmount={3}
              easing="elastic"
            >
              {projects.map((p) => (
                <Card key={p.title} customClass="!rounded-xl overflow-hidden shadow-2xl">
                  <ProjectCard {...p} />
                </Card>
              ))}
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );
}
