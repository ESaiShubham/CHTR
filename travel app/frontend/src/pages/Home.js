import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkedAlt, 
  FaStar, 
  FaArrowRight, 
  FaWater, 
  FaMountain, 
  FaTree, 
  FaPrayingHands,
  FaSearch,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';
import PlaceCard from '../components/PlaceCard';
import { getFeaturedPlaces } from '../services/api';

const Home = () => {
  const [featuredPlaces, setFeaturedPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPlaces = async () => {
      try {
        const data = await getFeaturedPlaces();
        setFeaturedPlaces(data);
      } catch (error) {
        console.error('Error fetching featured places:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPlaces();
  }, []);

  const categories = [
    { name: 'Waterfalls', icon: FaWater, color: 'text-blue-500', count: 5 },
    { name: 'Wildlife', icon: FaTree, color: 'text-green-500', count: 8 },
    { name: 'Temples', icon: FaPrayingHands, color: 'text-orange-500', count: 12 },
    { name: 'Hill Stations', icon: FaMountain, color: 'text-purple-500', count: 3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-lavender-500/20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-large">
                <FaMapMarkedAlt />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              Discover the Hidden Gems of{' '}
              <span className="text-gradient">Chhattisgarh</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From majestic waterfalls to ancient temples, wildlife sanctuaries to heritage sites. 
              Your perfect travel companion for exploring the heart of India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/places" className="btn-primary text-lg px-8 py-3">
                Explore Destinations
                <FaArrowRight className="ml-2 inline" />
              </Link>
              <Link to="/about" className="btn-outline text-lg px-8 py-3">
                Learn More
              </Link>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-2xl mx-auto"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className={`text-3xl mb-2 ${category.color}`}>
                    <category.icon />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{category.count}+</div>
                  <div className="text-sm text-gray-600">{category.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Places Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the most popular and breathtaking destinations that Chhattisgarh has to offer
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredPlaces.map((place, index) => (
                <motion.div key={place._id} variants={itemVariants}>
                  <PlaceCard place={place} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/places" className="btn-primary text-lg px-8 py-3">
              View All Destinations
              <FaArrowRight className="ml-2 inline" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose Chhattisgarh Travel Explorer?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted companion for discovering the authentic beauty of Chhattisgarh
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Comprehensive Guide',
                description: 'Detailed information about every major tourist destination in Chhattisgarh',
                icon: FaMapMarkedAlt,
                color: 'text-primary-600'
              },
              {
                title: 'Authentic Reviews',
                description: 'Real experiences from travelers who have visited these destinations',
                icon: FaStar,
                color: 'text-yellow-500'
              },
              {
                title: 'Easy Planning',
                description: 'All the information you need to plan your perfect trip',
                icon: FaSearch,
                color: 'text-green-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-soft text-center hover:shadow-medium transition-shadow duration-300"
              >
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get in touch with us for personalized travel recommendations and support
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Contact Us
              </Link>
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com/thesaishubham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                >
                  <FaInstagram size={20} />
                  <span>@thesaishubham</span>
                </a>
                <a
                  href="mailto:mainsaihoon@gmail.com"
                  className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                >
                  <FaEnvelope size={20} />
                  <span>mainsaihoon@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 