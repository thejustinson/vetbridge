"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#181D61]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0DA191] text-white flex items-center justify-center text-sm font-bold">
              <i className="ri-cross-fill" />
            </div>
            <span className="text-base font-extrabold tracking-tight text-[#181D61] lowercase">
              vetbridge
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-[#181D61]/80">
            <a href="#services" className="hover:text-[#0DA191] transition-colors">
              Services
            </a>
            <a href="#who-we-help" className="hover:text-[#0DA191] transition-colors">
              Who we help
            </a>
            <a href="#how-it-works" className="hover:text-[#0DA191] transition-colors">
              How it works
            </a>
            <a href="#contact" className="hover:text-[#0DA191] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/2348000000000?text=Hello%20VetBridge%2C%20I%20need%20veterinary%20diagnostic%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0DA191] hover:bg-[#181D61] text-white text-xs font-bold transition-colors"
            >
              Talk to a Vet
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-1.5 rounded-full text-[#181D61] hover:bg-black/5"
              aria-label="Toggle menu"
            >
              <i className={open ? "ri-close-line text-lg" : "ri-menu-line text-lg"} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden py-3 border-t border-[#181D61]/10 flex flex-col gap-2.5 text-xs font-bold text-[#181D61]">
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-[#0DA191]"
            >
              Services
            </a>
            <a
              href="#who-we-help"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-[#0DA191]"
            >
              Who we help
            </a>
            <a
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-[#0DA191]"
            >
              How it works
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-[#0DA191]"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
