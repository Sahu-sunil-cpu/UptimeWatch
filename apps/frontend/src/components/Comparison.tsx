import { Check } from "lucide-react";

const benefits = [
  "5-second checks",
  "Custom alert rules",
  "Slack, Email, SMS notifications",
  "Team-friendly incident logs",
  "Global monitoring locations",
  "99.99% uptime SLA",
];

const Comparison = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            More visibility. <span className="text-primary">Less downtime.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Everything you need to keep your services running smoothly
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
