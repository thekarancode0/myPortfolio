import React from "react";
import "./OrbitingDots.css";
import { motion } from "framer-motion";
const OrbitingRight = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center mt-10">
      <motion.div
      initial={{scale:0.8, opacity:0, y:30}}
      animate={{scale:1,opacity:1, y:0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:50,
        delay:0.9,
        duration:1.8,
      }}
      className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
        {/* Orbiting Circles & Dots (Behind) */}
        <div className="absolute inset-0 z-0">
          {/* Outer Circle */}
          <div className="absolute inset-0 border border-gray-500 rounded-full" />
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-8 h-8 bg-gray-400 shadow-[0_0_15px_rgb(156,163,175)] rounded-full transform -translate-x-1/2" />
          </div>

          {/* Middle Circle */}
          <div className="absolute inset-[40px] border border-gray-400 rounded-full" />
          <div className="absolute inset-[40px] animate-spin-medium">
            <div className="absolute top-0 left-1/2 w-5 h-5 bg-gray-400 shadow-[0_0_15px_rgb(156,163,175)] rounded-full transform -translate-x-1/2" />
          </div>

          {/* Inner Circle */}
          <div className="absolute inset-[80px] border border-gray-400 rounded-full" />
          <div className="absolute inset-[80px] animate-spin-fast">
            <div className="absolute top-0 left-1/2 w-5 h-5 bg-gray-400 shadow-[0_0_15px_rgb(156,163,175)] rounded-full transform -translate-x-1/2" />
          </div>
        </div>

        {/* Center Image (In Front) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src="/me.png"
            className="w-150 h-90 md:w-150 md:h-110 rounded-b-full object-cover "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OrbitingRight;
