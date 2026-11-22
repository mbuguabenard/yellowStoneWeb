import Link from "next/link";
import type { Project } from "@/types/marketplace";
import { getProfessionalById } from "@/lib/queries";
import { humanise } from "@/lib/format";
import ImagePlaceholder from "./ImagePlaceholder";
import { imageSlots } from "@/lib/imageSlots";

export default function ProjectCard({ project }: { project:Project }) {
    const professional = getProfessionalById(project.professionalId);

    return (
        <Link 
          href={`/projects/${project.slug}` }
          className="group block overflow-hidden rounded-2xl border border-sand-200 bg-white transition hover:shadow-md"
        >
            <ImagePlaceholder color={project.imageColor} slot={imageSlots.projectCard} />
            <div className="p-5">
                <p className="text-xs font-medium text-clay-600">
                    {humanise(project.style)} · {humanise(project.spaceType)} 
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold group-hover:text-leaf-700">
                    {project.title}
                </h3>
                <p className="mt-1 text-sm text-leaf-900/70">{project.location}</p>
                <p className="mt-3 text-sm font-medium text-leaf-700">
                    shop {project.productIds.length} items from this project
                </p>
                {professional && (
                    <p className="mt-1 text-xs text-leaf-900/60">Designed by {professional.name}</p>
                )}
            </div>

        </Link>
    )
}