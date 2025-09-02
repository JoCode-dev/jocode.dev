import { ContactSection } from "@/components/layout/contact-section";
import Portfolio2Page from "@/components/layout/portfolio-2";

export default async function Home() {
  return (
    <div className="min-h-screen dark:bg-[#000B12] bg-white">
      {/* Portfolio 2 Page */}
      <Portfolio2Page />

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}


      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
