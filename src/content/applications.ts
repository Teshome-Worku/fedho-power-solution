export type ApplicationSegment = {
  id: string;
  title: string;
  products: string;
  typicalUses: string[];
  needs: string[];
  description: string;
  image?: string;
  imageAlt?: string;
};

export const customerProblems = [
  {
    problem: "Frequent power interruptions",
    solution: "Reliable battery backup with automatic switching",
  },
  {
    problem: "High diesel fuel costs",
    solution: "Solar and grid charging with no diesel during normal operation",
  },
  {
    problem: "Noise from conventional generators",
    solution: "Silent hybrid operation",
  },
  {
    problem: "Expensive maintenance",
    solution: "Preventive maintenance and technical support",
  },
  {
    problem: "Difficulty finding reliable backup power",
    solution: "Locally assembled systems with professional installation",
  },
  {
    problem: "Dependence on imported equipment",
    solution: "Local manufacturing with after-sales support in Ethiopia",
  },
  {
    problem: "Lack of renewable energy integration",
    solution: "Solar-compatible hybrid charging",
  },
];

export const applicationSegments: ApplicationSegment[] = [
  {
    id: "residential",
    title: "Residential",
    products: "2KW–10KW",
    typicalUses: ["Homes", "Apartments", "Villas"],
    needs: [
      "Reliable electricity",
      "Lower electricity costs",
      "Backup during outages",
    ],
    description:
      "Reliable backup power for daily household appliances including TVs, refrigerators, laptops, and internet equipment.",
    image: "/media/products_and_generators/product4.jpg",
    imageAlt: "Residential hybrid generator",
  },
  {
    id: "commercial",
    title: "Commercial",
    products: "15KW–60KW",
    typicalUses: ["Shops", "Restaurants", "Cafes", "Offices"],
    needs: [
      "Business continuity",
      "Protect equipment",
      "Reduce operational downtime",
    ],
    description:
      "Uninterrupted operations for restaurants, hotels, workshops, and office buildings.",
    image: "/media/products_and_generators/product1.jpg",
    imageAlt: "Commercial FP Hybrid Generator",
  },
  {
    id: "industrial",
    title: "Industrial",
    products: "150KW–600KW",
    typicalUses: ["Factories", "Industrial Parks", "Manufacturing"],
    needs: [
      "Continuous production",
      "Reduced operational costs",
      "Power reliability",
    ],
    description:
      "Designed for facilities with higher power demand including manufacturing and large-scale operations.",
    image: "/media/products_and_generators/product_in_work.jpg",
    imageAlt: "FP Hybrid Generator in industrial application",
  },
  {
    id: "government",
    title: "Government & Institutions",
    products: "250KW–600KW",
    typicalUses: [
      "Government Offices",
      "Banks",
      "Data Centers",
    ],
    needs: ["Reliable infrastructure", "Long-term sustainability", "Energy independence"],
    description:
      "Built for mission-critical infrastructure including government institutions and financial organizations.",
    image: "/media/products_and_generators/product2_at_EDI.jpg",
    imageAlt: "Government institution installation",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    products: "80KW–200KW",
    typicalUses: ["Hospitals", "Clinics", "Laboratories"],
    needs: [
      "Life-critical uninterrupted electricity",
      "Medical equipment protection",
    ],
    description:
      "Reliable power for healthcare facilities where uninterrupted electricity is essential.",
    image: "/media/customers/harme_clinic_partnership.jpg",
    imageAlt: "Harme Clinic partnership with Fedho Power Solution PLC",
  },
  {
    id: "education",
    title: "Education",
    products: "15KW–200KW",
    typicalUses: ["Schools", "Universities"],
    needs: [
      "Reliable infrastructure",
      "Continuous learning environment",
    ],
    description:
      "Power solutions for educational institutions requiring reliable electricity for classrooms and facilities.",
    image: "/media/customers/dembi_dolo_university_bought.jpg",
    imageAlt: "Dembi Dolo University customer installation",
  },
];

export const hospitalitySegment = {
  title: "Hospitality",
  products: "20KW–100KW",
  applications: ["Hotels", "Guest Houses", "Resorts"],
  needs: [
    "Continuous customer service",
    "Reliable lighting",
    "Kitchen equipment",
  ],
};

export const customerPartnerships = [
  {
    title: "Dembi Dolo University",
    image: "/media/customers/dembi_dolo_university_bought.jpg",
    imageAlt: "Dembi Dolo University purchased FP Hybrid Generator",
  },
  {
    title: "Harme Clinic Partnership",
    image: "/media/customers/harme_clinic_partnership.jpg",
    imageAlt: "Harme Clinic partnership with Fedho Power Solution PLC",
  },
  {
    title: "Makina Yesus Seminar Partnership",
    image: "/media/customers/makina_yesus_saminar_partnership.jpg",
    imageAlt: "Makina Yesus seminar partnership with Fedho Power Solution PLC",
  },
];
