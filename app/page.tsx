export const dynamic = "force-dynamic";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PipelineStepper from "@/components/PipelineStepper";
import FrameworksGrid from "@/components/FrameworksGrid";
import LiveTerminal from "@/components/LiveTerminal";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200">
      {/* Sticky navigation */}
      <NavBar />

      {/* Hero — Command Center intro */}
      <HeroSection />

      {/* CI/CD Pipeline Stepper */}
      <PipelineStepper />

      {/* Frameworks & Toolchain Grid */}
      <FrameworksGrid />

      {/* Live Execution Terminal */}
      <LiveTerminal />

      {/* Project Case Studies */}
      <CaseStudies />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
