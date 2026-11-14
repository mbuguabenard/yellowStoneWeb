import { getAllProjects, getOffersForProduct, getProductsForProject } from "@/lib/queries";

export default function HomePage (){
    const projects = getAllProjects();

    return (
        <main className="p-8">
            <h1 className="text-2xl font-semibold">Data Check</h1>
            {/*Loop over every project and print its title*/}
            {projects.map((project) => (
                <section key={project.id} className="mt-6">
                    <h2 className="text-xl">{project.title}</h2>
                    <ul className="ml-5 list-disc">
                        {/*For each project,loop over its tagged products */}
                        {getProductsForProject(project).map((product) => {
                            const offers = getOffersForProduct(product.id);
                            return(
                                <li key = {product.id}>
                                    {product.name}: from KES {offers[0]?.priceKes} ({offers.length} sellers)
                                </li>
                            );

                        })}
                    </ul>
                </section>
            ))}


        </main>
     
     

    );
}