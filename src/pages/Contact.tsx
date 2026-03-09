import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { FadeIn, FadeInLeft, FadeInRight, SectionHeading } from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "Corporate Event", date: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent!", description: "Thank you for your interest. Our team will reach out within 24 hours." });
    setFormData({ name: "", email: "", phone: "", eventType: "Corporate Event", date: "", message: "" });
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&q=80" alt="Contact" className="w-full h-full object-cover" />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative text-center z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-4">
            Let's Connect
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow">
            Get in <span className="gold-text">Touch</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="divider-gold mt-6" />
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <FadeInLeft className="lg:col-span-2">
              <p className="text-accent font-body text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" /> Booking Inquiry
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10">
                Plan Your <span className="gold-text">Voyage</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Full Name", type: "text", key: "name", placeholder: "Your full name" },
                    { label: "Email Address", type: "email", key: "email", placeholder: "your@email.com" },
                    { label: "Phone Number", type: "tel", key: "phone", placeholder: "+1 (555) 000-0000" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-[10px] font-body text-muted-foreground uppercase tracking-[0.3em] mb-2 block">{field.label}</label>
                      <Input
                        type={field.type}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        required={field.key !== "phone"}
                        className="rounded-none h-12 border-border focus:border-accent bg-background"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-[10px] font-body text-muted-foreground uppercase tracking-[0.3em] mb-2 block">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full h-12 border border-border rounded-none bg-background px-3 text-sm font-body focus:border-accent focus:outline-none transition-colors"
                    >
                      {["Corporate Event", "Wedding Party", "Anniversary", "Bachelor Party", "Private Cruise", "Other"].map(opt => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-body text-muted-foreground uppercase tracking-[0.3em] mb-2 block">Preferred Date</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="rounded-none h-12 border-border focus:border-accent bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-body text-muted-foreground uppercase tracking-[0.3em] mb-2 block">Your Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your dream event..."
                    rows={5}
                    className="rounded-none border-border focus:border-accent bg-background"
                  />
                </div>
                <Button type="submit" className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-12 text-xs uppercase tracking-widest h-14 shadow-xl flex items-center gap-3">
                  <Send size={16} /> Send Inquiry
                </Button>
              </form>
            </FadeInLeft>

            {/* Contact Info Sidebar */}
            <FadeInRight>
              <div className="bg-primary rounded-sm p-10 h-fit premium-shadow">
                <h3 className="font-heading text-2xl font-bold text-white mb-8">
                  Contact <span className="gold-text">Info</span>
                </h3>
                <div className="space-y-8">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                    { icon: Mail, label: "Email", value: "info@pocoloco.com" },
                    { icon: MapPin, label: "Address", value: "Marina Bay, Suite 200\nMiami, FL 33101" },
                    { icon: Clock, label: "Office Hours", value: "Mon – Sat: 9AM – 8PM\nSunday: By Appointment" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-12 h-12 shrink-0 rounded-full border border-accent/30 flex items-center justify-center">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white text-sm mb-1">{item.label}</h4>
                        <p className="text-white/50 font-body text-sm whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sand section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Visit Us" title="Our Location" />
          <FadeIn>
            <div className="rounded-sm overflow-hidden premium-shadow h-[450px] bg-lavender flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full gold-gradient flex items-center justify-center shadow-xl mb-6">
                  <MapPin className="text-white" size={32} />
                </div>
                <p className="font-heading text-2xl text-primary font-bold">Marina Bay, Miami</p>
                <p className="text-muted-foreground font-body text-sm mt-2">Suite 200, Miami, FL 33101</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Contact;
