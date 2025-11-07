import { Award, Users, Building2, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      icon: GraduationCap,
      number: "180+",
      label: "Years of Excellence",
      color: "text-lime",
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Active Students",
      color: "text-coral",
    },
    {
      icon: Building2,
      number: "500+",
      label: "Partner Companies",
      color: "text-purple",
    },
    {
      icon: Award,
      number: "95%",
      label: "Placement Rate",
      color: "text-lime",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
