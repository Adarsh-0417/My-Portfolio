import { Brain, Database, Cpu, GraduationCap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Brain, value: "ML & AI", label: "Model Building" },
    { icon: Database, value: "Data", label: "Pipelines & Analysis" },
    { icon: Cpu, value: "Backend", label: "APIs & Systems" },
    { icon: GraduationCap, value: "B.Tech", label: "Engineering Student" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="section-subtitle">
          Building intelligent systems with data, code, and curiosity
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-muted-foreground leading-relaxed">
              I’m a B.Tech engineering student focused on Data Science, Machine
              Learning, and AI-driven systems. I enjoy turning raw data into
              meaningful insights and building end-to-end solutions that combine
              analytics, backend engineering, and intelligent models.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My work spans data preprocessing, visualization, ML model
              development, and API-driven deployments using tools like Python,
              FastAPI, Streamlit, and modern AI platforms. I believe in clean
              pipelines, practical ML, and systems that actually ship.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond code, I actively explore emerging AI technologies, build
              real-world projects, and continuously sharpen my engineering
              fundamentals to grow into a full-stack ML engineer.
            </p>

            <a href="#contact" className="btn-primary inline-flex">
              Let’s Build Something
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="card-hover text-center">
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value}
                </h3>
                <p className="text-muted-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
