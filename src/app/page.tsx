"use client";
import Head from "next/head";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Footer from "./footer";

const Home = () => {
  // Function to handle PDF download
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/filepdf/contact.pdf";
    link.download = "contact.pdf";
    link.click();
  };

  return (
    <>
      <Head>
        <title>
          Chemcoach Solutions | Advancing Chemistry Education and Research
        </title>
        <meta
          name="description"
          content="Chemcoach Solutions brings unparalleled expertise and a global perspective to advancing chemistry education and research."
        />
        <meta
          name="keywords"
          content="chemistry, education, research, chemists, solutions, nadibettu, chemcoach"
        />
        <meta name="author" content="Chemcoach Solutions" />
        <meta
          property="og:title"
          content="Chemcoach Solutions | Advancing Chemistry Education and Research"
        />
        <meta
          property="og:description"
          content="With a passion for advancing chemistry education and research, Chemcoach Solutions brings unparalleled expertise and a global perspective."
        />
        <meta property="og:image" content="/path/to/og-image.jpg" />
      </Head>

      <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col">
        <div className="container mx-auto flex-1">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Text Section */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-center xl:text-left"
              >
                <div className="quote-container text-xl italic border-l-4 pl-4 border-gray-500 text-gray-700">
                  <p>“Helping chemists achieve their dreams”</p>
                </div>
                <h1 className="h1 mb-6">
                  Welcome to <br />{" "}
                  <span className="text-blue-600">Chemcoach Solutions</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-black/80">
                  With a passion for advancing chemistry education and research,
                  Chemcoach Solutions brings unparalleled expertise and a global
                  perspective.
                </p>
                {/* Buttons and Socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 mb-6"
                    onClick={downloadPDF}
                    aria-label="Download Contact ID PDF"
                  >
                    <span>Download Contact ID</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="order-1 xl:order-none mt-2 mb-8 xl:mb-0">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Photo />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
