import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & HOD",
      department: "Computer Science",
      image: teacher1,
      expertise: "AI & Machine Learning",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      department: "Electronics Engineering",
      image: teacher2,
      expertise: "VLSI Design & IoT",
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      number: "250+",
      label: "Qualified Faculty",
      color: "text-lime",
    },
    {
      icon: Award,
      number: "100+",
      label: "PhD Holders",
      color: "text-coral",
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Research Papers",
      color: "text-purple",
    },
    {
      icon: Users,
      number: "15:1",
      label: "Student-Faculty Ratio",
      color: "text-lime",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class Faculty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from distinguished professors, industry experts, and award-winning researchers 
            who are passionate about shaping the next generation of engineers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 text-center border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.number}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Featured Faculty */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 animate-fade-in">
            Meet Our Distinguished Faculty
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <Card
                key={faculty.name}
                className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-lime/20 to-coral/20 p-6 flex items-center justify-center">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="rounded-full w-32 h-32 object-cover border-4 border-card shadow-lg"
                    />
                  </div>
                  <CardContent className="md:col-span-3 p-6">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {faculty.name}
                    </h4>
                    <p className="text-primary font-semibold mb-2">
                      {faculty.designation}
                    </p>
                    <p className="text-muted-foreground mb-3">
                      {faculty.department}
                    </p>
                    <div className="inline-block px-3 py-1 bg-lime/20 border border-lime rounded-full">
                      <p className="text-sm font-medium text-foreground">
                        {faculty.expertise}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Faculty Excellence Points */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 p-8 bg-gradient-to-br from-card to-secondary/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Our Faculty Stands Out
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-lime rounded-full flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Academic Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Faculty from IITs, NITs, and top international universities
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Industry Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Professors with real-world experience from top companies
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple rounded-full flex items-center justify-center">
                  <span className="text-xl">🔬</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Research Leaders</h4>
                  <p className="text-sm text-muted-foreground">
                    Active researchers publishing in top international journals
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-lime rounded-full flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Mentorship Focused</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to student success and career guidance
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
