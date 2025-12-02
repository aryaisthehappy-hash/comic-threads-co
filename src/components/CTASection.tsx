import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "BOOM! 💥",
        description: "You're now part of the squad!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 font-display text-9xl rotate-[-15deg]">POW!</div>
        <div className="absolute bottom-10 right-10 font-display text-9xl rotate-[15deg]">ZAP!</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-secondary text-secondary-foreground border-[3px] border-background px-6 py-2 rotate-[-2deg] comic-shadow mb-8">
            <span className="font-display text-xl">JOIN THE SQUAD!</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-stroke" style={{ WebkitTextStroke: "2px hsl(var(--background))" }}>
            GET <span className="text-primary">15% OFF</span>
          </h2>
          
          <p className="font-body text-lg text-background/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about new drops, exclusive deals, and comic-powered style tips!
          </p>
          
          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full h-14 px-6 bg-background text-foreground border-[3px] border-background font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <Button type="submit" variant="secondary" size="xl" className="border-background">
              <Mail className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </form>
          
          <p className="font-body text-sm text-background/60 mt-4">
            No spam, just pure comic style. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
