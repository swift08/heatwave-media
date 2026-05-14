import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="Heatwave Media Workspace"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </motion.div>

      {/* Dynamic Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-12 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[140px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card !bg-background/40 border-b border-white/5 backdrop-blur-xl">
        <div className="container max-w-7xl px-6 flex items-center justify-between h-20">
          <span className="font-display font-black text-2xl gradient-text tracking-tighter uppercase">
            Heatwave<span className="text-foreground">.</span>
          </span>
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Work", href: "#portfolio" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-body font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Start Project
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container max-w-5xl text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-[10px] font-black text-white/70 mb-8 tracking-[0.3em] uppercase border border-white/5">
            Mysuru's #1 Creative Powerhouse
          </span>
        </motion.div>

        <motion.h1
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          MAKING <br />
          <span className="gradient-text italic pr-2">BRANDS</span> <br />
          LOUD.
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          We don't just manage social media. We engineer digital identities that demand attention and drive real results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#portfolio"
            className="group relative px-10 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 gradient-bg transition-transform duration-500 group-hover:scale-105" />
            <span className="relative z-10 font-display font-black text-primary-foreground text-xs uppercase tracking-[0.2em]">
              Explore Cases
            </span>
          </a>
          <a
            href="#contact"
            className="group px-10 py-5 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <span className="font-display font-black text-white text-xs uppercase tracking-[0.2em]">
              The Kitchen ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
