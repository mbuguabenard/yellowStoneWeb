import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { imageSlots } from "@/lib/imageSlots";
import { getAllProjects,getLowestPrice, getProductsForProject,getProfessionalById, getProjectBySlug } from "@/lib/queries";
import { formatKes, humanise, initials } from "@/lib/format";

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getAllProjects().map((project) => ({ slug: project.slug}));
}

//sets the browser tab title and serach-result text for this project
export async function generateMetadata ({ params}: ProjectPageProps): Promise<Metadata> {
    const  {slug} = await params;
    const project = getProjectBySlug(slug)
    if (!project) return {title: "Project not foud"};
    return {title:project.title, description: project.description};

}

export default async function ProjectPage({params}: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug( slug);
    
    if (!project ) notFound();

    const products = getProductsForProject(project);
    const professional = getProfessionalById(project.professionalId);

    const lookTotal = products.reduce(
        (sum, product) => sum + (getLowestPrice(product.id) ?? 0),
        0,
    );
    return (
        <article>
            <div className="mx-auto max-w-6xl px-4 pt-8">
                {/*Breadcrumb: a small trail back to the list */}
                <nav aria-label="Breadcrumb" className="text-sm text-leaf-900/70">
                <Link href="/projects" className="hover:text-leaf-600">
                Projects
                </Link> {""}
                / <span>{project.title}</span>
                </nav>

                {/*Hero image spot */}
                <ImagePlaceholder
                  color={project.imageColor}
                  slot={imageSlots.projectHero}
                  className="mt-4 overflow-hidden rounded-2xl"
                />

                <header className="mt-8">
                    <p className="text-sm font-medium text-clay-600">
                        {humanise(project.style)} · {humanise(project.spaceType)}
                    </p>
                    <h1 className="mt-1 font-heading text-4xl font-semibold">{project.title}</h1>
                    <p className="mt-1 text-leaf-900/70">{project.location}</p>
                </header>

                <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 sm:grid-cols-4">
                    <div>
                        <dt className="text-xs text-leaf-900/60">Style</dt>
                        <dd className="font-medium">{humanise(project.style)}</dd>
                    </div>

                    <div>
                        <dt className="text-xs text-leaf-900/60">Space</dt>
                        <dd className="font-medium">{humanise(project.spaceType)}</dd>
                    </div>

                    <div>
                        <dt className="text-xs text-leaf-900/60">Area</dt>
                        <dd className="font-medium">{project.areaSqm} m²</dd>
                    </div>

                    <div>
                        <dt className="text-xs text-leaf-900/60">Project budget</dt>
                        <dd className="font-medium">{formatKes(project.budgetKes)}</dd>
                    </div>

                </dl>

                <p className="mt-6 max-w-3xl text-lg text-leaf-900/80">{project.description}</p>


            </div>



            {/*Gallery */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <SectionHeading title="Gallery" />
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                    {Array.from({ length:6}, (_, index) => index +1).map((n) => (
                        <ImagePlaceholder
                         key={n}
                         color={project.imageColor}
                         slot={imageSlots.projectGallery}
                         note={`Image ${n} of 6`}
                         className="overflow-hidden rounded-xl"
                        />
                    ))}
                </div>
            </section>

            {/*Shop this project */}
            <section className="bg-leaf-50">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    <SectionHeading 
                    title="Shop this project"
                    subtitle={`${products.length} plants and materials used here.Shop the whole look from ${formatKes(lookTotal)}.`}
                    />
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                </div>
            </section>

            {/*Designer and hire */}
            {professional && (
                <section className="mx-auto max-w-6xl px-4 py-12">
                    <SectionHeading title="Designed by" />
                    <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border-sand-200 bg-white p-6">
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf-100 text-lg font-medium text-leaf-700">
                                {initials(professional.name)}

                            </span>
                            <div>
                                <h3 className="font-heading text-xl font-semibold">{professional.name}</h3>
                                <p className="text-sm text-leaf-900/70">
                                {professional.role === "architect" ? "Landscape architect" : "Landscape contractor"} ·{" "}
                                 </p>
                                 <Link
                                 href={`/professionals/${professional.slug}`}
                                 className="text-sm font-medium text-leaf-700 hover-underline"
                                 >
                                    View portfolio
                                 </Link>
                            </div>
                        </div>

                        {/*passes the project name along so hire form can pre-fill */}

                        <Link 
                        href={`/hire?project=${project.slug}`}
                        className="rounded-full bg-leaf-700 px-6 py-3 font-medium text-white hover:bg-leaf-900"
                        >
                            Want this done for you?
                        </Link>

                    </div>
                </section>
            )}


        </article>
    );
    
}
    