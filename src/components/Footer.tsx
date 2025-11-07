import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";

const Footer = () => {
  const quickLinks = [
    "Admissions",
    "Academics",
    "Departments",
    "Research",
    "Placements",
    "Campus Life",
  ];

  const importantLinks = [
    "Student Portal",
    "Faculty Portal",
    "Alumni Network",
    "Library",
    "Career Services",
    "Contact Us",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={collegeLogo} alt="MEC Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg">Madras Engineering College</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Empowering engineers since 1841 with world-class education and innovation.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-lime transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-lime transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-lime transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-lime transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-lime transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-lime transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-lime transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  College of Engineering, Guindy,<br />
                  Chennai - 600025, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+917002080020" className="text-primary-foreground/80 hover:text-lime transition-colors text-sm">
                  +91 70020 80020
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@mec.edu.in" className="text-primary-foreground/80 hover:text-lime transition-colors text-sm">
                  info@mec.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Madras Engineering College. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-lime transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-lime transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-lime transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
