import Image from 'next/image';

export default function AwardsSection() {
  return (
    <section className="py-16 px-4 md:px-10">
      <h2 className="text-2xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Awards and Recognition
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          '/Genex/Award photos/3.jpeg',
          '/Genex/Award photos/2.jpeg',
          '/Genex/Award photos/7.jpeg',
          '/Genex/Award photos/5.jpeg',
          '/Genex/Award photos/4.jpeg',
          '/Genex/Award photos/2.jpeg',
        ].map((src, index) => (
          <div key={index} className="w-full aspect-[4/3] relative">
            <Image
              src={src}
              alt={`Award ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="w-full overflow-hidden flex justify-center mt-10 relative">
        <img
          src="/Genex/Award photos/1.jpeg"
          alt="Award 7"
          className="object-cover w-[290px] h-[250px]"
        />
      </div>
    </section>
  );
}
