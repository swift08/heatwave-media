import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Heatwave took our brand from invisible to unforgettable. Our reels hit 500K views in the first month!",
    author: "Ananya R.",
    role: "Founder, Spice Route Café",
  },
  {
    quote: "The team just gets it. They captured our wedding like a Netflix series. No cringe, all cinema.",
    author: "Raj & Priya",
    role: "Wedding Clients",
  },
  {
    quote: "Professional, creative, and ridiculously fun to work with. Our social media has never looked this good.",
    author: "Karthik M.",
    role: "CEO, TechNova",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="testimonials">
      <div className="container max-w-7xl px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">
            Street Cred
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9] tracking-tighter">
            WHAT THE <br />
            <span className="gradient-text italic">CLIENTS SAYS.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="glass-card rounded-[2.5rem] p-10 border-white/5 relative group hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>
              
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-10 italic">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-neon-reverse" />
                <div>
                  <div className="font-display font-black text-sm tracking-tight text-white uppercase">
                    {t.author}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
