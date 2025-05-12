
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[500px] bg-black">
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Travel Destinations"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="hero-overlay" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the World with TravelEase</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore our curated collection of travel packages designed to create
            unforgettable experiences across India and around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link to="/packages/india">Explore India</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/packages/international">International Tours</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
