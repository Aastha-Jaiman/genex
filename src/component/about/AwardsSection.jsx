import Image from 'next/image';

export default function AwardsSection() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-800 mb-10">
        Awards and Recognition
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="w-full">
          <Image src="/awards/award1.png" alt="Award 1" width={500} height={500} className="shadow-md" />
        </div>
        <div className="w-full">
          <Image src="/awards/award2.png" alt="Award 2" width={500} height={500} className=" shadow-md" />
        </div>
        <div className="w-full">
          <Image src="/awards/award3.png" alt="Award 3" width={500} height={500} className="shadow-md" />
        </div>
        <div className="w-full">
          <Image src="/awards/award4.png" alt="Award 4" width={500} height={500} className=" shadow-md" />
        </div>
        <div className="w-full">
          <Image src="/awards/award5.png" alt="Award 5" width={500} height={500} className="shadow-md" />
        </div>
        <div className="w-full">
          <Image src="/awards/award6.png" alt="Award 6" width={500} height={500} className="shadow-md" />
        </div>
        <div className="w-full">
          <Image src="/awards/award7.png" alt="Award 7" width={500} height={500} className="shadow-md" />
        </div>
      </div>
    </section>
  );
}
