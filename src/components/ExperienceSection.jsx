import React from 'react';

const ExperienceSection = ({ experiences }) => (
  <section id="experience" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">
          Work <span className="text-indigo-600">Experience</span>
        </h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors hover:shadow-lg group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{exp.title}</h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 bg-white text-slate-600 text-sm font-semibold rounded-full border border-slate-200 shadow-sm">{exp.period}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
