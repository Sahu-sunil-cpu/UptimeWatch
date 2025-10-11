import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, an uptime tool that just works — beautiful dashboards, instant alerts, and peace of mind.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "SC",
  },
  {
    quote: "The status page feature alone saved us hours of support tickets. Our customers love the transparency.",
    author: "Michael Rodriguez",
    role: "DevOps Lead at CloudBase",
    avatar: "MR",
  },
  {
    quote: "Best investment we made this year. The incident management workflow is exactly what we needed.",
    author: "Emily Watson",
    role: "VP Engineering at DataSync",
    avatar: "EW",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Trusted by <span className="text-primary">thousands</span> of teams
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author}
              className="p-6 space-y-4 border-border/50 bg-card/50 backdrop-blur hover:border-primary/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
