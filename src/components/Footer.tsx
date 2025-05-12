
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelEase</h3>
            <p className="max-w-xs">
              Discover the world with our expertly curated travel packages for both
              domestic and international destinations.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages/india" className="hover:underline">
                  India Packages
                </Link>
              </li>
              <li>
                <Link to="/packages/international" className="hover:underline">
                  International Packages
                </Link>
              </li>
              <li>
                <Link to="/seasonal" className="hover:underline">
                  Seasonal Trips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>123 Travel Street</p>
              <p>Mumbai, Maharashtra</p>
              <p className="mt-2">Email: info@travelease.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
