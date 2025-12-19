import React from 'react';

const AchievementsSection = () => (
  <section id="achievements" className="py-20 bg-white border-y border-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">
          Achievements & <span className="text-indigo-600">Leadership</span>
        </h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Problem-Solving Excellence</h3>
            <p className="text-slate-600 leading-relaxed">400+ LeetCode problems solved with strong debugging skills and algorithmic thinking.</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Competitive Programming</h3>
            <p className="text-slate-600 leading-relaxed">1100+ CodeChef rating and 850+ Codeforces rating, showcasing advanced problem-solving capabilities.</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Technical Leadership</h3>
            <p className="text-slate-600 leading-relaxed">Advisor to VP, Science & Technology Society, MNIT - Leading technical initiatives and mentoring students.</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Community Leadership</h3>
            <p className="text-slate-600 leading-relaxed">State Convener, Think India Jaipur Prant - Driving social and educational initiatives at state level.</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Innovation Recognition</h3>
            <p className="text-slate-600 leading-relaxed">Part of Top 15 Startups in India selected by NASSCOM AI4TGC for AI-driven transportation solutions.</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Documentation Expert</h3>
            <p className="text-slate-600 leading-relaxed">Specialized in creating comprehensive technical specifications and setup guides for complex projects.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
