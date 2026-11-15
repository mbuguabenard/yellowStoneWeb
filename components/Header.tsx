import Link from "next/link";
import { ctaLink, navLinks, siteName } from "@/lib/site";
import { headers } from "next/headers";

export default function Header () {
    return(
        <header className="sticky top-0 z-10 border-b border-sand-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
                <Link href="/" className="font-heading text-xl font-semibold text-leaf-700">
                {siteName}
                </Link>
                <nav aria-label="Main" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    {/*loop over navlinks and make one link per item */}
                    {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-leaf-600">
                                    {link.label}
                                </Link>
                        
                    ))}
                    <Link
                    href={ctaLink.href}
                    className="rounded-full bg-leaf-700 px-4 py-2 font-medium text-white hover:bg-leaf-900">
                        {ctaLink.label}
                    </Link>

                </nav>
            </div>
        </header>
    );
}