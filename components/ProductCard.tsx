import Link from "next/link";
import type { Product } from "@/types/marketplace";
import { getLowestPrice, getOffersForProduct } from "@/lib/queries";
import { formatKes, humanise } from "@/lib/format";

export default function ProductCard({ product}: {product: Product}) {
    const lowestPrice = getLowestPrice(product.id);
    const sellerCount = getOffersForProduct(product.id).length;

    return(
        <Link
        href={`/products/${product.slug}`}
        className="group block overflow-hidden rounded-2xl border border-sand-200 bg-white transition hover:shadow-md "
        >
            <div className="aspect-square" style={{ backgroundColor: product.imageColor }} aria-hidden="true" />
            <div className="p-4">
                <p className="text-xs font-medium text-clay-600">{humanise(product.category)}</p>
                <h3 className="mt-1 font-medium group-hover:text-leaf-700">{product.name}</h3>

                {product.scientificName && (
                    <p className="text-s italic text-leaf-900/60">{product.scientificName}</p>
                )}
                <p className="mt-3 text-sm font-medium text-leaf-700">
                    {lowestPrice !== undefined ? `From ${formatKes(lowestPrice)}` : "Out of stock"}
                </p>
                <p className="text-xs text-leaf-900/60">
                {sellerCount} {sellerCount === 1 ? "seller" : "sellers"}
                </p>
            </div>
        </Link>
    )
}