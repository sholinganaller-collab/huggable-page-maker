const CompanyPartners = () => {
  const companies = [
    { name: "Meta", color: "#0866FF" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Google", color: "#4285F4" },
    { name: "Siemens", color: "#009999" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl text-foreground mb-3 font-bold animate-fade-in">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-muted-foreground mb-10 animate-fade-in">
          Step into a world of opportunities with world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className="text-2xl md:text-4xl font-bold transition-all hover:scale-125 cursor-pointer animate-scale-in"
              style={{ 
                color: company.color,
                animationDelay: `${index * 100}ms`
              }}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPartners;
