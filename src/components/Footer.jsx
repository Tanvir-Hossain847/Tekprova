"use client";
import Link from "next/link";

const links = {
  Company: ["About", "Services", "Work", "Careers"],
  Resources: ["Blog", "Case Studies", "Documentation", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <p className="font-heading text-xl font-bold text-foreground mb-4">Tekprova</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              A full-service digital agency building products that matter.
            </p>
            <button
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200"
              onClick={() => document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a project
            </button>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">{group}</p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Tekprova. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <Link key={s} href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
