import { Card } from "@/components/ui/card";
import { Bell, Activity, Globe } from "lucide-react";
import featureIncidents from "@/assets/feature-incidents.jpg";
import featureMonitoring from "@/assets/feature-monitoring.jpg";
import featureStatus from "@/assets/feature-status.jpg";

const features = [
  {
    icon: Bell,
    title: "Incident Management with On-Call",
    description: "Coordinate your response to outages with real-time alerts, on-call schedules, and seamless team collaboration.",
    image: featureIncidents,
  },
  {
    icon: Activity,
    title: "Built-in Uptime Monitoring",
    description: "Monitor APIs, servers, and websites with second-level precision. Get instant alerts when something goes down.",
    image: featureMonitoring,
  },
  {
    icon: Globe,
    title: "Branded Status Page",
    description: "Host your own public status page on your domain — like status.domain.com — and keep customers informed.",
    image: featureStatus,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Everything you need to{" "}
            <span className="text-primary">stay online</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor, manage, and communicate system status with one powerful platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                
                <div className="pt-4">
                  <div className="relative rounded-lg overflow-hidden border border-border/30">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
