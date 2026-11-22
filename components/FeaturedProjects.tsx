import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/lib/queries";

export default function FeaturedProjects() {
    const projects = getAllProjects();

    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading 
             title="Featured projects"
             subtitle="Finished landscapes from our professionals.Open one to see every plant and material used"
             linkHref="/projects"
             linkLabel="All projects"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    project={project} 
                    />
                ))}
            </div>
            
            
        </section>
    )
}