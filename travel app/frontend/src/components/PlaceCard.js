import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaStar, 
  FaClock, 
  FaMoneyBillWave,
  FaWater,
  FaMountain,
  FaTree,
  FaPrayingHands,
  FaLandmark
} from 'react-icons/fa';

const PlaceCard = ({ place }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'waterfall': return FaWater;
      case 'hill_station': return FaMountain;
      case 'wildlife': return FaTree;
      case 'temple': return FaPrayingHands;
      case 'heritage': return FaLandmark;
      default: return FaMapMarkerAlt;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'waterfall': return 'text-blue-500';
      case 'hill_station': return 'text-purple-500';
      case 'wildlife': return 'text-green-500';
      case 'temple': return 'text-orange-500';
      case 'heritage': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'waterfall': return 'category-badge category-waterfall';
      case 'hill_station': return 'category-badge category-hill_station';
      case 'wildlife': return 'category-badge category-wildlife';
      case 'temple': return 'category-badge category-temple';
      case 'heritage': return 'category-badge category-heritage';
      default: return 'category-badge bg-gray-100 text-gray-800';
    }
  };

  const CategoryIcon = getCategoryIcon(place.category);
  const categoryColor = getCategoryColor(place.category);
  const categoryBadgeClass = getCategoryBadgeClass(place.category);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="place-card group"
    >
      <Link to={`/places/${place._id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <motion.img
            variants={imageVariants}
            src={place.image}
            alt={place.name}
            className="place-card-image w-full h-48 object-cover"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="place-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={categoryBadgeClass}>
              <CategoryIcon className="w-3 h-3 mr-1" />
              {place.category.replace('_', ' ').charAt(0).toUpperCase() + place.category.replace('_', ' ').slice(1)}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-semibold text-gray-800">{place.rating}</span>
          </div>

          {/* Quick Info */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <FaClock className="mr-1" />
                  <span>{place.bestTime}</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-1" />
                  <span>{place.entryFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          {/* Title and Location */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
              {place.name}
            </h3>
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-primary-500 mr-2" />
              <span className="text-sm">{place.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {place.description}
          </p>

          {/* Features */}
          {place.features && place.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {place.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
                  >
                    {feature}
                  </span>
                ))}
                {place.features.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    +{place.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Rating and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(place.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {place.rating}/5
              </span>
            </div>
            
            <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-300">
              Learn More →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlaceCard; 