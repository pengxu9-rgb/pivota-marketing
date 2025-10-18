import { Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border/50">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
              <span className="text-2xl font-bold text-gradient-primary">Pivota</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Future-ready agent payment solutions that simplify transactions and boost business efficiency.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contact@pivota.cc" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@pivota.cc
              </a>
              <a 
                href="tel:+1-555-PIVOTA" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1-555-PIVOTA
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              {[
                { text: "Features", href: "#features-section" },
                { text: "How It Works", href: "#workflow-section" },
                { text: "Book Demo", href: "#demo-section" },
                { text: "Partners", href: "#partners-section" }
              ].map((link) => (
                <a 
                  key={link.text}
                  href={link.href} 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Youtube, href: "#", label: "YouTube" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-neon)]"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="space-y-2 pt-4">
              {["Privacy Policy", "Terms of Service"].map((text) => (
                <a 
                  key={text}
                  href="#" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Pivota. All rights reserved. |{" "}
            <span className="text-gradient-primary">Powered by AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;