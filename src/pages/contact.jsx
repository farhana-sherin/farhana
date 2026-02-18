import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional field)
    if (formData.phone && !/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Updated handleSubmit with your actual Formspree endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create form data for Formspree
      const form = e.target;
      const formData = new FormData(form);
      
      // Submit to your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/xovgnykr", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-23">
      <div className="w-full max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Reach out for collaborations, inquiries, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Information Box */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <FaEnvelope className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Email</h3>
                  <a href="mailto:farhana23sherin9023@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                    farhana23sherin9023@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <FaPhone className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Phone</h3>
                  <a href="tel:+918590486713" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                    +91 8590486713
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <FaMapMarkerAlt className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Location</h3>
                  <p className="text-gray-400 text-sm">Malappuram, Kerala</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <h3 className="text-sm font-medium mb-3">Follow Me</h3>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/farhana-sherin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/farhana-sherin-14511a2b2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                
                <a 
                 href="https://wa.me/918590486713?text=Hello%20Farhana,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you?"
 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm bg-black/50 border rounded-lg focus:ring-1 focus:ring-white focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500 ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Your name"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm bg-black/50 border rounded-lg focus:ring-1 focus:ring-white focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500 ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Your email"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm bg-black/50 border rounded-lg focus:ring-1 focus:ring-white focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500 ${
                    errors.phone ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Your phone (optional)"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 text-sm bg-black/50 border rounded-lg focus:ring-1 focus:ring-white focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Your message"
                  required
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-sm rounded-lg font-medium transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 rounded-lg bg-green-900/20 border border-green-500/30 text-green-400 text-center text-sm">
                  Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 text-center text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};