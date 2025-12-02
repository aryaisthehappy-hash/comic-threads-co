import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Thunder Hoodie", price: 89, category: "Hoodies", isNew: true },
  { name: "Boom Tee", price: 45, category: "T-Shirts" },
  { name: "Zap Joggers", price: 75, category: "Pants", isSale: true, originalPrice: 95 },
  { name: "Flash Jacket", price: 129, category: "Jackets", isNew: true },
  { name: "Pow Cap", price: 35, category: "Accessories" },
  { name: "Hero Sneakers", price: 159, category: "Footwear" },
  { name: "Action Shorts", price: 55, category: "Pants", isSale: true, originalPrice: 70 },
  { name: "Comic Backpack", price: 89, category: "Accessories" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 halftone opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-block bg-primary text-primary-foreground border-[3px] border-foreground px-4 py-1 rotate-[-2deg] comic-shadow mb-4">
              <span className="font-display text-lg">HOT PICKS!</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-stroke">
              FEATURED <span className="text-primary">GEAR</span>
            </h2>
          </div>
          <Button variant="outline" size="lg">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
