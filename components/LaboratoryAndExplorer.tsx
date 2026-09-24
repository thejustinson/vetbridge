"use client";

import { useState, useMemo } from "react";
import { DIAGNOSTIC_SERVICES, DiagnosticServiceItem } from "../data/services";

interface LaboratoryAndExplorerProps {
  onSelectService: (serviceName: string) => void;
}

const tabs = [
  { id: "all",       label: "All Tests" },
  { id: "serology",  label: "Serology" },
  { id: "pathology", label: "Pathology" },
  { id: "farm",      label: "Farm & Water" },
  { id: "lab",       label: "Laboratory" },
];

export default function LaboratoryAndExplorer({
  onSelectService,
}: LaboratoryAndExplorerProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [activeModal, setActiveModal] = useState<DiagnosticServiceItem | null>(null);

  const displayed = useMemo(() =>
    DIAGNOSTIC_SERVICES.filter(
      (svc) => activeTab === "all" || svc.category === activeTab
    ),
    [activeTab]
  );

  const handleBook = (item: DiagnosticServiceItem) => {
    onSelectService(item.name);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">

        {/* Heading */}
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0DA191]">
            Diagnostic Directory
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#181D61] tracking-tight leading-tight">
            What we test.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0DA191] text-white"
                  : "bg-white text-[#181D61] border border-[#181D61]/15 hover:border-[#0DA191]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service list — horizontal rows, not card grid */}
        <div className="space-y-0">
          {displayed.map((svc, idx) => (
            <div
              key={svc.id}
              className={`flex items-center justify-between py-4 gap-4 ${
                idx < displayed.length - 1 ? "border-b border-[#181D61]/8" : ""
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-8 h-8 rounded-full bg-white border border-[#181D61]/10 flex items-center justify-center text-[#0DA191] text-sm shrink-0">
                  <i className={svc.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#181D61] leading-snug">{svc.name}</p>
                  <p className="text-xs text-[#181D61]/50 mt-0.5 truncate">{svc.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveModal(svc)}
                  className="text-xs font-bold text-[#181D61]/50 hover:text-[#0DA191] transition-colors cursor-pointer hidden sm:block"
                >
                  Details
                </button>
                <button
                  type="button"
                  onClick={() => handleBook(svc)}
                  className="px-4 py-1.5 rounded-full bg-[#0DA191] hover:bg-[#181D61] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181D61]/40 backdrop-blur-sm">
          <div className="bg-white rounded-[28px] border-2 border-[#181D61] max-w-md w-full p-6 space-y-4">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#181D61]/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0DA191]">
                  {activeModal.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-[#181D61] mt-0.5">
                  {activeModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-full hover:bg-[#FAF9F5] text-[#181D61] cursor-pointer"
              >
                <i className="ri-close-line text-lg" />
              </button>
            </div>

            <p className="text-xs text-[#181D61]/75 leading-relaxed">{activeModal.desc}</p>

            <div className="p-3 rounded-[16px] bg-[#FAF9F5] border border-[#181D61]/10">
              <span className="font-bold text-[#0DA191] text-[10px] uppercase block">Sample Requirements</span>
              <span className="text-[11px] text-[#181D61]/65 mt-0.5 block">
                Contact VetBridge to confirm cold-chain transport and sample preservation guidelines.
              </span>
            </div>

            <div className="pt-2 border-t border-[#181D61]/10 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-3 py-1.5 rounded-full border border-[#181D61]/20 text-xs font-bold text-[#181D61] cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => { handleBook(activeModal); setActiveModal(null); }}
                className="px-4 py-1.5 rounded-full bg-[#0DA191] hover:bg-[#181D61] text-white text-xs font-bold cursor-pointer"
              >
                Enquire About Test
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
