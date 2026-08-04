export type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
};

export const stats: StatItem[] = [
  {
    value: 600,
    suffix: "KW",
    prefix: "2–",
    label: "Power Capacity Range",
    description: "FP Hybrid Generators from 2KW to 600KW",
  },
  {
    value: 4,
    label: "Product Series",
    description: "Residential, Commercial, Industrial, and Enterprise",
  },
  {
    value: 2024,
    label: "Company Founded",
    description: "Fedho Power Solution PLC registered December 2024",
  },
  {
    value: 50,
    prefix: "11–",
    label: "Team Members",
    description: "Growing startup with local manufacturing operations",
  },
];
