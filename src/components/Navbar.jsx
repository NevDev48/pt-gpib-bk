import logo from "../assets/pt.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current path is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg px-4 py-2`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-4">
            <img src={logo} alt="PT GPIB" className="h-8 md:h-11 w-auto" />
            <p className="text-gray-800 font-bold text-sm md:text-xl leading-tight">
              <span className="block md:hidden">PT GPIB</span>
              <span className="hidden md:block">PT GPIB Immanuel Bung Karno</span>
            </p>
          </Link>
          
          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              to="/" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-800 hover:text-yellow-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-800 hover:text-yellow-500'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/event" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/event') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-800 hover:text-yellow-500'
              }`}
            >
              Event
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-800 hover:text-yellow-500'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Side - Visit Us Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Visit Us Button - Hidden on mobile */}
            <Link 
              to="/contact"
              className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-3xl transition-colors duration-200 font-medium"
            >
              Visit Us
            </Link>
            
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
              <Link 
                to="/" 
                className={`py-2 transition-colors duration-200 font-medium ${
                  isActive('/') 
                    ? 'text-yellow-600 font-bold' 
                    : 'text-gray-800 hover:text-yellow-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`py-2 transition-colors duration-200 font-medium ${
                  isActive('/about') 
                    ? 'text-yellow-600 font-bold' 
                    : 'text-gray-800 hover:text-yellow-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/event" 
                className={`py-2 transition-colors duration-200 font-medium ${
                  isActive('/event') 
                    ? 'text-yellow-600 font-bold' 
                    : 'text-gray-800 hover:text-yellow-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Event
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 transition-colors duration-200 font-medium ${
                  isActive('/contact') 
                    ? 'text-yellow-600 font-bold' 
                    : 'text-gray-800 hover:text-yellow-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              {/* Visit Us Button in Mobile Menu */}
              <Link 
                to="/contact"
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-3xl transition-colors duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Visit Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
