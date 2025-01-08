"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

const Slider: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(clickNext, 5000);

    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <main className="relative grid md:grid-cols-2 grid-cols-1 w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-50">
      {/* Slider Images */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === activeImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`Slide ${idx + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={idx === activeImage}
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
        <button
          onClick={clickPrev}
          aria-label="Previous slide"
          className="p-2 md:p-3 bg-gray-800/70 text-white rounded-full shadow-md hover:bg-gray-600/70 transition"
        >
          ◀
        </button>
        <button
          onClick={clickNext}
          aria-label="Next slide"
          className="p-2 md:p-3 bg-gray-800/70 text-white rounded-full shadow-md hover:bg-gray-600/70 transition"
        >
          ▶
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 md:bottom-4 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              idx === activeImage
                ? "bg-gray-800 scale-110"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default Slider;
