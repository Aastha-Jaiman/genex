import React from 'react';

export default function HVACForm() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-20">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
          Custom HVAC Projects, Professional Results
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Ready to transform your space with cutting-edge HVAC systems? Fill out the form to get a free consultation or a personalized quote. Our experts are here to ensure comfort, efficiency, and reliability for your home, office, or business.
        </p>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-gray-100 rounded-xl shadow-md p-6 md:p-10">
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter your full name" />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Company name" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Phone number" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Email address" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Type your message here..."></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
