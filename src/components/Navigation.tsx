import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Button variant="lime" size="lg" className="rounded-full min-w-[150px]">
            Admissions
          </Button>
          <Button variant="coral" size="lg" className="rounded-full min-w-[150px]">
            Academics
          </Button>
          <Button variant="purpleAccent" size="lg" className="rounded-full min-w-[150px]">
            Placements
          </Button>
          <Button variant="lime" size="lg" className="rounded-full min-w-[150px]">
            Campus Life
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
