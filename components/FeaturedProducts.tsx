import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/lib/queries";

export default function FeaturedProducts() {
    const products = getAllProducts().slice(0, 4);

    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading
              title="Plants and materials"
              subtitle="Compare prices from different sellers, then buy from the one you trust."
              linkHref="/products"
              linkLabel="All products" 
            />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </section>
    )
}