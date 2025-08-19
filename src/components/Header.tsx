import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">John Doe</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-pink-500 hover:text-pink-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors"
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-pink-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-pink-500 hover:text-pink-600 font-medium transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-pink-500 font-medium transition-colors text-left">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors text-left w-fit"
              >
                Hire Me
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;