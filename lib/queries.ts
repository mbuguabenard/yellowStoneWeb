import { projects } from "../data/project";
import { products } from "../data/products";
import { offers } from "../data/offers";
import { sellers } from "../data/seller";
import { professionals } from "../data/professional";
import type { Project, Product, SellerOffer, Seller, Professional } from "../types/marketplace"; 

export interface OfferWithSeller extends SellerOffer {
    seller: Seller;
}

export function getAllProjects(): Project[]{
    return projects;
}

export function getAllProducts() : Product[]{
    return products;
}

//.find() returns the first match, or undefined if nothing matches
export function getProjectBySlug(slug: string) : Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getProfessionalById(id: string): Professional | undefined {
    return professionals.find((pro) => pro.id === id);

}

//Turn a project's list of product ids into the full product objects
export function getProductsForProject(project: Project) : Product[] {
    return project.productIds
    .map((id) => products.find((product) => product.id === id))
    //.filter drops any id that did not match and tells ts the rest are real products
    .filter((product): product is Product => product !== undefined);
}

////seen in these projects.the reverse link from a product back to projects
export function getProjectUsingProduct(productId: string): Project[] {
    return projects.filter((project) => project.productIds.includes(productId));
}

export function getProjectsForProfessional(professionalId: string): Project[] {
    return projects.filter((project) => project.professionalId === professionalId);
}

//all offers for a product,each with its seller attached,chaepest first.
export function getOffersForProduct(productId: string): OfferWithSeller[] {
    const result : OfferWithSeller[] = [];
    for (const offer of offers) {
        if (offer.productId !== productId) continue;
        const seller = sellers.find((s) => s.id === offer.sellerId);
        if (seller) result.push({...offer, seller});
    }

    return result.sort((a, b) =>a.priceKes - b.priceKes);

}

//the from kes price shown on product cards.
export function getLowestPrice(productId: string): number | undefined {
    const inStock = getOffersForProduct(productId).filter((offer) => offer.inStock);
    return inStock[0]?.priceKes;
}