import Link from "next/link";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    linkHref?: string;
    linkLabel?: string;
}

export default function SectionHeading ({ title, subtitle, linkHref, linkLabel}: SectionHeadingProps) {
    return (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
                <h2 className="font-heading text-3xl font-semibold text-leaf-900">{title}</h2>
                {subtitle && <p className="mt-2 max-w-xl text-leaf-900/70"> {subtitle}</p>}

            </div>
            {linkHref && linkLabel && (
                <Link href={linkHref} className="text-sm font-medium text-leaf-700 hover:underline">
                    {linkLabel} → 

                </Link>
            )}
        </div>
    )

}