import Image from 'next/image';

export default function ImagesSection() {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
        {/* Top full-width image */}
        <div className="w-full">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/award1.png"
              alt="Business Transformation Award"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-700">
            Business Transformation Award, Hong Kong 2023,<br />
            received by Managing Director of MDLG Electronics
          </p>
        </div>

        {/* Bottom row with two images side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left image */}
          <div>
            <div className="relative w-full  h-[500px]">
              <Image
                src="/award2.png"
                alt="Paris 2024"
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
              />
            </div>
            <p className="mt-2 text-center text-sm text-gray-700">
              Paris 2024, with Managing Director of MDLG Electronics
            </p>
          </div>

          {/* Right image */}
          <div>
            <div className="relative w-full h-[500px]">
              <Image
                src="/award3.png"
                alt="Success Story"
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
              />
            </div>
            <p className="mt-2 text-center text-sm text-gray-700">
              Success Story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
