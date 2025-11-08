import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate  = useNavigate();
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Stay Online,{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              Stay Reliable
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful uptime monitoring, incident management, and branded status pages — all in one simple platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="group" onClick={() => navigate("/signup")}>
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
        
        {/* Dashboard preview */}
        <div className="mt-16 animate-fade-in-up">
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-2 shadow-2xl">
              <img 
                src={heroDashboard} 
                alt="Uptime monitoring dashboard" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
