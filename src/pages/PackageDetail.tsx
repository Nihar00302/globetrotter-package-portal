
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import packages from "@/data/packages";
import { PackageType } from "@/types";

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [packageItem, setPackageItem] = useState<PackageType | null>(null);
  
  useEffect(() => {
    const found = packages.find(pkg => pkg.id === id);
    if (found) {
      setPackageItem(found);
    }
  }, [id]);
  
  if (!packageItem) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold">Package not found</h2>
            <p className="mt-2 text-muted-foreground">
              The package you're looking for does not exist or has been removed.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[60vh]">
          <img
            src={packageItem.imageUrl}
            alt={packageItem.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-3">{packageItem.name}</h1>
                <p className="text-white/90 text-xl mb-4">{packageItem.destination}</p>
                <div className="flex gap-2 mb-4">
                  <Badge variant={packageItem.category === "india" ? "outline" : "default"} className="text-white border-white">
                    {packageItem.category === "india" ? "Domestic" : "International"}
                  </Badge>
                  {packageItem.season && (
                    <Badge variant="secondary">{packageItem.season}</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white text-2xl font-bold">₹{packageItem.price.toLocaleString()}</span>
                  <span className="text-white/80">per person</span>
                  <div className="ml-6 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-white">{packageItem.days} {packageItem.days === 1 ? "Day" : "Days"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions & Exclusions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About This Package</h3>
                    <p className="text-muted-foreground">{packageItem.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {packageItem.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-3">Day-by-Day Itinerary</h3>
                    <div className="space-y-6">
                      {packageItem.itinerary.map((day, index) => (
                        <div key={index} className="pb-6 border-b last:border-0">
                          <h4 className="text-lg font-medium mb-1">
                            Day {day.day}: {day.title}
                          </h4>
                          <p className="text-muted-foreground">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="inclusions">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Inclusions</h3>
                      <ul className="space-y-2">
                        {packageItem.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Exclusions</h3>
                      <ul className="space-y-2">
                        {packageItem.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Interested in this package?</h3>
                <p className="text-muted-foreground mb-4">Fill out the form below and our travel expert will get in touch with you.</p>
                
                <ContactForm packageItem={packageItem} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackageDetail;
