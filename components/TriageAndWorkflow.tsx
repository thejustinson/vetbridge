"use client";

const steps = [
  { num: "01", title: "Tell us what's happening",  desc: "Share symptoms via WhatsApp or phone." },
  { num: "02", title: "Veterinary assessment",     desc: "A VetBridge doctor evaluates the case." },
  { num: "03", title: "Sample guidance",           desc: "Instructions on preservation and transit." },
  { num: "04", title: "Laboratory testing",        desc: "Testing performed in our accredited laboratory." },
  { num: "05", title: "Results & explanation",     desc: "Digital results explained by our team." },
];

export default function TriageAndWorkflow() {
  return (
    <section id="how-it-works" className="bg-[#0DA191] py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-white/60">
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              You don&apos;t need<br />
              to know the<br />
              <span className="text-[#0a3d1f]">test name.</span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs font-normal">
              Tell us what&apos;s happening. We&apos;ll guide you to the right test and result.
            </p>
            <a
              href="https://wa.me/2348000000000?text=Hello%20VetBridge%20Veterinary%20Team%2C%20I%20need%20diagnostic%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a3d1f] hover:bg-white hover:text-[#0a3d1f] text-white text-sm font-bold transition-colors"
            >
              <i className="ri-whatsapp-line" />
              Start on WhatsApp
            </a>
          </div>

          {/* RIGHT — numbered steps */}
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`flex items-start gap-4 py-4 ${
                  idx < steps.length - 1 ? "border-b border-white/20" : ""
                }`}
              >
                <span className="text-[11px] font-mono font-bold text-white/40 w-6 shrink-0 pt-0.5">
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-bold text-white leading-snug">{step.title}</p>
                  <p className="text-xs text-white/60 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
