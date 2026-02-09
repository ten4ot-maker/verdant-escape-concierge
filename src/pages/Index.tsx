import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import VillasSection from "@/components/VillasSection";
import PhotoGallery from "@/components/PhotoGallery";
import ExperiencesSection from "@/components/ExperiencesSection";
import PackagesSection from "@/components/PackagesSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-forest">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <VillasSection />
      <PhotoGallery />
      <ExperiencesSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
