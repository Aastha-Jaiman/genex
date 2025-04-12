// import Image from "next/image";
import HeroSection3 from "../hero/HeroSection3";

export default function ContactSection() {
  return (
    <section className="w-full bg-white">
      {/* Hero Image with Overlay */}
      <HeroSection3 />

      {/* Map Image */}
      <div className="w-full px-4 py-10 relative -top-24 z-10 flex justify-center">
        <div className="w-full max-w-4xl shadow-xl">
          <img
            src="/Map.png"
            alt="Map Location"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}
