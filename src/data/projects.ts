export interface Project {
  id: string;
  name: string;
  industry: string;
  type: string;
  description: string;
  capabilities: string[];
  url?: string;
  isCaseStudy?: boolean;
  accentGradient: string;
  iconBg: string;
}

export const projects: Project[] = [
  {
    id: "zassports",
    name: "Zas Sports",
    industry: "Sports & Fitness",
    type: "E-commerce Website",
    description:
      "A full-featured sports e-commerce platform for cricket equipment, running gear, badminton, football and fitness products with Cash on Delivery and easy returns.",
    capabilities: [
      "Custom UI/UX",
      "E-commerce",
      "Responsive Development",
      "Product Catalog",
      "WhatsApp Integration",
    ],
    url: "https://www.zassports.com",
    accentGradient: "from-emerald-500/20 to-teal-600/20",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "porville",
    name: "Porville",
    industry: "Food & Grocery",
    type: "E-commerce Website",
    description:
      "A fast-delivery butchery platform offering custom-cut farm-fresh meats, eggs and ready-to-eat dishes across Delhi with 2-hour delivery and cold-chain packaging.",
    capabilities: [
      "Custom UI/UX",
      "E-commerce",
      "Responsive Development",
      "Product Catalog",
      "WhatsApp Integration",
    ],
    url: "https://www.porville.com",
    accentGradient: "from-rose-500/20 to-red-600/20",
    iconBg: "bg-rose-500/10",
  },
  {
    id: "seamless-socials",
    name: "Seamless Socials",
    industry: "Matrimonial Services",
    type: "Business Website",
    description:
      "A modern matrimonial platform with profile browsing, manual phone verification, privacy controls, Islamic Zaicha compatibility and curated matchmaking packages.",
    capabilities: [
      "Custom UI/UX",
      "Responsive Development",
      "Lead Generation",
      "WhatsApp Integration",
    ],
    url: "https://seamlesssocials.in",
    accentGradient: "from-amber-500/20 to-orange-600/20",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "rishteforever",
    name: "Rishte Forever",
    industry: "Matrimonial Services",
    type: "Business Website",
    description:
      "A Muslim matrimonial platform featuring 100% manual phone screening, contact and photo masking, Zaicha guidance and family-focused matchmaking services.",
    capabilities: [
      "Custom UI/UX",
      "Responsive Development",
      "Lead Generation",
      "WhatsApp Integration",
    ],
    url: "https://www.rishteforever.com",
    accentGradient: "from-sky-500/20 to-blue-600/20",
    iconBg: "bg-sky-500/10",
  },
  {
    id: "adv-ruksar-ahmad",
    name: "Advocate Rukhsar Ahmad",
    industry: "Legal Services",
    type: "Business Website",
    description:
      "A professional legal services website for an advocate at Karkardooma Court, Delhi — covering property law, family law, Muslim personal law and loan recovery.",
    capabilities: [
      "Custom UI/UX",
      "Responsive Development",
      "Contact Forms",
      "Lead Generation",
      "WhatsApp Integration",
    ],
    url: "https://www.advruksarahmad.com",
    accentGradient: "from-indigo-500/20 to-violet-600/20",
    iconBg: "bg-indigo-500/10",
  },
  {
    id: "alvi-nursing-home",
    name: "Alvi Nursing Home",
    industry: "Healthcare",
    type: "Business Website",
    description:
      "A healthcare website for a nursing home facility providing elderly and convalescent care. (Website currently unavailable — presented as a case study.)",
    capabilities: [
      "Custom UI/UX",
      "Responsive Development",
      "Contact Forms",
      "WhatsApp Integration",
    ],
    url: undefined,
    isCaseStudy: true,
    accentGradient: "from-teal-500/20 to-cyan-600/20",
    iconBg: "bg-teal-500/10",
  },
  {
    id: "amahle-blue",
    name: "Amahle Blue",
    industry: "Commercial Cleaning",
    type: "E-commerce Website",
    description:
      "A B2B wholesale e-commerce platform for a South African commercial cleaning supplier — offering industrial degreasers, sanitisers and cleaning supplies with quote-based pricing.",
    capabilities: [
      "Custom UI/UX",
      "E-commerce",
      "Responsive Development",
      "Product Catalog",
      "WhatsApp Integration",
    ],
    url: "https://www.amahle-blue.co.za",
    accentGradient: "from-blue-500/20 to-indigo-600/20",
    iconBg: "bg-blue-500/10",
  },
];

export const projectTypes = [
  "Business Website",
  "E-commerce Website",
  "Portfolio Website",
  "Landing Page",
  "Website Redesign",
  "Not Sure Yet",
];

export const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not Sure Yet",
];
