import { MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import collegeLogo from "@/assets/college-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and College Name */}
          <div className="flex items-center gap-3">
            <img 
              src={collegeLogo} 
              alt="Madras Engineering College Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-navy">MADRAS</h1>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Engineering College</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <span className="text-muted-foreground mr-2">TNEA Code</span>
              <span className="font-bold text-foreground">1203</span>
            </Badge>
            <div className="hidden md:flex flex-col items-end gap-1">
              <a href="tel:+917002080020" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">+91 70020 80020</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
