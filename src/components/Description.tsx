import React from "react";
import { images } from "./constants";
import { motion } from "framer-motion";

type Props = {
  activeImage: number;
  clickNext: () => void;
  clickPrev: () => void;
};

const Description: React.FC<Props> = ({ activeImage }) => {
  return (
    <div className="grid place-items-start w-full bg-blue-100 relative md:rounded-tr-3xl md:rounded-br-3xl">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full py-10 md:py-20 px-6 md:px-20 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            className="w-full"
          >
            <div className="py-4 text-2xl md:text-5xl font-extrabold">
              {elem.title}
            </div>
            <div className="leading-relaxed font-medium text-base md:text-base tracking-wide italic text-gray-600 mt-4">
              {elem.desc}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Description;
