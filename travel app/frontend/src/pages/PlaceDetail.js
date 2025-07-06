import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaStar, 
  FaClock, 
  FaMoneyBillWave,
  FaArrowLeft,
  FaWater,
  FaMountain,
  FaTree,
  FaPrayingHands
} from 'react-icons/fa';
import { getPlaceById } from '../services/api';

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlace();
  }, [id]);

  const fetchPlace = async () => {
    setLoading(true);
    try {
      const data = await getPlaceById(id);
      setPlace(data);
    } catch (error) {
      console.error('Error fetching place:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'waterfall': return FaWater;
      case 'hill_station': return FaMountain;
      case 'wildlife': return FaTree;
      case 'temple': return FaPrayingHands;
      default: return FaMapMarkerAlt;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'waterfall': return 'text-blue-500';
      case 'hill_station': return 'text-purple-500';
      case 'wildlife': return 'text-green-500';
      case 'temple': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Destination not found
          </h3>
          <Link to="/places" className="btn-primary">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const CategoryIcon = getCategoryIcon(place.category);
  const categoryColor = getCategoryColor(place.category);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/places" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <FaArrowLeft className="mr-2" />
              Back to Destinations
            </Link>
          </motion.div>

          {/* Place Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-large ${categoryColor}`}>
                <CategoryIcon />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              {place.name}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {place.location}
            </p>
            
            {/* Rating */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(place.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {place.rating} / 5
              </span>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <FaClock className="mr-2" />
                Best Time: {place.bestTime}
              </div>
              <div className="flex items-center">
                <FaMoneyBillWave className="mr-2" />
                Entry: {place.entryFee}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    About {place.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {place.description}
                  </p>
                </div>

                {/* Features */}
                {place.features && place.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What to Expect
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {place.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Location
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{place.location}</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Coordinates: {place.coordinates?.lat}, {place.coordinates?.lng}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Quick Info Card */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium capitalize">{place.category.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium">{place.rating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Time:</span>
                      <span className="font-medium">{place.bestTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Entry Fee:</span>
                      <span className="font-medium">{place.entryFee}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-primary rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4">
                    Ready to Visit?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Plan your trip to {place.name} and experience the beauty of Chhattisgarh.
                  </p>
                  <Link to="/contact" className="btn-white w-full text-center">
                    Get Travel Tips
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceDetail; 