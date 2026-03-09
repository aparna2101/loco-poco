import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(41,20,46,0.08)] border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 lg:h-24 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <Anchor className="text-accent transition-transform duration-300 group-hover:rotate-12" size={28} />
          <div>
            <span className={`font-heading text-2xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Poco Loco
            </span>
            <span className={`hidden sm:block text-[10px] uppercase tracking-[0.35em] font-body transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-white/60"
            }`}>
              Luxury Cruises
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[13px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-accent"
                  : scrolled
                  ? "text-foreground/70 hover:text-accent"
                  : "text-white/80 hover:text-accent"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] gold-gradient rounded-full"
                />
              )}
            </Link>
          ))}
          <Button asChild className="gold-gradient text-white hover:opacity-90 font-body rounded-none px-8 text-xs uppercase tracking-widest h-11 shadow-lg">
            <Link to="/contact">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary overflow-hidden"
          >
            <nav className="flex flex-col p-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block text-base font-body font-medium py-3 border-b border-white/10 transition-colors ${
                      location.pathname === link.path ? "text-accent" : "text-white/80 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild className="gold-gradient text-white font-body rounded-none mt-6 h-12 text-xs uppercase tracking-widest">
                <Link to="/contact" onClick={() => setOpen(false)}>Book Now</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
