"use client";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up form submission
  };

  return (
    <section id="contactUs" className="bg-background py-24 border-t border-border">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Get in touch</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Let's build something together
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-muted-foreground text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-muted-foreground text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-muted-foreground text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/80 transition-all duration-200 self-start"
            >
              Send message
            </button>
          </form>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Email</p>
              <p className="text-foreground font-medium">hello@tekprova.com</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Based in</p>
              <p className="text-foreground font-medium">Remote — worldwide</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Response time</p>
              <p className="text-foreground font-medium">Within 24 hours</p>
            </div>
            <div className="flex items-center justify-center mt-4 p-8 rounded-sm bg-muted border border-border">
              <p className="text-primary font-heading text-lg font-semibold">Response within 24 hours — guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
