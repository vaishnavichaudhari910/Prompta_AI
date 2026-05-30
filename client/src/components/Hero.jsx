
import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 sm:px-12 lg:px-20 xl:px-32 min-h-screen bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat flex items-center">
      
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
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { motion } from 'framer-motion'

// const Hero = () => {
//   const navigate = useNavigate()

//   return (
//     <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
      
//       {/* Fade Up Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className='text-center mb-6'
//       >
//         <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>
//           Create amazing content <br/> with{" "}
//           <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//             AI tools
//           </span>
//         </h1>

//         <p className='mt-4 max-w-xs sm:max-w-xl m-auto max-sm:text-xs text-gray-600'>
//           Transform your content creation with our suite of premium AI tools.
//           Write articles, generate image, and enhance your workflow
//         </p>
//       </motion.div>

//       {/* Button Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.2 }}
//         className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'
//       >
//         <button
//           onClick={() => navigate('/ai')}
//           className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-3 rounded-lg hover:opacity-90 active:scale-95 transition cursor-pointer shadow-md"
//         >
//           Start creating now
//         </button>
//       </motion.div>

//       {/* Bottom Section Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, delay: 0.4 }}
//         className='flex items-center gap-4 mt-8 mx-auto text-gray-600'
//       >
//         <img src={assets.user_group} className='h-8' />
//         Trusted by 10k+ people
//       </motion.div>

//     </div>
//   )
// }

// export default Hero