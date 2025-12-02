import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      {/* Action Lines Background */}
      <div className="absolute inset-0 action-lines opacity-50" />
      
      {/* Halftone Pattern */}
      <div className="absolute inset-0 halftone-red opacity-30" />
      
      {/* Comic burst elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary border-[3px] border-foreground rotate-12 hidden lg:block" 
           style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 animate-slide-up">
            {/* Speech bubble tag */}
            <div className="inline-block mb-6">
              <div className="speech-bubble">
                <span className="font-body font-bold text-sm uppercase tracking-wider">
                  New Collection 2024
                </span>
              </div>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 text-stroke">
              <span className="text-primary">UNLEASH</span>
              <br />
              <span className="text-foreground">YOUR</span>
              <br />
              <span className="text-secondary">STYLE!</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
              Bold. Fearless. Unstoppable. Wear the power of comics with our exclusive streetwear collection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div className="comic-border comic-shadow bg-card px-6 py-4">
                <span className="font-display text-3xl text-primary">200+</span>
                <p className="font-body text-sm uppercase">Products</p>
              </div>
              <div className="comic-border comic-shadow bg-card px-6 py-4">
                <span className="font-display text-3xl text-secondary">50K+</span>
                <p className="font-body text-sm uppercase">Customers</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image Area */}
          <div className="relative flex justify-center items-center">
            {/* Main product showcase */}
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -inset-4 bg-primary/20 border-[3px] border-foreground rotate-3 comic-shadow-lg" />
              <div className="absolute -inset-4 bg-secondary/30 border-[3px] border-foreground -rotate-2" />
              
              {/* Main image container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] bg-muted border-[3px] border-foreground comic-shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display text-6xl text-primary mb-4">POW!</div>
                    <p className="font-body text-muted-foreground uppercase">Featured Product</p>
                  </div>
                </div>
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-secondary border-[3px] border-foreground px-4 py-2 rotate-12 comic-shadow">
                  <span className="font-display text-xl">$89</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground border-[3px] border-foreground px-4 py-2 comic-shadow animate-float">
                <span className="font-display text-lg">NEW!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-foreground" 
           style={{ clipPath: "polygon(0 100%, 0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 100%)" }} />
    </section>
  );
};

export default HeroSection;
