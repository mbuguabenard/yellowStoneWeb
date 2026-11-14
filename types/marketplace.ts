export type ProductCategory = "plants" | "trees" |  "materials" | "accessories";
export type SunNeed = "full-sun" | "partial-shade" | "shade";
export type WaterNeed = "low" | "medium" | "high";
export type ProjectStyle = "tropical" | "modern" | "dry-garden" | "cottage";
export type SpaceType = "home-garden" | "courtyard" | "estate" | "commercial";

//A business that sells products on the marketplace.
export interface Seller {
    id:string;
    name: string;
    location: string;
    verified: boolean;
    rating: number;
}

//something that can be bought
export interface Product {
    id: string;
    slug: string;
    name: string;
    scientificName?: string;
    category: ProductCategory;
    description: string;
    imageColor: string;
    plantDetails: {
        sun: SunNeed;
        water: WaterNeed;
        matureHeight: string;
    } 
}

//One sellers offer for one product
export interface SellerOffer {
    id: string;
    productId: string;
    sellerId: string;
    priceKes: number;
    inStock: boolean;
    delivery: string;
    storeUrl: string;
}

//A landscape architect/contractor
export interface Professional{
    id: string;
    slug: string;
    name: string;
    role: "architect" | "contractor"
    location: string;
    yearsExperience: number;
    bio: string;
    specialties: string[];
}

//A finished landscape that we showcase
export interface Project{
    id: string;
    slug: string;
    title: string;
    location: string;
    style: ProjectStyle;
    spaceType: SpaceType;
    description: string;
    imageColor: string;
    areaSqm: number;
    budgetKes: number;
    professionalId: string;
    productIds: string[];
}
