import { Instagram, Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-32 border-t border-white/5 relative overflow-hidden bg-black">
      <div className="container max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display font-black text-3xl gradient-text mb-8 tracking-tighter uppercase">
              Heatwave<span className="text-white">.</span>
            </h3>
            <p className="text-muted-foreground/60 font-body text-lg leading-relaxed max-w-md">
              The boldest creative collective in Mysuru. We engineer digital dominance for brands that refuse to be quiet.
            </p>
            <div className="mt-10 flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/heatwavemedia.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: Mail, href: "mailto:contact@heatwavemedia.in" },
                { Icon: Phone, href: "tel:+918073570624" }
              ].map(({ Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-black text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Work", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-body font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Founders */}
          <div>
            <h4 className="font-display font-black text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8">
              The Alchemists
            </h4>
            <div className="space-y-6">
              <a
                href="https://www.instagram.com/datguykavan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-neon-reverse" />
                <div>
                  <div className="text-xs font-black text-white group-hover:text-primary transition-colors uppercase tracking-widest">Kavan</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">Co-Founder</div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/punith_pareek"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-neon" />
                <div>
                  <div className="text-xs font-black text-white group-hover:text-primary transition-colors uppercase tracking-widest">Punith</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">Co-Founder</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Heatwave Media. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black text-white/20 hover:text-white transition-colors uppercase tracking-[0.3em]">Privacy</a>
            <a href="#" className="text-[10px] font-black text-white/20 hover:text-white transition-colors uppercase tracking-[0.3em]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
