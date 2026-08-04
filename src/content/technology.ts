export const hybridOverview = {
  title: "How Our Hybrid Technology Works",
  summary:
    "FP Hybrid Generators combine multiple energy sources into a single intelligent power system. Instead of relying only on diesel fuel, the system intelligently manages electricity from solar panels, battery storage, and the national power grid.",
  result:
    "The result is a cleaner, quieter, and more economical power solution.",
};

export const energySources = [
  {
    title: "Solar Energy",
    description:
      "Solar panels generate electricity during daylight hours. The generated energy is used to supply electrical loads and charge the battery bank.",
    icon: "sun" as const,
  },
  {
    title: "Grid Electricity",
    description:
      "When solar energy is unavailable or insufficient, the system can charge batteries from the national electricity grid. This ensures continuous availability of backup power.",
    icon: "zap" as const,
  },
  {
    title: "Battery Storage",
    description:
      "Battery storage allows electricity generated earlier to be used later. The batteries provide uninterrupted electricity during power outages.",
    icon: "battery" as const,
  },
  {
    title: "AC Output",
    description:
      "The inverter converts stored DC battery power into AC electricity suitable for homes, offices, businesses, hospitals, and factories.",
    icon: "plug" as const,
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: "Solar Panels Generate Electricity",
    phase: "daytime" as const,
  },
  {
    step: 2,
    title: "Power Supplied to Connected Equipment",
    phase: "daytime" as const,
  },
  {
    step: 3,
    title: "Remaining Energy Charges Batteries",
    phase: "daytime" as const,
  },
  {
    step: 4,
    title: "Battery Supplies Stored Electricity",
    phase: "night" as const,
  },
  {
    step: 5,
    title: "Grid Charges Batteries When Needed",
    phase: "night" as const,
  },
  {
    step: 6,
    title: "Electricity Continues Without Interruption",
    phase: "continuous" as const,
  },
];

export const systemFlow = [
  { label: "Solar", description: "Daylight generation" },
  { label: "Battery", description: "Energy storage" },
  { label: "Intelligent Controller", description: "Automatic management" },
  { label: "Inverter", description: "DC to AC conversion" },
  { label: "Home / Business", description: "Reliable power delivery" },
];

export const powerPriority = [
  {
    order: 1,
    source: "Solar Energy",
    description: "Primary renewable source during daylight",
  },
  {
    order: 2,
    source: "Battery Storage",
    description: "Stored energy for outages and nighttime",
  },
  {
    order: 3,
    source: "National Grid",
    description: "Backup charging when solar is insufficient",
  },
];

export const intelligentManagement = {
  title: "Intelligent Power Management",
  summary:
    "Instead of requiring users to manually switch between power sources, the system automatically selects the most appropriate source based on availability and operating conditions.",
  automaticSwitching:
    "When electricity from the national grid fails, the system automatically continues supplying power from the battery system. When solar energy becomes available again, battery charging resumes automatically. No manual intervention is required.",
  batteryProtection: [
    "Charging level",
    "Battery health",
    "Power demand",
    "Charging cycles",
  ],
  userBenefits: [
    "No manual switching",
    "Continuous electricity",
    "Reduced energy costs",
    "Efficient battery usage",
    "Improved system reliability",
    "Lower maintenance requirements",
  ],
};

export const hybridBenefits = [
  "Silent operation",
  "Lower operating costs",
  "Renewable energy integration",
  "Reduced dependence on diesel fuel",
  "Automatic operation",
  "Reliable backup power",
  "Environmentally friendly",
];

export const workflowAdvantages = [
  "Lower electricity costs",
  "Reliable backup power",
  "Renewable energy utilization",
  "Reduced fuel dependency",
  "Quiet operation",
  "Minimal user interaction",
];

export const dieselComparison = {
  title: "Hybrid vs. Conventional Diesel",
  note: "Focus on hybrid advantages and local support — not competitor criticism.",
  hybrid: [
    "Silent operation",
    "Solar + grid charging",
    "No diesel fuel during normal hybrid operation",
    "Locally assembled in Ethiopia",
    "Professional installation and after-sales service",
    "Lower long-term operating cost",
    "Local technical support",
  ],
  diesel: [
    "Widely available",
    "Lower initial purchase familiarity",
    "Fuel costs",
    "Noise",
    "Maintenance requirements",
    "Environmental impact",
  ],
};

export const continuousOperationGoal =
  "The objective of the system is uninterrupted power availability while maximizing the use of renewable energy.";
