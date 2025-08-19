import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 mb-8 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <span className="text-xl font-bold">John Doe</span>
          </button>

          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-pink-500" />
            <span>by John Doe • © {currentYear} All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;