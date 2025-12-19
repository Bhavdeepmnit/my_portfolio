import React from 'react';

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">
          Featured <span className="text-indigo-600">Projects</span>
        </h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-2xl border border-slate-100 hover:border-indigo-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-slate-400 text-lg font-semibold group-hover:text-indigo-600 transition-colors z-10">{project.title} Preview</span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-50 text-slate-600 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl font-bold bg-slate-900 text-white shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl font-bold bg-white text-slate-700 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all"
                >
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
