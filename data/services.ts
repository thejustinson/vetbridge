export interface DiagnosticServiceItem {
  id: string;
  name: string;
  category: 'farm' | 'lab' | 'pathology' | 'serology';
  categoryLabel: string;
  icon: string;
  desc: string;
}

export const DIAGNOSTIC_SERVICES: DiagnosticServiceItem[] = [
  {
    id: 'post-mortem-ast',
    name: 'Post-Mortem & Antibiotic Sensitivity (AST)',
    category: 'pathology',
    categoryLabel: 'Pathology',
    icon: 'ri-microscope-line',
    desc: 'Necropsy and bacterial culturing to identify mortality causes and targeted antibiotic treatment.',
  },
  {
    id: 'seromonitoring-nd',
    name: 'Newcastle Disease (ND) Seromonitoring',
    category: 'serology',
    categoryLabel: 'Serology',
    icon: 'ri-shield-check-line',
    desc: 'Serum antibody titration verifying whether flock vaccinations established protective immunity.',
  },
  {
    id: 'elisa-biochek',
    name: 'BIOCHEK Multi-Panel ELISA',
    category: 'serology',
    categoryLabel: 'Serology',
    icon: 'ri-test-tube-line',
    desc: 'Gold-standard screening for IBV, IBDV (Gumboro), Reovirus, NDV, MG, MS, and ILT in poultry.',
  },
  {
    id: 'doc-screening',
    name: 'Day-Old Chick (DOC) Screening',
    category: 'serology',
    categoryLabel: 'Serology',
    icon: 'ri-pulse-line',
    desc: 'Early health baseline evaluating maternal antibodies and bacterial cleanliness before brooding.',
  },
  {
    id: 'microbial-water',
    name: 'Water Microbial Screening',
    category: 'farm',
    categoryLabel: 'Farm Safety',
    icon: 'ri-drop-line',
    desc: 'Testing borehole and drinker water for E. coli and coliforms that undermine flock and herd health.',
  },
  {
    id: 'microbial-feed',
    name: 'Feed Microbial Analysis',
    category: 'farm',
    categoryLabel: 'Farm Safety',
    icon: 'ri-seedling-line',
    desc: 'Bacterial and fungal culture of feed and grains to prevent enteritis and mortality.',
  },
  {
    id: 'vaccine-potency',
    name: 'Vaccine Potency Verification',
    category: 'lab',
    categoryLabel: 'Laboratory',
    icon: 'ri-flask-line',
    desc: 'Testing vaccine vials to verify active antigen viability before widespread flock vaccination.',
  },
  {
    id: 'hygiene-audit',
    name: 'Farm Biosecurity & Swab Audit',
    category: 'farm',
    categoryLabel: 'Farm Safety',
    icon: 'ri-sparkling-line',
    desc: 'Surface swab testing of pens, feeders, and dips to confirm sanitation effectively cleared pathogens.',
  },
  {
    id: 'ha-hi-test',
    name: 'Haemagglutination & HI Test',
    category: 'lab',
    categoryLabel: 'Laboratory',
    icon: 'ri-heart-pulse-line',
    desc: 'Specific antibody titration to quantify viral exposure and flock immune resistance.',
  },
];
