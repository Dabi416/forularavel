import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Exceptional web
              <br />
              experiences built with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                amazing
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                technologies
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I help create and develop modern web applications using Laravel, React, and cutting-edge technologies to bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Content - Illustration Placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">JD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">John Doe</h3>
                  <p className="text-gray-600">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="text-pink-500 hover:text-pink-600 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;