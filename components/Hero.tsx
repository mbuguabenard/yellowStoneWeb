import Link from "next/link";

export default function Hero() {
    return(
        <section className="bg-leaf-50">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
                <p className="text-sm font-medium text-clay-600">Landscape ideas, ready to build</p>

                {/* Accessibility and search engines */}
                <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold leading-tight text-leaf-900 sm:text-6xl">
                    See a landscape you love. Buy the plants. Hire professionals to build it.
                </h1>

                <p className="mt-5 max-w-xl text-lg text-leaf-900/70">
                   Explore finished projects from landscape professionals, shop every plant and material
                   in them, and get help turning the idea into your own garden.
                
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                     href="/projects"
                     className="rounded-full bg-leaf-700 px-6 py-3 font-medium text-white hover:bg-leaf-900"
                    >
                        Browse Projects
                    </Link>
                    <Link
                     href="/products"
                     className="rounded-full border border-leaf-700 px-6 py-3 font-medium text-leaf-700 hover:bg-leaf-100"
                    >
                        Shop plants and materials

                    </Link>
                    
                </div>
            </div>
        </section>
    )
}