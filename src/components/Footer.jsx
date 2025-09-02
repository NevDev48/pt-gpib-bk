import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/pt.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="PT GPIB Logo" className="h-12 w-auto mr-4" />
              <h3 className="text-xl font-bold">PT GPIB Immanuel Bung Karno</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Membangun komunitas yang kuat dalam iman dan kasih, melayani dengan dedikasi 
              untuk kemuliaan Tuhan. Bergabunglah dengan kami dalam perjalanan spiritual yang penuh makna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#service" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Service Time
                </a>
              </li>
              <li>
                <a href="#event" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Event
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <AiOutlineEnvironment className="text-xl text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Jl. Bung Karno No. 1<br />
                  Kec. Mataram, Kota Mataram<br />
                  Nusa Tenggara Barat. 83127
                </p>
              </div>
              <div className="flex items-center">
                <AiOutlinePhone className="text-xl text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center">
                <AiOutlineMail className="text-xl text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">info@gpibimmanuel.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 PT GPIB Immanuel Bung Karno. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
