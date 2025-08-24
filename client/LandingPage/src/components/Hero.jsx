import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-6 pt-24 md:pt-0">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">
              ★
            </span>
            <span className="text-sm font-medium">
              Indore Smart City Mission
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight"
        >
          Serving Citizens Through{" "}
          <span className="text-blue-600 relative inline-block">
            Smart Grievance Redressal
          </span>{" "}
          System
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl -mt-2"
        >
          Indore Smart City&apos;s official platform for citizen complaints -
          connecting you directly to government departments for faster,
          transparent resolution of civic issues.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col sm:flex-row gap-4 max-w-md -mt-1"
        >
          <Link
            to="/auth"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95 text-center font-semibold"
          >
            📝 File a Complaint
          </Link>

          <Link
            to="/311Form"
            className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-orange-100 active:scale-95 text-center font-semibold"
          >
            Report via 311
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="flex gap-6 pt-4"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Service Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">Fast</div>
            <div className="text-sm text-gray-600">Resolution</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">Transparent</div>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Government Building"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
