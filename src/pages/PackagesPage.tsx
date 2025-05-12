
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import packages from "@/data/packages";

const PackagesPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const filteredPackages = packages.filter(pkg => 
    category === "india" ? pkg.category === "india" : pkg.category === "international"
  );
  
  const title = category === "india" ? "Indian Destinations" : "International Getaways";
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 text-lg">
              {category === "india" 
                ? "Discover the diverse beauty and rich culture of India with our curated packages." 
                : "Explore exotic international destinations with our carefully selected packages."}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map(pkg => (
              <PackageCard key={pkg.id} packageItem={pkg} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesPage;
