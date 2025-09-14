import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0d081f] text-white py-12 px-[10vw] md:px-[7vw] lg:px-[18vw] border-t border-gray-800/50">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform inline-block"
        >
          Himanshu Sharma
        </motion.h2>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center space-x-5 sm:space-x-8 mt-6"
        >
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative group text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </motion.nav>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center space-x-6 mt-8"
        >
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/himanshu-sharma-826582235/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/Himanshu-Sharma713/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition transform hover:scale-125"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-40 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-6 opacity-60"></div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Himanshu Sharma. All rights reserved.
        </motion.p>
      </div>

      {/* Back to Top Floating Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-pink-600/30 transition"
        >
          <ArrowUpCircle size={28} />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
