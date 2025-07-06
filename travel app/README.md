# Shutra 🌊

A beautiful, responsive frontend-only travel website showcasing the hidden gems of Chhattisgarh, India. Built with modern HTML, CSS, and JavaScript with a focus on user experience and performance.

## ✨ Features

### 🎨 Design & UI
- **Modern Airbnb-inspired design** with card-based layout
- **Light purple and white color scheme** (#E6E6FA, #D8BFD8)
- **Waterfall-themed logo** with animated icon
- **Fully responsive design** - works on all devices
- **Smooth animations** and hover effects
- **Dark mode support** (system preference)

### 🗺️ Content & Functionality
- **15+ tourist destinations** across 5 categories:
  - 🌊 Waterfalls (Chitrakote Falls, Tirathgarh Falls, Ghatarani Waterfalls)
  - 🏛️ Temples (Bhoramdeo Temple, Danteshwari Temple, Rajim, etc.)
  - 🐾 Wildlife (Kanger Valley National Park, Barnawapara Wildlife Sanctuary)
  - 🏛️ Heritage (Sirpur, Malhar Ruins, Purkhauti Muktangan)
  - ⛰️ Hill Stations (Mainpat - Mini Shimla)
- **Interactive filtering** by category
- **Google Maps integration** for each destination
- **Star ratings** and detailed descriptions
- **Contact form** with validation
- **Newsletter subscription**

### 🚀 Performance & UX
- **Lazy loading** for images
- **Smooth scrolling** navigation
- **Mobile-first** responsive design
- **Keyboard navigation** support
- **Accessibility features** (ARIA labels, focus management)
- **Performance optimized** with debounced scroll events
- **SEO optimized** with proper meta tags

### 📱 Responsive Features
- **Mobile hamburger menu**
- **Touch-friendly** interactions
- **Optimized layouts** for all screen sizes
- **Landscape orientation** support
- **High DPI display** support

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript** - No frameworks, pure performance
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family
- **Unsplash** - High-quality placeholder images

## 📁 Project Structure

```
shutra/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css           # Main stylesheet
│   └── responsive.css     # Responsive design rules
├── js/
│   └── main.js           # Main JavaScript functionality
└── README.md             # This file
```

## 🚀 Quick Start

### Option 1: Direct Browser Opening
1. Download or clone the project
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Option 2: Local Server (Recommended)
For the best experience, serve the files through a local server:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js:
```bash
# Install serve globally
npm install -g serve

# Serve the project
serve .
```

#### Using PHP:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 Key Features Explained

### Navigation
- **Sticky navbar** with blur effect
- **Smooth scrolling** to sections
- **Mobile hamburger menu** with animations
- **Active state** management

### Destinations
- **Dynamic rendering** from JavaScript data
- **Category filtering** with smooth transitions
- **Card hover effects** with image zoom
- **Google Maps integration** for each location

### Contact Form
- **Form validation** with user feedback
- **Success/error notifications**
- **Social media links** (Instagram, Email, WhatsApp)

### Animations
- **Intersection Observer** for scroll-triggered animations
- **CSS transitions** for smooth interactions
- **Loading animations** for better UX

## 🎨 Customization

### Colors
The color scheme is defined in CSS custom properties in `styles/main.css`:

```css
:root {
    --primary-purple: #E6E6FA;
    --secondary-purple: #D8BFD8;
    --accent-purple: #8A2BE2;
    /* ... more colors */
}
```

### Adding Destinations
Edit the `destinations` array in `js/main.js`:

```javascript
const destinations = [
    {
        id: 16,
        name: "New Destination",
        location: "City Name",
        description: "Description here...",
        category: "waterfalls", // or temples, wildlife, heritage, hill-stations
        rating: 5,
        image: "image-url-here",
        mapUrl: "https://maps.google.com/?q=Destination+Name",
        bookingUrl: null // or booking URL if available
    }
];
```

### Modifying Categories
Update the category cards in `index.html` and the filter buttons accordingly.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on every push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Traditional Hosting
Upload all files to your web server's public directory.

## 🔧 Development

### Adding New Features
1. **New Sections**: Add HTML structure and corresponding CSS
2. **New Functionality**: Extend the JavaScript in `main.js`
3. **New Styles**: Add to `main.css` or create new CSS files

### Performance Tips
- Optimize images before adding to the project
- Use WebP format when possible
- Minimize JavaScript bundle size
- Use CSS transforms for animations

## 📞 Contact Information

- **Instagram**: [@thesaishubham](https://instagram.com/thesaishubham)
- **Email**: mainsaihoon@gmail.com
- **Location**: Chhattisgarh, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Unsplash** for beautiful placeholder images
- **Font Awesome** for icons
- **Google Fonts** for typography
- **Chhattisgarh Tourism** for destination information

## 🐛 Known Issues

- None currently reported

## 🔄 Version History

- **v1.0.0** - Initial release with all core features
- Responsive design
- Interactive filtering
- Contact form
- Google Maps integration

---

**Made with ❤️ for Chhattisgarh**

Explore the hidden gems of central India with Shutra! 🏞️ 