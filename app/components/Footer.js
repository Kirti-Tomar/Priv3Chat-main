import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Company Info & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Priv3Chat</h3>
            <p className="text-gray-400 text-sm">
              Priv3Chat is a secure and private messaging platform designed to keep your conversations encrypted and confidential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-all">🏠 Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-all">🚀 Features</a></li>
              <li><a href="#plans" className="hover:text-blue-400 transition-all">💰 Plans</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-all">📞 Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-400" /> 3/3, Om Enclave Part -2, Haryana, India
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" /> +91 8368474782
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" /> ubosachin@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and security tips delivered to your inbox.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-black"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-all">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Social Media & Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Media Links */}
          <div className="flex space-x-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all hover:scale-110">
              <FaGithub />
            </a>
          </div>

          {/* Copyright Section */}
          <p className="mt-6 md:mt-0 text-gray-400 text-sm tracking-wider">
            &copy; {new Date().getFullYear()} <span className="font-bold text-white">Priv3Chat</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
