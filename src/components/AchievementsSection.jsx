import React from 'react';
import Reveal from './Reveal';

const items = [
  {
    title: 'Problem-Solving Excellence',
    text: '400+ LeetCode problems solved with strong debugging and algorithmic intuition.',
  },
  {
    title: 'Competitive Programming',
    text: '1100+ CodeChef rating and 850+ Codeforces rating — consistent performance on contests.',
  },
  {
    title: 'Advisor to Vice-President',
    text: 'Leading sponsorship, artist and event execution for SPHINX — Rajasthan\'s largest techno-management fest.',
  },
  {
    title: 'State Convenor',
    text: 'State Convenor, Think India Jaipur Prant — driving social initiatives and volunteer mobilization.',
  },
  {
    title: 'Academic Performance',
    text: 'Intermediate/+2 at 96.80% — disciplined foundation in mathematics and CS fundamentals.',
  },
  {
    title: 'Real-Time Systems',
    text: 'Built ADAS pipelines processing 20–25 FPS on edge hardware with low-latency guarantees.',
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
          Achievements &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">
            Leadership
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_12px_rgba(167,139,250,0.55)]" />
      </Reveal>

      <Reveal className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6" stagger={90}>
        {items.map((item, i) => (
          <div
            key={i}
            className="glass-card p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{item.title}</h3>
            <p className="leading-relaxed text-slate-100/80 text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default AchievementsSection;
