export const contactInfo = {
  headquarters: {
    label: "Headquarters",
    address: "Bole Lemi",
    city: "Addis Ababa",
    country: "Ethiopia",
  },
  phone: {
    label: "Phone",
    value: "To be confirmed",
    pending: true,
  },
  email: {
    label: "Email",
    value: "To be confirmed",
    pending: true,
  },
  social: [
    {
      platform: "Facebook",
      label: "Fedho Power Solution PLC Facebook Page",
      url: null,
      pending: true,
    },
    {
      platform: "LinkedIn",
      label: "Fedho Power Solution PLC LinkedIn",
      url: null,
      pending: true,
    },
    {
      platform: "TikTok",
      label: "Fedho Power Solution PLC TikTok",
      url: null,
      pending: true,
    },
  ],
  pendingNotice:
    "Contact details are pending official verification. Headquarters location is confirmed from public company information.",
} as const;

export const productInterestOptions = [
  "Residential (2–10KW)",
  "Commercial (15–60KW)",
  "Industrial (80–200KW)",
  "Enterprise (250–600KW)",
  "Not sure — need consultation",
] as const;
