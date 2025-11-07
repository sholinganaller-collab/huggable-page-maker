import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of students who have chosen Madras Engineering College 
            for their future. Applications for 2024-25 academic year are now open.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="lime"
              className="text-lg px-8 py-6 rounded-xl group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/80">
            Need help? Call us at <span className="font-bold">+91 70020 80020</span> or email 
            <span className="font-bold"> admissions@mec.edu.in</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
