import { motion } from "framer-motion";
import btsImg from "@/assets/bts.jpg";

const BTSSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-white/[0.02]">
      <div className="container max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">
              The Engine Room
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9] tracking-tighter">
              WE SHOOT. <br />
              WE EDIT. <br />
              <span className="gradient-text italic">WE REPEAT.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/80 font-body leading-relaxed mb-10 max-w-xl">
              Heatwave isn't just an office. It's a laboratory where we experiment with pixels and light to create something that doesn't just look good, but feels right. Every frame is a mission.
            </p>
            <div className="flex flex-wrap gap-4">
              {["CREATIVE CHAOS", "LATE NIGHT EDITS", "COFFEE ADDICTS", "REEL OBSESSED"].map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/5 bg-white/5 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/3]">
              <img
                src={btsImg}
                alt="Behind the scenes at Heatwave Media"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl border border-white/10 hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-display font-black text-3xl gradient-text tracking-tighter">EST. 2021</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Mysuru Native</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BTSSection;
