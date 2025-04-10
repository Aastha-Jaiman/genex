import Image from "next/image";

const productData = [
  {
    title: "VRF Air Conditioning System",
    description:
      "Efficient and scalable, the VRF system offers advanced climate control for large spaces, combining cutting-edge technology with sleek, quiet operation for unmatched comfort.",
    image: "/VRFAir.png", // Replace with your actual image path
  },
  {
    title: "Multi i HVAC System",
    description:
      "Multi-zone cooling solution with a modern aesthetic, ensuring energy-efficient, quiet operation and precise temperature control for diverse commercial applications.",
    image: "/Multi-I-Cooling.png", // Replace with your actual image path
  },
  {
    title: "Ductable Air Conditioner",
    description:
      "Compact and versatile ductable AC delivers consistent airflow, offering an ideal cooling solution for large industrial and commercial spaces with easy installation.",
    image: "/Ductable.png", // Replace with your actual image path
  },
  {
    title: "One-Way Cassette AC",
    description:
      "Sleek one-way cassette AC ensures directional airflow with space-saving installation, combining modern design and efficient performance for any environment.",
    image: "/Ac.png", // Replace with your actual image path
  },
  {
    title: "Four-Way Cassette AC",
    description:
      "Advanced four-way cassette AC offers 360-degree airflow, energy efficiency, and an elegant design, making it ideal for modern commercial and residential spaces.",
    image: "/4Ac.png", // Replace with your actual image path
  },
  {
    title: "Round Cassette AC",
    description:
      "Stylish round cassette AC combines a unique circular design with optimized airflow, providing high-end cooling solutions for premium spaces with quiet operation.",
    image: "/RoundAc.png", // Replace with your actual image path
  },
  {
    title: "Low Static Ductable AC",
    description:
      "Low static ductable AC is a compact, energy-efficient solution for consistent, quiet cooling tailored for small to mid-sized areas with versatile installation options.",
    image: "/LowAc.png", // Replace with your actual image path
  },
  {
    title: "Tower Air Conditioner",
    description:
      "Modern tower AC unit blends vertical design and high-capacity cooling, offering powerful performance and an elegant appearance for versatile applications.",
    image: "/TowerAc.png", // Replace with your actual image path
  },
];

export default function ProductTypes() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {productData.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Text Section - Always on left for desktop */}
              <div className="order-2 md:order-1 pr-0 md:pr-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Image Section - Always on right for desktop */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-xs border border-gray-200 p-2 rounded">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}