
import type { Professional } from "../types/marketplace";

// These are invented people for the prototype.
export const professionals: Professional[] = [
  {
    id: "pr1", slug: "wanjiru-kamau", name: "Wanjiru Kamau", role: "architect",
    location: "Nairobi", yearsExperience: 9,
    bio: "Designs lush, low-maintenance gardens for homes and courtyards.",
    specialties: ["Tropical gardens", "Courtyards"],
  },
  {
    id: "pr2", slug: "otieno-odhiambo", name: "Otieno Odhiambo", role: "contractor",
    location: "Naivasha", yearsExperience: 14,
    bio: "Builds and plants large estate landscapes with a focus on water-wise design.",
    specialties: ["Dry gardens", "Estate landscaping"],
  },
  {
    id: "pr3", slug: "amina-hassan", name: "Amina Hassan", role: "architect",
    location: "Nairobi", yearsExperience: 6,
    bio: "Clean modern entrances and compact urban gardens.",
    specialties: ["Modern design", "Small spaces"],
  },
];