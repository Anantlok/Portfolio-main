import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- SVG Icons (replaces react-icons for stability) ---
const FaGithub = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>;
const FaLinkedin = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>;
const FaEnvelope = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>;
const FaProjectDiagram = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72L192 262.72V32zM608 0h-128c-17.67 0-32 14.33-32 32v96h64V64h64v64h64V32c0-17.67-14.33-32-32-32z"></path></svg>;
const FaStar = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>;
const FaHeart = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>;
const FaFileDownload = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C76.4 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 18.43 17.29 7.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>;

// --- FallingLeaves, Window, and App Components are consolidated here for stability ---
// (The individual components are defined within this single file)

const FallingLeaves = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    ctx.imageSmoothingEnabled = false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const numParticles = 50;
    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.5,
        sway: Math.random() * 0.5 - 0.25,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayTime: Math.random() * 100,
      };
    }
    function init() {
      for (let i = 0; i < numParticles; i++) {
        particles.push(createParticle());
      }
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y += p.speed;
        p.x += Math.sin(p.swayTime) * p.sway;
        p.swayTime += p.swaySpeed;
        if (p.y > canvas.height) {
          p.y = -p.size;
          p.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = 'rgba(62, 76, 89, 0.7)'; // Charcoal color
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), Math.ceil(p.size), Math.ceil(p.size));
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
      particles.length = 0;
      init();
    };
    window.addEventListener('resize', handleResize);
    init();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} id="leaves-canvas" />;
};

const Window = ({ title, children, className }) => {
  const FaRegWindowMinimize = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"></path></svg>;
  const FaRegWindowMaximize = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340z"></path></svg>;
  const FaTimes = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>;

  return (
    <div className={`bg-stone border border-charcoal rounded-lg shadow-xl shadow-charcoal/20 flex flex-col max-h-full ${className}`}>
      <div className="flex-shrink-0 flex items-center justify-between px-2 py-1 border-b border-charcoal">
        <h2 className="font-bold text-charcoal text-sm">{title}</h2>
        <div className="flex items-center gap-1">
          <button aria-label="Minimize" className="w-5 h-5 bg-ivory border border-charcoal flex items-center justify-center text-charcoal font-bold hover:bg-stone text-[10px] rounded-full"><FaRegWindowMinimize /></button>
          <button aria-label="Maximize" className="w-5 h-5 bg-ivory border border-charcoal flex items-center justify-center text-charcoal font-bold hover:bg-stone text-[10px] rounded-full"><FaRegWindowMaximize /></button>
          <button aria-label="Close" className="w-5 h-5 bg-red-500 border border-red-700 flex items-center justify-center text-white font-bold hover:bg-red-600 text-[10px] rounded-full"><FaTimes /></button>
        </div>
      </div>
      <div className="bg-ivory p-6 md:p-10 flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
};

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
    <button {...props} className={`px-4 py-2 bg-stone border border-charcoal rounded-lg shadow-md hover:shadow-lg active:shadow-sm transition-all flex items-center justify-center gap-2 ${className}`}>
      {children}
    </button>
  );

  return (
    <div className="relative h-screen font-mixed text-charcoal isolate">
      <div className="absolute inset-0 z-0 bg-grid"></div>
      <FallingLeaves />

      <div className="relative z-10 h-full grid grid-rows-[auto_1fr]">
        <div className="w-full px-3 pt-3 pb-0">
          {/* Reduced shadow from shadow-xl to shadow-lg */}
          <div className="w-full bg-stone text-sm flex items-center justify-between border border-charcoal rounded-lg shadow-md shadow-charcoal/20 p-2 px-4">
            <div className="flex items-center gap-2 sm:gap-4 text-charcoal">
              <div className="w-4 h-4 rounded-full bg-ivory border border-charcoal flex-shrink-0"></div>
              <div className="flex items-center font-semibold">
                <span className="px-2 sm:px-3 cursor-pointer hover:bg-charcoal hover:text-ivory rounded transition-colors">File</span>
                <div className="h-4 w-px bg-charcoal mx-1"></div>
                <span className="px-2 sm:px-3 cursor-pointer hover:bg-charcoal hover:text-ivory rounded transition-colors">Edit</span>
                <div className="h-4 w-px bg-charcoal mx-1"></div>
                <span className="px-2 sm:px-3 cursor-pointer hover:bg-charcoal hover:text-ivory rounded transition-colors">View</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-charcoal font-semibold cursor-pointer">
              <span>{dateRange}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708 .708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>

        <main className="overflow-y-auto scroll-smooth">
          
          <section className="h-full flex items-center justify-center p-4 sm:p-8 focus:outline-none">
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

          <section className="h-full flex items-center justify-center p-4 sm:p-8 focus:outline-none">
            <Window title="C:\Skills" className="max-w-5xl w-full h-[90vh] sm:h-[80vh] sm:max-h-[750px]">
                <h2 className="text-2xl font-bold text-center mb-8">What I Bring to the Table</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.title} className="border border-stone p-4 rounded-md bg-ivory/50">
                      <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                      <p className="text-sm mb-4 leading-relaxed">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool) => (
                          <span key={tool} className="px-2 py-1 bg-stone/50 border border-stone text-xs rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </Window>
          </section>

          <section className="h-full flex items-center justify-center p-4 sm:p-8 focus:outline-none">
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
                      className={`px-3 py-1 sm:px-4 sm:py-2 text-sm border border-charcoal rounded-lg transition-all ${
                        activeFilter === f
                          ? "bg-charcoal text-ivory"
                          : "bg-stone hover:bg-ivory"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {filteredProjects.map((project, i) => (
                      <div key={i} className="border border-stone p-4 rounded-md bg-ivory/50">
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

          <section className="h-full flex items-center justify-center p-4 sm:p-8 focus:outline-none">
            <Window title="Contact Me" className="max-w-5xl w-full h-[90vh] sm:h-[80vh] sm:max-h-[750px]">
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Your Name" className="p-2 bg-ivory border-2 border-stone rounded-lg" />
                  <input type="email" placeholder="Your Email" className="p-2 bg-ivory border-2 border-stone rounded-lg" />
                  <textarea placeholder="Your Message" className="p-2 bg-ivory border-2 border-stone rounded-lg" rows="4"></textarea>
                  <RetroButton type="submit">Send Message</RetroButton>
                </form>
                <div className="flex flex-col justify-center text-sm gap-4">
                  <p>📞 +91 95896 90755</p>
                  <p>✉️ anant.alomano@gmail.com</p>
                </div>
              </div>
            </Window>
          </section>

        </main>
      </div>
    </div>
  );
}

