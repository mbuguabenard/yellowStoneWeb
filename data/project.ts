// src/data/projects.ts
import type { Project } from "../types/marketplace";

// productIds lists the products "tagged" in each project.
// This is what will make plants and materials clickable on a project page.
export const projects: Project[] = [
  {
    id: "pj1", slug: "karen-tropical-courtyard", title: "Karen Tropical Courtyard",
    location: "Karen, Nairobi", style: "tropical", spaceType: "courtyard",
    description: "A shaded courtyard turned into a lush tropical retreat with bold foliage and a pebble path.",
    imageColor: "#2f7d4f", areaSqm: 60, budgetKes: 450000,
    professionalId: "pr1", productIds: ["p1", "p2", "p5", "p7"],
  },
  {
    id: "pj2", slug: "naivasha-dry-garden-retreat", title: "Naivasha Dry Garden Retreat",
    location: "Naivasha", style: "dry-garden", spaceType: "estate",
    description: "A water-wise estate garden of grasses, lavender and colour that survives the dry season.",
    imageColor: "#b98a4e", areaSqm: 800, budgetKes: 1800000,
    professionalId: "pr2", productIds: ["p1", "p3", "p6", "p7"],
  },
  {
    id: "pj3", slug: "runda-modern-entrance", title: "Runda Modern Entrance",
    location: "Runda, Nairobi", style: "modern", spaceType: "home-garden",
    description: "A clean, structured entrance with a feature tree, grasses and soft path lighting.",
    imageColor: "#4b5563", areaSqm: 120, budgetKes: 700000,
    professionalId: "pr3", productIds: ["p2", "p4", "p6", "p8"],
  },
];