import { ContactSection } from "@/components/layout/contact-section";
import Portfolio2Page from "@/components/layout/portfolio-2";

export default async function Home() {
  return (
    <div className="min-h-screen dark:bg-[#000B12] bg-white">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}

      <Portfolio2Page />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
