"use client";

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.1835008143098!2d5.599910269447162!3d6.428209332271363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjUnNDEuNiJOIDXCsDM2JzAyLjAiRQ!5e0!3m2!1sen!2sng!4v1790260853592!5m2!1sen!2sng";

interface CtaAndContactProps {
  initialServiceName?: string;
}

function ContactCard() {
  return (
    <div className="bg-[#0a3d1f] rounded-[28px] p-6 sm:p-8 space-y-5 w-full max-w-[300px]">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          Get in Touch
        </p>
        <h2 className="text-2xl font-black text-white mt-1 tracking-tight">
          Talk to VetBridge
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-[10px] font-bold uppercase text-white/40 mb-0.5">Address:</p>
          <p className="text-sm font-bold text-white leading-snug">
            Benin City, Edo State,<br />Nigeria
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase text-white/40 mb-0.5">Phone:</p>
          <a
            href="tel:+2348000000000"
            className="text-sm font-bold text-white hover:text-[#0DA191] transition-colors"
          >
            +234 800 000 0000
          </a>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase text-white/40 mb-0.5">Hours:</p>
          <p className="text-sm font-bold text-white">Mon – Sat · 8 AM – 5:30 PM</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase text-white/40 mb-0.5">Social:</p>
          <div className="flex gap-4 text-sm font-bold text-white/60">
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <i className="ri-whatsapp-line" /> WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <i className="ri-instagram-line" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/2348000000000?text=Hello%20VetBridge%2C%20I%20need%20veterinary%20diagnostic%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#0DA191] hover:bg-white hover:text-[#0a3d1f] text-white text-sm font-bold transition-colors"
      >
        <i className="ri-whatsapp-line" />
        Message Us on WhatsApp
      </a>
    </div>
  );
}

export default function CtaAndContact(_props: CtaAndContactProps) {
  return (
    <section id="contact">

      {/* ── MOBILE — card on top, map below ── */}
      <div className="md:hidden bg-[#FAF9F5] px-4 py-10 flex justify-center">
        <ContactCard />
      </div>
      <div className="md:hidden">
        <iframe
          src={MAP_SRC}
          title="VetBridge location map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full border-0"
          style={{ height: "280px" }}
        />
      </div>

      {/* ── DESKTOP — map background, card overlaid ── */}
      <div className="hidden md:block relative overflow-hidden" style={{ minHeight: "640px" }}>
        <iframe
          src={MAP_SRC}
          title="VetBridge location map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          style={{ filter: "grayscale(0.15) contrast(0.92) brightness(1.05)" }}
        />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
        <div className="relative z-10 flex items-center min-h-[640px] px-10 py-12">
          <ContactCard />
        </div>
      </div>

    </section>
  );
}
