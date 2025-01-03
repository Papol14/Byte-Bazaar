// Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('../public/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Overlay for better contrast */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Unlock Your Creative Potential
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover a world of design assets, software, and more to take your
          projects to the next level.
        </p>
        <a
          href="/products"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl transition duration-300 hover:bg-blue-600"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
