import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-xl animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to stay online?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your free trial today — no credit card required.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Talk to Sales
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Join 10,000+ teams already monitoring with UptimeWatch
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
