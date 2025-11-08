import { Utensils, Coffee, Apple, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import canteenInterior from "@/assets/canteen-interior.jpg";

const CanteenSection = () => {
  const features = [
    {
      icon: Utensils,
      title: "Multi-Cuisine Options",
      description: "North Indian, South Indian, Chinese, Continental",
    },
    {
      icon: Coffee,
      title: "Cafeteria & Snacks",
      description: "Fresh beverages, pastries, and quick bites",
    },
    {
      icon: Apple,
      title: "Healthy & Hygienic",
      description: "Nutritious meals prepared in clean facilities",
    },
    {
      icon: Heart,
      title: "Student-Friendly Prices",
      description: "Affordable meals for all budgets",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${canteenInterior})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-navy/90 to-primary/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              World-Class Dining Facilities
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Fuel your academic journey with delicious, nutritious meals in our modern canteen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-card/95 backdrop-blur-sm border-2 p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-lime" />
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border-2 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🍽️</div>
                <h4 className="font-bold text-2xl text-foreground mb-2">3 Canteens</h4>
                <p className="text-muted-foreground">Spacious dining areas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⏰</div>
                <h4 className="font-bold text-2xl text-foreground mb-2">6 AM - 10 PM</h4>
                <p className="text-muted-foreground">Extended operating hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💺</div>
                <h4 className="font-bold text-2xl text-foreground mb-2">1000+ Seats</h4>
                <p className="text-muted-foreground">Comfortable seating capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanteenSection;
