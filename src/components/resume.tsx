import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title">
          My <span className="text-gradient">Resume</span>
        </h2>

        <p className="section-subtitle">
          A snapshot of my journey in data, ML, and engineering
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/Adarsh_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>

          <a
            href="/Adarsh_Sharma_Resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
