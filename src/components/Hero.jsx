import { motion } from "framer-motion"
import OrbitingDots from "./OrbitingDots"
function Hero() {
  return (
    <section  className='h-screen flex xl:flex-row flex-col-reverse items-center justify-between lag:px-24 px-10  relative overflow-hidden text-gray-300'>
      {/* Left Section  */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
        initial={{opacity:0,y:80}}
        animate={{opacity:1, y:0}}
        transition={{
          type:"spring",
          stiffness:40,
          damping:25,
          delay:1.3,
          duration:1.5
        }}
        className="text-5xl  md:text-7xl lg-text-8xl font-bold z-10 mb-6">
          Hey there <br />
          I'm Karan Kumar
        </motion.h1>

        <motion.p 
        initial={{opacity:0,y:80}}
        animate={{opacity:1, y:0}}
        transition={{
          type:"spring",
          stiffness:40,
          damping:25,
          delay:1.8,
          duration:1.5
        }}
        className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">
          Hi, I'm Karan — a passionate full stack web developer on a mission to turn clean code into powerful digital experiences. Whether it's crafting elegant frontends or building scalable backend logic, I love solving real-world problems with code. Let's build something amazing.
          </motion.p>
      </div>

      {/* Right section  */}
        <OrbitingDots/>
    </section>
  )
}

export default Hero