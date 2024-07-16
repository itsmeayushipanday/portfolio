import React from "react";

const Education = () => {
  return (
    <div className="py-20 text-white" id="education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="heading">
          My <span className="text-purple">Education</span>
        </h1>

        {/* College Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">College:</h3>
          <div className="rounded-lg p-6">
            <p className="text-lg font-medium">
              Harcourt Butler Technical University
            </p>
            <p className="text-gray-300 mb-2">
              Bachelor of Technology in Information Technology
            </p>
            <p className="text-gray-300">CGPA: 8.7</p>
          </div>
        </div>

        {/* School Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">School:</h3>
          <div className="rounded-lg p-6">
            <p className="text-lg font-medium">
              Jugal Devi Saraswati Vidya Mandir
            </p>
            <p className="text-gray-300 mb-2">Intermediate in Science</p>
            <p className="text-gray-300 mb-2">Percentage: 95.2%</p>
            <p className="text-gray-300 mb-2">Matriculation in Science</p>
            <p className="text-gray-300">Percentage: 97.6%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
