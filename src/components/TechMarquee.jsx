import Marquee from "react-fast-marquee";

const stack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Supabase",
  "GSAP",
  "Framer Motion",
];

export default function TechMarquee() {
  return (
    <div className="bg-background border-y border-border py-5 overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {stack.map((tech) => (
          <div key={tech} className="flex items-center gap-3 mx-8">
            <span className="text-primary text-lg">✦</span>
            <span className="font-heading text-sm font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
