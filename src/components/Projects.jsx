import React from "react";
import { motion } from "framer-motion";

const project = [
  {
    imgUrl: "/project1.png",
    liveUrl: "https://myquiz87.netlify.app/",
    code: "https://github.com/thekarancode0/Quiz-Back",
  },
  {
    imgUrl: "/project2.png",
    liveUrl: "https://thekarancode0.github.io/Transaction-Log/",
    code: "https://github.com/thekarancode0/Transaction-Log",
  },
  {
    imgUrl: "/project3.png",
    liveUrl: "https://thekarancode0.github.io/Image-Enhancer/",
    code: "https://github.com/thekarancode0/Image-Enhancer",
  },
  {
    imgUrl: "/project4.png",
    liveUrl: "https://thekarancode0.github.io/AddToCart/",
    code: "https://github.com/thekarancode0/AddToCart",
  },
  {
    imgUrl: "/project5.png",
    liveUrl: "https://thekarancode0.github.io/Recipe-Book/",
    code: "https://github.com/thekarancode0/Recipe-Book",
  },
  {
    imgUrl: "/project6.png",
    liveUrl: "https://thekarancode0.github.io/Typing-Test/",
    code: "https://github.com/thekarancode0/Typing-Test",
  },
  {
    imgUrl: "/project7.png",
    liveUrl: "https://thekarancode0.github.io/Roman-Number-Convertor/",
    code: "https://thekarancode0.github.io/Roman-Number-Convertor/",
  },
];
function Projects() {
  return (
    <section className="h-screen flex xl:flex-col flex-col items-center justify-between lag:px-24 px-10 py-18 relative overflow-hidden text-gray-300 ">
      <h1 className="md:text-5xl text-2xl h-auto my-3">My Work</h1>
      {/* Left Section  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full  md:h-120 h-180 overflow-y-scroll hide-scrollbar">
        {/* Project Card */}
        {project.map((item, index) => (
          <div 
          key={index}
          className="flex flex-col items-center  bg-gray-800 rounded-xl shadow-lg p-4 w-full col-span-1">
            <motion.img
              initial={{ scale: 0.8, y: -20 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.2,
                stiffness: 70,
                damping: 20,
              }}
              viewport={{ once: true, amout: 0 }}
              src={item.imgUrl}
              alt="Project 1"
              className="w-full rounded-md mb-4 h-60 object-cover"
            />

            <div className="flex flex-col md:flex-row gap-4 w-full  ">
              <motion.a
               href={item.liveUrl} target="blanck"
                initial={{ scale: 0.8, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.2,
                  stiffness: 100,
                  damping: 20,
                }}
                viewport={{ once: true, amout: 0 }}
                className="w-full h-10 bg-gradient-to-r from-violet-700 to-purple-950 text-white rounded-xl hover:scale-90 transition-all duration-300 text-center pt-2"
              >
                
                  Live Project
                
              </motion.a>

              <motion.a
                href={item.code} target="blanck"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.2,
                  stiffness: 100,
                  damping: 20,
                }}
                viewport={{ once: true, amout: 0 }}
                className="w-full h-10 bg-gradient-to-r from-violet-700 to-purple-950 text-white rounded-xl hover:scale-90 transition-all duration-300 text-center pt-2"
              >
                Code
              </motion.a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
