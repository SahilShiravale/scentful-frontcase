
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-purple-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">SCENT SAFARI</h3>
            <p className="text-gray-300 mb-4">
              Discover your signature scent with our collection of luxury fragrances.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Shop</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Shipping Policy</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-purple text-white border-gray-600 focus:border-gold"
              />
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scent Safari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
