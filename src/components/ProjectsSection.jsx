import React from 'react';

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{project.title}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4f46e5]">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-[#7c3aed] to-[#f43f5e] text-white shadow hover:scale-105 transition-transform flex items-center gap-2"
                >
                  {/* Replace with Github icon if needed */}
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-[#7c3aed] to-[#f43f5e] text-white shadow hover:scale-105 transition-transform flex items-center gap-2"
                >
                  {/* Replace with ExternalLink icon if needed */}
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
