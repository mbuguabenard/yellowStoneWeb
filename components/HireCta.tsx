import Link from "next/link";

export default function HireCta() {
    return (
        <section className="bg-leaf-700">
            <div className="mx-auto max-w-6xl px-4 py-16 text-center">
                <h2 className="font-heading text-3xl font-semibold text-white">Want this done for you</h2>
                <p className="mx-auto mt-3 max-w-xl text-leaf-100">
                    Tell us about your space, your style and your budget.We'll connect you with the professionals
                     who can design and build it.
                </p>
                {/* white button on the green band for strong contast */}
                <Link
                href="/hire"
                className="mt-8 inline-block rounded-full bg-white px-6 pu-3 font-medium text-leaf-700 hover:bg-leaf-100"
                >
                    Hire a professional
                </Link>
            </div>
        </section>
    );
}