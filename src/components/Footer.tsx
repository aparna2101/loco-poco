import { Link } from "react-router-dom";
import { Anchor, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-[2px] gold-gradient" />

      <div className="container mx-auto px-4 py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* About */}
          <StaggerItem>
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="text-accent" size={28} />
              <div>
                <span className="font-heading text-2xl font-bold text-white">Poco Loco</span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-white/40 font-body">Luxury Cruises</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-body mb-6">
              Crafting unforgettable luxury experiences at sea since 2010. From corporate events to dream weddings, we make every voyage extraordinary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-heading text-lg font-semibold mb-6 gold-text">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm">
              {["Home", "About", "Services", "Packages", "Gallery", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/50 hover:text-accent transition-all duration-300 hover:pl-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Services */}
          <StaggerItem>
            <h4 className="font-heading text-lg font-semibold mb-6 gold-text">Our Services</h4>
            <ul className="space-y-3 font-body text-sm">
              {["Corporate Events", "Romantic Getaways", "Bachelor Parties", "Wedding Celebrations", "Private Charters", "Sunset Cruises"].map((item) => (
                <li key={item}>
                  <span className="text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem>
            <h4 className="font-heading text-lg font-semibold mb-6 gold-text">Contact Us</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-center gap-4 text-white/50">
                <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-accent" />
                </div>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-4 text-white/50">
                <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-accent" />
                </div>
                info@pocoloco.com
              </li>
              <li className="flex items-start gap-4 text-white/50">
                <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-accent" />
                </div>
                Marina Bay, Suite 200<br />Miami, FL 33101
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs font-body tracking-wider">
              © {new Date().getFullYear()} Poco Loco Luxury Cruises. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/30 text-xs font-body">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
