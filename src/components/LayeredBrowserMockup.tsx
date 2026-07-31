"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LayeredBrowserMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [4, -4]);
  const rotateY = useTransform(x, [-50, 50], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px / 10);
    y.set(py / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[4/3] w-full perspective-1000"
    >
      {/* Soft glow behind */}
      <div aria-hidden="true" className="absolute -inset-8 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(201,169,110,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Background browser — desktop */}
        <motion.div
          initial={{ opacity: 0, x: -32, y: 24, rotate: -3 }}
          animate={{ opacity: 1, x: -8, y: 16, rotate: -2 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute inset-x-6 top-0 rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(10,10,10,0.85) 100%)",
            backdropFilter: "blur(20px) saturate(1.2)",
            WebkitBackdropFilter: "blur(20px) saturate(1.2)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset",
            transform: "translateZ(-20px)",
          }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/[0.04] text-[10px] text-gray-text/60 truncate">scaleflow.design/work</div>
          </div>

          {/* Faux UI */}
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-24 rounded bg-gold/40" />
              <div className="flex gap-2">
                <div className="h-1.5 w-10 rounded bg-white/[0.08]" />
                <div className="h-1.5 w-10 rounded bg-white/[0.08]" />
                <div className="h-1.5 w-10 rounded bg-white/[0.08]" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <div className="h-5 w-3/4 rounded bg-white/[0.12]" />
              <div className="h-2.5 w-full rounded bg-white/[0.06]" />
              <div className="h-2.5 w-5/6 rounded bg-white/[0.06]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video rounded bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.04] p-2">
                  <div className="h-1.5 w-8 rounded bg-gold/30 mb-1.5" />
                  <div className="h-1 w-full rounded bg-white/[0.06]" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Foreground browser — desktop */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: 32, rotate: 4 }}
          animate={{ opacity: 1, x: 8, y: 32, rotate: 2 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(20,20,20,0.85) 0%, rgba(12,12,12,0.95) 100%)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 32px 64px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05) inset",
            transform: "translateZ(20px)",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/[0.04] text-[10px] text-gray-text/60 truncate">joinscaleflow.in</div>
          </div>

          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <span className="text-[8px] font-bold text-dark">SF</span>
                </div>
                <div className="h-1.5 w-12 rounded bg-white/40" />
              </div>
              <div className="flex gap-3">
                <div className="h-1.5 w-8 rounded bg-white/[0.15]" />
                <div className="h-1.5 w-8 rounded bg-white/[0.15]" />
                <div className="h-1.5 w-8 rounded bg-white/[0.15]" />
                <div className="h-5 w-14 rounded-full bg-gold" />
              </div>
            </div>

            <div className="pt-3 space-y-2.5">
              <div className="h-1 w-16 rounded bg-gold/60" />
              <div className="h-6 w-5/6 rounded bg-gradient-to-r from-white/30 to-white/10" />
              <div className="h-6 w-3/4 rounded bg-gradient-to-r from-white/30 to-white/10" />
              <div className="h-3 w-full rounded bg-white/[0.08]" />
              <div className="h-3 w-4/5 rounded bg-white/[0.08]" />
            </div>

            <div className="flex gap-2 pt-2">
              <div className="h-7 w-24 rounded-full bg-gold" />
              <div className="h-7 w-20 rounded-full border border-white/20" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/[0.06] p-2.5 space-y-1.5">
                  <div className="h-1.5 w-12 rounded bg-gold/40" />
                  <div className="h-3 w-3/4 rounded bg-white/20" />
                  <div className="h-1 w-full rounded bg-white/[0.06]" />
                  <div className="h-1 w-5/6 rounded bg-white/[0.06]" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile device — floating right */}
        <motion.div
          initial={{ opacity: 0, x: 48, y: 48, rotate: 8 }}
          animate={{ opacity: 1, x: 32, y: 56, rotate: 6 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute right-0 bottom-0 w-[28%] aspect-[9/16] rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(12,12,12,0.98) 100%)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 48px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05) inset",
            transform: "translateZ(40px)",
          }}
        >
          <div className="h-full w-full p-2 space-y-2">
            <div className="flex items-center justify-between px-1">
              <div className="h-1 w-6 rounded bg-white/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
            </div>
            <div className="h-2.5 w-3/4 rounded bg-gradient-to-r from-white/30 to-white/5 mx-1" />
            <div className="h-2.5 w-1/2 rounded bg-gold/40 mx-1" />
            <div className="space-y-1 mt-2">
              <div className="h-1 w-full rounded bg-white/[0.06] mx-1" />
              <div className="h-1 w-4/5 rounded bg-white/[0.06] mx-1" />
            </div>
            <div className="h-5 w-3/5 rounded-full bg-gold mt-2 mx-1" />
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.04]" />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}