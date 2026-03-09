import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { SectionHeading, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const blogPosts = [
  {
    category: "Event Ideas",
    title: "10 Unforgettable Corporate Event Themes for Yacht Parties",
    excerpt: "Transform your next corporate gathering into an extraordinary experience with these creative yacht party themes that will leave a lasting impression on clients and colleagues alike.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    date: "March 5, 2026",
    readTime: "5 min read",
  },
  {
    category: "Latest Events",
    title: "A Dream Wedding Aboard the Platinum Odyssey",
    excerpt: "See how Sarah and Michael turned their wedding into a magical voyage with stunning décor, gourmet dining, and a breathtaking sunset ceremony on the open sea.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    date: "February 28, 2026",
    readTime: "4 min read",
  },
  {
    category: "Event Ideas",
    title: "The Ultimate Bachelor Party Planning Guide",
    excerpt: "From water sports to VIP lounge access, discover everything you need to plan the ultimate bachelor party experience on the open water with Poco Loco.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    date: "February 20, 2026",
    readTime: "6 min read",
  },
  {
    category: "Latest Events",
    title: "Annual Charity Gala Raises $500K on the Gold Horizon",
    excerpt: "Our annual charity gala brought together 200 philanthropists for an evening of fine dining, live auctions, and breathtaking ocean views aboard our flagship vessel.",
    img: "https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80",
    date: "February 14, 2026",
    readTime: "3 min read",
  },
  {
    category: "Event Ideas",
    title: "How to Plan the Perfect Anniversary Cruise",
    excerpt: "Celebrate your love story with an intimate voyage. Here are our top tips for creating a romantic anniversary experience at sea that neither of you will ever forget.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    date: "February 8, 2026",
    readTime: "5 min read",
  },
  {
    category: "Latest Events",
    title: "Tech Summit 2026: Innovation Meets the Ocean",
    excerpt: "Leading tech companies gathered aboard our flagship for a two-day summit featuring keynote speakers, networking sessions, and ocean-inspired innovation workshops.",
    img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&q=80",
    date: "January 30, 2026",
    readTime: "4 min read",
  },
];

const Blog = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80" alt="Blog" className="w-full h-full object-cover" />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative text-center z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-4">
            Stories & Inspiration
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow">
            Our <span className="gold-text">Journal</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="divider-gold mt-6" />
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative group">
              <img src={blogPosts[0].img} alt={blogPosts[0].title} className="w-full h-[400px] object-cover rounded-sm" loading="lazy" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 rounded-sm" />
              <div className="absolute top-6 left-6 gold-gradient text-white text-[10px] uppercase tracking-widest font-body px-4 py-1.5 rounded-full">
                Featured
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-accent text-xs font-body uppercase tracking-wider">{blogPosts[0].category}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3 mb-4 leading-tight">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-muted-foreground text-xs font-body mb-6">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {blogPosts[0].date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {blogPosts[0].readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-3 text-accent text-xs uppercase tracking-widest font-body font-medium hover:gap-4 transition-all duration-300">
                Read Article <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <SectionHeading subtitle="Latest Articles" title="From Our Journal" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <StaggerItem key={i}>
                <article className="premium-card rounded-sm overflow-hidden hover-lift group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-accent text-[10px] uppercase tracking-wider font-body px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-heading text-lg font-bold text-primary mb-3 leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-300">{post.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-muted-foreground text-xs font-body pt-4 border-t border-border">
                      <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
};

export default Blog;
