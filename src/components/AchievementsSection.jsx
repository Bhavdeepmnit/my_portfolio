import React from 'react';

const AchievementsSection = () => (
  <section id="achievements" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">Achievements & Leadership</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <h3 className="text-xl font-bold text-[#4f46e5] mb-3">Problem-Solving Excellence</h3>
            <p className="text-gray-700">400+ LeetCode problems solved with strong debugging skills and algorithmic thinking.</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <h3 className="text-xl font-bold text-[#7c3aed] mb-3">Competitive Programming</h3>
            <p className="text-gray-700">1100+ CodeChef rating and 850+ Codeforces rating, showcasing advanced problem-solving capabilities.</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <h3 className="text-xl font-bold text-[#f43f5e] mb-3">Technical Leadership</h3>
            <p className="text-gray-700">Advisor to VP, Science & Technology Society, MNIT - Leading technical initiatives and mentoring students.</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <h3 className="text-xl font-bold text-[#4f46e5] mb-3">Community Leadership</h3>
            <p className="text-gray-700">State Convener, Think India Jaipur Prant - Driving social and educational initiatives at state level.</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <h3 className="text-xl font-bold text-[#7c3aed] mb-3">Innovation Recognition</h3>
            <p className="text-gray-700">Part of Top 15 Startups in India selected by NASSCOM AI4TGC for AI-driven transportation solutions.</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <h3 className="text-xl font-bold text-[#f43f5e] mb-3">Documentation Expert</h3>
            <p className="text-gray-700">Specialized in creating comprehensive technical specifications and setup guides for complex projects.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
