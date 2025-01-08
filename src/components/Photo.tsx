"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center">
      
      
      {/* image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <div className="relative w-[350px] h-[250px] md:w-[400px] md:h-[400px] xl:w-[550px] xl:h-[450px] rounded-full overflow-hidden border-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 p-[2px] shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <Image
              src="/images/back.jpg"
              priority
              quality={100}
              fill
              alt="Chemcoach Solutions"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
