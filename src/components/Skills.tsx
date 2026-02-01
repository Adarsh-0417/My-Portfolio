import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "SQL", "HTML5", "CSS"],
  },
  {
    title: "Data Visualization & UI",
    items: ["Streamlit", "Plotly", "Seaborn", "Matplotlib", "HTML5", "CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "Dialogflow"],
  },
  {
    title: "Databases & Storage",
    items: ["SQL"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["NumPy", "Pandas", "Scikit-learn"],
  },
  {
    title: "AI Platforms & Models",
    items: ["Google Gemini", "ChatGPT", "Claude Skills"],
  },
  {
    title: "Cloud & Deployment",
    items: ["Google Cloud", "Google APIs"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "GitHub Copilot"],
  },
  {
    title: "MLOps & Workflow",
    items: ["GitHub"],
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="bg-card border border-border rounded-2xl p-6
                         hover:border-primary transition-all duration-300
                         hover:shadow-glow-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.5s ease ${i * 80}ms`,
              }}
            >
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md
                               bg-muted border border-border
                               hover:border-primary hover:text-primary
                               transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

