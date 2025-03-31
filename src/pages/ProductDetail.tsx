
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductRating from '@/components/ProductRating';
import ReviewForm from '@/components/ReviewForm';
import { getProductById } from '@/services/productService';
import { Product } from '@/types/product';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Heart, Share2, Minus, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) {
          navigate('/');
          return;
        }

        const productData = await getProductById(id);
        
        if (!productData) {
          navigate('/');
          toast({
            title: "Product Not Found",
            description: "The product you're looking for doesn't exist.",
            variant: "destructive"
          });
          return;
        }

        setProduct(productData);
        setActiveImage(productData.imageUrl);
        
        // Set default selected size and price
        if (productData.sizes && productData.sizes.length > 0) {
          setSelectedSize(productData.sizes[0].size);
          setSelectedPrice(productData.sizes[0].price);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast({
          title: "Error",
          description: "Failed to load product details. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate, toast]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    const sizeObj = product?.sizes.find(s => s.size === size);
    if (sizeObj) {
      setSelectedPrice(sizeObj.price);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // In a real application, this would add the item to the cart
    toast({
      title: "Added to Cart",
      description: `${product?.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const handleShare = (platform: string) => {
    // In a real application, this would share the product
    toast({
      title: "Shared",
      description: `Product shared on ${platform}.`,
    });
  };

  const calculateAverageRating = (): number => {
    if (!product || !product.reviews || product.reviews.length === 0) {
      return 0;
    }
    
    const sum = product.reviews.reduce((total, review) => total + review.rating, 0);
    return Math.round((sum / product.reviews.length) * 10) / 10;
  };

  const handleReviewSubmitted = () => {
    setShowReviewForm(false);
    // In a real application, we would refresh the reviews
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading product details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Product Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="mb-4 h-96 overflow-hidden rounded-lg">
                  <img 
                    src={activeImage} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`cursor-pointer h-24 overflow-hidden rounded-md ${
                        activeImage === image ? 'ring-2 ring-gold' : 'opacity-70'
                      }`}
                      onClick={() => setActiveImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground mb-4">{product.category}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <ProductRating rating={calculateAverageRating()} />
                    <span>({product.reviews.length} reviews)</span>
                  </div>
                </div>
                
                <p className="text-2xl font-medium mb-6">${selectedPrice.toFixed(2)}</p>
                
                <p className="text-gray-700 mb-8">{product.description}</p>
                
                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <div className="flex gap-3">
                    {product.sizes.map((size) => (
                      <Button
                        key={size.size}
                        type="button"
                        variant={selectedSize === size.size ? "default" : "outline"}
                        onClick={() => handleSizeChange(size.size)}
                        className={
                          selectedSize === size.size 
                            ? "bg-gold hover:bg-gold-dark text-white" 
                            : "border-gold text-gold hover:bg-gold hover:text-white"
                        }
                      >
                        {size.size}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="border-gold text-gold hover:bg-gold hover:text-white"
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={increaseQuantity}
                      className="border-gold text-gold hover:bg-gold hover:text-white"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    className="bg-gold hover:bg-gold-dark text-white"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Heart size={18} className="mr-2" /> Add to Wishlist
                  </Button>
                </div>
                
                {/* Share */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium flex items-center">
                    <Share2 size={16} className="mr-2" /> Share:
                  </span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-facebook hover:text-facebook/80"
                    onClick={() => handleShare('Facebook')}
                  >
                    <Facebook size={20} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-twitter hover:text-twitter/80"
                    onClick={() => handleShare('Twitter')}
                  >
                    <Twitter size={20} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-instagram hover:text-instagram/80"
                    onClick={() => handleShare('Instagram')}
                  >
                    <Instagram size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8">Customer Reviews</h2>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <ProductRating rating={calculateAverageRating()} size={20} />
                  <span className="text-lg">
                    {calculateAverageRating()} out of 5 ({product.reviews.length} reviews)
                  </span>
                </div>
                <Button 
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="bg-gold hover:bg-gold-dark text-white"
                >
                  {showReviewForm ? 'Cancel Review' : 'Write a Review'}
                </Button>
              </div>
              
              {showReviewForm && (
                <div className="mb-8">
                  <ReviewForm 
                    productId={product.id} 
                    onReviewSubmitted={handleReviewSubmitted} 
                  />
                </div>
              )}
              
              {/* Review List */}
              <div className="space-y-6">
                {product.reviews.length > 0 ? (
                  product.reviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-medium text-lg">{review.user}</h4>
                          <ProductRating rating={review.rating} />
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    No reviews yet. Be the first to leave a review!
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
