import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};
  return (

<div className="px-4 sm:px-20 xl:px-32 my-24">
  <div className="text-center">
    <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm"
>
  <Sparkles className="w-4 h-4 text-indigo-600" />
  <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
    AI-Powered Excellence
  </span>
</motion.div>
    <h2 className="text-[42px] font-semibold bg-gradient-to-r from-[#0f172a] to-[#3b82f6] bg-clip-text text-transparent">
  Powerful AI Tools
</h2>

    <p className="text-gray-500 max-w-lg mx-auto">
      Everything you need to create, enhance, and optimize your content with
      cutting-edge AI technology
    </p>
  </div>

{/* Cards Grid */}
<div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
  {AiToolsData.map((tool, index) => (
    
  <motion.div
    key={index}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="p-[1px] rounded-xl bg-gradient-to-br from-blue-200 to-blue-100 hover:from-blue-300 hover:to-blue-200 transition-all duration-300 cursor-pointer w-full max-w-xs transform hover:scale-105"
    onClick={() => user && navigate(tool.path)}
  >
    <div className="p-8 bg-white rounded-xl shadow-lg h-full transition-transform duration-300">
      <tool.Icon
        className="w-12 h-12 text-white rounded-xl"
        style={{
          background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
        }}
      />
      <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
      <p className="text-gray-400 text-sm max-w-[95%]">
        {tool.description}
      </p>
    </div>
  </motion.div>
))}
  
</div>

</div>

  );
};

export default AiTools;
