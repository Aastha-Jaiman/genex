// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {/* Logo and Company Info */}
          <div className="max-w-xs">
            <div className="mb-4">
              <img
                src="/GenexLogo.png"
                alt="Genex Air Conditioning Experts"
                width={180}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Genex Cooling Systems is a trusted leader in air conditioning solutions, serving industrial, residential, and commercial clients since 2007. With expertise in installation, maintenance, and advanced cooling systems, we prioritize quality and customer satisfaction in every project.
            </p>
            <p className="text-xs text-gray-500">
              2023 Copyrights • Purple Pelican • All Rights Reserved.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            {/* Links Column */}
            <div>
              <h3 className="text-blue-800 font-semibold mb-3 text-lg">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-blue-800">Home</Link></li>
                <li><Link href="/contactus" className="text-gray-600 hover:text-blue-800">Contact Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-800">Services</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-blue-800">Terms</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-blue-800">Privacy</Link></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-blue-800 font-semibold mb-3 text-lg">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products/vrf-vrv" className="text-gray-600 hover:text-blue-800">VRF-VRV</Link></li>
                <li><Link href="/products/enterprise" className="text-gray-600 hover:text-blue-800">Enterprise</Link></li>
                <li><Link href="/products/foldawater" className="text-gray-600 hover:text-blue-800">Foldawater</Link></li>
                <li><Link href="/products/features" className="text-gray-600 hover:text-blue-800">Main Features</Link></li>
                <li><Link href="/products/mobile-app" className="text-gray-600 hover:text-blue-800">Mobile App</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-blue-800 font-semibold mb-3 text-lg">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-800 mt-1">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <address className="text-sm text-gray-600 not-italic">
                    Shree Dwarka Society, Om Dwarka Building, <br/>
                    Flat No.5, 3rd Floor, University Rd.,<br/>
                    Shivajinagar, Pune – 411007
                  </address>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-blue-800">
                    <FaEnvelope size={16} />
                  </div>
                  <a href="mailto:contact@genexgroup.in" className="text-sm text-gray-600 hover:text-blue-800">
                  connect@genexgroup.in
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-blue-800">
                    <FaPhone size={16} />
                  </div>
                  <a href="tel:+919142442028" className="text-sm text-gray-600 hover:text-blue-800">
                  +91 91454 94028
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 pt-2">
                  <a href="https://linkedin.com/company/genex" aria-label="LinkedIn" className="text-blue-800 hover:text-blue-900">
                    <FaLinkedinIn size={20} />
                  </a>
                  <a href="https://facebook.com/genexcooling" aria-label="Facebook" className="text-blue-800 hover:text-blue-900">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://instagram.com/genexcooling" aria-label="Instagram" className="text-blue-800 hover:text-blue-900">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;