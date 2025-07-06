import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkedAlt, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaFacebook, 
  FaTwitter,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gradient">
                  Chhattisgarh Travel
                </h3>
                <p className="text-xs text-gray-400 -mt-1">Explorer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the hidden gems of Chhattisgarh - from majestic waterfalls to ancient temples, 
              wildlife sanctuaries to heritage sites.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/thesaishubham"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link bg-primary-600 hover:bg-primary-700"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:mainsaihoon@gmail.com"
                className="social-link bg-primary-600 hover:bg-primary-700"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/places" className="footer-link">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/places?type=waterfall" className="footer-link">
                  Waterfalls
                </Link>
              </li>
              <li>
                <Link to="/places?type=wildlife" className="footer-link">
                  Wildlife Sanctuaries
                </Link>
              </li>
              <li>
                <Link to="/places?type=temple" className="footer-link">
                  Temples
                </Link>
              </li>
              <li>
                <Link to="/places?type=hill_station" className="footer-link">
                  Hill Stations
                </Link>
              </li>
              <li>
                <Link to="/places?type=heritage" className="footer-link">
                  Heritage Sites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400" />
                <a
                  href="mailto:mainsaihoon@gmail.com"
                  className="footer-link"
                >
                  mainsaioon@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaInstagram className="text-primary-400" />
                <a
                  href="https://instagram.com/thesaishubham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  @thesaishubham
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkedAlt className="text-primary-400" />
                <span className="text-gray-300">
                  Chhattisgarh, India
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Stay Updated</h5>
              <p className="text-xs text-gray-400 mb-3">
                Get the latest travel updates and destination guides.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg text-sm transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Chhattisgarh Travel Explorer. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm footer-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm footer-link">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-400">
            <p>
              Developed with ❤️ by{' '}
              <a
                href="https://instagram.com/thesaishubham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                Sai Shubham
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 