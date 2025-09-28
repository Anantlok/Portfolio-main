import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaCode, FaServer, FaTools, FaStar, FaHeart } from "react-icons/fa";

export default function Portfolio() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { name: "File" },
    { name: "Edit" },
    { name: "Arrange" },
    { name: "View" },
    { name: "Paint" },
    { name: "Type" },
    { name: "Graph" },
    { name: "Window" },
    { name: "Help" },
  ];

  return (
    <div className="min-h-screen bg-[#a8d8d3] flex flex-col font-retro text-[#2e2e2e]">
      {/* Navigation Bar */}
      <div className="w-full bg-[#fdfdfd] border-b border-[#7fb5b2] text-sm flex overflow-hidden">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`px-3 py-1 cursor-pointer border-r border-[#7fb5b2] hover:bg-[#7fb5b2] hover:text-white transition ${
              activeMenu === item.name ? "bg-[#2e2e2e] text-white" : ""
            }`}
            onClick={() => setActiveMenu(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12 bg-[#fdfdfd] border-b border-[#7fb5b2] rounded-2xl shadow-[3px_3px_0px_black] m-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaStar className="text-yellow-500" /> Hi, I'm <span className="text-[#2e2e2e]">Retro Dev</span> <FaHeart className="text-red-500" />
        </motion.h1>
        <p className="max-w-2xl text-[#2e2e2e] mb-6">
          A nostalgic software engineer transforming creative ideas into pixel-perfect retro solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2e2e2e] bg-[#fdfdfd] rounded-lg shadow-[2px_2px_0px_black] hover:bg-[#7fb5b2] hover:text-white"><FaGithub /> GitHub</button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2e2e2e] bg-[#fdfdfd] rounded-lg shadow-[2px_2px_0px_black] hover:bg-[#7fb5b2] hover:text-white"><FaLinkedin /> LinkedIn</button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2e2e2e] bg-[#fdfdfd] rounded-lg shadow-[2px_2px_0px_black] hover:bg-[#7fb5b2] hover:text-white"><FaEnvelope /> Email</button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-center text-2xl mb-8 flex items-center justify-center gap-2"><FaCode /> What I Bring to the Table <FaTools /></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Frontend", desc: "Building retro-inspired UIs with React, CSS, and pixel fonts.", icon: <FaCode /> },
            { title: "Backend", desc: "Creating scalable APIs with Python, Node.js, and databases.", icon: <FaServer /> },
            { title: "DevOps", desc: "Automating deployments with Docker, Terraform, and CI/CD.", icon: <FaTools /> }
          ].map((skill, i) => (
            <div key={i} className="bg-[#fdfdfd] border border-[#2e2e2e] shadow-[3px_3px_0px_black] p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-lg font-bold">{skill.icon} {skill.title}</div>
              <p className="text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-center text-2xl mb-8 flex items-center justify-center gap-2"><FaProjectDiagram /> Projects <FaProjectDiagram /></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Retro Login", desc: "A pixelated login UI reminiscent of early GUIs.", icon: <FaProjectDiagram /> },
            { title: "Landing Page", desc: "A minimalist landing page with retro vibes.", icon: <FaProjectDiagram /> }
          ].map((project, i) => (
            <div key={i} className="bg-[#fdfdfd] border border-[#2e2e2e] shadow-[3px_3px_0px_black] p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-lg font-bold">{project.icon} {project.title}</div>
              <p className="text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#fdfdfd] border-t border-b border-[#7fb5b2] py-12 px-6 rounded-2xl shadow-[3px_3px_0px_black] m-4">
        <h2 className="text-center text-2xl mb-8 flex items-center justify-center gap-2"><FaEnvelope /> Contact Me <FaEnvelope /></h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-[#2e2e2e] p-2 bg-white shadow-[2px_2px_0px_black] rounded-lg" />
            <input type="email" placeholder="Your Email" className="border border-[#2e2e2e] p-2 bg-white shadow-[2px_2px_0px_black] rounded-lg" />
            <textarea placeholder="Your Message" className="border border-[#2e2e2e] p-2 bg-white shadow-[2px_2px_0px_black] rounded-lg" rows="4"></textarea>
            <button type="submit" className="px-4 py-2 border border-[#2e2e2e] bg-[#fdfdfd] rounded-lg shadow-[2px_2px_0px_black] hover:bg-[#7fb5b2] hover:text-white">Send Message</button>
          </form>
          <div className="flex flex-col justify-center text-sm gap-2">
            <p>📞 +91-9876543210</p>
            <p>✉️ retro.dev@example.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full bg-[#fdfdfd] border-t border-[#7fb5b2] text-xs text-center py-2 mt-auto">
        Program Manager | File Manager | © 2025 Retro Portfolio
      </div>
    </div>
  );
}
