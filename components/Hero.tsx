"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#FAF9F5] pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* ── CENTERED HERO HEADER ─────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-widest text-[#0DA191]"
          >
            Veterinary Diagnostics · Nigeria
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#181D61] tracking-tight leading-[1.1]">
            Better animal health starts with better data.
          </h1>

          <p className="text-sm sm:text-base text-[#181D61]/70 leading-relaxed max-w-lg mx-auto font-normal">
            Veterinary diagnostics, laboratory testing, and clinical guidance
            helping farmers, veterinary practices, and animal managers make informed decisions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/2348000000000?text=Hello%20VetBridge%20Diagnostics%2C%20I%20would%20like%20to%20consult%20a%20veterinarian."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0DA191] hover:bg-[#181D61] text-white text-sm font-bold transition-colors flex items-center gap-2 shadow-xs"
            >
              <i className="ri-whatsapp-line text-white" />
              Talk to VetBridge
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#181D61] border border-[#181D61]/15 text-sm font-bold transition-colors"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── VISUAL BLOCK ───────────────────────────────────────────────
          Mobile: Full screen edge-to-edge width (0px margin, 0px border-radius, 0 border lines)
                  Images side-by-side (50% each), Card directly under (100% width), 0 gap
          Desktop: 3-column row inside max-w-5xl container with gap-5 and rounded-[32px]
      ─────────────────────────────────────────────────────────────── */}
      <div className="w-full md:max-w-5xl md:mx-auto md:px-6 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-5">

            {/* Image 1: Farm Animals Photography (50% on mobile, edge-to-edge, no border, no radius) */}
            <div className="col-span-1 h-[220px] sm:h-[280px] md:h-[420px] relative overflow-hidden bg-slate-100 rounded-none md:rounded-[32px] border-0 md:border md:border-[#181D61]/10">
              <Image
                src="/farm-animal.jpg"
                alt="Farm livestock health and diagnostics"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* Image 2: Clinical Doctor / Veterinary Specialist (50% on mobile, edge-to-edge, no border, no radius) */}
            <div className="col-span-1 h-[220px] sm:h-[280px] md:h-[420px] relative overflow-hidden bg-slate-100 rounded-none md:rounded-[32px] border-0 md:border md:border-[#181D61]/10">
              <Image
                src="/vet-with-pup.jpg"
                alt="Veterinary clinical and laboratory doctor with patient"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* Card 3: Personalized Animal Care (100% full-width on mobile directly under, edge-to-edge, no border, no radius) */}
            <div className="col-span-2 md:col-span-1 w-full relative min-h-[280px] md:h-[420px] bg-[#181D61] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none md:rounded-[32px] border-0 md:border-2 md:border-[#181D61]">
              <div className="relative z-10 space-y-2.5 sm:space-y-3">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0DA191]">
                  Targeted Diagnostics
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  Personalized Animal Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Direct consultation with veterinary doctors and laboratory specialists. Get precise testing and evidence-based guidance before disease spreads.
                </p>
              </div>

              <div className="relative z-10 pt-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0DA191] hover:bg-white hover:text-[#181D61] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Explore tests</span>
                  <i className="ri-arrow-right-line" />
                </motion.a>
              </div>

              {/* Watermark brand icon in bottom-right corner */}
              <div className="absolute -bottom-6 -right-6 text-white/[0.06] text-[130px] sm:text-[140px] pointer-events-none select-none leading-none">
                <i className="ri-cross-fill" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ── TRUST STRIP ────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#181D61]/8 pt-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { icon: "ri-check-double-line", label: "Accurate AST Culture" },
              { icon: "ri-flask-line", label: "ISO-aligned Protocols" },
              { icon: "ri-seedling-line", label: "Farm & Flock Specialists" },
              { icon: "ri-whatsapp-line", label: "WhatsApp Results Delivery" },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-1.5 text-xs text-[#181D61]/55 font-medium">
                <i className={`${t.icon} text-[#0DA191] text-sm`} />
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
