import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import Reveal from './Reveal';

const EMAILJS_SERVICE_ID = 'service_2iebo54';
const EMAILJS_TEMPLATE_ID = 'template_khf20ta';
const EMAILJS_PUBLIC_KEY = 'C-RtV0rZuLnGy-vZe';

const ContactSection = ({ personalInfo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (formStatus.error) setFormStatus((p) => ({ ...p, error: false, message: '' }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.message.trim()) return 'Please enter a message';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateForm();
    if (err) {
      setFormStatus({ loading: false, success: false, error: true, message: err });
      return;
    }
    setFormStatus({ loading: true, success: false, error: false, message: '' });
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Bhavdeep',
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: "Your message has been sent! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: false, message: '' }), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email me directly.',
      });
    }
  };

  const contactItems = [
    {
      title: 'Email',
      value: personalInfo.email,
      sub: personalInfo.emailOfficial,
      iconPath:
        'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      title: 'Phone',
      value: personalInfo.phone,
      iconPath:
        'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    },
    {
      title: 'Location',
      value: personalInfo.location,
      iconPath:
        'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    },
  ];

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 ' +
    'outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all disabled:opacity-50 backdrop-blur-sm';

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-[0_0_12px_rgba(56,189,248,0.55)]" />
        </Reveal>

        <Reveal className="max-w-5xl mx-auto">
          <div className="glass-card grid md:grid-cols-2 overflow-hidden">
            {/* Info side */}
            <div className="p-8 md:p-12 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-cyan-500/15 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-5 font-heading text-white">
                  Get In Touch
                </h3>
                <p className="mb-8 leading-relaxed text-slate-100/80">
                  I'm open to internships, collaborations and interesting problems in CV /
                  ADAS / full-stack. Say hi.
                </p>

                <div className="space-y-5">
                  {contactItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="p-3 rounded-xl glass-pill border-cyan-300/30 group-hover:border-cyan-300/60">
                        <svg
                          className="w-5 h-5 text-cyan-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={item.iconPath}
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-slate-100/85">{item.value}</p>
                        {item.sub && <p className="text-xs text-slate-200/60">{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-10">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button p-3 rounded-full"
                    aria-label="GitHub"
                  >
                    <img src={githubIcon} alt="" className="w-5 h-5 invert opacity-90" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button p-3 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <img src={linkedinIcon} alt="" className="w-5 h-5 invert opacity-90" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-cyan-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formStatus.loading}
                    className={inputCls}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-cyan-200">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus.loading}
                    className={inputCls}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-cyan-200">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formStatus.loading}
                    className={`${inputCls} resize-none`}
                    placeholder="Hello..."
                  />
                </div>

                {formStatus.message && (
                  <div
                    className={`p-3 rounded-xl text-sm font-medium border ${
                      formStatus.success
                        ? 'bg-emerald-500/10 text-emerald-200 border-emerald-400/30'
                        : 'bg-rose-500/10 text-rose-200 border-rose-400/30'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="glass-button w-full py-3 rounded-xl font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Transmission'
                  )}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
