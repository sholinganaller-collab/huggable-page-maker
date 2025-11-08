import campusHero from "@/assets/campus-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="bg-gradient-to-br from-primary via-navy to-primary py-20 md:py-28"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-lime/20 border border-lime rounded-full mb-4">
                <span className="text-primary-foreground font-semibold text-sm">🎓 Admissions Open 2024-25</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Madras
                <br />
                Engineering
                <br />
                College
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg leading-relaxed">
                Empowering future engineers with world-class education and industry partnerships since 1841
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-lime text-foreground rounded-xl font-semibold hover:bg-lime/90 transition-all hover:scale-105 shadow-lg">
                  Apply Now
                </button>
                <button className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Student Image */}
            <div className="flex justify-center md:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lime/30 via-coral/20 to-purple/30 rounded-3xl blur-3xl"></div>
                <img
                  src={campusHero}
                  alt="Beautiful campus of Madras Engineering College with modern buildings and students"
                  className="relative rounded-3xl w-full max-w-md object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                />
                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-2xl p-4 shadow-xl animate-scale-in">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-lime rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Top Ranked</p>
                      <p className="text-sm text-muted-foreground">Engineering College</p>
                    </div>
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

export default HeroSection;
