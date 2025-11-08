import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate  = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold text-foreground">
              UptimeWatch
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Docs
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button variant="hero" size="default" className="hidden sm:inline-flex" onClick={() => navigate("/signup")}>
              Start Free Trial
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
