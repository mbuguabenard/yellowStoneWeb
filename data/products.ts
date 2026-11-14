
import type { Product } from "../types/marketplace";


export const products: Product[] = [
  {
    id: "p1", slug: "bougainvillea", name: "Bougainvillea", scientificName: "Bougainvillea glabra",
    category: "plants", imageColor: "#d946a8",
    description: "A tough climbing shrub with papery magenta bracts. Thrives in heat and poor soil.",
    plantDetails: { sun: "full-sun", water: "low", matureHeight: "3-5 m" },
  },
  {
    id: "p2", slug: "agapanthus", name: "Agapanthus", scientificName: "Agapanthus africanus",
    category: "plants", imageColor: "#6d83d9",
    description: "Clumps of strappy leaves with blue flower globes in summer. Good for borders.",
    plantDetails: { sun: "partial-shade", water: "medium", matureHeight: "0.6 m" },
  },
  {
    id: "p3", slug: "lavender", name: "Lavender", scientificName: "Lavandula angustifolia",
    category: "plants", imageColor: "#9a7fc4",
    description: "Fragrant silver-green foliage and purple spikes. Loves sun and well-drained soil.",
    plantDetails: { sun: "full-sun", water: "low", matureHeight: "0.6 m" },
  },
  {
    id: "p4", slug: "jacaranda", name: "Jacaranda", scientificName: "Jacaranda mimosifolia",
    category: "trees", imageColor: "#8b6fd1",
    description: "A spreading shade tree that blooms in violet clouds. Needs room to grow.",
    plantDetails: { sun: "full-sun", water: "medium", matureHeight: "10-15 m" },
  },
  {
    id: "p5", slug: "sago-palm", name: "Sago palm", scientificName: "Cycas revoluta",
    category: "plants", imageColor: "#3f8f4f",
    description: "A slow-growing architectural plant with glossy feather-like fronds.",
    plantDetails: { sun: "partial-shade", water: "low", matureHeight: "1-2 m" },
  },
  {
    id: "p6", slug: "fountain-grass", name: "Fountain grass", scientificName: "Pennisetum setaceum",
    category: "plants", imageColor: "#c98b5a",
    description: "Arching ornamental grass with soft bottlebrush plumes. Moves beautifully in wind.",
    plantDetails: { sun: "full-sun", water: "low", matureHeight: "1 m" },
  },
  {
      id: "p7", slug: "river-pebbles", name: "River pebbles (20 kg bag)",
      category: "materials", imageColor: "#9ca3af",
      description: "Smooth mixed-grey pebbles for pathways, dry streams and planting beds.",
      
  },
  {
      id: "p8", slug: "solar-path-lights", name: "Solar path lights (set of 6)",
      category: "accessories", imageColor: "#e5b73b",
      description: "Stake-in lights that charge by day and glow at night. No wiring needed.",
      
  },
];
