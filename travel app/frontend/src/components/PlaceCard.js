import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaWater, FaTree, FaPrayingHands, FaMountain } from 'react-icons/fa';

const PlaceCard = ({ place }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'waterfall':
        return <FaWater className="text-blue-500" />;
      case 'wildlife':
        return <FaTree className="text-green-500" />;
      case 'temple':
        return <FaPrayingHands className="text-orange-500" />;
      case 'hill_station':
        return <FaMountain className="text-purple-500" />;
      default:
        return <FaMapMarkerAlt className="text-gray-500" />;
    }
  };

  const getTypeLabel = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <FaStar className="star-empty" />
          <FaStar className="star absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }} />
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star-empty" />);
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="place-card group"
    >
      <Link to={`/places/${place._id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={place.primaryImage || place.images?.[0]?.url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
            alt={place.name}
            className="place-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800';
            }}
          />
          
          {/* Type Badge */}
          <div className="place-badge">
            <div className="flex items-center space-x-1">
              {getTypeIcon(place.type)}
              <span className="text-xs">{getTypeLabel(place.type)}</span>
            </div>
          </div>

          {/* Featured Badge */}
          {place.isFeatured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-900">
              View Details
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
              {place.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="star-rating">
              {renderStars(place.averageRating || 0)}
            </div>
            <span className="text-sm text-gray-600">
              {place.averageRating ? place.averageRating.toFixed(1) : '0.0'}
            </span>
            {place.totalReviews > 0 && (
              <span className="text-sm text-gray-500">
                ({place.totalReviews} reviews)
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {place.shortDescription || place.description?.substring(0, 120) + '...'}
          </p>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FaMapMarkerAlt className="mr-1" />
            <span>{place.location?.city}, {place.location?.district}</span>
          </div>

          {/* Features */}
          {place.features && place.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {place.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
              {place.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{place.features.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Entry Fee */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Entry: {place.entryFee || 'Free'}
            </span>
            <span className="text-sm text-primary-600 font-medium">
              Learn More →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlaceCard; 