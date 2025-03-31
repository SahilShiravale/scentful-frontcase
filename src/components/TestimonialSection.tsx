
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I've been searching for my signature scent for years, and I finally found it at Scent Safari. Their expertise and personalized recommendations made all the difference.",
    author: "Sophia Johnson",
    position: "Fashion Blogger"
  },
  {
    id: 2,
    quote: "The fragrances from Scent Safari are truly exceptional. The quality and longevity are unmatched, and I always receive compliments when wearing them.",
    author: "David Williams",
    position: "Creative Director"
  },
  {
    id: 3,
    quote: "As someone who is very particular about scents, I was impressed by the unique and sophisticated collection at Scent Safari. They have something for every occasion and personality.",
    author: "Emma Thompson",
    position: "Interior Designer"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-cream-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gold text-white p-3 rounded-full">
                <Quote size={24} />
              </div>
            </div>
            
            <p className="text-lg md:text-xl italic mb-6 pt-6">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div>
              <p className="font-medium text-lg">{testimonials[activeIndex].author}</p>
              <p className="text-muted-foreground">{testimonials[activeIndex].position}</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full border-gold text-gold hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={20} />
            </Button>
            {testimonials.map((_, index) => (
              <Button 
                key={index} 
                variant={index === activeIndex ? "default" : "outline"} 
                size="icon" 
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full p-0 min-w-0 ${
                  index === activeIndex 
                    ? 'bg-gold hover:bg-gold-dark' 
                    : 'border-gold hover:bg-gold hover:text-white'
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full border-gold text-gold hover:bg-gold hover:text-white"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
