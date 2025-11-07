const CompanyPartners = () => {
  const companies = [
    { name: "Meta", color: "#0866FF" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Google", color: "#4285F4" },
    { name: "Siemens", color: "#009999" },
  ];

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl text-muted-foreground mb-8 font-medium">
          Step into a world of opportunities with world-class companies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="text-2xl md:text-3xl font-bold transition-transform hover:scale-110"
              style={{ color: company.color }}
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
