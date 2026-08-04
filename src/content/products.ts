export type ProductSeriesId =
  | "residential"
  | "commercial"
  | "industrial"
  | "enterprise";

export type ProductSeries = {
  id: ProductSeriesId;
  name: string;
  capacityRange: string;
  capacities: string[];
  targetCustomer: string;
  applications: string[];
  description: string;
  image: string;
  imageAlt: string;
};

export const productSeries: ProductSeries[] = [
  {
    id: "residential",
    name: "Residential Series",
    capacityRange: "2–10KW",
    capacities: ["2KW", "3KW", "5KW", "6KW", "8KW", "10KW"],
    targetCustomer: "Homeowners",
    applications: [
      "Homes",
      "Apartments",
      "Small Shops",
      "TVs",
      "Refrigerators",
      "Laptops",
      "Internet Equipment",
    ],
    description:
      "Designed for homes and light commercial use. Provides reliable backup power for daily household appliances.",
    image: "/media/products_and_generators/product1.jpg",
    imageAlt: "FP Hybrid Generator residential series product",
  },
  {
    id: "commercial",
    name: "Commercial Series",
    capacityRange: "15–60KW",
    capacities: [
      "15KW",
      "20KW",
      "25KW",
      "30KW",
      "40KW",
      "50KW",
      "60KW",
    ],
    targetCustomer: "Small & Medium Businesses",
    applications: [
      "Hotels",
      "Restaurants",
      "Workshops",
      "Offices",
      "Medium Businesses",
    ],
    description:
      "Suitable for businesses requiring uninterrupted operations. Ideal for restaurants, hotels, workshops, and office buildings.",
    image: "/media/products_and_generators/product3.jpg",
    imageAlt: "FP Hybrid Generator commercial series product",
  },
  {
    id: "industrial",
    name: "Industrial Series",
    capacityRange: "80–200KW",
    capacities: ["80KW", "100KW", "120KW", "150KW", "200KW"],
    targetCustomer: "Large Businesses",
    applications: [
      "Hospitals",
      "Large Hotels",
      "Factories",
      "Manufacturing",
    ],
    description:
      "Designed for facilities with higher power demand. Supports manufacturing, healthcare, and hospitality operations.",
    image: "/media/products_and_generators/product4.jpg",
    imageAlt: "FP Hybrid Generator industrial series product",
  },
  {
    id: "enterprise",
    name: "Enterprise Series",
    capacityRange: "250–600KW",
    capacities: [
      "250KW",
      "300KW",
      "350KW",
      "400KW",
      "500KW",
      "600KW",
    ],
    targetCustomer: "Institutions",
    applications: [
      "Government Projects",
      "Banks",
      "Data Centers",
      "Industrial Parks",
      "Large Manufacturing Plants",
    ],
    description:
      "Built for mission-critical infrastructure. Recommended for government institutions, financial organizations, industrial parks, and large-scale infrastructure projects.",
    image: "/media/products_and_generators/many_products_together.jpg",
    imageAlt: "FP Hybrid Generator enterprise series products",
  },
];

export const commonFeatures = [
  "Hybrid Charging",
  "Solar Compatible",
  "Grid Charging",
  "Silent Operation",
  "Battery Storage",
  "Intelligent Power Management",
  "Local Assembly",
  "Professional Installation",
  "Maintenance Support",
];

export const technicalSpecs = [
  { label: "Product Family", value: "FP Hybrid Generator" },
  { label: "Available Capacities", value: "2KW – 600KW" },
  { label: "Charging Sources", value: "Solar Panels, National Grid" },
  { label: "Output", value: "AC Electricity" },
  { label: "Battery System", value: "Rechargeable Battery Storage" },
  {
    label: "Energy Management",
    value: "Intelligent Automatic Power Management",
  },
  { label: "Operating Noise", value: "Silent Operation" },
  {
    label: "Fuel Consumption",
    value: "No diesel fuel required during normal hybrid operation",
  },
  { label: "Installation", value: "Professional installation available" },
  {
    label: "Maintenance",
    value: "Preventive maintenance, repair services, technical support",
  },
  {
    label: "Manufacturing",
    value:
      "Locally assembled in Ethiopia. Some electronic components and batteries are imported.",
  },
];

export const productRecommendation =
  "Customers should select generator capacity based on total electrical load, future expansion plans, and installation requirements. A professional site assessment is recommended before purchase.";

export const productComparison = productSeries.map((series) => ({
  series: series.name.replace(" Series", ""),
  capacity: series.capacityRange,
  targetCustomer: series.targetCustomer,
  typicalApplications: series.applications.slice(0, 3).join(", "),
}));
