"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Footer from "../footer";

interface Service {
  num: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "Personalized Career Guidance",
    description:
      "Navigate your career trajectory with personalized guidance sessions. From charting your academic journey to aligning it with your professional aspirations, we’re here to support you.",
  },
  {
    num: "02",
    title: "MSc Internship & Project Support",
    description:
      "Gain a competitive edge with assistance in securing internships and navigating impactful projects. We provide valuable insights and resources for your academic success.",
  },
  {
    num: "03",
    title: "Job Search & Professional Development",
    description:
      "Craft standout CVs, ace interviews, and sharpen your job search strategies. We equip you with the tools to excel in the competitive job market.",
  },
  {
    num: "04",
    title: "PhD Assistance & Global Opportunities",
    description:
      "From assisting with research projects to guiding your transition into Ph.D., industry roles, or Postdoc positions, we provide insights and strategies to help you navigate international job markets.",
  },
];

interface ServiceCardProps {
  num: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  num,
  title,
  description,
}) => (
  <motion.article
    whileHover={{
      scale: 1.09,
      transition: { duration: 0.3 },
    }}
    className="flex flex-col gap-6 group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    aria-label={title}
  >
    <div className="flex justify-between items-center">
      {/* Number */}
      <div className="text-5xl font-extrabold text-gray-500 group-hover:text-blue-500 transition-colors duration-500">
        {num}
      </div>
      {/* Arrow */}
      <div className="w-[70px] h-[70px] flex-shrink-0 bg-gray-300 group-hover:bg-blue-500 rounded-full flex justify-center items-center transition-transform duration-500 group-hover:-rotate-180">
        <BsArrowDownRight className="text-primary text-3xl" />
      </div>
    </div>
    {/* Title */}
    <h2 className="text-[30px] font-bold text-black group-hover:text-blue-500 transition-colors duration-500">
      {title}
    </h2>
    {/* Description */}
    <p className="text-gray-700 text-[17px]">{description}</p>
    <div className="border-b border-gray-300"></div>
  </motion.article>
);

const Services: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center py-12 xl:py-0 bg-gray-50 mt-8">
      <div className="container mx-auto px-6 flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.num}
              num={service.num}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
      <Footer className="mt-8" />
    </section>
  );
};

export default Services;
