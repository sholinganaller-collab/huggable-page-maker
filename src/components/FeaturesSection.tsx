import { Microscope, Cpu, Wifi, BookOpen, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Microscope,
      title: "State-of-the-Art Labs",
      description: "Modern research facilities equipped with latest technology and equipment",
      gradient: "from-lime/20 to-lime/5",
    },
    {
      icon: Cpu,
      title: "Industry 4.0 Ready",
      description: "Curriculum aligned with latest industry standards and emerging technologies",
      gradient: "from-coral/20 to-coral/5",
    },
    {
      icon: Wifi,
      title: "Smart Campus",
      description: "Fully connected campus with high-speed internet and digital infrastructure",
      gradient: "from-purple/20 to-purple/5",
    },
    {
      icon: BookOpen,
      title: "Extensive Library",
      description: "Access to over 100,000 books and digital resources",
      gradient: "from-lime/20 to-lime/5",
    },
    {
      icon: Trophy,
      title: "Award Winning Faculty",
      description: "Learn from industry experts and renowned researchers",
      gradient: "from-coral/20 to-coral/5",
    },
    {
      icon: Users,
      title: "Global Collaborations",
      description: "International partnerships and exchange programs",
      gradient: "from-purple/20 to-purple/5",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel in your engineering journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} p-6`}>
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
