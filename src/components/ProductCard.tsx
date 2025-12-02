import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  originalPrice?: number;
}

const ProductCard = ({ name, price, category, isNew, isSale, originalPrice }: ProductCardProps) => {
  return (
    <div className="group relative bg-card border-[3px] border-foreground comic-shadow hover:comic-shadow-lg transition-all duration-200 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <div className="absolute inset-0 halftone opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl text-muted-foreground/50">KAPOW!</span>
        </div>
        
        {/* Tags */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground border-[2px] border-foreground px-3 py-1 rotate-[-5deg]">
            <span className="font-display text-sm">NEW!</span>
          </div>
        )}
        {isSale && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground border-[2px] border-foreground px-3 py-1 rotate-[5deg]">
            <span className="font-display text-sm">SALE!</span>
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button variant="default" className="w-full" size="sm">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 border-t-[3px] border-foreground">
        <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {category}
        </p>
        <h3 className="font-body font-bold text-lg uppercase mb-2 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl text-primary">${price}</span>
          {originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
