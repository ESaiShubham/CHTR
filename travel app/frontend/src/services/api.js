// Static API service - no backend required
import { 
  getFeaturedPlaces as getFeaturedPlacesData,
  getAllPlaces as getAllPlacesData,
  getPlaceById as getPlaceByIdData,
  searchPlaces as searchPlacesData,
  getPlacesByCategory as getPlacesByCategoryData
} from '../data/places';

// Simulate API delay for realistic experience
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Places API
export const placesAPI = {
  // Get all places with filters
  getAll: async (params = {}) => {
    await delay(300); // Simulate network delay
    let places = await getAllPlacesData();
    
    // Apply filters
    if (params.category && params.category !== 'all') {
      places = places.filter(place => place.category === params.category);
    }
    
    return { data: places };
  },

  // Get featured places
  getFeatured: async () => {
    await delay(200);
    const places = await getFeaturedPlacesData();
    return { data: places };
  },

  // Get place by ID
  getById: async (id) => {
    await delay(200);
    const place = await getPlaceByIdData(id);
    return { data: place };
  },

  // Search places
  search: async (query, limit = 10) => {
    await delay(300);
    const places = await searchPlacesData(query);
    return { data: places.slice(0, limit) };
  },

  // Get places by type
  getByType: async (type, params = {}) => {
    await delay(300);
    const places = await getPlacesByCategoryData(type);
    return { data: places };
  },

  // Get all place types
  getTypes: async () => {
    await delay(100);
    return { 
      data: ['waterfall', 'wildlife', 'temple', 'hill_station', 'heritage'] 
    };
  },

  // Get all cities
  getCities: async () => {
    await delay(100);
    return { 
      data: ['Raipur', 'Bastar', 'Bilaspur', 'Surguja', 'Koriya', 'Mahasamund'] 
    };
  },

  // Get all districts
  getDistricts: async () => {
    await delay(100);
    return { 
      data: ['Raipur District', 'Bastar District', 'Bilaspur District', 'Surguja District', 'Koriya District', 'Mahasamund District'] 
    };
  }
};

// Reviews API (simulated)
export const reviewsAPI = {
  // Get reviews for a place
  getByPlace: async (placeId) => {
    await delay(200);
    // Simulated reviews data
    const reviews = [
      {
        _id: '1',
        placeId,
        userName: 'Traveler123',
        rating: 5,
        comment: 'Absolutely breathtaking! A must-visit destination.',
        date: '2024-01-15'
      },
      {
        _id: '2',
        placeId,
        userName: 'NatureLover',
        rating: 4,
        comment: 'Beautiful place with amazing natural beauty.',
        date: '2024-01-10'
      }
    ];
    return { data: reviews };
  },

  // Add a new review
  create: async (reviewData) => {
    await delay(500);
    // Simulate successful review creation
    return { 
      data: { 
        ...reviewData, 
        _id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      } 
    };
  }
};

// Contact API (simulated)
export const contactAPI = {
  // Submit contact form
  submit: async (formData) => {
    await delay(1000); // Simulate processing time
    // Simulate successful submission
    return { 
      data: { 
        message: 'Thank you for your message! We will get back to you soon.',
        success: true 
      } 
    };
  }
};

// Convenience functions
export const getFeaturedPlaces = async () => {
  try {
    const response = await placesAPI.getFeatured();
    return response.data || [];
  } catch (error) {
    console.error('Error fetching featured places:', error);
    return [];
  }
};

export const searchPlaces = async (query) => {
  try {
    const response = await placesAPI.search(query);
    return response.data || [];
  } catch (error) {
    console.error('Error searching places:', error);
    return [];
  }
};

export const getPlaceById = async (id) => {
  try {
    const response = await placesAPI.getById(id);
    return response.data;
  } catch (error) {
    console.error('Error fetching place:', error);
    return null;
  }
};

export const getPlacesWithFilters = async (filters = {}) => {
  try {
    const response = await placesAPI.getAll(filters);
    return {
      places: response.data || [],
      pagination: {
        total: response.data?.length || 0,
        page: 1,
        limit: 12
      }
    };
  } catch (error) {
    console.error('Error fetching places with filters:', error);
    return { places: [], pagination: {} };
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await contactAPI.submit(formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const getReviewsByPlace = async (placeId) => {
  try {
    const response = await reviewsAPI.getByPlace(placeId);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

export const submitReview = async (reviewData) => {
  try {
    const response = await reviewsAPI.create(reviewData);
    return response.data;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
}; 