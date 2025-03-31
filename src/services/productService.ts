
import { Product } from '@/types/product';

// Mock data - in a real application this would come from a database
const products: Product[] = [
  {
    id: "1",
    name: "Velvet Orchid",
    category: "Floral",
    price: 89.99,
    shortDescription: "A luxurious blend of cool citrus, jasmine, rose, and vanilla.",
    description: "Velvet Orchid is a luxurious and sophisticated fragrance that envelops you in a warm embrace of exotic florals. Opening with cool citrus notes, it transitions into a heart of jasmine, rose, and orchid, before settling into a rich base of vanilla, sandalwood, and amber. Perfect for evening wear and special occasions.",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=880",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1595425964272-52c2ac820bc0?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e8?auto=format&fit=crop&q=80&w=880"
    ],
    sizes: [
      { size: "30ml", price: 89.99 },
      { size: "50ml", price: 129.99 },
      { size: "100ml", price: 189.99 }
    ],
    featured: true,
    bestSeller: true,
    reviews: [
      {
        id: "r1",
        user: "Sophie L.",
        rating: 5,
        comment: "This fragrance is absolutely gorgeous! It lasts all day and I receive compliments every time I wear it.",
        date: "2023-10-15"
      },
      {
        id: "r2",
        user: "Michael K.",
        rating: 4,
        comment: "Bought this for my wife and she loves it. Elegant and sophisticated scent.",
        date: "2023-09-22"
      }
    ]
  },
  {
    id: "2",
    name: "Amber Woods",
    category: "Woody",
    price: 75.99,
    shortDescription: "A warm and elegant blend of amber, cedar, and musk.",
    description: "Amber Woods captivates with its warm, elegant aroma. This luxurious fragrance opens with vibrant bergamot and pink pepper, revealing a heart of amber and cedar, and finishing with a sophisticated base of musk and vanilla. Its long-lasting presence makes it perfect for those who appreciate subtle yet distinctive scents.",
    imageUrl: "https://images.unsplash.com/photo-1591375372186-dbf0b4f1a618?auto=format&fit=crop&q=80&w=880",
    images: [
      "https://images.unsplash.com/photo-1591375372186-dbf0b4f1a618?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&q=80&w=880"
    ],
    sizes: [
      { size: "30ml", price: 75.99 },
      { size: "50ml", price: 115.99 },
      { size: "100ml", price: 175.99 }
    ],
    featured: false,
    bestSeller: true,
    reviews: [
      {
        id: "r1",
        user: "James T.",
        rating: 5,
        comment: "This scent is amazing! Perfect for everyday wear but also special enough for evenings out.",
        date: "2023-10-05"
      },
      {
        id: "r2",
        user: "Emma R.",
        rating: 4,
        comment: "Lovely warm scent that isn't overpowering. Great staying power too.",
        date: "2023-09-18"
      }
    ]
  },
  {
    id: "3",
    name: "Citrus Bloom",
    category: "Fresh",
    price: 65.99,
    shortDescription: "A fresh and invigorating blend of citrus fruits and blooming florals.",
    description: "Citrus Bloom is a vibrant and refreshing fragrance that captures the essence of a Mediterranean morning. It opens with zesty notes of bergamot, lemon, and grapefruit, transitions into a heart of orange blossom and jasmine, and settles into a clean base of white musk and cedar. Perfect for those who love bright, energizing scents.",
    imageUrl: "https://images.unsplash.com/photo-1589730973411-cafb19e27033?auto=format&fit=crop&q=80&w=880",
    images: [
      "https://images.unsplash.com/photo-1589730973411-cafb19e27033?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1616528823442-777927ebc9c4?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1602928298849-325cec8771a0?auto=format&fit=crop&q=80&w=880"
    ],
    sizes: [
      { size: "30ml", price: 65.99 },
      { size: "50ml", price: 95.99 },
      { size: "100ml", price: 145.99 }
    ],
    featured: false,
    bestSeller: false,
    reviews: [
      {
        id: "r1",
        user: "Olivia S.",
        rating: 5,
        comment: "Such a refreshing scent! Perfect for summer and spring. Makes me feel so uplifted when I wear it.",
        date: "2023-10-10"
      },
      {
        id: "r2",
        user: "David P.",
        rating: 4,
        comment: "Clean, fresh, and not too overpowering. Great for office wear.",
        date: "2023-09-28"
      }
    ]
  },
  {
    id: "4",
    name: "Midnight Oud",
    category: "Oriental",
    price: 120.99,
    shortDescription: "An opulent blend of rare oud, spices, and deep amber.",
    description: "Midnight Oud is a luxurious and mysterious fragrance that embodies the essence of night. This rich oriental scent opens with saffron and incense, reveals a heart of rare oud and rose, and finishes with a deep base of amber, musk, and patchouli. Its intense, long-lasting presence makes it perfect for those who appreciate sophisticated, statement fragrances.",
    imageUrl: "https://images.unsplash.com/photo-1588683304058-dc001430dcc2?auto=format&fit=crop&q=80&w=880",
    images: [
      "https://images.unsplash.com/photo-1588683304058-dc001430dcc2?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1595425964272-52c2ac820bc0?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1615371499860-4bd190f61428?auto=format&fit=crop&q=80&w=880"
    ],
    sizes: [
      { size: "30ml", price: 120.99 },
      { size: "50ml", price: 180.99 },
      { size: "100ml", price: 250.99 }
    ],
    featured: true,
    bestSeller: false,
    reviews: [
      {
        id: "r1",
        user: "Alexander W.",
        rating: 5,
        comment: "This is incredible. Deep, complex, and sophisticated. I've never received so many compliments on a fragrance.",
        date: "2023-10-08"
      },
      {
        id: "r2",
        user: "Natasha R.",
        rating: 5,
        comment: "Worth every penny. This fragrance is mysterious and captivating, perfect for evening wear.",
        date: "2023-09-15"
      }
    ]
  },
  {
    id: "5",
    name: "Sea Breeze",
    category: "Aquatic",
    price: 70.99,
    shortDescription: "A fresh and clean blend of oceanic notes and crisp cotton.",
    description: "Sea Breeze captures the essence of a calm day by the ocean. This aquatic fragrance opens with fresh notes of bergamot and sea salt, transitions into a heart of lavender and geranium, and settles into a clean base of white musk and cedar. Perfect for those who love crisp, clean scents that evoke memories of coastal escapes.",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=880",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1619994943434-b1c28c7b30af?auto=format&fit=crop&q=80&w=880",
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e8?auto=format&fit=crop&q=80&w=880"
    ],
    sizes: [
      { size: "30ml", price: 70.99 },
      { size: "50ml", price: 100.99 },
      { size: "100ml", price: 150.99 }
    ],
    featured: false,
    bestSeller: true,
    reviews: [
      {
        id: "r1",
        user: "Rebecca T.",
        rating: 4,
        comment: "Such a clean, fresh scent. Makes me feel like I'm at the beach even when I'm at the office.",
        date: "2023-10-12"
      },
      {
        id: "r2",
        user: "Mark L.",
        rating: 5,
        comment: "I've been looking for a good aquatic fragrance for years and finally found it. Love this!",
        date: "2023-09-20"
      }
    ]
  }
];

export const getAllProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate network delay
  });
};

export const getFeaturedProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.featured));
    }, 500);
  });
};

export const getBestSellers = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.bestSeller));
    }, 500);
  });
};

export const getProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, 500);
  });
};
