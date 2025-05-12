
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PackageType } from "@/types";

interface PackageCardProps {
  packageItem: PackageType;
}

const PackageCard = ({ packageItem }: PackageCardProps) => {
  const { id, name, destination, price, days, imageUrl, category, season } = packageItem;

  return (
    <Link to={`/package/${id}`}>
      <Card className="overflow-hidden card-hover h-full">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              {days} {days === 1 ? "Day" : "Days"}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-muted-foreground">{destination}</p>
            </div>
            <p className="font-bold text-primary">₹{price.toLocaleString()}</p>
          </div>
          <div className="flex gap-2 mt-3">
            <Badge variant={category === "india" ? "outline" : "default"}>
              {category === "india" ? "Domestic" : "International"}
            </Badge>
            {season && (
              <Badge variant="secondary">{season}</Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PackageCard;
