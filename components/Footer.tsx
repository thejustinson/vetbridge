"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#181D61] border-t border-white/8 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-white overflow-hidden shrink-0">
                <Image
                  src="/vetbridge.png"
                  alt="VetBridge Diagnostics Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-extrabold tracking-tight text-white lowercase leading-none">
                  vetbridge
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[#0DA191] lowercase leading-none mt-1">
                  diagnostics
                </span>
              </div>
            </div>
            <p className="text-xs text-white/40 font-normal">
              Nigeria
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-bold text-white/50">
            {[
              { href: "#services",    label: "Services" },
              { href: "#who-we-help", label: "Who we help" },
              { href: "#how-it-works",label: "How it works" },
              { href: "#contact",     label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#0DA191] flex items-center justify-center text-white/60 hover:text-white text-sm transition-colors"
            >
              <i className="ri-whatsapp-line" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#0DA191] flex items-center justify-center text-white/60 hover:text-white text-sm transition-colors"
            >
              <i className="ri-instagram-line" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/8 text-[11px] text-white/30">
          © {new Date().getFullYear()} VetBridge Diagnostics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
