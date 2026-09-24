"use client";

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
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Heading */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0DA191]">
              Why VetBridge
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#181D61] tracking-tight leading-[1.1]">
              More than testing.<br />
              A partner in<br />
              <span className="text-[#0DA191]">animal health.</span>
            </h2>
          </div>

          {/* Pillars */}
          <div className="space-y-0">
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className={`flex items-start gap-4 py-5 ${
                  idx < pillars.length - 1 ? "border-b border-[#181D61]/8" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#181D61]/10 flex items-center justify-center text-[#0DA191] text-sm shrink-0 mt-0.5">
                  <i className={p.icon} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#181D61]">{p.title}</p>
                  <p className="text-xs text-[#181D61]/55 leading-relaxed mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
