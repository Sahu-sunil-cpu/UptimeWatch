import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import logoutIllustration from "@/assets/logout-illustration.jpg";

const Logout = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8 animate-scale-in">
        {/* Illustration */}
        <div className="relative w-48 h-48 mx-auto">
          <img
            src={logoutIllustration}
            alt="Logged out successfully"
            className="w-full h-full object-cover rounded-full shadow-[0_0_40px_rgba(14,165,233,0.2)] border border-primary/20"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg animate-scale-in">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            See you next time!
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            You've successfully logged out. Your systems are still being monitored — log in again anytime.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            variant="hero"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link to="/login">Log In Again</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>

        {/* Branding */}
        <div className="pt-8">
          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              UptimeWatch
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
