import { Users, Calendar, Trophy, Music, Laptop, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import studentsCollab from "@/assets/students-collab.jpg";

const StudentLifeSection = () => {
  const activities = [
    {
      icon: Users,
      title: "50+ Clubs",
      description: "Technical, cultural, sports, and hobby clubs",
      gradient: "from-lime/20 to-lime/5",
    },
    {
      icon: Calendar,
      title: "Annual Events",
      description: "Tech fests, cultural festivals, and hackathons",
      gradient: "from-coral/20 to-coral/5",
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      description: "State-of-art facilities for 20+ sports",
      gradient: "from-purple/20 to-purple/5",
    },
    {
      icon: Music,
      title: "Cultural Activities",
      description: "Music, dance, drama, and arts programs",
      gradient: "from-lime/20 to-lime/5",
    },
    {
      icon: Laptop,
      title: "Tech Communities",
      description: "Coding clubs, robotics, and innovation labs",
      gradient: "from-coral/20 to-coral/5",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "NSS, NCC, and community service initiatives",
      gradient: "from-purple/20 to-purple/5",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime/30 via-coral/20 to-purple/30 rounded-3xl blur-3xl"></div>
              <img
                src={studentsCollab}
                alt="Students collaborating at Madras Engineering College"
                className="relative rounded-3xl w-full object-cover shadow-2xl border-4 border-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border-2 border-border rounded-2xl p-6 shadow-xl max-w-xs animate-scale-in">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-16 w-16 bg-gradient-to-br from-lime to-coral rounded-full flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">10,000+</p>
                    <p className="text-sm text-muted-foreground">Active Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vibrant Student Life
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Madras Engineering College, education extends far beyond the classroom. 
              Our campus buzzes with energy as students engage in diverse activities, 
              build lifelong friendships, and discover their passions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From technical symposiums to cultural festivals, sports tournaments to 
              social service initiatives, every student finds their niche and thrives 
              in our inclusive, dynamic community.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Inclusive Environment</h4>
                  <p className="text-muted-foreground">
                    Students from all backgrounds come together in a welcoming community
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Leadership Opportunities</h4>
                  <p className="text-muted-foreground">
                    Student councils, club leadership, and event management roles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">24/7 Support</h4>
                  <p className="text-muted-foreground">
                    Counseling services, health center, and student support systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-10 animate-fade-in">
            Explore Campus Activities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={activity.title}
                className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${activity.gradient} p-6`}>
                  <CardContent className="p-0">
                    <activity.icon className="h-10 w-10 mb-4 text-primary" />
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {activity.title}
                    </h4>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
