export type AwardItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  year?: string;
};

export const awardsHighlight = {
  biruh: {
    title: "Biruh National Innovation Competition",
    description:
      "Fedesa Shuma entered the Biruh National Innovation Competition with an improved hybrid generator prototype, won the competition, and was selected for incubation.",
  },
  international: {
    title: "International Startup Recognition",
    description:
      "Winner of international startup recognition. Featured by multiple media outlets including EU-Africa Business Forum and Shega.",
  },
};

export const awards: AwardItem[] = [
  {
    id: "biruh",
    title: "Biruh National Innovation Competition",
    description: "Winner — selected for incubation program",
    image: "/media/awards/receiveing_2025_award.jpg",
    imageAlt: "Fedho Power receiving innovation award",
  },
  {
    id: "entrepreneurship-2025",
    title: "2025 Entrepreneurship Award",
    description: "Recognition for entrepreneurial innovation in clean energy",
    image: "/media/awards/2025_enterpreneurship_award.jpg",
    imageAlt: "2025 Entrepreneurship Award certificate",
    year: "2025",
  },
  {
    id: "receiving-award",
    title: "Award Ceremony",
    description: "Receiving recognition for hybrid power innovation",
    image: "/media/awards/receiveing_2025_award.jpg",
    imageAlt: "Receiving 2025 award at ceremony",
    year: "2025",
  },
  {
    id: "ministry",
    title: "Ministry of Labor and Skills",
    description: "Certificate of recognition",
    image: "/media/awards/certificate_ministry_of_labor_and_skills.jpg",
    imageAlt: "Certificate from Ministry of Labor and Skills",
  },
  {
    id: "edi",
    title: "Letter of Recommendation — EDI",
    description: "Letter of recommendation from EDI",
    image: "/media/awards/Letter_of_recommendation_from_EDI.jpg",
    imageAlt: "Letter of recommendation from EDI",
  },
  {
    id: "edu",
    title: "Ethiopian Defence University",
    description: "Letter of recommendation from Ethiopian Defence University",
    image: "/media/awards/LoR_from_Ethiopian_Defence_University.jpg",
    imageAlt: "Letter of recommendation from Ethiopian Defence University",
  },
];

export const mediaCoverage = [
  {
    source: "EU-Africa Business Forum",
    description:
      "Official company profile describing Fedho Power Solution PLC as an Ethiopian clean-energy startup developing locally manufactured hybrid generators.",
  },
  {
    source: "Shega",
    title: "This Ethiopian Startup Is Replacing Diesel Generators with Silent Hybrids",
    description:
      "Founder journey from frequent power outages in Dembi Dolo to creating Fedho Power Solution PLC.",
  },
  {
    source: "Facebook",
    description:
      "Public company updates including product photos, installations, awards, and customer deliveries.",
  },
  {
    source: "LinkedIn",
    description: "Company profile and professional information.",
  },
  {
    source: "TikTok",
    description:
      "Videos demonstrating products, company activities, and generator operation.",
  },
];
