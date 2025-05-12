
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PackageCategorySection from "@/components/PackageCategorySection";
import SeasonalBanner from "@/components/SeasonalBanner";
import packages from "@/data/packages";
import { currentSeason } from "@/data/currentSeason";

const Index = () => {
  const indiaPackages = packages.filter(pkg => pkg.category === "india");
  const internationalPackages = packages.filter(pkg => pkg.category === "international");
  const seasonalPackages = packages.filter(pkg => pkg.season === currentSeason);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <PackageCategorySection 
          title="Popular Indian Destinations" 
          packages={indiaPackages}
          viewAllLink="/packages/india"
        />
        
        <SeasonalBanner season={currentSeason} />
        
        <PackageCategorySection 
          title="International Getaways" 
          packages={internationalPackages}
          viewAllLink="/packages/international"
        />
        
        <section className="py-16 banner-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Travel Memories That Last Forever</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have explored the world with us.
              Our expertly curated packages ensure unforgettable experiences.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
