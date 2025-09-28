import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaStar, FaHeart, FaFileDownload } from "react-icons/fa";
import Window from './Window';

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Frontend", "Backend", "Fun"];
  
  const projects = [
    { title: "Retro Login", desc: "A pixelated login UI.", type: "Frontend", icon: <FaProjectDiagram /> },
    { title: "Landing Page", desc: "A minimalist landing page with retro vibes.", type: "Frontend", icon: <FaProjectDiagram /> },
    { title: "API Service", desc: "Scalable backend API with Node.js.", type: "Backend", icon: <FaProjectDiagram /> },
    { title: "Pixel Game", desc: "A fun retro pixel-art styled game.", type: "Fun", icon: <FaProjectDiagram /> },
  ];

  const skills = [
    { title: "Frontend", description: "I build dynamic, responsive UI's using React, Tailwind, and modern JavaScript/TypeScript.", tools: ["JavaScript", "TypeScript", "React.js", "Tailwind", "CSS"] },
    { title: "Backend", description: "I develop scalable server-side apps and secure APIs, experienced with both SQL and NoSQL databases.", tools: ["Node.js", "Python", "Flask", "SQL"] },
    { title: "DevOps", description: "I automate cloud infrastructure, containerize apps, and set up CI/CD pipelines for seamless deployment.", tools: ["AWS", "Docker", "Jenkins", "Git"] }
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.type === activeFilter);

  const today = new Date();
  const dayOfWeek = today.getDay();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - dayOfWeek);
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + (6 - dayOfWeek));
  
  const dateRange = `${startDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })} - ${endDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: '2-digit' })}`;

  const RetroButton = ({ children, className, ...props }) => (
    <button {...props} className={`px-4 py-2 bg-window-frame border-2 border-black rounded-lg shadow-[2px_2px_0px_black] hover:bg-gray-300 active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 ${className}`}>
      {children}
    </button>
  );

  return (
    <div className="relative h-screen font-mixed text-black">
      {/* Dedicated background element, forced to the back */}
      <div className="absolute inset-0 z-0 bg-grid"></div>

      {/* Main layout container, sits on top of the background */}
      <div className="relative z-10 h-full grid grid-rows-[auto_1fr]">
        {/* Navigation Bar */}
        <div className="w-full px-3 pt-3 pb-2">
          <div className="w-full bg-window-frame text-sm flex items-center justify-between border border-black rounded-lg shadow-[4px_4px_0px_black] p-2 px-4">
            <div className="flex items-center gap-2 sm:gap-4 text-black">
              <div className="w-4 h-4 rounded-full bg-gray-300 border border-black flex-shrink-0"></div>
              <div className="flex items-center font-semibold">
                <span className="px-2 sm:px-3 cursor-pointer hover:bg-black hover:text-white transition-colors">File</span>
                <div className="h-4 w-px bg-black"></div>
                <span className="px-2 sm:px-3 cursor-pointer hover:bg-black hover:text-white transition-colors">Edit</span>
                <div className="h-4 w-px bg-black"></div>
                <span className="px-2 sm:px-3 cursor-pointer hover:bg-black hover:text-white transition-colors">View</span>
              </div>
            </div>
            {/* Date range hidden on mobile, shown on small screens and up */}
            <div className="hidden sm:flex items-center gap-2 text-black font-semibold cursor-pointer">
              <span>{dateRange}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708 .708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <main className="overflow-y-auto snap-y snap-proximity custom-scrollbar scroll-smooth">
          
          <section className="h-full flex items-center justify-center snap-center p-4 sm:p-8 focus:outline-none">
            <Window 
              title="Anant Lokhande - Portfolio.txt" 
              className="w-full max-w-4xl h-[85vh] sm:h-[70vh] max-h-[600px]"
            >
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="flex-grow flex flex-col items-center justify-center">
                  <motion.h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    <FaStar className="text-yellow-400" /> Hi, I'm Anant Lokhande <FaHeart className="text-red-500" />
                  </motion.h1>
                  <p className="max-w-2xl mb-6 leading-relaxed px-2">
                    A software engineer transforming creative ideas into lucrative solutions.
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                    <a href="https://github.com/Anantlok" target="_blank" rel="noopener noreferrer"><RetroButton><FaGithub /> GitHub</RetroButton></a>
                    <a href="https://www.linkedin.com/in/anant-lokhande-82917a232/" target="_blank" rel="noopener noreferrer"><RetroButton><FaLinkedin /> LinkedIn</RetroButton></a>
                    <a href="mailto:anant.alomano@gmail.com"><RetroButton><FaEnvelope /> Email</RetroButton></a>
                    
                    <div className="w-full flex justify-center pt-2">
                      <a href="/resume.pdf" download>
                        <RetroButton className="animated-border-button">
                          <FaFileDownload />
                          Download Resume
                        </RetroButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Window>
          </section>

          <section className="h-full flex items-center justify-center snap-center p-4 sm:p-8 focus:outline-none">
            <Window title="C:\Skills" className="max-w-5xl w-full h-[90vh] sm:h-[80vh] sm:max-h-[750px]">
                <h2 className="text-2xl font-bold text-center mb-8">What I Bring to the Table</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.title} className="border border-window-dark p-4 rounded-md">
                      <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                      <p className="text-sm mb-4 leading-relaxed">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool) => (
                          <span key={tool} className="px-2 py-1 bg-window-bg border border-window-dark text-xs rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </Window>
          </section>

          <section className="h-full flex items-center justify-center snap-center p-4 sm:p-8 focus:outline-none">
            <Window title="C:\Projects" className="max-w-5xl w-full h-[90vh] sm:h-[80vh] sm:max-h-[750px]">
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                  <FaProjectDiagram /> Projects <FaProjectDiagram />
                </h2>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`px-3 py-1 sm:px-4 sm:py-2 text-sm border-2 border-black rounded-lg transition-all ${
                        activeFilter === f
                          ? "bg-black text-white"
                          : "bg-window-frame shadow-[2px_2px_0px_black] hover:bg-gray-300 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {filteredProjects.map((project, i) => (
                      <div key={i} className="border border-window-dark p-4 rounded-md">
                        <div className="flex items-center gap-2 mb-2 text-lg font-bold">
                          {project.icon} {project.title}
                        </div>
                        <p className="text-sm leading-relaxed">{project.desc}</p>
                      </div>
                  ))}
                </div>
              </div>
            </Window>
          </section>

          <section className="h-full flex items-center justify-center snap-center p-4 sm:p-8 focus:outline-none">
            <Window title="Contact Me" className="max-w-5xl w-full h-[90vh] sm:h-[80vh] sm:max-h-[750px]">
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Your Name" className="p-2 bg-white border-2 border-black rounded-lg" />
                  <input type="email" placeholder="Your Email" className="p-2 bg-white border-2 border-black rounded-lg" />
                  <textarea placeholder="Your Message" className="p-2 bg-white border-2 border-black rounded-lg" rows="4"></textarea>
                  <RetroButton type="submit">Send Message</RetroButton>
                </form>
                <div className="flex flex-col justify-center text-sm gap-4">
                  <p>📞 +91-9876543210</p>
                  <p>✉️ retro.dev@example.com</p>
                </div>
              </div>
            </Window>
          </section>

        </main>
      </div>
    </div>
  );
}

