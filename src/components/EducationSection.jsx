import React from 'react';

const EducationSection = () => (
  <section id="education" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">My <span className="text-indigo-600">Education</span></h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-indigo-200 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">

          {/* Education Item 1 */}
          <div className="relative">
            <span className="absolute -left-[41px] md:-left-[59px] top-2 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white shadow-md"></span>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Bachelor of Technology</h3>
                  <p className="text-indigo-600 font-medium">Computer Science and Engineering</p>
                  <a href="https://mnit.ac.in" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors mt-2 inline-block">
                    Malaviya National Institute of Technology (MNIT), Jaipur
                  </a>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold">2022 - 2026</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <span className="font-bold text-slate-700">CGPA:</span> <span className="text-slate-600">6.24/10</span>
              </div>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] md:-left-[59px] top-2 bg-indigo-400 w-6 h-6 rounded-full border-4 border-white shadow-md"></span>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Intermediate/+2</h3>
                  <p className="text-indigo-600 font-medium">Science (PCM)</p>
                  <p className="text-slate-500 text-sm mt-1">K.V.M. Public School, Sikar</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">2020 - 2021</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <span className="font-bold text-slate-700">Percentage:</span> <span className="text-slate-600">96.80%</span>
              </div>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className="relative">
            <span className="absolute -left-[41px] md:-left-[59px] top-2 bg-slate-300 w-6 h-6 rounded-full border-4 border-white shadow-md"></span>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Matriculation</h3>
                  <p className="text-slate-500 text-sm mt-1">R.E.D. Sr. Sec. Chhuchhakwas, Haryana</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">2018 - 2019</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <span className="font-bold text-slate-700">Percentage:</span> <span className="text-slate-600">88.20%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
