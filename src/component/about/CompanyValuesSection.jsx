export default function CompanyValuesSection() {
    return (
      <section className="bg-[#1E1830] text-white py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          {/* Our Promise */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Promise</h3>
            <p className="text-sm text-gray-300">
              Our Company is dedicated to delivering quality services with precision and reliability, 
              all within allocated time and trustworthy environment.
            </p>
          </div>
  
          {/* Our Purpose */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Purpose</h3>
            <p className="text-sm text-gray-300">
              Our purpose is to set an inspiring example for HVAC dealers across India by fostering a 
              sense of respect, success and entrepreneurship. Along with this to create
            </p>
          </div>
  
          {/* Our Priority */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Priority</h3>
            <p className="text-sm text-gray-300">
              Every process is executed in a highly organised and disciplined manner, 
              consistently following established systems to drive efficiency and
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  