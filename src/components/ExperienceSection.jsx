import React from 'react';

const ExperienceSection = ({ experiences }) => (
  <section id="experience" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#4f46e5]">{exp.title}</h3>
                  <p className="text-[#7c3aed] font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 md:text-right">{exp.period}</span>
              </div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
