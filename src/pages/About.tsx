import { motion } from "framer-motion";
import { Anchor, Award, Shield, Heart, Users, Star, Crown, Gem } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, SectionHeading, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const About = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=80" alt="Yacht at sea" className="w-full h-full object-cover" />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative text-center z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-4">
            Discover Our Legacy
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow">
            About <span className="gold-text">Poco Loco</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="divider-gold mt-6" />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeInLeft>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" alt="Luxury yacht" className="w-full h-[500px] object-cover rounded-sm" loading="lazy" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-accent/20 rounded-sm hidden lg:block" />
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-accent/10 rounded-sm hidden lg:block" />
              </div>
            </FadeInLeft>
            <FadeInRight>
              <p className="text-accent font-body text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" /> Since 2010
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                A Passion for <span className="gold-text">Perfection</span>
              </h2>
              <p className="text-muted-foreground font-body leading-[1.8] mb-5">
                Poco Loco Luxury Cruises was born from a deep passion for the sea and a vision to create extraordinary event experiences that transcend the ordinary. What started as a single yacht has grown into a premier fleet of luxury vessels.
              </p>
              <p className="text-muted-foreground font-body leading-[1.8] mb-8">
                Our commitment to excellence means every detail is meticulously curated — from the Michelin-inspired cuisine to the bespoke entertainment, from the hand-selected décor to the white-glove service. We don't just host events; we craft memories that last a lifetime.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Events Hosted" },
                  { value: "14+", label: "Years Experience" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-accent pl-4">
                    <p className="font-heading text-3xl font-bold gold-text">{stat.value}</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider font-body">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-sand section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="The Visionaries" title="Meet Our Team" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alexander Voss", role: "Founder & Captain", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Isabella Moreau", role: "Event Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
              { name: "Marcus Chen", role: "Head Chef", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Sofia Laurent", role: "Guest Relations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
            ].map((member, i) => (
              <StaggerItem key={i}>
                <div className="group premium-card rounded-sm overflow-hidden hover-lift text-center">
                  <div className="relative h-72 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-primary">{member.name}</h3>
                    <p className="text-accent text-xs font-body uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 border border-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading subtitle="Why Poco Loco" title="The Poco Loco Difference" light />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Award, title: "Award Winning", desc: "Recognized as a top luxury cruise provider for five consecutive years by Travel & Leisure." },
              { icon: Shield, title: "Safety First", desc: "Full coast guard certified fleet with experienced, licensed crew on every voyage." },
              { icon: Heart, title: "Bespoke Service", desc: "Every event is custom-tailored to your exact vision, preferences, and desires." },
              { icon: Anchor, title: "Premium Fleet", desc: "State-of-the-art yachts equipped with the finest amenities and modern luxuries." },
              { icon: Crown, title: "Expert Team", desc: "Dedicated event coordinators, Michelin-trained chefs, and entertainment professionals." },
              { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars by our guests for exceptional, unforgettable experiences." },
            ].map((feature, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-6 p-6 border border-white/10 rounded-sm hover:border-accent/30 transition-all duration-500 group">
                  <div className="w-14 h-14 shrink-0 rounded-full gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/50 font-body text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
};

export default About;
