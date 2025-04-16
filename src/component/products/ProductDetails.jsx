// import Image from "next/image";

const productData = [
  {
    title: "VRF Air Conditioning System",
    description:
      "Efficient and scalable, the VRF system offers advanced climate control for large spaces, combining cutting-edge technology with sleek, quiet operation for unmatched comfort.",
    image: "/Genex/WEBSITE AC PHOTOS/VRF LG.jpg",
  },
  {
    title: "Multi i HVAC System",
    description:
      "Multi-zone cooling solution with a modern aesthetic, ensuring energy-efficient, quiet operation and precise temperature control for diverse commercial applications.",
    image: "/Genex/WEBSITE AC PHOTOS/LG multi i.jpg",
  },
  {
    title: "Ductable Air Conditioner",
    description:
      "Compact and versatile ductable AC delivers consistent airflow, offering an ideal cooling solution for large industrial and commercial spaces with easy installation.",
    image: "/Genex/WEBSITE AC PHOTOS/High static ductable ac.png",
  },
  {
    title: "One-Way Cassette AC",
    description:
      "Sleek one-way cassette AC ensures directional airflow with space-saving installation, combining modern design and efficient performance for any environment.",
    image: "/Genex/WEBSITE AC PHOTOS/One way cassette.jpg",
  },
  {
    title: "Four-Way Cassette AC",
    description:
      "Advanced four-way cassette AC offers 360-degree airflow, energy efficiency, and an elegant design, making it ideal for modern commercial and residential spaces.",
    image: "/Genex/WEBSITE AC PHOTOS/Four way cassette ac.jpg",
  },
  {
    title: "Round Cassette AC",
    description:
      "Stylish round cassette AC combines a unique circular design with optimized airflow, providing high-end cooling solutions for premium spaces with quiet operation.",
    image: "/Genex/WEBSITE AC PHOTOS/Round Cassette ac.webp",
  },
  {
    title: "Low Static Ductable AC",
    description:
      "Low static ductable AC is a compact, energy-efficient solution for consistent, quiet cooling tailored for small to mid-sized areas with versatile installation options.",
    image: "/Genex/WEBSITE AC PHOTOS/Low static ductable ac.png",
  },
  {
    title: "Tower Air Conditioner",
    description:
      "Modern tower AC unit blends vertical design and high-capacity cooling, offering powerful performance and an elegant appearance for versatile applications.",
    image: "/Genex/WEBSITE AC PHOTOS/Tower AC.jpg",
  },
  {
    title: "Split Air Conditioner",
    description:
      "Sophisticated split AC features a sleek wall-mounted unit and durable outdoor compressor, ensuring reliable cooling, quiet operation, and energy-efficient performance.",
    image: "/Genex/WEBSITE AC PHOTOS/Spilt ac.jpg",
  },
];

export default function ProductTypes() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-24">
          {productData.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Text Section */}
              <div className="order-2 md:order-1 pr-0 md:pr-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r bg-blue-500 mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Image Section - Modern Clean Design */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative group w-full max-w-md">
                  {/* Gradient Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-lg filter blur-xl group-hover:opacity-15 transition-opacity duration-300 -m-4"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-tr opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Product Image with Glass Effect Border */}
                    <div className="relative z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm p-8 border border-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-contain"
                      />
                    </div>
                    
                    {/* Subtle Accent Corner */}
                    <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl  opacity-80 rounded-tl-full -mr-8 -mb-8 filter blur-md`}></div>
                    
                    
                  </div>
                  
                  {/* Cool Air Indicator */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <div className="flex flex-col space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-6 bg-gradient-to-b rounded-full opacity-70`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}