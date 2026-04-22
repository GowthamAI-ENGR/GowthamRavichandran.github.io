import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Gowtham is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    name: "Sarah Chen",
    role: "CTO, TechStartup Inc.",
    initials: "SC",
  },
  {
    quote:
      "Working with Gowtham was a pleasure. He turned our complex requirements into an elegant, performant application that our users love.",
    name: "Mike Johnson",
    role: "Product Manager, DigitalCo",
    initials: "MJ",
  },
  {
    quote:
      "Gowtham's expertise in React and TypeScript helped us modernize our entire frontend. He's a true team player and a fantastic mentor.",
    name: "Emily Rodriguez",
    role: "Lead Designer, CreativeHub",
    initials: "ER",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-secondary/20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Testimonials</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
          <Quote className="text-primary/20 absolute top-6 left-6" size={48} />
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>
            <div className="flex flex-col items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {t.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
