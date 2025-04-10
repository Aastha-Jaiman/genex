'use client';
import React, { useState } from 'react';
import { sendContactMail } from '@/services/backend';

export default function HVACForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactMail(formData);
      alert("Message sent successfully!");
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      alert("Failed to send message!");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-20" id='Contact'>
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-800 mb-4">
          Custom HVAC Projects, Professional Results
        </h2>
        <p className="text-gray-700 text-base md:text-3xl">
          Ready to transform your space with cutting-edge HVAC systems? Fill out the form to get a free consultation or a personalized quote. Our experts are here to ensure comfort, efficiency, and reliability for your home, office, or business.
        </p>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 rounded-xl shadow-2xl shadow-gray-800/40 bg-gray-100 p-6 md:p-10">
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
