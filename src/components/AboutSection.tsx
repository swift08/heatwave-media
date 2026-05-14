import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="about">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[150px] animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-6">
              Our DNA
            </span>

            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9] tracking-tighter">
              BORN IN <br />
              <span className="gradient-text italic">MYSURU,</span> <br />
              BUILT FOR THE WORLD.
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground/80 font-body leading-relaxed max-w-xl">
              <p>
                We're not your typical agency. We're a collective of rebels, artists, and strategists who believe that mediocre content is the enemy of growth.
              </p>
              <p>
                Heatwave Media is the brainchild of <span className="text-white font-bold italic underline decoration-secondary">Kavan</span> & <span className="text-white font-bold italic underline decoration-primary">Punith</span>. 
                Media graduates with a singular mission: to incinerate boring digital identities and build brands that actually matter in the modern attention economy.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { num: "50+", label: "BRANDS INCINERATED" },
              { num: "1M+", label: "EYEBALLS CAPTURED" },
              { num: "200+", label: "SUCCESSFUL HEISTS" },
              { num: "3+", label: "YEARS OF CHAOS" },
            ].map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center ${idx % 2 === 1 ? 'lg:translate-y-12' : ''}`}
              >
                <div className="font-display font-black text-4xl md:text-5xl gradient-text mb-2 tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
