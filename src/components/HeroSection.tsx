import studentHero from "@/assets/student-hero.jpg";

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
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Madras
                <br />
                Engineering
                <br />
                College
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg">
                Empowering future engineers with world-class education and industry partnerships since 1841
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-lime text-foreground rounded-lg font-semibold hover:bg-lime/90 transition-colors">
                  Apply Now
                </button>
                <button className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Student Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src={studentHero}
                  alt="Engineering Student at Madras Engineering College"
                  className="relative rounded-3xl w-full max-w-md object-cover shadow-2xl"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
