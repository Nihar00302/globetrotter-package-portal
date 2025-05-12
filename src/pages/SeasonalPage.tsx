
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import packages from "@/data/packages";

const SeasonalPage = () => {
  const { season } = useParams<{ season: string }>();
  
  // Type guard for season parameter
  const validSeason = (season === "summer" || season === "winter" || 
                      season === "monsoon" || season === "spring") 
                      ? season 
                      : "summer";
  
  const filteredPackages = packages.filter(pkg => pkg.season === validSeason);
  
  const seasonTitles = {
    summer: "Summer Special Packages",
    winter: "Winter Wonderlands",
    monsoon: "Monsoon Retreats",
    spring: "Spring Getaways"
  };
  
  const seasonDescriptions = {
    summer: "Beat the heat with our refreshing summer getaways to hill stations and beach destinations.",
    winter: "Discover snowy paradises and cozy retreats perfect for your winter vacation.",
    monsoon: "Experience the magic of rain at our handpicked destinations perfect for the monsoon season.",
    spring: "Witness nature bloom with our specially curated spring season packages."
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">{seasonTitles[validSeason as keyof typeof seasonTitles]}</h1>
            <p className="mt-4 text-lg">
              {seasonDescriptions[validSeason as keyof typeof seasonDescriptions]}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} packageItem={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold">No packages available for this season</h2>
              <p className="mt-2 text-muted-foreground">Please check back soon or explore our other seasonal offerings.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeasonalPage;
