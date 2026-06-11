
import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
<section className="px-6 sm:px-12 lg:px-20 xl:px-32 pt-24 sm:pt-24 lg:pt-0 min-h-screen bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat flex items-center">   
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
  Create Smarter Content <br />
  with{" "}
  <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
    Prompta AI
  </span>
</h1>

         <p className="mt-6 text-gray-600 text-lg max-w-xl">
  Turn your ideas into high-quality content instantly. Generate articles, images, resumes, and more with the power of AI.
</p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/ai")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Start Creating Now
            </button>

            <button
              onClick={() => navigate("/pricing")}
              className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              Explore Features
            </button>
          </div>

          <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start text-gray-600">
            <img src={assets.user_group} alt="" className="h-8" />
            <span>Trusted by 10,000+ creators worldwide</span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
          
        >
          <img
            src="/home_logo.png"
            alt="Prompta AI"
            className="w-full max-w-3xl drop-shadow-2xl"
            
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
