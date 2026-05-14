import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

import work1 from "@/assets/portfolio/work1.jpg";
import work2 from "@/assets/portfolio/work2.jpg";
import work3 from "@/assets/portfolio/work3.jpg";
import work4 from "@/assets/portfolio/work4.jpg";
import work5 from "@/assets/portfolio/work5.jpg";
import work6 from "@/assets/portfolio/work6.jpg";


const portfolioItems = [
  { id: 1, category: "Branding", title: "Brand Identity", type: "photo", image: work1 },
  { id: 2, category: "Content", title: "Product Shoot", type: "reel", image: work2 },
  { id: 3, category: "Social Media", title: "Social Campaign", type: "photo", image: work3 },
  { id: 4, category: "Video", title: "Video Production", type: "reel", image: work4 },
  { id: 5, category: "Content", title: "Creative Shoot", type: "photo", image: work5 },
  { id: 6, category: "Branding", title: "Packaging Design", type: "reel", image: work6 },
];

const categories = ["All", "Branding", "Social", "Content", "Films"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => {
        if (activeCategory === "Social") return item.category === "Social Media";
        if (activeCategory === "Films") return item.category === "Video";
        return item.category === activeCategory;
      });

  return (
    <section className="py-32 md:py-48 relative overflow-hidden" id="portfolio">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">
              Case Files
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter">
              THE <br />
              <span className="gradient-text italic">EVIDENCE.</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cinematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-white/5 border border-white/5 ${
                i === 0 ? 'md:col-span-4 md:row-span-2 aspect-[16/9]' : 
                i === 1 ? 'md:col-span-2 md:row-span-1 aspect-square' :
                i === 2 ? 'md:col-span-2 md:row-span-1 aspect-square' :
                'md:col-span-2 aspect-[4/5]'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              layout
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Hover Info */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {item.type === "reel" && (
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6">
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </div>
                )}
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">
                  {item.category}
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl tracking-tighter text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                  <span>View Project</span>
                  <div className="w-6 h-[1px] bg-white/20" />
                </div>
              </div>

              {/* Static Label (Visible when not hovered) */}
              <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.instagram.com/heatwavemedia.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
              See more on the gram
            </span>
            <div className="w-12 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
