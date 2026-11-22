import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/queries";

//sets the browser tab title.the layout template adds " | YellowStone marketplace"

export const metadata: Metadata = {
    title:"Projects",
    description: " Browse finished landscape projects and shop the plants and materials used in them.",
    
};

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <section className="mx-auto max-w-6xl px-4 py-1">
            <PageHeading
             title="Landscape projects"
             subtitle="Finished landscapes from our professionals.Open to see every plant and material used,and the shop to look. "
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>


        </section>
        
    );
}