import { HomePage } from "@/components/HomePage";
import {
  AchievementsSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  Footer,
  ProductionWorkSection,
  ProjectsSection,
  ResearchSection,
  ServicesSection,
  SkillsSection,
} from "@/components/sections";

export default async function Home() {
  return (
    <>
      <HomePage />
      <EducationSection />
      <ServicesSection />
      <ProductionWorkSection />
      <ProjectsSection />
      <ResearchSection />
      <AchievementsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
