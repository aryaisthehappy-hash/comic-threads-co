import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-3xl text-primary tracking-wide">
              KAPOW!
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors">
              New Drops
            </Link>
            <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors">
              Men
            </Link>
            <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors">
              Women
            </Link>
            <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors">
              Kids
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center border-2 border-foreground">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-[3px] border-foreground py-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors py-2">
                New Drops
              </Link>
              <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors py-2">
                Men
              </Link>
              <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors py-2">
                Women
              </Link>
              <Link to="/" className="font-body font-semibold uppercase tracking-wider hover:text-primary transition-colors py-2">
                Kids
              </Link>
              <Link to="/auth" className="mt-2">
                <Button variant="default" className="w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
