import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Anchor, Ship, Users, Star, Calendar, ChevronRight, Quote, Sparkles, Crown, Heart, Gem } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, SectionHeading, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
            alt="Luxury yacht at sea"
            className="w-full h-full object-cover"
          />
          <div className="overlay-hero absolute inset-0" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-accent/20 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-accent/10 rounded-full animate-[float_8s_ease-in-out_infinite_1s]" />

        <div className="relative container mx-auto px-4 pt-32 pb-48">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-6 flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-accent" />
              Premium Yacht Experiences
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 text-shadow"
            >
              Experience
              <br />
              <span className="gold-text">Luxury</span> at Sea
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/70 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl font-light"
            >
              Discover unparalleled elegance aboard our luxury fleet. From intimate celebrations to grand corporate galas, every voyage is crafted to perfection.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-10 text-xs uppercase tracking-widest h-14 shadow-xl">
                <Link to="/packages">Explore Packages</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body rounded-none px-10 text-xs uppercase tracking-widest h-14 backdrop-blur-sm">
                <Link to="/contact">Book Your Cruise</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Booking Form Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-t-sm p-8 grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
              {[
                { label: "Event Type", type: "select", options: ["Corporate Event", "Wedding Party", "Anniversary", "Bachelor Party", "Private Charter"] },
                { label: "Date", type: "date" },
                { label: "Guests", type: "select", options: ["1-10 Guests", "11-30 Guests", "31-50 Guests", "50+ Guests"] },
                { label: "Duration", type: "select", options: ["3 Hours", "5 Hours", "Full Day", "Multi-Day"] },
              ].map((field, i) => (
                <div key={i}>
                  <label className="text-[10px] font-body text-muted-foreground uppercase tracking-[0.3em] mb-2 block">{field.label}</label>
                  {field.type === "select" ? (
                    <select className="w-full h-12 border border-border bg-background/50 backdrop-blur-sm px-4 text-sm font-body rounded-none focus:border-accent focus:outline-none transition-colors">
                      {field.options?.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input type="date" className="w-full h-12 border border-border bg-background/50 backdrop-blur-sm px-4 text-sm font-body rounded-none focus:border-accent focus:outline-none transition-colors" />
                  )}
                </div>
              ))}
              <Button className="gold-gradient text-white hover:opacity-90 font-body rounded-none h-12 text-xs uppercase tracking-widest shadow-lg">
                Check Availability
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Events Hosted" },
              { value: "15+", label: "Luxury Yachts" },
              { value: "12K+", label: "Happy Guests" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <p className="font-heading text-4xl md:text-5xl font-bold gold-text">{stat.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.3em] font-body mt-2">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-sand section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What We Offer" title="Exclusive Services" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Ship, title: "Corporate Events", desc: "Elevate your business gatherings with stunning ocean backdrops and world-class amenities.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
              { icon: Heart, title: "Romantic Getaways", desc: "Celebrate love with an intimate voyage under the stars with champagne and fine dining.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
              { icon: Crown, title: "Bachelor Parties", desc: "An unforgettable send-off with premium entertainment on the open waters.", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" },
              { icon: Gem, title: "Dream Weddings", desc: "Say 'I do' surrounded by endless ocean horizons on our luxury vessels.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="group premium-card rounded-sm overflow-hidden hover-lift">
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                      <service.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-wider font-body mt-4 hover:gap-3 transition-all duration-300">
                      Learn More <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80"
                  alt="Luxury yacht experience"
                  className="w-full h-[500px] object-cover rounded-sm"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-sm premium-shadow hidden md:block">
                  <p className="font-heading text-4xl font-bold gold-text">14+</p>
                  <p className="text-white/60 text-xs uppercase tracking-wider font-body">Years of Excellence</p>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <p className="text-accent font-body text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" />
                Our Legacy
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                Crafting Unforgettable <span className="gold-text">Moments</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Since 2010, Poco Loco Luxury Cruises has been the premier choice for discerning clients seeking extraordinary experiences at sea. Our commitment to excellence sets us apart.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Every detail is meticulously planned — from gourmet cuisine prepared by world-class chefs to bespoke entertainment and impeccable service that anticipates your every need.
              </p>
              <Button asChild className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-10 text-xs uppercase tracking-widest h-12">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading subtitle="Premium Packages" title="Curated Experiences" light />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Silver Voyage", price: "$2,500", features: ["4-Hour Cruise", "Up to 20 Guests", "Gourmet Catering", "DJ & Sound System"], popular: false },
              { title: "Gold Horizon", price: "$5,000", features: ["8-Hour Cruise", "Up to 50 Guests", "Premium Catering", "Live Entertainment", "Photography"], popular: true },
              { title: "Platinum Odyssey", price: "$10,000", features: ["Full-Day Cruise", "Up to 100 Guests", "Luxury Dining", "Full Event Planning", "Videography", "Fireworks"], popular: false },
            ].map((pkg, i) => (
              <StaggerItem key={i}>
                <div className={`relative rounded-sm p-8 text-center transition-all duration-500 hover-lift ${
                  pkg.popular
                    ? "gold-gradient text-white scale-[1.03]"
                    : "bg-white/5 border border-white/10 text-white backdrop-blur-sm"
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-accent text-[10px] uppercase tracking-widest font-body px-6 py-1.5 rounded-full flex items-center gap-2">
                      <Sparkles size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-4xl font-heading font-bold mb-8">{pkg.price}</p>
                  <ul className="space-y-3 mb-10 font-body text-sm">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center justify-center gap-3 opacity-80">
                        <ChevronRight size={12} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-none h-12 text-xs uppercase tracking-widest font-body ${
                      pkg.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "gold-gradient text-white hover:opacity-90"
                    }`}
                  >
                    <Link to="/packages">View Details</Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-soft-beige section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Visual Stories" title="Captured Moments" />
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&q=80", span: "md:col-span-2 md:row-span-2" },
              { img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", span: "" },
            ].map((item, i) => (
              <StaggerItem key={i} className={item.span}>
                <div className="group relative overflow-hidden rounded-sm h-full min-h-[200px]">
                  <img src={item.img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={false}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <Sparkles className="text-accent" size={32} />
                    </motion.div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-body rounded-none px-10 text-xs uppercase tracking-widest h-12">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Client Stories" title="What Our Guests Say" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah & Michael", role: "Wedding Couple", text: "Our wedding aboard the yacht was absolutely magical. Every detail was perfect — from the sunset ceremony to the gourmet dinner. Poco Loco made our dream come true.", rating: 5 },
              { name: "James Rodriguez", role: "CEO, TechVenture", text: "The corporate retreat on Poco Loco was the highlight of our year. Impeccable service, stunning views, and an atmosphere that sparked creativity and connection.", rating: 5 },
              { name: "Emily Chen", role: "Event Planner", text: "I've organized dozens of luxury events, but nothing compares to a Poco Loco experience. Their attention to detail is unmatched in the industry.", rating: 5 },
            ].map((t, i) => (
              <StaggerItem key={i}>
                <div className="premium-card rounded-sm p-8 hover-lift h-full">
                  <Quote className="text-accent/30 mb-6" size={40} />
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="text-accent fill-accent" size={14} />
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-heading font-semibold text-primary">{t.name}</p>
                    <p className="text-accent text-xs font-body tracking-wider">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=80"
            alt="Yacht at sunset"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-6">Begin Your Journey</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-shadow">
              Ready to <span className="gold-text">Set Sail</span>?
            </h2>
            <p className="text-white/60 font-body text-lg max-w-2xl mx-auto mb-10 font-light">
              Let us craft your perfect luxury experience. Contact us today to start planning your unforgettable voyage across crystal-clear waters.
            </p>
            <Button asChild size="lg" className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-12 text-xs uppercase tracking-widest h-14 shadow-xl">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Home;
