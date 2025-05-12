
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PackageCard from "@/components/PackageCard";
import { PackageType } from "@/types";

interface PackageCategorySectionProps {
  title: string;
  packages: PackageType[];
  viewAllLink: string;
  limit?: number;
}

const PackageCategorySection = ({
  title,
  packages,
  viewAllLink,
  limit = 4,
}: PackageCategorySectionProps) => {
  const displayPackages = packages.slice(0, limit);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Button asChild variant="outline">
            <Link to={viewAllLink}>View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPackages.map((pkg) => (
            <PackageCard key={pkg.id} packageItem={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCategorySection;
