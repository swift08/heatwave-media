import { motion } from "framer-motion";
import { Camera, Palette, TrendingUp, Video, Users } from "lucide-react";


const services = [
  {
    icon: TrendingUp,
    title: "VIBE ARCHITECTURE",
    desc: "Full-scale social media management. We engineer your digital presence to dominate feeds and drive culture.",
  },
  {
    icon: Camera,
    title: "SCROLL STOPPERS",
    desc: "High-octane content creation. Reels, photography, and design that forces people to stop and stare.",
  },
  {
    icon: Palette,
    title: "IDENTITY SYSTEMS",
    desc: "Branding that isn't boring. We build visual identities that scream authority and authentic cool.",
  },
  {
    icon: Video,
    title: "CINEMATIC HEISTS",
    desc: "Premium video production. From conceptual mood-boards to viral-ready final cuts.",
  },
  {
    icon: Users,
    title: "CULTURE CONNECT",
    desc: "Influencer and community growth strategy. Putting your brand in the right rooms with the right people.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="services">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl px-6">
        <motion.div
          className="max-w-3xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">
            Weaponry
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9] tracking-tighter">
            WE BRING THE <br />
            <span className="gradient-text italic">AMMO.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-xl">
            We don't offer generic packages. We build bespoke digital strategies that incinerate the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group glass-card rounded-[2.5rem] p-10 relative overflow-hidden border-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-500" />
                </div>
                
                <h3 className="font-display font-black text-2xl mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-body text-base leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors">
                  <span>Learn More</span>
                  <div className="w-8 h-[1px] bg-white/10 group-hover:bg-primary group-hover:w-12 transition-all duration-500" />
                </div>
              </div>

              {/* Decorative number */}
              <div className="absolute -bottom-8 -right-8 font-display font-black text-[120px] leading-none text-white/5 group-hover:text-white/10 transition-colors duration-700 pointer-events-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
