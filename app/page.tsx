import { HeroSection } from "@/components/layout/hero-section";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-[#000B12] bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}
