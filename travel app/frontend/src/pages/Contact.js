import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { submitContactForm } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mainsaihoon@gmail.com',
      link: 'mailto:mainsaihoon@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      value: '@thesaishubham',
      link: 'https://instagram.com/thesaishubham',
      color: 'text-pink-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Chhattisgarh, India',
      link: null,
      color: 'text-green-500'
    }
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about Chhattisgarh tourism? Need travel recommendations? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:order-1"
            >
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <div>
                      <h3 className="text-green-800 font-medium">Message Sent!</h3>
                      <p className="text-green-700 text-sm">
                        Thank you for your message. We'll get back to you soon!
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                  >
                    <FaExclamationCircle className="text-red-500 text-xl" />
                    <div>
                      <h3 className="text-red-800 font-medium">Error</h3>
                      <p className="text-red-700 text-sm">
                        Something went wrong. Please try again later.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3 text-lg flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:order-2"
            >
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Contact Information
                  </h2>
                  
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className={`text-2xl ${info.color}`}>
                        <info.icon />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Response Time */}
                <div className="bg-gradient-primary text-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                  <p className="text-white/90">
                    We typically respond to all inquiries within 24 hours. 
                    For urgent matters, please reach out via Instagram.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        How can I plan my trip to Chhattisgarh?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Browse our destination guides, read reviews, and contact us for personalized recommendations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Do you provide tour guides?
                      </h4>
                      <p className="text-sm text-gray-600">
                        We can connect you with local guides and travel experts for your specific needs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        What's the best time to visit?
                      </h4>
                      <p className="text-sm text-gray-600">
                        October to March is generally the best time, but it varies by destination. Check individual place pages for details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Explore Chhattisgarh
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the diverse landscapes and rich culture of Chhattisgarh
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.5!2d81.8667!3d21.2787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c5c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sChhattisgarh%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chhattisgarh Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 