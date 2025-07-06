// ===== MAIN JAVASCRIPT FILE =====

// Destinations Data
const destinations = [
    {
        id: 1,
        name: "Chitrakote Falls",
        location: "Jagdalpur",
        description: "Known as the 'Niagara of India', this horseshoe-shaped waterfall is one of the largest in India.",
        category: "waterfalls",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Chitrakote+Falls+Jagdalpur",
        bookingUrl: null
    },
    {
        id: 2,
        name: "Tirathgarh Falls",
        location: "Bastar",
        description: "A multi-tiered waterfall cascading from a height of 100 feet, surrounded by lush greenery.",
        category: "waterfalls",
        rating: 5,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Tirathgarh+Falls+Bastar",
        bookingUrl: null
    },
    {
        id: 3,
        name: "Kanger Valley National Park",
        location: "Bastar",
        description: "Home to diverse wildlife including tigers, leopards, and various bird species.",
        category: "wildlife",
        rating: 4,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Kanger+Valley+National+Park",
        bookingUrl: null
    },
    {
        id: 4,
        name: "Bhoramdeo Temple",
        location: "Kawardha",
        description: "Ancient temple known as the 'Khajuraho of Chhattisgarh' with intricate carvings.",
        category: "temples",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Bhoramdeo+Temple+Kawardha",
        bookingUrl: null
    },
    {
        id: 5,
        name: "Mainpat",
        location: "Surguja",
        description: "Known as 'Mini Shimla of Chhattisgarh', this hill station offers scenic views and pleasant weather.",
        category: "hill-stations",
        rating: 4,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Mainpat+Surguja",
        bookingUrl: null
    },
    {
        id: 6,
        name: "Sirpur",
        location: "Mahasamund",
        description: "Ancient Buddhist site with archaeological ruins dating back to the 6th-8th centuries.",
        category: "heritage",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Sirpur+Mahasamund",
        bookingUrl: null
    },
    {
        id: 7,
        name: "Barnawapara Wildlife Sanctuary",
        location: "Raipur",
        description: "Home to various wildlife species including tigers, leopards, and migratory birds.",
        category: "wildlife",
        rating: 4,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Barnawapara+Wildlife+Sanctuary",
        bookingUrl: null
    },
    {
        id: 8,
        name: "Rajim",
        location: "Raipur",
        description: "Sacred confluence of rivers with ancient temples and religious significance.",
        category: "temples",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Rajim+Raipur",
        bookingUrl: null
    },
    {
        id: 9,
        name: "Ghatarani Waterfalls",
        location: "Bilaspur",
        description: "Beautiful waterfall surrounded by dense forests and scenic landscapes.",
        category: "waterfalls",
        rating: 4,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Ghatarani+Waterfalls+Bilaspur",
        bookingUrl: null
    },
    {
        id: 10,
        name: "Danteshwari Temple",
        location: "Dantewada",
        description: "One of the 52 Shakti Peethas, this ancient temple is a major pilgrimage site.",
        category: "temples",
        rating: 5,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Danteshwari+Temple+Dantewada",
        bookingUrl: null
    },
    {
        id: 11,
        name: "Achanakmar Wildlife Sanctuary",
        location: "Bilaspur",
        description: "Tiger reserve with diverse flora and fauna, perfect for wildlife enthusiasts.",
        category: "wildlife",
        rating: 4,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Achanakmar+Wildlife+Sanctuary",
        bookingUrl: null
    },
    {
        id: 12,
        name: "Dongargarh Temple",
        location: "Rajnandgaon",
        description: "Ancient temple complex on a hilltop with panoramic views of the surrounding area.",
        category: "temples",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Dongargarh+Temple+Rajnandgaon",
        bookingUrl: null
    },
    {
        id: 13,
        name: "Madku Dweep",
        location: "Bilaspur",
        description: "Island temple in the middle of a river with historical and religious significance.",
        category: "temples",
        rating: 3,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Madku+Dweep+Bilaspur",
        bookingUrl: null
    },
    {
        id: 14,
        name: "Malhar Ruins",
        location: "Bilaspur",
        description: "Ancient archaeological site with ruins of temples and historical monuments.",
        category: "heritage",
        rating: 3,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Malhar+Ruins+Bilaspur",
        bookingUrl: null
    },
    {
        id: 15,
        name: "Purkhauti Muktangan",
        location: "Raipur",
        description: "Museum showcasing the rich cultural heritage and tribal art of Chhattisgarh.",
        category: "heritage",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
        mapUrl: "https://maps.google.com/?q=Purkhauti+Muktangan+Raipur",
        bookingUrl: null
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const destinationsGrid = document.getElementById('destinations-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');
const scrollTopBtn = document.getElementById('scroll-top');
const categoryCards = document.querySelectorAll('.category-card');

// Current filter
let currentFilter = 'all';

// ===== NAVIGATION =====

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect - removed color change, keeping consistent appearance

// ===== DESTINATIONS =====

// Render destinations
function renderDestinations(filter = 'all') {
    const filteredDestinations = filter === 'all' 
        ? destinations 
        : destinations.filter(dest => dest.category === filter);
    
    destinationsGrid.innerHTML = '';
    
    if (filteredDestinations.length === 0) {
        destinationsGrid.innerHTML = `
            <div class="no-results">
                <h3>No destinations found</h3>
                <p>Try selecting a different category.</p>
            </div>
        `;
        return;
    }
    
    filteredDestinations.forEach((destination, index) => {
        const card = createDestinationCard(destination, index);
        destinationsGrid.appendChild(card);
    });
}

// Create destination card
function createDestinationCard(destination, index) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const stars = '★'.repeat(destination.rating) + '☆'.repeat(5 - destination.rating);
    
    card.innerHTML = `
        <div class="destination-image">
            <img src="${destination.image}" alt="${destination.name}" loading="lazy">
        </div>
        <div class="destination-content">
            <div class="destination-header">
                <div>
                    <h3 class="destination-title">${destination.name}</h3>
                    <p class="destination-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${destination.location}
                    </p>
                </div>
            </div>
            <p class="destination-description">${destination.description}</p>
            <div class="destination-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${destination.rating}/5</span>
            </div>
            <div class="destination-actions">
                <a href="${destination.mapUrl}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-map"></i>
                    View on Map
                </a>
                ${destination.bookingUrl ? `
                    <a href="${destination.bookingUrl}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-ticket-alt"></i>
                        Book Now
                    </a>
                ` : `
                    <button class="btn btn-primary" onclick="showBookingInfo('${destination.name}')">
                        <i class="fas fa-info-circle"></i>
                        More Info
                    </button>
                `}
            </div>
        </div>
    `;
    
    return card;
}

// Filter destinations
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filter = btn.getAttribute('data-filter');
        currentFilter = filter;
        
        // Render filtered destinations
        renderDestinations(filter);
    });
});

// Category card click handlers
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        
        // Update filter buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        const targetBtn = document.querySelector(`[data-filter="${category}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
        
        // Scroll to destinations section
        const destinationsSection = document.getElementById('destinations');
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
        
        // Render filtered destinations
        currentFilter = category;
        renderDestinations(category);
    });
});

// ===== CONTACT FORM =====

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// ===== SCROLL TO TOP =====

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== UTILITY FUNCTIONS =====

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#28a745';
            break;
        case 'error':
            notification.style.background = '#dc3545';
            break;
        default:
            notification.style.background = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Show booking info
function showBookingInfo(destinationName) {
    showNotification(`Booking information for ${destinationName} will be available soon!`, 'info');
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.category-card, .section-header, .feature-item');
    animateElements.forEach(el => observer.observe(el));
});

// ===== LAZY LOADING =====

// Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

// ===== INITIALIZATION =====

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Render initial destinations
    renderDestinations();
    
    // Set up lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // Add loading animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // Initialize newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                newsletterForm.reset();
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
});

// ===== KEYBOARD NAVIGATION =====

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Arrow keys for filter navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) {
            const btns = Array.from(filterBtns);
            const currentIndex = btns.indexOf(activeBtn);
            let newIndex;
            
            if (e.key === 'ArrowLeft') {
                newIndex = currentIndex > 0 ? currentIndex - 1 : btns.length - 1;
            } else {
                newIndex = currentIndex < btns.length - 1 ? currentIndex + 1 : 0;
            }
            
            btns[newIndex].click();
        }
    }
});

// ===== PERFORMANCE OPTIMIZATION =====

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler); 