export type GalleryCategory =
  | "all"
  | "products"
  | "installations"
  | "founders"
  | "awards"
  | "customers"
  | "factory";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  categories: Exclude<GalleryCategory, "all">[];
};

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "products", label: "Products" },
  { id: "installations", label: "Installations" },
  { id: "founders", label: "Founders" },
  { id: "awards", label: "Awards" },
  { id: "customers", label: "Customers" },
  { id: "factory", label: "Factory" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "generator",
    src: "/media/products_and_generators/generator.jpg",
    alt: "FP Hybrid Generator unit",
    title: "FP Hybrid Generator",
    categories: ["products"],
  },
  {
    id: "product-in-work",
    src: "/media/products_and_generators/product_in_work.jpg",
    alt: "FP Hybrid Generator in operation",
    title: "Generator in Operation",
    categories: ["products", "installations"],
  },
  {
    id: "product1",
    src: "/media/products_and_generators/product1.jpg",
    alt: "FP Hybrid Generator product",
    title: "Residential Series Product",
    categories: ["products"],
  },
  {
    id: "product2",
    src: "/media/products_and_generators/product2_at_EDI.jpg",
    alt: "FP Hybrid Generator at EDI",
    title: "Product at EDI",
    categories: ["products"],
  },
  {
    id: "product3",
    src: "/media/products_and_generators/product3.jpg",
    alt: "FP Hybrid Generator commercial product",
    title: "Commercial Series Product",
    categories: ["products"],
  },
  {
    id: "product4",
    src: "/media/products_and_generators/product4.jpg",
    alt: "FP Hybrid Generator industrial product",
    title: "Industrial Series Product",
    categories: ["products"],
  },
  {
    id: "many-products",
    src: "/media/products_and_generators/many_products_together.jpg",
    alt: "Multiple FP Hybrid Generators together",
    title: "Product Lineup",
    categories: ["products"],
  },
  {
    id: "fedesa-products",
    src: "/media/products_and_generators/products_with_fedesa_shuma.jpg",
    alt: "Fedesa Shuma with FP Hybrid Generators",
    title: "CEO with Product Lineup",
    categories: ["products", "founders"],
  },
  {
    id: "installation",
    src: "/media/installations/installation_photo.jpg",
    alt: "FP Hybrid Generator installation",
    title: "Customer Installation",
    categories: ["installations"],
  },
  {
    id: "fedesa",
    src: "/media/founders/fedesa_shuma_ceo.jpg",
    alt: "Fedesa Shuma, CEO and Co-Founder",
    title: "Fedesa Shuma — CEO",
    categories: ["founders"],
  },
  {
    id: "henok",
    src: "/media/founders/henok_amanuel_cto.jpg",
    alt: "Henok Amanuel, CTO and Co-Founder",
    title: "Henok Amanuel — CTO",
    categories: ["founders"],
  },
  {
    id: "award-2025",
    src: "/media/awards/2025_enterpreneurship_award.jpg",
    alt: "2025 Entrepreneurship Award",
    title: "2025 Entrepreneurship Award",
    categories: ["awards"],
  },
  {
    id: "receiving-award",
    src: "/media/awards/receiveing_2025_award.jpg",
    alt: "Receiving 2025 award",
    title: "Receiving 2025 Award",
    categories: ["awards"],
  },
  {
    id: "ministry-cert",
    src: "/media/awards/certificate_ministry_of_labor_and_skills.jpg",
    alt: "Certificate from Ministry of Labor and Skills",
    title: "Ministry of Labor and Skills Certificate",
    categories: ["awards"],
  },
  {
    id: "edi-lor",
    src: "/media/awards/Letter_of_recommendation_from_EDI.jpg",
    alt: "Letter of recommendation from EDI",
    title: "Letter of Recommendation from EDI",
    categories: ["awards"],
  },
  {
    id: "edu-lor",
    src: "/media/awards/LoR_from_Ethiopian_Defence_University.jpg",
    alt: "Letter of recommendation from Ethiopian Defence University",
    title: "Letter from Ethiopian Defence University",
    categories: ["awards"],
  },
  {
    id: "dembi-dolo",
    src: "/media/customers/dembi_dolo_university_bought.jpg",
    alt: "Dembi Dolo University customer",
    title: "Dembi Dolo University",
    categories: ["customers"],
  },
  {
    id: "harme-clinic",
    src: "/media/customers/harme_clinic_partnership.jpg",
    alt: "Harme Clinic partnership",
    title: "Harme Clinic Partnership",
    categories: ["customers"],
  },
  {
    id: "makina-yesus",
    src: "/media/customers/makina_yesus_saminar_partnership.jpg",
    alt: "Makina Yesus seminar partnership",
    title: "Makina Yesus Seminar Partnership",
    categories: ["customers"],
  },
];
