"use client";

import { motion } from "framer-motion";

interface PositioningAndAudienceProps {
  onSelectAudience: (audienceName: string) => void;
}

const audiences = [
  {
    icon: "ri-flutter-line",
    title: "Poultry Farmers",
    desc: "Disease detection, prevention, flock management and diagnostic support.",
  },
  {
    icon: "ri-leaf-line",
    title: "Livestock Farmers",
    desc: "Animal health monitoring, disease investigation and laboratory testing.",
  },
  {
    icon: "ri-hospital-line",
    title: "Veterinary Clinics",
    desc: "Access diagnostic facilities and services that may not be available in-house.",
  },
  {
    icon: "ri-stethoscope-line",
    title: "Veterinary Professionals",
    desc: "Laboratory support, training and professional diagnostic services.",
  },
  {
    icon: "ri-hearts-line",
    title: "Pet Owners",
    desc: "Veterinary consultation and diagnostic solutions for companion animals.",
  },
];

const also = ["Institutions", "Government", "NGOs & Development Organisations"];

export default function PositioningAndAudience({
  onSelectAudience,
}: PositioningAndAudienceProps) {
  const handleSelect = (title: string) => {
    onSelectAudience(title);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="who-we-help" className="bg-[#0DA191] py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-3 max-w-xl"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#0a3d1f]">
            Who We Help
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
            Solutions for every part of the animal-health ecosystem.
          </h2>
        </motion.div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a, idx) => (
            <motion.button
              key={a.title}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(a.title)}
              className="group text-left rounded-[24px] bg-white/15 border border-white/20 hover:border-white hover:bg-white/25 p-5 flex flex-col gap-3 transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-lg shrink-0 group-hover:scale-110 transition-transform">
                <i className={a.icon} />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-white/90 transition-colors">
                  {a.title}
                </p>
                <p className="text-xs text-white/70 leading-relaxed mt-1">
                  {a.desc}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Also serving */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-2 pt-2"
        >
          <span className="text-xs text-white/50 font-medium">Also serving:</span>
          {also.map((label, i) => (
            <span key={label} className="flex items-center gap-2">
              <span className="text-xs text-white/75 font-medium">{label}</span>
              {i < also.length - 1 && (
                <span className="text-white/30 text-xs">·</span>
              )}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
