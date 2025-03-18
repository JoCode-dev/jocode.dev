import { AppleCardsCarousel } from "../portfolio/apple-card";

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center py-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center bg-[#7B4AE2]/20 rounded-lg px-4 py-2">
        <h1 className="lg:text-2xl text-xl font-bold text-[#595CFF]">
          🎨 Mes chefs-d&apos;oeuvre
        </h1>
      </div>
      <p className="lg:text-lg text-sm dark:text-[#E2E4E9] text-[#11191E] font-semibold lg:px-0 px-6 text-center">
        Derrière chaque projet se cache une histoire, une aventure !
      </p>

      {/* Projects */}
      <AppleCardsCarousel />
    </section>
  );
};
