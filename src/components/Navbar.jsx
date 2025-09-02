import logo from "../assets/pt.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg p-2`}>
      <div className="container mx-2">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="PT GPIB" className="h-11 w-auto" />
            <p className="text-gray-800 font-bold text-xl">
              PT GPIB Immanuel Bung Karno
            </p>
          </div>
          
          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium">
              About Us
            </a>
            <a href="#event" className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium">
              Event
            </a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium">
              Contact Us
            </a>
          </div>

          {/* Right Side - Visit Us Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Visit Us Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-3xl transition-colors duration-200 font-medium">
              Visit Us
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-800 hover:text-yellow-500 focus:outline-none transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-300">
            <div className="flex flex-col space-y-3 pt-4">
              <a 
                href="#home" 
                className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#event" 
                className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Event
              </a>
              <a 
                href="#contact" 
                className="text-gray-800 hover:text-yellow-500 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
