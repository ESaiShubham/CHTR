import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkedAlt, 
  FaHeart, 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaGlobe,
  FaInstagram,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaMapMarkedAlt,
      title: 'Comprehensive Guide',
      description: 'Detailed information about every major tourist destination in Chhattisgarh',
      color: 'text-primary-600'
    },
    {
      icon: FaHeart,
      title: 'Authentic Reviews',
      description: 'Real experiences from travelers who have visited these destinations',
      color: 'text-red-500'
    },
    {
      icon: FaCode,
      title: 'Modern Technology',
      description: 'Built with the latest web technologies for the best user experience',
      color: 'text-blue-500'
    },
    {
      icon: FaPalette,
      title: 'Beautiful Design',
      description: 'Clean, modern interface with stunning visuals and smooth animations',
      color: 'text-purple-500'
    },
    {
      icon: FaMobile,
      title: 'Mobile Friendly',
      description: 'Fully responsive design that works perfectly on all devices',
      color: 'text-green-500'
    },
    {
      icon: FaGlobe,
      title: 'Always Accessible',
      description: 'Available 24/7 to help you plan your perfect trip',
      color: 'text-orange-500'
    }
  ];

  const highlights = [
    'Chitrakote Falls - The Niagara of India',
    'Tirathgarh Falls - Multi-tiered beauty',
    'Barnawapara Wildlife Sanctuary - Nature\'s paradise',
    'Indravati National Park - Tiger reserve',
    'Bhoramdeo Temple - Khajuraho of Chhattisgarh',
    'Kanger Ghati National Park - Cave exploration',
    'Sirpur Archaeological Site - Ancient ruins',
    'Rajim Sacred Confluence - Spiritual center',
    'Guru Ghasidas National Park - Biodiversity hotspot',
    'Achanakmar Wildlife Sanctuary - Wildlife haven'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900">
              About Chhattisgarh Travel Explorer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted companion for discovering the hidden gems and authentic beauty of Chhattisgarh, 
              the heart of incredible India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To showcase the incredible diversity and beauty of Chhattisgarh to the world. 
                We believe that every traveler deserves authentic, comprehensive, and up-to-date 
                information about the destinations they want to explore.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From the majestic waterfalls of Bastar to the ancient temples of central Chhattisgarh, 
                from the wildlife sanctuaries to the hill stations, we're here to help you discover 
                the real Chhattisgarh beyond the usual tourist trails.
              </p>
              <Link to="/places" className="btn-primary text-lg px-8 py-3">
                Explore Destinations
                <FaArrowRight className="ml-2 inline" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-2xl font-semibold mb-4">
                  Discover Hidden Gems
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Chhattisgarh is home to some of India's most beautiful and unexplored destinations. 
                  Our platform brings these hidden treasures to light, making them accessible to 
                  travelers from around the world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technology, design, and local expertise to create the ultimate travel companion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Chhattisgarh Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Some of the most amazing destinations you can discover through our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-display font-bold">
              Meet the Developer
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FaCode className="text-3xl" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">
                Sai Shubham
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                A passionate developer and travel enthusiast who believes in the power of technology 
                to connect people with amazing destinations. This platform was created with love for 
                Chhattisgarh and a desire to share its beauty with the world.
              </p>
              
              <div className="flex justify-center space-x-6">
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

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use the latest web technologies to ensure the best user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', description: 'Frontend Framework' },
              { name: 'Node.js', description: 'Backend Runtime' },
              { name: 'MongoDB', description: 'Database' },
              { name: 'Tailwind CSS', description: 'Styling Framework' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the incredible destinations of Chhattisgarh and create memories that will last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/places" className="btn-primary text-lg px-8 py-3">
                Explore Destinations
                <FaArrowRight className="ml-2 inline" />
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-3">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About; 