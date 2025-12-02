import { Button } from "@/components/ui/button";

const categories = [
  { name: "Hoodies", tag: "COZY!", color: "bg-primary" },
  { name: "T-Shirts", tag: "FRESH!", color: "bg-secondary" },
  { name: "Pants", tag: "COMFY!", color: "bg-accent" },
  { name: "Accessories", tag: "COOL!", color: "bg-primary" },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-stroke mb-4">
            SHOP BY <span className="text-secondary">CATEGORY</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
            Find your perfect fit across our explosive collection
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group relative aspect-[3/4] border-[3px] border-foreground comic-shadow hover:comic-shadow-lg transition-all duration-200 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Background */}
              <div className={`absolute inset-0 ${category.color} opacity-20`} />
              <div className="absolute inset-0 halftone opacity-30" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="bg-card border-[3px] border-foreground px-4 py-1 rotate-[-5deg] comic-shadow mb-4">
                  <span className="font-display text-sm">{category.tag}</span>
                </div>
                <h3 className="font-display text-4xl text-center mb-4">{category.name}</h3>
                <Button variant="default" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop Now
                </Button>
              </div>
              
              {/* Corner decoration */}
              <div 
                className="absolute bottom-0 right-0 w-16 h-16 bg-foreground"
                style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
