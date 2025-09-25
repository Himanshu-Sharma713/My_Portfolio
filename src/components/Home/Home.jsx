import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-[#0f0f1a] to-black text-center"
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
            Himanshu Sharma
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          React Developer — Frontend Engineer | Proficient in React.js,
          TypeScript, Redux, Tailwind CSS, and REST APIs
        </p>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          B.Tech in Computer Science & Engineering with hands-on expertise in
          building scalable, performant, and user-friendly web applications.
          Strong foundation in{" "}
          <span className="text-purple-400 font-semibold">
            React.js, TypeScript, Redux, Tailwind CSS, Java, Spring Boot, and
            MySQL
          </span>{" "}
          <br />. Passionate about creating clean, responsive, and impactful
          digital experiences.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Himanshu-Sharma713"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-600 text-gray-300 hover:text-white transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-sharma-826582235/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-600 text-gray-300 hover:text-white transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <a
            href="#work"
            className="px-6 py-3 rounded-xl font-semibold bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1d2GoCxCNgKWTHvF_uvwgvbF99Hn5skJB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10"
      >
        <ArrowDownCircle className="w-10 h-10 text-purple-500 animate-bounce cursor-pointer" />
      </motion.div>
    </section>
  );
};

export default Home;
