import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-4xl text-primary">KAPOW!</span>
            </Link>
            <p className="font-body text-muted-foreground">
              Bold streetwear for the fearless. Unleash your inner hero.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-display text-xl mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Men</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Women</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Kids</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="font-display text-xl mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-display text-xl mb-4">CONNECT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">TikTok</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t-[3px] border-foreground mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 KAPOW! All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
