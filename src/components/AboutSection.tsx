import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const highlights = [
    "NAAC A++ Accredited Institution",
    "Autonomous Status by Anna University",
    "Top 10 Engineering Colleges in Tamil Nadu",
    "NBA Accredited Programs",
    "ISO 9001:2015 Certified",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Madras Engineering College
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 1841, Madras Engineering College stands as one of India's 
              oldest and most prestigious technical institutions. With a legacy of 
              180+ years, we have been at the forefront of engineering education, 
              producing leaders, innovators, and entrepreneurs who have shaped industries worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence in education, research, and innovation 
              has made us a preferred destination for aspiring engineers across the country.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-lime flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="default" size="lg" className="bg-navy hover:bg-navy/90">
                Our History
              </Button>
              <Button variant="outline" size="lg">
                Achievements
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime/30 to-coral/30 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border-2 border-border rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose MEC?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Academic Excellence</h4>
                    <p className="text-muted-foreground">
                      Rigorous curriculum designed by industry experts and academic leaders
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Industry Connect</h4>
                    <p className="text-muted-foreground">
                      Strong partnerships with Fortune 500 companies for placements and internships
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research Opportunities</h4>
                    <p className="text-muted-foreground">
                      Access to cutting-edge research facilities and funding opportunities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Alumni Network</h4>
                    <p className="text-muted-foreground">
                      Connect with 50,000+ alumni across 60+ countries worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
