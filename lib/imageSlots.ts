
export const imageSlots = {
  projectCard: { aspect: "aspect-[4/3]", label: "Project cover · 4:3 · min 1600×1200 px" },
  projectHero: { aspect: "aspect-[16/9]", label: "Project hero · 16:9 · min 1600×900 px" },
  projectGallery: { aspect: "aspect-[4/3]", label: "Project gallery · 4:3 · min 1200×900 px" },
  productCard: { aspect: "aspect-square", label: "Product · 1:1 · min 1200×1200 px" },
  productMain: { aspect: "aspect-square", label: "Product main · 1:1 · min 1200×1200 px" },
  productGallery: { aspect: "aspect-square", label: "Product gallery · 1:1 · min 1200×1200 px" },
} as const; 