"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FAF9F5] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">

        {/* ── CENTERED HERO HEADER (Momentus-inspired) ─────────────────── */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0DA191]">
            Veterinary Diagnostics · Nigeria
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#181D61] tracking-tight leading-[1.1]">
            Better animal health starts with better data.
          </h1>

          <p className="text-sm sm:text-base text-[#181D61]/70 leading-relaxed max-w-lg mx-auto font-normal">
            Veterinary diagnostics, laboratory testing, and clinical guidance
            helping farmers, veterinary practices, and animal managers make informed decisions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="https://wa.me/2348000000000?text=Hello%20VetBridge%20Diagnostics%2C%20I%20would%20like%20to%20consult%20a%20veterinarian."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0DA191] hover:bg-[#181D61] text-white text-sm font-bold transition-colors flex items-center gap-2"
            >
              <i className="ri-whatsapp-line text-white" />
              Talk to VetBridge
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#181D61] border border-[#181D61]/15 text-sm font-bold transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* ── 3-COLUMN VISUAL ROW (2 Photos + 1 Feature Card) ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Livestock / Farm Photography (Flock without people) */}
          <div className="relative h-[360px] sm:h-[400px] md:h-[420px] rounded-[32px] overflow-hidden border border-[#181D61]/10 bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80"
              alt="Flock and livestock health"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 2: Black Female Doctor / Veterinary & Clinical Professional */}
          <div className="relative h-[360px] sm:h-[400px] md:h-[420px] rounded-[32px] overflow-hidden border border-[#181D61]/10 bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
              alt="Veterinary clinical and laboratory doctor"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 3: Solid Accent Feature Card */}
          <div className="relative h-[360px] sm:h-[400px] md:h-[420px] rounded-[32px] overflow-hidden bg-[#181D61] text-white p-7 sm:p-8 flex flex-col justify-between border-2 border-[#181D61]">
            <div className="relative z-10 space-y-3">
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
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0DA191] hover:bg-white hover:text-[#181D61] text-white text-xs font-bold transition-colors"
              >
                <span>Explore tests</span>
                <i className="ri-arrow-right-line" />
              </a>
            </div>

            {/* Subtle decorative watermark icon in bottom-right corner */}
            <div className="absolute -bottom-6 -right-6 text-white/[0.06] text-[140px] pointer-events-none select-none leading-none">
              <i className="ri-cross-fill" />
            </div>
          </div>
        </div>

        {/* ── TRUST STRIP ────────────────────────────────────────────── */}
        <div className="border-t border-[#181D61]/8 pt-6">
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
        </div>

      </div>
    </section>
  );
}
