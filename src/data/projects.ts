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
    id: "artisan-marketplace",
    name: "Artisan Marketplace",
    industry: "E-Commerce",
    type: "E-commerce Website",
    description:
      "A full-featured online store with product catalog, cart, checkout flow, and admin inventory management built for a craft goods brand.",
    capabilities: [
      "Custom UI/UX",
      "E-commerce",
      "Responsive Development",
      "Performance Optimization",
    ],
    url: undefined,
    isCaseStudy: true,
    accentGradient: "from-amber-500/20 to-orange-600/20",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "portfolio-platform",
    name: "Portfolio Platform",
    industry: "Professional Services",
    type: "Portfolio Website",
    description:
      "A clean, image-focused portfolio with smooth page transitions, project showcases, and an integrated WhatsApp contact flow.",
    capabilities: [
      "Custom UI/UX",
      "Responsive Development",
      "Contact Forms",
      "WhatsApp Integration",
    ],
    url: undefined,
    isCaseStudy: true,
    accentGradient: "from-emerald-500/20 to-teal-600/20",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "business-hub",
    name: "Business Hub",
    industry: "Professional Services",
    type: "Business Website",
    description:
      "A multi-page business website with service breakdowns, team profiles, enquiry handling, and a custom admin panel for content updates.",
    capabilities: [
      "Custom UI/UX",
      "Responsive Development",
      "Admin Dashboard",
      "Lead Generation",
    ],
    url: undefined,
    isCaseStudy: true,
    accentGradient: "from-blue-500/20 to-indigo-600/20",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "product-launch",
    name: "Product Launch Page",
    industry: "Technology",
    type: "Landing Page",
    description:
      "A high-conversion landing page with scroll-triggered animations, feature breakdowns, and an integrated enquiry form designed for a SaaS product.",
    capabilities: [
      "Custom UI/UX",
      "Landing Page",
      "Lead Generation",
      "Performance Optimization",
    ],
    url: undefined,
    isCaseStudy: true,
    accentGradient: "from-violet-500/20 to-purple-600/20",
    iconBg: "bg-violet-500/10",
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