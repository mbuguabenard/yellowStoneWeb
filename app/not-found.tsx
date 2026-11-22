import Link from "next/link";

export default function NotFound() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-24 text-center">
            <h1 className="font-heading text-4xl font-semibold text-leaf-700">Page not found</h1>
            <p className="mt-3 text-leaf-900/70">
            We couldn't find what you were looking for.It may have moved,or it may not be found.
            </p>
            <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-leaf-700 px-6 py-3 font-medium text-white hover:bg-leaf-900"
            >
                Back to the Home Page
            </Link>
        </section>
    );
}