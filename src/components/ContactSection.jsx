import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';

const ContactSection = ({ personalInfo, isDark }) => (
  <section id="contact" className={`py-20 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Contact <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-cyan-400 to-indigo-400' : 'from-indigo-600 to-indigo-600'}`}>Me</span>
        </h2>
        <div className={`mx-auto rounded-full ${isDark ? 'w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'w-20 h-1.5 bg-indigo-600 opacity-80'
          }`}></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 rounded-3xl shadow-xl overflow-hidden border ${isDark
            ? 'bg-slate-900/50 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10'
            : 'bg-white border-slate-100'
          }`}>

          {/* Info Side */}
          <div className={`p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden ${isDark ? 'bg-indigo-950/30' : 'bg-slate-900'
            }`}>
            {isDark && <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent pointer-events-none"></div>}

            <div className="relative z-10">
              <h3 className={`text-3xl font-bold mb-6 font-heading ${isDark ? 'drop-shadow-md' : ''}`}>Get In Touch</h3>
              <p className={`mb-8 leading-relaxed ${isDark ? 'text-indigo-200 font-light' : 'text-slate-300'}`}>
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together!
              </p>

              <div className="space-y-6">
                {[
                  { title: "Email", value: personalInfo.email, sub: personalInfo.emailOfficial, iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { title: "Phone", value: personalInfo.phone, iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                  { title: "Location", value: personalInfo.location, iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`p-3 rounded-lg transition-colors border ${isDark
                        ? 'bg-indigo-500/20 group-hover:bg-indigo-500/40 border-indigo-500/30'
                        : 'bg-white/10'
                      }`}>
                      <svg className={`w-6 h-6 ${isDark ? 'text-cyan-300' : 'text-indigo-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath}></path></svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors ${isDark ? 'text-white group-hover:text-cyan-300' : 'text-white'}`}>{item.title}</h4>
                      <p className={`text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-slate-400'}`}>{item.value}</p>
                      {item.sub && <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex gap-4 relative z-10 ${isDark ? 'mt-12' : 'mt-8'}`}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all border ${isDark
                  ? 'bg-white/5 hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] border-white/10 hover:border-indigo-500'
                  : 'bg-white/10 hover:bg-indigo-600 transition-colors border-none'
                }`}>
                <img src={githubIcon} alt="GitHub" className="w-6 h-6 invert opacity-80 hover:opacity-100" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all border ${isDark
                  ? 'bg-white/5 hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] border-white/10 hover:border-indigo-500'
                  : 'bg-white/10 hover:bg-indigo-600 transition-colors border-none'
                }`}>
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 invert opacity-80 hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className={`p-8 md:p-12 relative ${isDark ? 'bg-slate-900/30' : 'bg-white'}`}>
            <form className="space-y-5 relative z-10">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-indigo-300' : 'text-slate-700'}`}>Your Name</label>
                <input type="text" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${isDark
                    ? 'border-slate-700 bg-slate-950/50 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder-slate-600'
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-slate-50'
                  }`} placeholder="John Doe" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-indigo-300' : 'text-slate-700'}`}>Your Email</label>
                <input type="email" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${isDark
                    ? 'border-slate-700 bg-slate-950/50 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder-slate-600'
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-slate-50'
                  }`} placeholder="john@example.com" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-indigo-300' : 'text-slate-700'}`}>Message</label>
                <textarea rows="4" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${isDark
                    ? 'border-slate-700 bg-slate-950/50 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder-slate-600'
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-slate-50'
                  }`} placeholder="Hello..."></textarea>
              </div>
              <button type="submit" className={`w-full text-white py-3.5 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 border ${isDark
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(129,140,248,0.5)] border-white/10'
                  : 'bg-indigo-600 hover:bg-slate-900'
                }`}>
                {isDark ? 'Send Transmission' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
