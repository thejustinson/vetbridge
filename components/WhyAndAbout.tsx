"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "ri-focus-3-line",
    title: "Precision",
    desc: "Diagnostic services designed to provide better information for better decisions.",
  },
  {
    icon: "ri-stethoscope-line",
    title: "Professional Expertise",
    desc: "Veterinary professionals supporting the diagnostic process.",
  },
  {
    icon: "ri-lightbulb-line",
    title: "Innovation",
    desc: "Using science and technology to improve animal health.",
  },
  {
    icon: "ri-graduation-cap-line",
    title: "Education",
    desc: "Training and capacity development for veterinary professionals and organisations.",
  },
  {
    icon: "ri-team-line",
    title: "Partnership",
    desc: "Supporting farms, clinics, institutions and organisations over the long term.",
  },
];

export default function WhyAndAbout() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3 md:sticky md:top-28"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#0DA191]">
              Why VetBridge
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#181D61] tracking-tight leading-[1.1]">
              More than testing.<br />
              A partner in<br />
              <span className="text-[#0DA191]">animal health.</span>
            </h2>
            <p className="text-sm text-[#181D61]/65 max-w-sm pt-2 font-normal leading-relaxed">
              We combine accredited laboratory rigor with accessible veterinary support to elevate livestock and companion care nationwide.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="space-y-0">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group flex items-start gap-4 py-5 ${
                  idx < pillars.length - 1 ? "border-b border-[#181D61]/8" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#181D61]/10 flex items-center justify-center text-[#0DA191] text-sm shrink-0 mt-0.5 group-hover:bg-[#0DA191] group-hover:text-white transition-colors">
                  <i className={p.icon} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#181D61] group-hover:text-[#0DA191] transition-colors">
                    {p.title}
                  </p>
                  <p className="text-xs text-[#181D61]/60 leading-relaxed mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
