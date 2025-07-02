import { motion } from "framer-motion";
const logos = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  {
    name: "C++",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "DSA",
    src: "https://cdn-icons-png.flaticon.com/512/236/236832.png", // not a standard logo, placeholder
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  {
    name: "C",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
];


export default function About() {
  return (
    <section id="about" className=" flex  flex-col items-center justify-between lag:px-24 px-10  relative overflow-hidden text-gray-300 pt-10">
      {/* Left Section  */}
      <div className="flex xl:flex-row flex-col items-center justify-between">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1.3,
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-2/3 flex justify-center items-center mt-10"
        >
          <img src="./about.jpg" className="md:w-80 w-60 rounded-xl" />
        </motion.div>

        <div className="z-40 xl:mb-0 xl:mt-0 mt-10">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.2,
              duration: 1.3,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-semibold text-lg md:text-xl "
          >
            I'm a Frontend Developer with a passion for building fast,
            responsive, and interactive web application using{" "}
            <span className="text-gray-300 dark:text-purple-400">React</span>.
            <br />I specialize in crafting clean user interfaces with{" "}
            <span className="text-gray-300 dark:text-purple-400">
              Tailwind CSS
            </span>
            , and enjoy bringing components to life using{" "}
            <span className="text-gray-300 dark:text-purple-400">
              Framer Motion
            </span>
            <br />
            My goal is to create intuitive, user-focused experiences that not
            onl work well but also look great. I'm also comfortable working with
            backedn tools like{" "}
            <span className="text-gray-300 dark:text-purple-400">
              Node.js
            </span>{" "}
            and{" "}
            <span className="text-gray-300 dark:text-purple-400">MongoDB</span>{" "}
            to build full-stack features.
          </motion.p>
        </div>
      </div>

      {/* Skills Icons */}
      <div className="flex flex-col gap-6 justify-center mt-10 mb-5 md:w-2/3 w-full">
        <h1 className="text-center text-5xl">Skills</h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1.3,
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center 
             md:h-[150px] h-[400px] overflow-y-auto px-2 hide-scrollbar  cursor-all-scroll"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-3 bg-gray-900 p-4 rounded-md shadow-md w-full"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-16 h-16 hover:scale-110 transition-transform"
              />
              <p className="text-sm text-gray-300 text-center">{logo.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
