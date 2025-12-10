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
import opencvIcon from '../assets/python.png'; // Replace with OpenCV image if available
import tensorflowIcon from '../assets/tensorflow.jpeg';
import cssIcon from '../assets/css.svg';
import htmlIcon from '../assets/html.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.webp';
import linuxIcon from '../assets/linux.png';
import vscodeIcon from '../assets/vscode.png';
import postmanIcon from '../assets/postman.png';
import azureIcon from '../assets/azure.png';
// pandas.png and numpy.png do not exist, so do not import or map them
import scikitIcon from '../assets/python.png'; // Use python icon for scikit-learn
import pyautoguiIcon from '../assets/python.png'; // Use python icon for PyAutoGUI
import colabIcon from '../assets/python.png'; // Use python icon for Google Colab

const skillIcons = {
  'C++': cppIcon,
  'C': cppIcon,
  'Python': pythonIcon,
  'JavaScript': jsIcon,
  'React.js': reactIcon,
  'Node.js': nodeIcon,
  'MongoDB': mongodbIcon,
  'Machine Learning': jupyterIcon,
  'SQL': sqlIcon,
  'AWS': awsIcon,
  'Docker': dockerIcon,
  'OpenCV': opencvIcon,
  'TensorFlow': tensorflowIcon,
  'CSS': cssIcon,
  'HTML': htmlIcon,
  'Git': gitIcon,
  'GitHub': githubIcon,
  'Linux': linuxIcon,
  'VS Code': vscodeIcon,
  'Postman': postmanIcon,
  'Azure': azureIcon,
  // 'Pandas': pythonIcon, // Do not show icon if image does not exist
  // 'NumPy': numpyIcon, // Do not show icon if image does not exist
  'Scikit-learn': scikitIcon,
  'PyAutoGUI': pyautoguiIcon,
  'Google Colab': colabIcon,
  'Jupyter Notebook': jupyterIcon,
  'REST APIs': postmanIcon,
  'Data Structures & Algorithms': jsIcon,
  'OOP': jsIcon,
  'Operating Systems': linuxIcon,
  'DBMS': sqlIcon,
  'Leadership': githubIcon,
  'Problem Solving': jsIcon,
  'Time Management': vscodeIcon,
  'Communication': vscodeIcon,
};

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => {
              const icon = skillIcons[skill.name];
              return (
                <button
                  key={index}
                  className={`relative bg-white/80 px-8 py-6 rounded-2xl shadow-xl font-semibold text-gray-900 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7c3aed]/40 border border-[#e0e7ff] hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] hover:text-white hover:scale-105`}
                  style={{ minWidth: 160 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {icon && (
                      <img src={icon} alt={skill.name} className="w-8 h-8 rounded-full object-contain" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                  <span className="absolute top-2 right-2 text-xs text-[#7c3aed] font-bold bg-white/70 px-2 py-1 rounded-full shadow">{skill.level}%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
