import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", path: "#hero" },
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={` w-full z-50 transition-all duration-300 fixed ${
          scrolled
            ? " md:shadow-lg md:backdrop-blur-sm transition-all duration-300"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-15">
          {/* Logo  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
              K
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Karan
            </span>
          </motion.div>

          {/* Desktop navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:flex hidden space-x-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path} // e.g. "#about"
                className="relative font-medium text-gray-800 dark:text-gray-100 hover:text-violet-500 dark:hover:text-violet-300 transition-colors duration-300 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.nav>

          {/* Socail icons -Desktop */}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
              href="https://github.com/thekarancode0"
              target="blank"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
              href="https://www.linkedin.com/in/karan-kumar-8164832b3/"
              target="blank"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
              href="https://www.instagram.com/main_karan_/"
              target="blank"
            >
              <FiInstagram className="w-5 h-5" />
            </motion.a>

            {/* Hire me  */}
            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
            >
              Hire me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className="text-gray-300"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path} 
                className="relative font-medium text-gray-800 dark:text-gray-100 hover:text-violet-500 dark:hover:text-violet-300 transition-colors duration-300 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
              <a href="">
                <FiGithub className="h-5 w-5 text-gray-300" />
              </a>

              <a href="">
                <FiLinkedin className="h-5 w-5 text-gray-300" />
              </a>

              <a href="">
                <FiInstagram className="h-5 w-5 text-gray-300" />
              </a>
            </div>
            <button
              onClick={() => {
                toggleMenu();
                openContactForm();
              }}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
            >
              Contact me
            </button>
          </div>
        </motion.div>

        {/* Contact Form  */}
        <AnimatePresence>
          {contactFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
              
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                  duration: 0.8,
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 "
              >
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-gray-300">
                    Get in Touch
                  </h1>
                  <button onClick={closeContactForm}>
                    <FiX className="w-5 h-5 text-gray-300 font-extrabold " />
                  </button>
                </div>

                {/* Input forms */}
                <form className="space-y-4 text-gray-300">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      row="4"
                      id="message"
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-4 py-2 text-gray-300 font-bold bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
