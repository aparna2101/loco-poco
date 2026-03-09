import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Heart, Crown, Gem, Sparkles, Users } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, SectionHeading, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    title: "Corporate Events",
    desc: "Impress clients and reward teams with a premium corporate experience on the open water. Our fleet offers state-of-the-art presentation facilities, gourmet catering by Michelin-trained chefs, and breathtaking ocean views that inspire innovation and connection.",
    features: ["AV Equipment", "WiFi Connectivity", "Custom Branding", "Gourmet Menus"],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    icon: Ship,
  },
  {
    title: "Romantic Getaways",
    desc: "Celebrate your love story with an intimate cruise designed for two. Enjoy champagne toasts under the stars, candlelit dinners prepared by our private chef, and sunset vistas that take your breath away. Perfect for anniversaries, proposals, and special milestones.",
    features: ["Private Chef", "Rose Petal Décor", "Champagne Service", "Sunset Voyage"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    icon: Heart,
  },
  {
    title: "Bachelor & Bachelorette",
    desc: "Give the guest of honor an unforgettable send-off they'll never forget. Our party packages include DJ entertainment, premium open bar, water sports equipment, VIP lounge access, and a dedicated party coordinator to keep the celebration going.",
    features: ["Premium Open Bar", "DJ & Music", "Water Sports", "VIP Lounge"],
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    icon: Crown,
  },
  {
    title: "Dream Weddings",
    desc: "Say 'I do' surrounded by endless ocean horizons. From the ceremony to the reception, our wedding coordination team ensures every moment is flawlessly executed aboard our luxury vessels. Your dream wedding at sea, made reality.",
    features: ["Wedding Coordinator", "Floral Arrangements", "Photography & Video", "Custom Menu"],
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    icon: Gem,
  },
];

const Services = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1920&q=80" alt="Luxury yacht" className="w-full h-full object-cover" />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative text-center z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-4">
            Tailored to Perfection
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow">
            Our <span className="gold-text">Services</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="divider-gold mt-6" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-background">
        {services.map((service, i) => (
          <div key={i} className={`section-padding ${i % 2 === 1 ? "bg-sand" : "bg-background"}`}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {i % 2 === 0 ? (
                  <>
                    <FadeInLeft>
                      <div className="relative group">
                        <img src={service.img} alt={service.title} className="w-full h-[450px] object-cover rounded-sm" loading="lazy" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 rounded-sm" />
                        <div className="absolute top-6 left-6 w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-xl">
                          <service.icon className="text-white" size={28} />
                        </div>
                      </div>
                    </FadeInLeft>
                    <FadeInRight>
                      <ServiceContent service={service} />
                    </FadeInRight>
                  </>
                ) : (
                  <>
                    <FadeInLeft className="lg:order-2">
                      <div className="relative group">
                        <img src={service.img} alt={service.title} className="w-full h-[450px] object-cover rounded-sm" loading="lazy" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 rounded-sm" />
                        <div className="absolute top-6 right-6 w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-xl">
                          <service.icon className="text-white" size={28} />
                        </div>
                      </div>
                    </FadeInLeft>
                    <FadeInRight className="lg:order-1">
                      <ServiceContent service={service} />
                    </FadeInRight>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Sparkles className="text-accent mx-auto mb-6" size={40} />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Have Something <span className="gold-text">Special</span> in Mind?
            </h2>
            <p className="text-white/60 font-body text-lg max-w-xl mx-auto mb-10 font-light">
              We love creating custom experiences. Tell us your vision and we'll make it happen.
            </p>
            <Button asChild className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-12 text-xs uppercase tracking-widest h-14 shadow-xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

const ServiceContent = ({ service }: { service: typeof services[0] }) => (
  <div>
    <p className="text-accent font-body text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
      <span className="w-8 h-[1px] bg-accent" /> Exclusive Service
    </p>
    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">{service.title}</h2>
    <p className="text-muted-foreground font-body leading-[1.8] mb-8">{service.desc}</p>
    <div className="grid grid-cols-2 gap-4 mb-8">
      {service.features.map((f, j) => (
        <div key={j} className="flex items-center gap-3 text-sm font-body text-muted-foreground">
          <div className="w-2 h-2 rounded-full gold-gradient shrink-0" />
          {f}
        </div>
      ))}
    </div>
    <Button asChild className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-10 text-xs uppercase tracking-widest h-12">
      <Link to="/contact" className="flex items-center gap-3">
        Inquire Now <ArrowRight size={16} />
      </Link>
    </Button>
  </div>
);

export default Services;
