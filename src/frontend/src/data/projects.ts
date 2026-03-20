export type ProjectStatus = "completed" | "upcoming" | "proposed";
export type ProjectType =
  | "Residential Flats"
  | "Residential Villas"
  | "Row Houses"
  | "Commercial Complex";

export interface Project {
  id: number;
  name: string;
  status: ProjectStatus;
  type: ProjectType | string;
  location: string;
  description: string;
  fullDescription: string;
  images: string[];
  floorPlanImages?: string[];
  specs: { label: string; value: string }[];
  units?: string;
  area?: string;
  completionYear?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Rajprabha Heights",
    status: "completed",
    type: "Residential Flats",
    location: "Baner, Pune",
    description:
      "Premium 2BHK and 3BHK apartments with world-class amenities in the heart of Baner, Pune.",
    fullDescription:
      "Rajprabha Heights stands as a testament to modern living — a meticulously crafted residential complex offering 2BHK and 3BHK apartments designed for the discerning homeowner. Located in the vibrant neighbourhood of Baner, Pune, the project integrates contemporary architecture with lush green landscapes. Residents enjoy a clubhouse, gymnasium, swimming pool, children's play area, and 24/7 security.",
    images: [
      "/assets/generated/project-completed-1.dim_600x400.jpg",
      "/assets/generated/project-completed-2.dim_600x400.jpg",
    ],
    floorPlanImages: [
      "/assets/generated/floorplan-1.dim_600x400.jpg",
      "/assets/generated/floorplan-1.dim_600x400.jpg",
    ],
    units: "120 Units",
    area: "850 – 1450 sq.ft.",
    completionYear: "2022",
    specs: [
      { label: "Total Units", value: "120" },
      { label: "Configuration", value: "2BHK & 3BHK" },
      { label: "Area Range", value: "850 – 1450 sq.ft." },
      { label: "Floors", value: "G + 14" },
      { label: "Possession", value: "2022" },
      { label: "Status", value: "Fully Handed Over" },
    ],
  },
  {
    id: 2,
    name: "Rajprabha Garden Villas",
    status: "completed",
    type: "Residential Villas",
    location: "Gangapur Road, Nashik",
    description:
      "Serene row house villas with private gardens, offering a community lifestyle amidst lush greenery in Nashik.",
    fullDescription:
      "Rajprabha Garden Villas is a thoughtfully planned villa township in Nashik's prestigious Gangapur Road corridor. Each row house features a private garden, ample living space, and premium finishes. The gated community provides a jogging track, clubhouse, temple, and round-the-clock security, making it the ideal retreat from urban hustle.",
    images: [
      "/assets/generated/project-completed-2.dim_600x400.jpg",
      "/assets/generated/project-completed-1.dim_600x400.jpg",
    ],
    floorPlanImages: [
      "/assets/generated/floorplan-1.dim_600x400.jpg",
      "/assets/generated/floorplan-1.dim_600x400.jpg",
    ],
    units: "48 Villas",
    area: "1800 – 2400 sq.ft.",
    completionYear: "2023",
    specs: [
      { label: "Total Villas", value: "48" },
      { label: "Configuration", value: "3BHK Row Houses" },
      { label: "Area Range", value: "1800 – 2400 sq.ft." },
      { label: "Floors", value: "G + 1" },
      { label: "Possession", value: "2023" },
      { label: "Status", value: "Fully Handed Over" },
    ],
  },
  {
    id: 3,
    name: "Rajprabha Skyline",
    status: "upcoming",
    type: "Residential Flats",
    location: "Hinjewadi, Pune",
    description:
      "A landmark luxury high-rise redefining the Pune skyline with breathtaking views and ultra-premium residences.",
    fullDescription:
      "Rajprabha Skyline is our most ambitious project to date — a 32-floor luxury high-rise in Pune's booming IT corridor of Hinjewadi. The tower will feature sky decks, rooftop infinity pool, concierge services, and state-of-the-art smart-home integration. With panoramic views of the Western Ghats and proximity to major tech parks, it is an address unlike any other.",
    images: [
      "/assets/generated/project-upcoming-1.dim_600x400.jpg",
      "/assets/generated/project-completed-1.dim_600x400.jpg",
    ],
    floorPlanImages: [
      "/assets/generated/floorplan-1.dim_600x400.jpg",
      "/assets/generated/floorplan-1.dim_600x400.jpg",
    ],
    units: "200 Units",
    area: "1200 – 3500 sq.ft.",
    completionYear: "2026",
    specs: [
      { label: "Total Units", value: "200" },
      { label: "Configuration", value: "3BHK, 4BHK & Penthouses" },
      { label: "Area Range", value: "1200 – 3500 sq.ft." },
      { label: "Floors", value: "G + 32" },
      { label: "Expected Possession", value: "Dec 2026" },
      { label: "Status", value: "Under Construction" },
    ],
  },
  {
    id: 4,
    name: "Rajprabha Green Valley",
    status: "proposed",
    type: "Row Houses",
    location: "Cidco, Aurangabad",
    description:
      "A pioneering eco-friendly integrated township with solar energy, rainwater harvesting, and organic farming zones.",
    fullDescription:
      "Rajprabha Green Valley is a visionary proposed township conceptualised around sustainability. Spread over 50 acres in Aurangabad's CIDCO zone, the township will integrate solar microgrids, rainwater harvesting systems, organic farming plots, EV charging stations, and low-carbon construction materials. It aims to be the first net-zero carbon residential township in Maharashtra.",
    images: [
      "/assets/generated/project-proposed-1.dim_600x400.jpg",
      "/assets/generated/project-upcoming-1.dim_600x400.jpg",
    ],
    floorPlanImages: [
      "/assets/generated/floorplan-1.dim_600x400.jpg",
      "/assets/generated/floorplan-1.dim_600x400.jpg",
    ],
    units: "500 Plots & Units",
    area: "600 – 2000 sq.ft.",
    completionYear: "2028",
    specs: [
      { label: "Area", value: "50 Acres" },
      { label: "Configuration", value: "Plots, 1BHK, 2BHK & 3BHK" },
      { label: "Units/Plots", value: "500+" },
      { label: "Expected Launch", value: "2025" },
      { label: "Expected Possession", value: "2028" },
      { label: "Status", value: "Proposed" },
    ],
  },
];
