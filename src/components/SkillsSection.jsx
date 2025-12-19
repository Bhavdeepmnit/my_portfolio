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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">
            Technical <span className="text-indigo-600">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const icon = skillIcons[skill.name];
              return (
                <div
                  key={index}
                  className="group relative bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    {icon ? (
                      <div className="w-12 h-12 p-2 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={icon} alt={skill.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
                        {skill.name[0]}
                      </div>
                    )}

                    <div className="w-full">
                      <h3 className="font-bold text-slate-700 mb-2 group-hover:text-indigo-600 transition-colors">{skill.name}</h3>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full transition-all duration-1000 ease-out group-hover:bg-indigo-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="text-xs font-semibold text-slate-400">{skill.level}%</span>
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
}

export default SkillsSection;
