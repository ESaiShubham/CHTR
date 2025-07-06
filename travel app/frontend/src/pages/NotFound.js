import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft, FaMapMarkedAlt } from 'react-icons/fa';

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-secondary px-4">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-large">
                <FaMapMarkedAlt />
              </div>
            </div>

            {/* 404 Text */}
            <div>
              <h1 className="text-6xl sm:text-8xl font-display font-bold text-gradient mb-4">
                404
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-gray-600 text-lg">
                Oops! The page you're looking for doesn't exist. 
                It might have been moved or deleted.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary text-lg px-8 py-3">
                <FaHome className="mr-2 inline" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline text-lg px-8 py-3"
              >
                <FaArrowLeft className="mr-2 inline" />
                Go Back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Or explore these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/places" className="text-primary-600 hover:text-primary-700 font-medium">
                  All Destinations
                </Link>
                <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium">
                  About Us
                </Link>
                <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 