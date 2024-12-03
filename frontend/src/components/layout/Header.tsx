import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, ArrowUp } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">NoteChain</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className={`text-base font-medium border-none outline-none focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'
                    } hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden border-none outline-none focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <button
                className="px-4 py-2 bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-lg text-gray-800 rounded-lg hover:bg-indigo-700 hover:text-white transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-navy-900/95 backdrop-blur-lg md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center py-8 space-y-8">
          {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              className="text-white text-lg font-medium border-none outline-none focus:outline-none hover:text-blue-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg border-none outline-none focus:outline-none hover:bg-blue-700 transition-all duration-300 z-50 ${showBackToTop
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default Header;
