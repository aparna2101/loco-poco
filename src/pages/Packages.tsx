import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Star } from "lucide-react";
import { FadeIn, SectionHeading, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const packageCategories = [
  {
    category: "Private Cruise Packages",
    subtitle: "Intimate voyages crafted for unforgettable moments",
    bg: "bg-background",
    packages: [
      { title: "Sunset Soirée", price: "$1,500", icon: Star, features: ["3-Hour Evening Cruise", "Up to 12 Guests", "Champagne & Canapés", "Personal Steward", "Sunset Photo Opportunity"] },
      { title: "Moonlight Escape", price: "$3,000", icon: Crown, popular: true, features: ["5-Hour Night Cruise", "Up to 20 Guests", "Full Dinner Service", "Live Musician", "Stargazing Deck", "Premium Spirits"] },
      { title: "Island Hopper", price: "$6,000", icon: Sparkles, features: ["Full-Day Cruise", "Up to 30 Guests", "Brunch & Lunch", "Water Sports", "Island Stopover", "Personal Chef"] },
    ],
  },
  {
    category: "Event Packages",
    subtitle: "Grand celebrations that make history",
    bg: "bg-sand",
    packages: [
      { title: "Silver Voyage", price: "$2,500", icon: Star, features: ["4-Hour Cruise", "Up to 20 Guests", "Gourmet Catering", "DJ & Sound System", "Event Coordinator"] },
      { title: "Gold Horizon", price: "$5,000", icon: Crown, popular: true, features: ["8-Hour Cruise", "Up to 50 Guests", "Premium Catering", "Live Entertainment", "Photography Package", "Custom Décor"] },
      { title: "Platinum Odyssey", price: "$10,000", icon: Sparkles, features: ["Full-Day Cruise", "Up to 100 Guests", "Luxury Dining", "Full Event Planning", "Photo & Video", "Fireworks Finale"] },
    ],
  },
  {
    category: "Custom Packages",
    subtitle: "Your vision, our expertise — limitless possibilities",
    bg: "bg-background",
    packages: [
      { title: "Bespoke Experience", price: "Custom Quote", icon: Crown, popular: true, features: ["Your Choice of Duration", "Flexible Guest Count", "Bespoke Menu Design", "Custom Entertainment", "Dedicated Event Planner", "Unlimited Revisions"] },
    ],
  },
];

const Packages = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=80" alt="Yacht" className="w-full h-full object-cover" />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative text-center z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-4">
            Tailored Luxury
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow">
            Our <span className="gold-text">Packages</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="divider-gold mt-6" />
        </div>
      </section>

      {packageCategories.map((cat, catIndex) => (
        <section key={catIndex} className={`${cat.bg} section-padding`}>
          <div className="container mx-auto px-4">
            <SectionHeading subtitle={cat.subtitle} title={cat.category} />
            <StaggerContainer className={`grid gap-8 ${cat.packages.length === 1 ? "max-w-lg mx-auto" : cat.packages.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto" : "grid-cols-1 md:grid-cols-3"}`}>
              {cat.packages.map((pkg, i) => (
                <StaggerItem key={i}>
                  <div className={`relative rounded-sm overflow-hidden hover-lift h-full flex flex-col ${
                    pkg.popular
                      ? "border-2 border-accent premium-shadow"
                      : "premium-card"
                  }`}>
                    {pkg.popular && (
                      <div className="gold-gradient text-white text-center py-2 text-[10px] uppercase tracking-widest font-body flex items-center justify-center gap-2">
                        <Sparkles size={12} /> Most Popular
                      </div>
                    )}
                    <div className="p-8 text-center flex-1 flex flex-col">
                      <div className="w-14 h-14 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                        <pkg.icon className="text-white" size={22} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
                      <p className="text-4xl font-heading font-bold gold-text mb-8">{pkg.price}</p>
                      <ul className="space-y-3 mb-10 text-left font-body text-sm text-muted-foreground flex-1">
                        {pkg.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                              <Check size={12} className="text-accent" />
                            </div>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className={`w-full rounded-none h-12 text-xs uppercase tracking-widest font-body ${
                        pkg.popular ? "gold-gradient text-white hover:opacity-90" : "bg-primary text-white hover:bg-primary/90"
                      }`}>
                        <Link to="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Packages;
