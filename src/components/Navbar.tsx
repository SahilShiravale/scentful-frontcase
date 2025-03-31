
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-purple-dark">
            SCENT SAFARI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/" className="font-medium hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/" className="font-medium hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="font-medium hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/" className="font-medium hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/" className="font-medium hover:text-gold transition-colors">
                Shop
              </Link>
              <Link to="/" className="font-medium hover:text-gold transition-colors">
                Collections
              </Link>
              <Link to="/" className="font-medium hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/" className="font-medium hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <User size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
