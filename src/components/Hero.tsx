import { Code, Send, Github, Linkedin, Instagram, Globe } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
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

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Adarsh Sharma
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Data Engineer • AI/ML • <span className="text-gradient">Generative AI</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              I build intelligent systems using data, machine learning, and backend
              engineering. Passionate about transforming raw information into
              meaningful insights and production-ready AI solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn-primary">
                <Code className="w-5 h-5" />
                View Projects
              </a>

              <a href="#contact" className="btn-outline">
                <Send className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl animate-pulse-glow" />

              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-float" />
                <div className="absolute inset-2 rounded-full border-4 border-primary profile-glow" />

                {/* Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Adarsh Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
