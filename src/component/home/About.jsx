import Image from "next/image";

export default function HVACSection() {
  return (
    <section className="w-full py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
            Trusted HVAC Solutions <br />
            Backed by Expertise <br />
            and Innovation
          </h2>
          <hr className="w-12 border-b-2 border-blue-800 my-4" />
          <p className="text-gray-900 text-4xl sm:text-lg font-medium leading-relaxed">
            Expertise-driven HVAC solutions designed for industrial and commercial spaces. With
            over 18 years of experience, Genex delivers seamless installation, trusted brands,
            and reliable maintenance support.
          </p>
          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Leading HVAC dealer in India
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Award Winning Customer Support
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              India&apos;s Top Distributor for LG and more Brands.
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="relative w-full h-96 md:h-[500px]">
          <div className="absolute top-0 left-10 w-4/5 h-[220px] sm:h-[250px] md:h-[300px] shadow-xl rounded overflow-hidden">
            <Image
              src="/Office2.jpg"
              alt="Office 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-4/5 h-[220px] sm:h-[250px] md:h-[300px] shadow-xl rounded overflow-hidden">
            <Image
              src="/Office1.jpg"
              alt="Office 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
