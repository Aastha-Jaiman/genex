import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <p className="uppercase text-sm font-semibold text-gray-500">Contact Information</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mt-2">Let's connect</h2>
        </div>

        {/* Center Section */}
        <div className="md:col-span-2 space-y-4">
          <p className="text-gray-600">
            Your trusted partner for top-notch HVAC solutions. We specialize in sales,
            installation, and after-sales support for premium HVAC systems. With products from
            20+ leading brands and a dedicated team of experts, we ensure reliable, efficient,
            and customized solutions for your cooling needs. Contact us today to experience
            the best in HVAC sales and service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            {/* Reach us via */}
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Reach us via</h4>
              <p className="flex items-center gap-2 text-gray-700">
                <FaPhone /> +91 91454 94029
              </p>
              <p className="flex items-center gap-2 text-gray-700 mt-1">
                <FaEnvelope /> connect@genexgroup.in
              </p>
              <div className="flex gap-3 mt-3 text-blue-800">
                <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
                <FaFacebook className="hover:text-blue-800 cursor-pointer" />
                <FaInstagram className="hover:text-blue-800 cursor-pointer" />
              </div>
            </div>

            {/* Business Info */}
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Business info</h4>
              <p className="text-gray-700">
                Location: Shree Dwaraka Society, Om Dwaraka Building, Flat No 5, 3rd Floor, 
                University Rd, Shivajinagar, Pune - 411007
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
