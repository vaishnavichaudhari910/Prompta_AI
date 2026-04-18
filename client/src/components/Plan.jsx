import React from "react";
import { PricingTable } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      {/* Heading Fade Up */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Choose Your Plan
        </h2>

        <p className="text-gray-500 max-w-lg mx-auto">
          Start for free and scale up as you grow. Find the perfect plan for your
          content creation needs
        </p>
      </motion.div>

      {/* Pricing Table Fade Up */}
      <motion.div
        className="mt-14 max-sm:mx-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }} >
        <PricingTable />
      </motion.div>

    </div>
  );
};

export default Plan;

