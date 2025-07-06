import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkedAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter,
  FaArrowUp,
  FaHeart,
  FaCompass,
  FaInfoCircle,
  FaPhone
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Destinations', path: '/places' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Waterfalls', path: '/places?category=waterfall' },
        { name: 'Hill Stations', path: '/places?category=hill_station' },
        { name: 'Wildlife', path: '/places?category=wildlife' },
        { name: 'Temples', path: '/places?category=temple' },
        { name: 'Heritage', path: '/places?category=heritage' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Travel Guide', path: '/guide' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/thesaishubham' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'mainsaihoon@gmail.com', url: 'mailto:mainsaihoon@gmail.com' },
    { icon: FaPhone, text: '+91 1234567890', url: 'tel:+911234567890' },
    { icon: FaMapMarkedAlt, text: 'Chhattisgarh, India', url: null },
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-lavender-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    <FaMapMarkedAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      Chhattisgarh
                    </h3>
                    <p className="text-sm text-gray-400 -mt-1">
                      Travel Explorer
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-6 leading-relaxed"
              >
                Discover the hidden gems of Chhattisgarh - from cascading waterfalls to ancient temples, 
                from wildlife sanctuaries to hill stations. Your perfect travel companion for exploring 
                the heart of India.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="w-4 h-4 text-primary-400" />
                      {contact.url ? (
                        <a
                          href={contact.url}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">{contact.text}</span>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="footer-section"
              >
                <h4 className="footer-title text-white font-semibold">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="footer-link text-sm hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">
                Stay Updated
              </h4>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Subscribe to our newsletter for the latest travel updates and destination guides.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-lavender-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm text-center md:text-left"
              >
                © {currentYear} Chhattisgarh Travel Explorer. All rights reserved.
                <span className="inline-flex items-center ml-2">
                  Made with <FaHeart className="w-3 h-3 text-red-500 mx-1" /> in India
                </span>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-primary-600 to-lavender-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
};

export default Footer; 