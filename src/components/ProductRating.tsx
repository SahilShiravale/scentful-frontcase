
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  size?: number;
}

const ProductRating = ({ rating, size = 16 }: ProductRatingProps) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`${
            star <= rating 
              ? 'text-gold fill-gold' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default ProductRating;
