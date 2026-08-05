export const contactInfo = {
  headquarters: {
    label: "Headquarters",
    address: "Bole Lemi",
    city: "Addis Ababa",
    country: "Ethiopia",
  },
  phone: {
    label: "Phone",
    values: ["0917428514", "0910132529"],
  },
  email: {
    label: "Email",
    value: "info@fedhopower.com", // Keeping a placeholder email or leaving it out if not provided
  },
  social: [
    {
      platform: "LinkedIn",
      label: "Fedho Power Solution PLC LinkedIn",
      url: "https://www.linkedin.com/in/fedho-power-solution-plc-014a7a3a1/",
    },
    {
      platform: "Facebook",
      label: "Fedho Power Solution PLC Facebook Page",
      url: "https://web.facebook.com/fedhopowersolution",
    },
    {
      platform: "TikTok",
      label: "Fedho Power Solution PLC TikTok",
      url: "https://www.tiktok.com/@fedho2319796111699",
    },
    {
      platform: "Telegram",
      label: "Fedho Power Solution PLC Telegram",
      url: "https://t.me/+lSw2LwIYjLExOWE0",
    },
  ],
} as const;

export const productInterestOptions = [
  "Residential (2–10KW)",
  "Commercial (15–60KW)",
  "Industrial (80–200KW)",
  "Enterprise (250–600KW)",
  "Not sure — need consultation",
] as const;
