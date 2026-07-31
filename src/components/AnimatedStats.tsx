"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Websites Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "x", label: "Faster Than Industry Avg" },
  { value: 12, suffix: "+", label: "Industries Served" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out curve
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white tabular-nums">
        {display}
      </span>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold ml-0.5">
        {suffix}
      </span>
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="relative group text-center"
        >
          <div
            className="absolute inset-0 rounded-2xl bg-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-xs sm:text-sm text-gray-text tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
