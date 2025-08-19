import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Laravel Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of enterprise-level web applications using Laravel and React. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Built scalable e-commerce platform serving 100k+ users",
        "Reduced application load time by 60% through optimization",
        "Led migration from legacy PHP to modern Laravel architecture"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Innovations",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using Laravel, Vue.js, and MySQL. Collaborated with designers and project managers.",
      achievements: [
        "Delivered 15+ successful projects on time and within budget",
        "Implemented automated testing reducing bugs by 40%",
        "Created reusable component library used across projects"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "Remote",
      period: "2019 - 2020",
      description: "Started my journey as a web developer, working on various projects and learning modern web development practices.",
      achievements: [
        "Contributed to 5+ open-source projects",
        "Built responsive websites with 95% client satisfaction",
        "Quickly mastered Laravel and modern JavaScript frameworks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-pink-500 to-purple-600"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-lg text-pink-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;