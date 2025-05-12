
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SeasonalBannerProps {
  season: string;
}

const SeasonalBanner = ({ season }: SeasonalBannerProps) => {
  const seasonData = {
    summer: {
      title: "Summer Special Packages",
      description: "Beat the heat with our refreshing summer getaways to hill stations and beach destinations.",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    },
    monsoon: {
      title: "Monsoon Retreats",
      description: "Experience the magic of rain at our handpicked destinations perfect for the monsoon season.",
      imageUrl: "https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    winter: {
      title: "Winter Wonderlands",
      description: "Discover snowy paradises and cozy retreats perfect for your winter vacation.",
      imageUrl: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    spring: {
      title: "Spring Getaways",
      description: "Witness nature bloom with our specially curated spring season packages.",
      imageUrl: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80"
    }
  };

  const currentSeason = seasonData[season as keyof typeof seasonData];

  return (
    <div className="relative h-80 overflow-hidden">
      <img
        src={currentSeason.imageUrl}
        alt={`${season} travel`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-white mb-4">{currentSeason.title}</h2>
            <p className="text-white/90 mb-6">{currentSeason.description}</p>
            <Button asChild>
              <Link to={`/seasonal/${season}`}>View {season} Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalBanner;
