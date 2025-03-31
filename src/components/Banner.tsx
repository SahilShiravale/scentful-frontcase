
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/60 to-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1615368144542-054f717a8be8?auto=format&fit=crop&q=80&w=2070')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-xl text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Explore our collection of luxurious fragrances crafted to elevate your personal style and leave a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/" 
              className="btn-primary flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark"
            >
              Shop Collection <ArrowRight size={16} />
            </Link>
            <Link 
              to="/" 
              className="btn-outline flex items-center justify-center gap-2"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
