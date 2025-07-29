import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Gamepad2 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Impact', href: '#impact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-2 h-2 text-white" />
              </div>
            </div>
            <span className={`text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${
              isScrolled ? '' : 'text-white'
            }`}>
              Mathverse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-200/20">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium">
                Start Free Trial
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;