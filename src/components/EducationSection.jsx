import React from 'react';

const EducationSection = ({ personalInfo }) => (
  <section id="education" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#4f46e5]">🎓 Bachelor of Technology</h3>
                <p className="text-[#7c3aed] font-semibold">Computer Science and Engineering</p>
                <p className="text-gray-700">
                  <a href="https://mnit.ac.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#7c3aed]">Malaviya National Institute of Technology (MNIT), Jaipur</a>
                </p>
              </div>
              <span className="text-sm text-gray-500 md:text-right">2022 - 2026</span>
            </div>
            <p className="text-gray-700"><strong>CGPA:</strong> 6.24/10</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#4f46e5]">Intermediate/+2</h3>
                <p className="text-[#7c3aed] font-semibold">K.V.M. Public School, Sikar</p>
                <p className="text-gray-700">Rajasthan, India</p>
              </div>
              <span className="text-sm text-gray-500 md:text-right">2020 - 2021</span>
            </div>
            <p className="text-gray-700"><strong>PERCENTAGE:</strong> 96.80%</p>
          </div>
          <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#e0e7ff]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#4f46e5]">Matriculation</h3>
                <p className="text-[#7c3aed] font-semibold">R.E.D. Sr. Sec. Chhuchhakwas,Haryana</p>
                <p className="text-gray-700">Haryana, India</p>
              </div>
              <span className="text-sm text-gray-500 md:text-right">2018 - 2019</span>
            </div>
            <p className="text-gray-700"><strong>PERCENTAGE:</strong> 88.20%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
