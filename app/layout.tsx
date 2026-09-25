import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#065f46",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VetBridge Diagnostics | Precision Veterinary Diagnostics & Animal Health",
  description: "Bridging the gap between animal healthcare challenges and accurate veterinary solutions. Diagnostic laboratory testing, microbial analysis, seromonitoring, and veterinary support in Benin City, Edo State, Nigeria.",
  keywords: [
    "VetBridge Diagnostics",
    "Veterinary Laboratory Nigeria",
    "Poultry Diagnostics Benin City",
    "Animal Health Nigeria",
    "Post Mortem AST poultry",
    "ELISA BIOCHEK testing",
    "Newcastle Disease Seromonitoring",
    "Livestock Veterinary Diagnostics Edo State"
  ],
  authors: [{ name: "VetBridge Diagnostics" }],
  icons: {
    icon: "/vetbridge.png",
    apple: "/vetbridge.png",
  },
  openGraph: {
    title: "VetBridge Diagnostics — Bridging the Gap in Animal Health",
    description: "Veterinary diagnostic laboratory services, disease investigation, vaccine potency, and livestock support in Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} scroll-smooth antialiased`}
    >
      <body
        className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 selection:bg-emerald-200 selection:text-emerald-900"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
