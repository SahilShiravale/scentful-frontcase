
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import ProductGrid from '@/components/ProductGrid';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import { Product } from '@/types/product';
import { getAllProducts, getBestSellers, getFeaturedProducts } from '@/services/productService';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data in parallel
        const [allProductsData, featuredProductsData, bestSellersData] = await Promise.all([
          getAllProducts(),
          getFeaturedProducts(),
          getBestSellers()
        ]);

        setAllProducts(allProductsData);
        setFeaturedProducts(featuredProductsData);
        setBestSellers(bestSellersData);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast({
          title: "Error",
          description: "Failed to load products. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        
        {loading ? (
          <div className="py-16 text-center">
            <p className="text-xl">Loading products...</p>
          </div>
        ) : (
          <>
            <ProductGrid title="Featured Fragrances" products={featuredProducts} />
            <TestimonialSection />
            <ProductGrid title="Best Sellers" products={bestSellers} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
