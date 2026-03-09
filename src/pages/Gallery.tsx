import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { FadeIn, SectionHeading, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const photos = [
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&q=80", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=80", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80", h: "h-64" },
];

const Gallery = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559599238-308793637427?w=1920&q=80" alt="Gallery" className="w-full h-full object-cover" />
          <div className="overlay-dark absolute inset-0" />
        </div>
        <div className="relative text-center z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-accent font-body text-xs uppercase tracking-[0.5em] mb-4">
            Visual Stories
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow">
            Our <span className="gold-text">Gallery</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="divider-gold mt-6" />
        </div>
      </section>

      {/* Photos Masonry */}
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Captured Elegance" title="Photo Gallery" />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="break-inside-avoid overflow-hidden rounded-sm group relative">
                  <img
                    src={photo.src}
                    alt={`Gallery photo ${i + 1}`}
                    className={`w-full ${photo.h} object-cover transition-transform duration-700 group-hover:scale-110`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                    <Sparkles className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100" size={32} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-sand section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="In Motion" title="Video Gallery" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Corporate Gala Night", subtitle: "Annual Awards Ceremony", thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
              { title: "Dream Wedding at Sea", subtitle: "Sarah & Michael's Story", thumb: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" },
              { title: "Sunset Party Cruise", subtitle: "Summer Celebration 2025", thumb: "https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80" },
            ].map((video, i) => (
              <StaggerItem key={i}>
                <div className="relative overflow-hidden rounded-sm group cursor-pointer hover-lift">
                  <img src={video.thumb} alt={video.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/70 transition-all duration-500 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
                    <h3 className="font-heading text-xl font-bold text-white">{video.title}</h3>
                    <p className="text-white/60 text-xs font-body uppercase tracking-wider mt-1">{video.subtitle}</p>
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

export default Gallery;
