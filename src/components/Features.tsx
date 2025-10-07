import { Brain, Target, TrendingUp, Clock, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced AI analyzes your goals and provides personalized strategies for success.",
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Set, track, and accomplish your goals with intelligent guidance and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Track your progress and celebrate milestones as you evolve on your journey.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get support whenever you need it. Your AI coach is always ready to help.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your conversations are confidential and protected with enterprise-grade security.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description: "Every interaction is tailored to your unique needs, goals, and personality.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you achieve your goals and transform your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-soft hover:shadow-glow transition-smooth hover:scale-105"
            >
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
