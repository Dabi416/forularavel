import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating exceptional web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full-stack developer specializing in Laravel and modern web technologies. 
              With over 5 years of experience, I've worked with startups and established companies to 
              create scalable, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends. When I'm not coding, you'll find me contributing to open-source projects, 
              learning new technologies, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Code className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">50+</p>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <Coffee className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">1000+</p>
                <p className="text-gray-600 text-sm">Cups of Coffee</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">∞</p>
                <p className="text-gray-600 text-sm">Passion for Code</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-6">What I Do</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Full-Stack Web Development</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Laravel & PHP Development</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">React & JavaScript Development</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">API Design & Integration</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Database Design & Optimization</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">DevOps & Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;