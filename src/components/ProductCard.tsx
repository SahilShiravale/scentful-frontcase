
import { Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
        <div className="quick-view">
          <div className="flex gap-2">
            <Button 
              size="icon" 
              variant="secondary"
              className="rounded-full w-10 h-10 bg-white hover:bg-gold text-black hover:text-white"
            >
              <Heart size={18} />
            </Button>
            <Link to={`/product/${product.id}`}>
              <Button 
                size="icon" 
                variant="secondary"
                className="rounded-full w-10 h-10 bg-white hover:bg-gold text-black hover:text-white"
              >
                <Eye size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-serif font-medium hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm mt-2 line-clamp-2 text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <Button variant="ghost" className="text-gold hover:text-gold-dark hover:bg-cream">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
