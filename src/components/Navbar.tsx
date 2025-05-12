
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary font-bold text-2xl">TravelEase</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/packages/india" className="text-foreground hover:text-primary font-medium">
            India Packages
          </Link>
          <Link to="/packages/international" className="text-foreground hover:text-primary font-medium">
            International
          </Link>
          <Link to="/seasonal" className="text-foreground hover:text-primary font-medium">
            Seasonal Trips
          </Link>
          <Button asChild variant="outline">
            <Link to="/admin">Admin</Link>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/packages/india" 
              className="text-foreground hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              India Packages
            </Link>
            <Link 
              to="/packages/international" 
              className="text-foreground hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              International
            </Link>
            <Link 
              to="/seasonal" 
              className="text-foreground hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Seasonal Trips
            </Link>
            <Button asChild variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/admin">Admin</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
