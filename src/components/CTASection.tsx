import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="contact">
      <div className="container max-w-7xl px-6">
        <motion.div
          className="relative rounded-[3rem] overflow-hidden bg-black border border-white/5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 gradient-bg opacity-30 animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_20%,_black_90%)]" />
          </div>

          <div className="relative z-10 text-center py-24 md:py-40 px-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-10">
                The Final Boss
              </span>
              <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-10 leading-[0.85] tracking-tighter">
                READY TO <br />
                <span className="gradient-text italic">BURN?</span>
              </h2>
              <p className="text-white/60 font-body text-lg md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
                We're currently accepting high-stakes projects for 2024. If you're ready to dominate the digital landscape, let's talk.
              </p>
              
              <motion.a
                href="https://www.instagram.com/heatwavemedia.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-16 py-8 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white group-hover:bg-primary transition-colors duration-500" />
                <span className="relative z-10 font-display font-black text-black group-hover:text-white text-sm uppercase tracking-[0.3em] transition-colors duration-500">
                  Secure Your Slot ↗
                </span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Decorative Corner Orbs */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-secondary/20 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
