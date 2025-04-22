import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import PartnerLogos from "@/components/IntegrationLogos";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <PartnerLogos />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CareersSection />
        <FaqSection />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
