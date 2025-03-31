
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  description: string;
  imageUrl: string;
  images: string[];
  sizes: {
    size: string;
    price: number;
  }[];
  featured: boolean;
  bestSeller: boolean;
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
