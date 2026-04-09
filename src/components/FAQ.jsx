"use client";
import { useState } from "react";
import Cubes from '@/components/Cubes';

const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "We work on web apps, mobile apps, brand identities, and digital strategy projects. We partner with startups, scale-ups, and enterprise clients.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A branding project can take 3–4 weeks, while a full web application typically runs 8–16 weeks from discovery to launch.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer retainer-based support and maintenance packages tailored to your needs.",
  },
  {
    q: "What does your process look like?",
    a: "We follow a four-phase process: Discovery → Design → Build → Launch. Each phase includes regular check-ins and feedback loops.",
  },
  {
    q: "How do we get started?",
    a: "Just hit the Contact Us button and tell us about your project. We'll get back to you within 24 hours to schedule a discovery call.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Questions you might have
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Can't find what you're looking for? Reach out directly and we'll be happy to help.
            </p>
            <button
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200"
              onClick={() => document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ask us anything
            </button>
            <div className="mt-12 h-45 rounded-sm overflow-hidden">
              <Cubes
                gridSize={10}
                maxAngle={45}
                radius={3}
                borderStyle="1px dashed #a3e635"
                faceColor="#0d0d0d"
                rippleColor="#a3e635"
                rippleSpeed={1.5}
                autoAnimate
                rippleOnClick
              />
            </div>
          </div>

          <div className="flex flex-col divide-y divide-border">
            {faqs.map((item, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.q}
                  </span>
                  <span className={`text-primary text-xl transition-transform duration-300 ${open === i ? "rotate-45" : "rotate-0"}`}>+</span>
                </button>
                {open === i && (
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
