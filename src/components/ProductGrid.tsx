
import { useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 4);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {visibleProducts < products.length && (
          <div className="mt-10 text-center">
            <Button 
              onClick={handleLoadMore} 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
