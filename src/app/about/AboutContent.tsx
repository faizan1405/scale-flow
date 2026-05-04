"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";

const WHATSAPP_LINK =
  "https://wa.me/919873721207?text=Hi%20Scale%20Flow!%20I'm%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

const stats = [
  { value: "50+", label: "Brands Scaled", suffix: "" },
  { value: "3+", label: "Years Experience", suffix: "" },
  { value: "10M+", label: "Ad Spend Managed", suffix: "" },
  { value: "100%", label: "Client Retention", suffix: "" },
];

const brands = [
  {
    name: "Scale Flow",
    role: "Growth Systems & Marketing",
    description:
      "Content, ads, and AI automation — connected into one system that turns attention into revenue.",
    accent: "from-gold to-gold-dark",
    glowColor: "rgba(201, 169, 110, 0.15)",
    borderHover: "hover:border-gold/25",
    textColor: "text-gold",
    initials: "SF",
    link: null,
  },
  {
    name: "Aura Flame",
    role: "Brand & Creative Studio",
    description:
      "Premium brand identity, visual storytelling, and creative direction that makes brands impossible to ignore.",
    accent: "from-orange-400 to-red-500",
    glowColor: "rgba(251, 146, 60, 0.15)",
    borderHover: "hover:border-orange-400/25",
    textColor: "text-orange-400",
    initials: "AF",
    link: "https://auraflame1.com/",
  },
  {
    name: "Scale Flow Website",
    role: "Official Website",
    description:
      "Visit our official website to explore services, case studies, and growth systems built for modern brands.",
    accent: "from-cyan-400 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.15)",
    borderHover: "hover:border-cyan-400/25",
    textColor: "text-cyan-400",
    initials: "SW",
    link: "https://scale-flow-sooty.vercel.app/",
  },
];

const expertise = [
  {
    title: "Social Media Content",
    description:
      "Scroll-stopping Reels, carousels, and stories crafted to grow your audience and turn followers into customers.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    description:
      "Smart systems for lead capture, follow-ups, and CRM workflows — so your business grows even when you're offline.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Meta Ads",
    description:
      "Data-driven Facebook and Instagram campaigns with proper funnels, targeting, and creatives built to maximize every rupee.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Growth Strategy",
    description:
      "Big-picture thinking that ties content, ads, and automation into one connected system engineered for compounding growth.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Systems Over Shortcuts",
    description:
      "I don't believe in quick hacks that fade in a week. Everything I build is designed to compound — content feeds ads, ads feed leads, automation converts them.",
  },
  {
    title: "Clarity Over Complexity",
    description:
      "Marketing doesn't need to be confusing. I keep things simple, focused, and results-driven. You'll always know what's happening and why.",
  },
  {
    title: "Partnership Over Projects",
    description:
      "I don't take on dozens of clients. I work closely with a handful of brands so I can give each one the depth and attention it deserves.",
  },
];

/* ---- Smooth fade-in-up animation variants ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

/* ---- 3D Tilt Card with glassmorphism glow ---- */
function Tilt3DCard({
  children,
  className = "",
  glowColor = "rgba(201, 169, 110, 0.08)",
  tiltIntensity = 8,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [tiltIntensity, -tiltIntensity]),
    { stiffness: 250, damping: 25 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-tiltIntensity, tiltIntensity]),
    { stiffness: 250, damping: 25 }
  );

  const glowXPercent = useTransform(mouseX, [0, 1], [10, 90]);
  const glowYPercent = useTransform(mouseY, [0, 1], [10, 90]);
  const glowBackground = useMotionTemplate`radial-gradient(400px circle at ${glowXPercent}% ${glowYPercent}%, ${glowColor}, transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setHovering(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hovering ? rotateX : 0,
        rotateY: hovering ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`${className} will-change-transform`}
    >
      <div
        className="relative h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
        {/* Mouse-following glow overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl z-10"
          style={{ background: glowBackground }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovering ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ---- Glass Section Divider ---- */
function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-5xl">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
    </div>
  );
}

/* ---- Main About Content ---- */
export default function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  return (
    <div className="overflow-hidden">
      {/* ========== HERO ========== */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative pt-36 pb-24 md:pt-48 md:pb-32"
      >
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.03, 0.07, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-1/4 w-[600px] h-[600px] rounded-full bg-gold blur-[160px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyber blur-[140px]"
          />
          {/* Subtle third orb */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.01, 0.04, 0.01],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-500 blur-[180px]"
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 2 + (i % 4) * 1.5,
                height: 2 + (i % 4) * 1.5,
                left: `${5 + i * 8}%`,
                top: `${15 + (i % 5) * 16}%`,
                background:
                  i % 3 === 0
                    ? "rgba(201,169,110,0.4)"
                    : i % 3 === 1
                      ? "rgba(34,211,238,0.3)"
                      : "rgba(251,146,60,0.3)",
              }}
              animate={{
                y: [-25, 25, -25],
                x: [-12, 12, -12],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 5 + i * 0.7,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gold/20 text-gold text-xs tracking-[0.2em] uppercase font-medium"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.02))",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            About Faizan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] font-[family-name:var(--font-heading)]"
          >
            The mind behind
            <br />
            <motion.span
              className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              three brands.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed"
          >
            Founder of{" "}
            <span className="text-gold font-medium">Scale Flow</span> and{" "}
            <a
              href="https://auraflame1.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-medium hover:text-orange-300 transition-colors duration-300 border-b border-orange-400/30 hover:border-orange-300/60"
            >
              Aura Flame
            </a>
            .
            <br className="hidden sm:block" />
            Building systems that turn brands into growth machines.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-16 mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/25 to-transparent"
          />
        </div>
      </motion.section>

      {/* ========== INTRO — Photo + Story ========== */}
      <section className="relative py-24 md:py-32">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-surface/50 to-dark pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            {/* 3D Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Tilt3DCard
                className="max-w-md mx-auto lg:max-w-none cursor-default"
                glowColor="rgba(201, 169, 110, 0.1)"
                tiltIntensity={6}
              >
                <div className="relative">
                  {/* Outer decorative rings */}
                  <motion.div
                    className="absolute -inset-4 rounded-[28px] border border-gold/[0.07] -z-20"
                    animate={{
                      borderColor: [
                        "rgba(201,169,110,0.07)",
                        "rgba(201,169,110,0.15)",
                        "rgba(201,169,110,0.07)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute -inset-8 rounded-[32px] border border-white/[0.03] -z-30" />

                  {/* Corner accents with glow */}
                  {[
                    "-top-2 -left-2 border-t-2 border-l-2 rounded-tl-xl",
                    "-top-2 -right-2 border-t-2 border-r-2 rounded-tr-xl",
                    "-bottom-2 -left-2 border-b-2 border-l-2 rounded-bl-xl",
                    "-bottom-2 -right-2 border-b-2 border-r-2 rounded-br-xl",
                  ].map((classes, idx) => (
                    <motion.div
                      key={idx}
                      className={`absolute w-10 h-10 border-gold/30 ${classes}`}
                      animate={{
                        borderColor: [
                          "rgba(201,169,110,0.3)",
                          "rgba(201,169,110,0.6)",
                          "rgba(201,169,110,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3,
                      }}
                    />
                  ))}

                  {/* Image container with glassmorphism */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    {/* Glass surface */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(17,17,17,0.95), rgba(20,20,20,0.8))",
                        backdropFilter: "blur(40px)",
                      }}
                    />

                    {/* Dynamic mesh gradient */}
                    <div className="absolute inset-0 opacity-30">
                      <motion.div
                        animate={{
                          background: [
                            "radial-gradient(circle at 30% 40%, rgba(201,169,110,0.08) 0%, transparent 50%)",
                            "radial-gradient(circle at 70% 60%, rgba(201,169,110,0.08) 0%, transparent 50%)",
                            "radial-gradient(circle at 30% 40%, rgba(201,169,110,0.08) 0%, transparent 50%)",
                          ],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                      />
                    </div>

                    {/*
                      Replace this placeholder with your image:
                      import Image from "next/image";
                      <Image src="/your-photo.jpg" alt="Faizan" fill className="object-cover" />
                    */}
                    <div className="relative z-10 absolute inset-0 flex flex-col items-center justify-center gap-6">
                      {/* Animated ring around avatar */}
                      <div className="relative">
                        <motion.div
                          className="absolute -inset-3 rounded-full border border-gold/15"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            borderStyle: "dashed",
                            borderSpacing: "10px",
                          }}
                        />
                        <div className="h-28 w-28 rounded-full bg-gradient-to-br from-gold/[0.08] to-gold/[0.02] border border-gold/15 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                          <svg
                            className="w-14 h-14 text-gold/25"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={0.7}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-text/25 tracking-widest uppercase">
                          Your photo here
                        </span>
                      </div>
                    </div>

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent z-20" />

                    {/* Inner light effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-20" />
                  </div>

                  {/* Floating badge — glassmorphism */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-6 -right-4 sm:-bottom-5 sm:-right-8 z-30"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-2xl px-5 py-4 border border-gold/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(17,17,17,0.9), rgba(11,11,11,0.95))",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/15 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white font-[family-name:var(--font-heading)]">
                            Serial Entrepreneur
                          </p>
                          <p className="text-xs text-gold/50">Delhi, India</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </Tilt3DCard>
            </motion.div>

            {/* Story */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-medium"
              >
                <span className="h-px w-8 bg-gold/40" />
                My Story
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
              >
                I don&apos;t just run ads.
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  I build growth engines.
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 space-y-6"
              >
                <p className="text-gray-text text-[16px] leading-[1.8]">
                  I saw the same problem everywhere — businesses bleeding money
                  on marketing with nothing to show for it. Different people
                  handling content, ads, and automation. None of it connected.
                  All of it wasteful. So I decided to fix it — not once, but{" "}
                  <span className="text-white font-medium">
                    three times over
                  </span>
                  .
                </p>
                <p className="text-gray-text text-[16px] leading-[1.8]">
                  I built{" "}
                  <span className="text-gold font-medium">Scale Flow</span> to
                  connect social media content, AI automation, and Meta Ads into
                  one unified growth engine.{" "}
                  <a
                    href="https://auraflame1.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 font-medium hover:text-orange-300 transition-colors duration-300 border-b border-orange-400/30 hover:border-orange-300/60"
                  >
                    Aura Flame
                  </a>{" "}
                  to craft premium brand identities and creative direction.
                  Alongside it, Scale Flow handles end-to-end social media
                  management for brands that want results without the hassle.
                </p>
                <p className="text-gray-text text-[16px] leading-[1.8]">
                  Today, I work with founders and brands who are tired of
                  fragmented marketing and ready for a system that actually
                  compounds. If that sounds like you, let&apos;s talk.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/[0.03] border border-gold/10 flex items-center justify-center">
                  <span className="text-gold text-sm font-bold font-[family-name:var(--font-heading)]">
                    F
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold font-[family-name:var(--font-heading)] tracking-tight">
                    Faizan Khan
                  </p>
                  <p className="text-xs text-gray-text">
                    Founder, Scale Flow
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ========== 3D BRANDS SECTION ========== */}
      <section className="relative py-24 md:py-32">
        {/* Background depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.02] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true, margin: "-80px" }}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-medium"
            >
              <span className="h-px w-6 bg-gold/30" />
              The Brands
              <span className="h-px w-6 bg-gold/30" />
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
            >
              Three brands.{" "}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                One vision.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-5 text-gray-text text-lg max-w-xl mx-auto leading-relaxed"
            >
              Each brand solves a different piece of the growth puzzle. Together,
              they cover everything a business needs to scale.
            </motion.p>
          </div>

          {/* Brand cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 grid gap-6 md:grid-cols-3"
            style={{ perspective: "1200px" }}
          >
            {brands.map((brand) => (
              <motion.div key={brand.name} variants={staggerChild}>
                <Tilt3DCard glowColor={brand.glowColor}>
                  <div
                    className={`group relative h-full rounded-2xl border border-white/[0.06] p-8 sm:p-9 overflow-hidden transition-all duration-500 ${brand.borderHover} hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]`}
                    style={{
                      background:
                        "linear-gradient(165deg, rgba(17,17,17,0.8), rgba(14,14,14,0.95))",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {/* Top gradient accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${brand.accent} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                    />

                    {/* Inner glass highlight */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    {/* Logo with hover animation */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`h-14 w-14 rounded-xl bg-gradient-to-br ${brand.accent} flex items-center justify-center shadow-lg relative`}
                    >
                      <span className="text-white text-lg font-bold font-[family-name:var(--font-heading)]">
                        {brand.initials}
                      </span>
                    </motion.div>

                    {/* Brand name — clickable if has link */}
                    {brand.link ? (
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-6 inline-flex items-center gap-2 text-xl font-bold tracking-tight font-[family-name:var(--font-heading)] ${brand.textColor} hover:opacity-80 transition-all duration-300 group/link`}
                      >
                        {brand.name}
                        <svg
                          className="w-4 h-4 opacity-0 -translate-x-1 group-hover/link:opacity-70 group-hover/link:translate-x-0 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    ) : (
                      <h3 className="mt-6 text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
                        {brand.name}
                      </h3>
                    )}

                    <p className="mt-1.5 text-[11px] text-gray-text/50 tracking-[0.15em] uppercase font-medium">
                      {brand.role}
                    </p>
                    <p className="mt-4 text-gray-text text-[15px] leading-[1.7]">
                      {brand.description}
                    </p>

                    {/* Visit site link for brands with links */}
                    {brand.link && (
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-5 inline-flex items-center gap-1.5 text-xs ${brand.textColor} opacity-60 hover:opacity-100 transition-all duration-300 tracking-wide uppercase font-medium`}
                      >
                        Visit site
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </a>
                    )}

                    {/* Corner glow */}
                    <div
                      className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-[70px] opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                      style={{
                        background: brand.glowColor.replace("0.15", "0.6"),
                      }}
                    />
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ========== STATS BAR — Glassmorphism ========== */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
            style={{ perspective: "800px" }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerChild}
                whileHover={{
                  scale: 1.04,
                  y: -4,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative p-7 sm:p-8 rounded-2xl border border-white/[0.06] text-center overflow-hidden hover:border-gold/15 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(17,17,17,0.6), rgba(14,14,14,0.8))",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Top shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-gold/20 transition-all duration-700" />

                <span className="block text-3xl sm:text-4xl font-bold bg-gradient-to-b from-gold to-gold-dark bg-clip-text text-transparent font-[family-name:var(--font-heading)]">
                  {stat.value}
                </span>
                <span className="block mt-2 text-[11px] sm:text-xs text-gray-text/70 uppercase tracking-[0.15em]">
                  {stat.label}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ========== EXPERTISE — Glass cards ========== */}
      <section className="relative py-24 md:py-32">
        {/* Background layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-surface/30 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true, margin: "-80px" }}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-medium"
            >
              <span className="h-px w-6 bg-gold/30" />
              Expertise
              <span className="h-px w-6 bg-gold/30" />
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
            >
              One person.{" "}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Every skill you need.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-5 text-gray-text text-lg max-w-xl mx-auto leading-relaxed"
            >
              No bloated agency. No miscommunication between teams. Just one
              focused partner who understands the full picture.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 grid gap-5 sm:grid-cols-2"
            style={{ perspective: "1000px" }}
          >
            {expertise.map((item) => (
              <motion.div key={item.title} variants={staggerChild}>
                <Tilt3DCard tiltIntensity={5}>
                  <div
                    className="group relative rounded-2xl border border-white/[0.06] p-8 sm:p-9 transition-all duration-500 hover:border-gold/15 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(165deg, rgba(17,17,17,0.7), rgba(14,14,14,0.9))",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent group-hover:via-gold/20 transition-all duration-700" />

                    {/* Icon with micro-interaction */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      }}
                      className="h-13 w-13 rounded-xl bg-gradient-to-br from-gold/[0.1] to-gold/[0.03] border border-gold/10 flex items-center justify-center text-gold group-hover:border-gold/20 group-hover:shadow-[0_0_24px_rgba(201,169,110,0.1)] transition-all duration-500"
                      style={{ width: 52, height: 52 }}
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="mt-6 text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-text text-[15px] leading-[1.7]">
                      {item.description}
                    </p>

                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-gold/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ========== VALUES / APPROACH ========== */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true, margin: "-80px" }}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-medium"
              >
                <span className="h-px w-8 bg-gold/40" />
                My Approach
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.1}
                viewport={{ once: true, margin: "-80px" }}
                className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
              >
                How I think
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  about growth.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.2}
                viewport={{ once: true, margin: "-80px" }}
                className="mt-7 text-gray-text text-lg leading-[1.7]"
              >
                Every decision I make comes back to one question: does this
                compound? If it doesn&apos;t build on itself over time,
                it&apos;s not worth doing.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-5"
            >
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={staggerChild}
                  whileHover={{
                    x: 8,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group relative p-7 sm:p-8 rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-gold/15 hover:shadow-[0_4px_30px_rgba(201,169,110,0.04)]"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(17,17,17,0.7), rgba(14,14,14,0.9))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/30 group-hover:via-gold/10 group-hover:to-gold/0 transition-all duration-700" />

                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 mt-0.5 h-10 w-10 rounded-xl bg-gradient-to-br from-gold/[0.1] to-gold/[0.03] border border-gold/10 flex items-center justify-center group-hover:border-gold/20 transition-all duration-500"
                    >
                      <span className="text-sm font-bold text-gold font-[family-name:var(--font-heading)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)] group-hover:text-gold-light transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-text leading-[1.8]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ========== CTA ========== */}
      <section className="relative py-28 md:py-36">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold blur-[180px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
          >
            Ready to build something
            <br />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              that actually grows?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-7 text-lg text-gray-text leading-[1.7]"
          >
            I work with a handful of brands at a time to keep the quality high
            and the results real. If you&apos;re serious about growth,
            let&apos;s connect.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.25}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/#cta"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center px-10 rounded-full bg-gold text-dark font-semibold text-base overflow-hidden shadow-[0_4px_20px_rgba(201,169,110,0.2)] hover:shadow-[0_8px_40px_rgba(201,169,110,0.35)] transition-shadow duration-500"
            >
              <span className="relative z-10">Contact Now</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center px-10 rounded-full border border-white/10 text-white text-base font-medium hover:border-green-500/30 hover:bg-green-500/[0.06] transition-all duration-300"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <svg
                className="w-5 h-5 mr-2.5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 text-xs text-gray-text/40 tracking-wide"
          >
            No commitment required. Let&apos;s just have a conversation.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

