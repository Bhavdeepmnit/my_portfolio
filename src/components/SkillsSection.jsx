import React from 'react';
import cppIcon from '../assets/cpp.png';
import pythonIcon from '../assets/python.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import nodeIcon from '../assets/node.png';
import mongodbIcon from '../assets/mongodb.png';
import jupyterIcon from '../assets/jupyter.png';
import sqlIcon from '../assets/sql.jpg';
import awsIcon from '../assets/aws.webp';
import dockerIcon from '../assets/docker.jpg';
import opencvIcon from '../assets/python.png';
import tensorflowIcon from '../assets/tensorflow.jpeg';
import cssIcon from '../assets/css.svg';
import htmlIcon from '../assets/html.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.webp';
import linuxIcon from '../assets/linux.png';
import vscodeIcon from '../assets/vscode.png';
import postmanIcon from '../assets/postman.png';
import azureIcon from '../assets/azure.png';
import scikitIcon from '../assets/python.png';
import pyautoguiIcon from '../assets/python.png';
import colabIcon from '../assets/python.png';

const skillIcons = {
  'C++': cppIcon, 'C': cppIcon, 'Python': pythonIcon, 'JavaScript': jsIcon, 'React.js': reactIcon,
  'Node.js': nodeIcon, 'MongoDB': mongodbIcon, 'Machine Learning': jupyterIcon, 'SQL': sqlIcon,
  'AWS': awsIcon, 'Docker': dockerIcon, 'OpenCV': opencvIcon, 'TensorFlow': tensorflowIcon,
  'CSS': cssIcon, 'HTML': htmlIcon, 'Git': gitIcon, 'GitHub': githubIcon, 'Linux': linuxIcon,
  'VS Code': vscodeIcon, 'Postman': postmanIcon, 'Azure': azureIcon, 'Scikit-learn': scikitIcon,
  'PyAutoGUI': pyautoguiIcon, 'Google Colab': colabIcon, 'Jupyter Notebook': jupyterIcon,
  'REST APIs': postmanIcon, 'Data Structures & Algorithms': jsIcon, 'OOP': jsIcon,
  'Operating Systems': linuxIcon, 'DBMS': sqlIcon, 'Leadership': githubIcon,
  'Problem Solving': jsIcon, 'Time Management': vscodeIcon, 'Communication': vscodeIcon,
};

const SkillsSection = ({ skills, isDark }) => {
  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Technical <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-cyan-400 to-indigo-400' : 'from-indigo-600 to-indigo-600'}`}>Skills</span>
          </h2>
          <div className={`mx-auto rounded-full ${isDark ? 'w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'w-20 h-1.5 bg-indigo-600 opacity-80'
            }`}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const icon = skillIcons[skill.name];
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${isDark
                      ? 'bg-slate-900/50 backdrop-blur-sm border-white/5 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                      : 'bg-slate-50 border-slate-100 hover:border-indigo-100 hover:shadow-xl'
                    }`}
                >
                  {isDark && <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>}

                  <div className="flex flex-col items-center text-center gap-4">
                    {icon ? (
                      <div className={`w-12 h-12 p-2 rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-slate-800/80 ring-1 ring-white/10 group-hover:ring-cyan-400/50' : 'bg-white'
                        }`}>
                        <img src={icon} alt={skill.name} className={`w-full h-full object-contain ${isDark ? 'filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]' : ''}`} />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isDark ? 'bg-indigo-900/50 text-cyan-400 border border-indigo-500/30' : 'bg-indigo-100 text-indigo-600'
                        }`}>
                        {skill.name[0]}
                      </div>
                    )}

                    <div className="w-full">
                      <h3 className={`font-bold mb-2 transition-colors ${isDark ? 'text-slate-200 group-hover:text-cyan-400' : 'text-slate-700 group-hover:text-indigo-600'
                        }`}>{skill.name}</h3>
                      <div className={`w-full rounded-full h-1.5 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div
                          className={`h-1.5 rounded-full transition-all duration-500 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-indigo-600'
                            }`}
                          style={{ width: `${skill.level || 75}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
