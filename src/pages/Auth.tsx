import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate("/");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      newErrors.email = emailResult.error.errors[0].message;
    }
    
    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      newErrors.password = passwordResult.error.errors[0].message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast({
          title: "WELCOME BACK! 💥",
          description: "You've successfully signed in.",
        });
      } else {
        const redirectUrl = `${window.location.origin}/`;
        
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectUrl,
            data: {
              full_name: name,
            },
          },
        });
        
        if (error) throw error;
        
        toast({
          title: "BOOM! Account created! 🎉",
          description: "Welcome to the squad!",
        });
      }
    } catch (error: any) {
      let errorMessage = error.message;
      
      if (error.message.includes("User already registered")) {
        errorMessage = "This email is already registered. Try signing in instead!";
      } else if (error.message.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password. Please try again.";
      }
      
      toast({
        title: "Oops!",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 action-lines opacity-30" />
      <div className="absolute inset-0 halftone-red opacity-20" />
      
      {/* Floating comic elements */}
      <div className="absolute top-20 left-10 font-display text-6xl text-primary/20 rotate-[-15deg] hidden lg:block">POW!</div>
      <div className="absolute bottom-20 right-10 font-display text-6xl text-secondary/20 rotate-[15deg] hidden lg:block">BAM!</div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Back to home */}
        <Link to="/" className="inline-flex items-center gap-2 font-body text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Store
        </Link>
        
        {/* Auth Card */}
        <div className="bg-card border-[3px] border-foreground comic-shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-primary text-primary-foreground border-[3px] border-foreground px-4 py-1 rotate-[-2deg] comic-shadow mb-4">
              <span className="font-display text-lg">{isLogin ? "WELCOME BACK!" : "JOIN THE SQUAD!"}</span>
            </div>
            <h1 className="font-display text-4xl">
              {isLogin ? "SIGN IN" : "SIGN UP"}
            </h1>
          </div>
          
          {/* Form */}
          <form onSubmit={handleAuth} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body uppercase tracking-wider">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your superhero name"
                    className="pl-10 h-12 border-[3px] border-foreground font-body"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body uppercase tracking-wider">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="hero@example.com"
                  className="pl-10 h-12 border-[3px] border-foreground font-body"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive font-body">{errors.email}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="font-body uppercase tracking-wider">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: undefined });
                  }}
                  placeholder="••••••••"
                  className="pl-10 h-12 border-[3px] border-foreground font-body"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-sm text-destructive font-body">{errors.password}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={loading}
            >
              {loading ? "Loading..." : (isLogin ? "Sign In" : "Create Account")}
            </Button>
          </form>
          
          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="font-body text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
              }}
              className="font-display text-lg text-primary hover:text-primary/80 transition-colors mt-1"
            >
              {isLogin ? "SIGN UP NOW!" : "SIGN IN!"}
            </button>
          </div>
        </div>
        
        {/* Brand */}
        <div className="text-center mt-8">
          <span className="font-display text-2xl text-primary">KAPOW!</span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
