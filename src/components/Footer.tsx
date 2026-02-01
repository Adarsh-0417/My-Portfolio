import { Code, Github, Linkedin, Instagram, Globe, Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Adarsh-0417",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adarsh-sharma-784a5b27b",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/immortal_adarsh/",
      label: "Instagram",
    },
    {
      icon: Globe,
      href: "https://sharmaadarsh.in",
      label: "Website",
    },
  ];

  const navLinks = ["Home", "About", "Projects", "Skills", "Resume", "Contact"];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-xl font-bold">
            <Code className="w-8 h-8 text-primary" />
            <span>
              Adarsh <span className="text-primary">Sharma</span>
            </span>
          </a>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center
                         text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground items-center">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              New Delhi, Delhi
            </span>

            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +91 9315727307
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center flex items-center gap-1">
            © 2026 Adarsh Sharma. Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
