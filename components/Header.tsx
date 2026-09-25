"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: "Services", href: "#services", badge: "9 Tests" },
    { label: "Who We Help", href: "#who-we-help", badge: "Audiences" },
    { label: "How It Works", href: "#how-it-works", badge: "Triage" },
    { label: "About", href: "#about", badge: "Values" },
    { label: "Contact", href: "#contact", badge: "Benin City" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#181D61]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#181D61]/15 transition-transform group-hover:scale-105">
                <Image
                  src="/vetbridge.jpg"
                  alt="VetBridge Diagnostics Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-extrabold tracking-tight text-[#181D61] lowercase leading-none">
                  vetbridge
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[#0DA191] lowercase leading-none mt-1">
                  diagnostics
                </span>
              </div>
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
              <a href="#about" className="hover:text-[#0DA191] transition-colors">
                About
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
                className="px-4 py-2 rounded-full bg-[#0DA191] hover:bg-[#181D61] text-white text-xs font-bold transition-colors shadow-xs"
              >
                Talk to a Vet
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2 rounded-full text-[#181D61] hover:bg-black/5 cursor-pointer"
                aria-label="Open menu"
              >
                <i className="ri-menu-line text-xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── FULL WIDTH & HEIGHT SLIDING MOBILE NAV ───────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-0 z-50 bg-[#FAF9F5] flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
          >
            {/* Top Bar with Logo & Close */}
            <div className="flex items-center justify-between pb-6 border-b border-[#181D61]/10">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#181D61]/15">
                  <Image
                    src="/vetbridge.jpg"
                    alt="VetBridge Diagnostics Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-black tracking-tight text-[#181D61] lowercase leading-none">
                    vetbridge
                  </span>
                  <span className="text-[11px] font-bold tracking-wider text-[#0DA191] lowercase leading-none mt-1">
                    diagnostics
                  </span>
                </div>
              </a>

              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white border border-[#181D61]/15 text-[#181D61] flex items-center justify-center hover:bg-[#181D61] hover:text-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <i className="ri-close-line text-2xl" />
              </button>
            </div>

            {/* Navigation Links with Stagger */}
            <div className="py-8 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0DA191] mb-4">
                Navigation
              </p>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-3 border-b border-[#181D61]/8 text-2xl font-black text-[#181D61] hover:text-[#0DA191] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-semibold text-[#181D61]/40 group-hover:text-[#0DA191] group-hover:translate-x-1 transition-all flex items-center gap-1">
                      {link.badge}
                      <i className="ri-arrow-right-s-line text-base" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions & Details */}
            <div className="pt-6 border-t border-[#181D61]/10 space-y-4">
              <a
                href="https://wa.me/2348000000000?text=Hello%20VetBridge%2C%20I%20need%20veterinary%20diagnostic%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0DA191] text-white font-bold text-sm hover:bg-[#181D61] transition-colors"
              >
                <i className="ri-whatsapp-line text-lg" />
                <span>Talk to a Vet on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#181D61]/60 pt-2 font-medium">
                <span>Benin City, Edo State · Nigeria</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/2348000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0DA191] text-base"
                    aria-label="WhatsApp"
                  >
                    <i className="ri-whatsapp-line" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0DA191] text-base"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-line" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
