

import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import HireCta from "@/components/HireCta";
import HowItWorks from "@/components/HowItWorks";
import ProfessionalsStrip from "@/components/ProfessionalStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <HowItWorks />
      <FeaturedProducts />
      <ProfessionalsStrip />
      <HireCta />
    </>
  );
}