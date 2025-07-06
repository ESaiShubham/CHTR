import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkedAlt, 
  FaCompass, 
  FaStar, 
  FaArrowRight,
  FaWater,
  FaMountain,
  FaTree,
  FaPrayingHands,
  FaLandmark,
  FaPlay,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';
import PlaceCard from '../components/PlaceCard';
import { getPlaces } from '../services/api';

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getPlaces();
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching places:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const featuredPlaces = places.slice(0, 6);
  const categories = [
    { name: 'Waterfalls', icon: FaWater, count: places.filter(p => p.category === 'waterfall').length, color: 'blue' },
    { name: 'Hill Stations', icon: FaMountain, count: places.filter(p => p.category === 'hill_station').length, color: 'purple' },
    { name: 'Wildlife', icon: FaTree, count: places.filter(p => p.category === 'wildlife').length, color: 'green' },
    { name: 'Temples', icon: FaPrayingHands, count: places.filter(p => p.category === 'temple').length, color: 'orange' },
    { name: 'Heritage', icon: FaLandmark, count: places.filter(p => p.category === 'heritage').length, color: 'red' },
  ];

  const stats = [
    { number: '50+', label: 'Destinations' },
    { number: '15+', label: 'Districts' },
    { number: '4.8', label: 'Average Rating' },
    { number: '1000+', label: 'Happy Travelers' },
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-16 h-16 bg-lavender-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary-700 mb-8 shadow-soft"
            >
              <FaMapMarkedAlt className="mr-2" />
              Discover the Heart of Incredible India
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Explore{' '}
              <span className="text-gradient">Chhattisgarh</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gray-700">
                Like Never Before
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              From cascading waterfalls to ancient temples, from wildlife sanctuaries to hill stations - 
              discover the hidden gems of India's heart that will leave you spellbound.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link to="/places" className="btn-primary">
                <FaCompass className="mr-2" />
                Explore Destinations
              </Link>
              <button className="btn-outline">
                <FaPlay className="mr-2" />
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From natural wonders to cultural heritage, find your perfect adventure in Chhattisgarh
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/places?category=${category.name.toLowerCase().replace(' ', '_')}`}>
                    <div className="bg-gradient-secondary rounded-2xl p-6 text-center group-hover:shadow-medium transition-all duration-300">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-${category.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 text-${category.color}-600`} />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count} destinations</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked destinations that showcase the best of Chhattisgarh's natural and cultural beauty
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/places" className="btn-primary">
              View All Destinations
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Chhattisgarh */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Chhattisgarh?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of adventure, culture, and natural beauty
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Rich Cultural Heritage",
                description: "Discover ancient temples, tribal culture, and traditional art forms that have been preserved for centuries.",
                icon: "🏛️"
              },
              {
                title: "Natural Wonders",
                description: "From cascading waterfalls to dense forests, experience nature's beauty in its purest form.",
                icon: "🌿"
              },
              {
                title: "Adventure Activities",
                description: "Trek through hills, explore caves, and enjoy wildlife safaris for an unforgettable adventure.",
                icon: "🏔️"
              },
              {
                title: "Authentic Cuisine",
                description: "Savor the unique flavors of Chhattisgarh's traditional dishes and local delicacies.",
                icon: "🍽️"
              },
              {
                title: "Warm Hospitality",
                description: "Experience the warmth and hospitality of the local people who welcome visitors with open hearts.",
                icon: "🤝"
              },
              {
                title: "Affordable Travel",
                description: "Enjoy premium travel experiences without breaking the bank in this budget-friendly destination.",
                icon: "💰"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-secondary rounded-2xl p-8 text-center group hover:shadow-medium transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Chhattisgarh?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your journey today and discover the hidden treasures of India's heart
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/places" className="btn-white">
                <FaCompass className="mr-2" />
                Start Exploring
              </Link>
              <a href="mailto:mainsaihoon@gmail.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                <FaEnvelope className="mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 