import { IMG } from "./images";
import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "households",
    name: "Homes & Households",
    icon: "Home",
    description:
      "Everyday cleaning essentials that keep family spaces spotless, germ-free and beautifully fragrant.",
    points: ["Floor, kitchen & bathroom care", "Gentle hand wash for the family", "Long-lasting freshness"],
    image: IMG.family,
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    icon: "BedDouble",
    description:
      "Premium finishes that impress guests — spotless glass, sparkling bathrooms and welcoming fragrance.",
    points: ["Streak-free glass & mirrors", "Hygienic bathroom care", "Consistent bulk supply"],
    image: IMG.hotelBed,
  },
  {
    slug: "hospitals",
    name: "Hospitals & Clinics",
    icon: "Stethoscope",
    description:
      "Hospital-grade disinfectants and sanitizers engineered for infection control and patient safety.",
    points: ["High-strength phenyl & disinfectants", "70% alcohol sanitizers", "Reliable, on-time bulk delivery"],
    image: IMG.hospital,
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafés",
    icon: "UtensilsCrossed",
    description:
      "Grease-cutting kitchen and dishwash solutions that keep commercial kitchens food-safe and shining.",
    points: ["High-foam dish wash", "Heavy-duty degreasers", "Bulk economy packs"],
    image: IMG.kitchenEquipment,
  },
  {
    slug: "schools",
    name: "Schools & Institutions",
    icon: "GraduationCap",
    description:
      "Safe, effective and economical hygiene for high-traffic classrooms, corridors and washrooms.",
    points: ["Child-safe liquid soap", "Floor disinfectants", "Cost-effective bulk supply"],
    image: IMG.disinfectRoom,
  },
  {
    slug: "offices",
    name: "Offices & Corporates",
    icon: "Building2",
    description:
      "Complete workplace hygiene — from sparkling floors and glass to sanitizers at every desk.",
    points: ["Multi-purpose cleaners", "Desk & surface sanitizers", "Fresh, professional spaces"],
    image: IMG.ppeDisinfect,
  },
  {
    slug: "retail-stores",
    name: "Retail Stores",
    icon: "Store",
    description:
      "Fast-moving, trusted cleaning brands with premium packaging that sells off your shelves.",
    points: ["Attractive retail packing", "Strong repeat demand", "Healthy retailer margins"],
    image: IMG.cleaningProducts,
  },
  {
    slug: "wholesalers-distributors",
    name: "Wholesalers & Distributors",
    icon: "Truck",
    description:
      "A profitable partnership with dependable stock, competitive pricing and business growth support.",
    points: ["Competitive wholesale pricing", "Reliable stock availability", "Territory support"],
    image: IMG.warehouse,
  },
  {
    slug: "cleaning-agencies",
    name: "Cleaning Agencies",
    icon: "SprayCan",
    description:
      "Professional-grade cleaning chemicals that deliver consistent, reliable results for your clients.",
    points: ["Institutional-strength formulas", "Consistent batch quality", "Bulk & refill options"],
    image: IMG.moppingBeige,
  },
];
