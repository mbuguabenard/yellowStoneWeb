

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getAllProfessionals, getProjectsForProfessional } from "@/lib/queries";
import { initials } from "@/lib/format";

export default function ProfessionalsStrip() {
  const professionals = getAllProfessionals();

  return (
    <section className="bg-leaf-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          title="Meet the professionals"
          subtitle="Landscape architects and contractors whose work you can see, shop and hire."
          linkHref="/professionals"
          linkLabel="All professionals"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {professionals.map((pro) => {
            // Count how many of our showcased projects this person designed.
            const projectCount = getProjectsForProfessional(pro.id).length;

            return (
              <Link
                key={pro.id}
                href={`/professionals/${pro.slug}`}
                className="block rounded-2xl border border-sand-200 bg-white p-6 transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  {/* An initials circle stands in for a profile photo. */}
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-100 font-medium text-leaf-700">
                    {initials(pro.name)}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{pro.name}</h3>
                    <p className="text-sm text-leaf-900/70">
                      {pro.role === "architect" ? "Landscape architect" : "Landscape contractor"} · {pro.location}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-leaf-900/70">{pro.bio}</p>

                {/* One small pill per specialty. */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {pro.specialties.map((specialty) => (
                    <li key={specialty} className="rounded-full bg-sand-100 px-3 py-1 text-xs">
                      {specialty}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-leaf-900/60">
                  {pro.yearsExperience} years&apos; experience · {projectCount}{" "}
                  {projectCount === 1 ? "project" : "projects"} shown
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}