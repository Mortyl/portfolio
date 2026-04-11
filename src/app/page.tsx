import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StackSection from "@/components/sections/StackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-0 pb-16">
      <Navbar />
      <HeroSection />
      <StackSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
