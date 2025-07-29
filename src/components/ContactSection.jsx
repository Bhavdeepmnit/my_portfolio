import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';

const ContactSection = ({ personalInfo }) => (
  <section id="contact" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">Contact Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#4f46e5] mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8 bg-white/80 rounded-xl shadow p-4">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-[#7c3aed] font-semibold">{personalInfo.email}</div>
                  <div className="text-gray-500 text-sm">{personalInfo.emailOfficial}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#7c3aed] font-semibold">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#7c3aed] font-semibold">{personalInfo.location}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
              <h4 className="text-xl font-semibold text-[#f43f5e] mb-4">Let's Connect</h4>
              <p className="text-gray-700 mb-6">
                Ready to start a conversation? Click the button below to send me an email directly.
              </p>
              <div className="space-y-4">
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-[#e0e7ff]" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-[#e0e7ff]" />
                  <textarea placeholder="Message" className="w-full px-4 py-2 rounded-lg border border-[#e0e7ff]" />
                  <button type="submit" className="block w-full bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 text-center shadow-lg">Send</button>
                </form>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
