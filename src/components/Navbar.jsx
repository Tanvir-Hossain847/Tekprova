"use client";
import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".nav-item", { y: -20, opacity: 0, duration: 0.6, stagger: 0.15, delay: 0.3, ease: "power2.out" });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="absolute top-0 left-0 w-full z-50 py-4"
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="nav-item flex items-center gap-2">
          <span className="font-heading text-xl font-semibold text-white">Tekprova</span>
        </div>

        {/* Floating nav links */}
        <nav className="nav-item hidden lg:flex items-center gap-1 px-2 py-2 rounded-sm bg-muted-foreground/10 backdrop-blur-md border border-white/15 shadow-lg">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/work", label: "Work" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-1.5 text-sm font-medium text-white/80 rounded-sm hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="nav-item">
          <button
            className="px-6 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/80 transition-all duration-200 shadow-md"
            onClick={() => {
              document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </button>
        </div>

      </div>
    </header>
  );
}
