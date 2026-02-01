import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TripMind",
      description:
        "An AI-powered travel planning chatbot that helps users design trips through conversational intelligence, recommendations, and smart itinerary generation.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop",
      tags: ["Python", "FastAPI", "Chatbot", "LLMs", "Google Gemini"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "DriveSure",
      description:
        "A smart vehicle safety and monitoring system integrating data analytics and backend services for real-time insights and driver awareness.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      tags: ["Python", "FastAPI", "Data Analytics", "IoT", "APIs"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Personal Portfolio",
      description:
        "My personal developer portfolio showcasing ML, AI, and data engineering projects with a modern UI and backend-ready architecture.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "TypeScript", "FastAPI", "Deployment"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Skadoosh",
      description:
        "A Python-based AI voice assistant capable of understanding commands, executing tasks, and interacting through speech recognition and synthesis.",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      tags: ["Python", "Speech Recognition", "AI", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "TankMind",
      description:
        "A smart water tank automation and monitoring system using sensors and microcontrollers for motor control, water quality tracking, and real-time alerts.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop",
      tags: ["IoT", "ESP8266", "Sensors", "Automation", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Selected projects across AI, data engineering, and intelligent systems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
