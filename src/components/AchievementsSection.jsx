import React from 'react';

const AchievementsSection = ({ isDark }) => (
  <section id="achievements" className={`py-20 border-t relative overflow-hidden ${isDark ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-50 border-y'
    }`}>
    {isDark && <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Achievements & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-indigo-400 to-purple-400' : 'from-indigo-600 to-indigo-600'}`}>Leadership</span>
        </h2>
        <div className={`mx-auto rounded-full ${isDark ? 'w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(129,140,248,0.5)]' : 'w-20 h-1.5 bg-indigo-600 opacity-80'
          }`}></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Problem-Solving Excellence", text: "400+ LeetCode problems solved with strong debugging skills and algorithmic thinking." },
            { title: "Competitive Programming", text: "1100+ CodeChef rating and 850+ Codeforces rating, showcasing advanced problem-solving capabilities." },
            { title: "Technical Leadership", text: "Advisor to VP, Science & Technology Society, MNIT - Leading technical initiatives and mentoring students." },
            { title: "Community Leadership", text: "State Convener, Think India Jaipur Prant - Driving social and educational initiatives at state level." },
            { title: "Innovation Recognition", text: "Part of Top 15 Startups in India selected by NASSCOM AI4TGC for AI-driven transportation solutions." },
            { title: "Documentation Expert", text: "Specialized in creating comprehensive technical specifications and setup guides for complex projects." }
          ].map((item, index) => (
            <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${isDark
                ? 'bg-slate-900/40 backdrop-blur-md border-white/5 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]'
                : 'bg-slate-50 border-slate-100 hover:border-indigo-100 hover:shadow-lg'
              }`}>
              {isDark && <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>}
              <h3 className={`text-xl font-bold mb-3 transition-colors relative z-10 ${isDark ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>{item.title}</h3>
              <p className={`leading-relaxed relative z-10 ${isDark ? 'text-slate-400 font-light' : 'text-slate-600'}`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
