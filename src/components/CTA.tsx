import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Start Your{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Transformation?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of people already achieving their goals with AI coaching. 
            Start your journey today, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/auth">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
