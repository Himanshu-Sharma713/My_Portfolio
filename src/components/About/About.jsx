import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/images.jpg";

const particles = Array.from({ length: 15 }); // Number of floating dots

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-[8vw] md:px-[6vw] lg:px-[18vw] font-sans mt-12 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/40 shadow-md"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300 mb-2">
            👋 Hi, I am
          </h3>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Himanshu Sharma
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white">
            <span className="text-gray-300">I am a </span>
            <ReactTypingEffect
              text={[
                "React Developer",
                "Frontend Engineer",
                "JavaScript Enthusiast",
                "TypeScript Developer",
                "UI/UX Enthusiast",
                "Full-Stack Contributor",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-purple-500">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-lg md:mr-10">
            I am a passionate{" "}
            <span className="text-purple-400 font-semibold">
              React Developer — Frontend Engineer
            </span>{" "}
            with expertise in
            <span className="text-purple-400">
              {" "}
              React.js, TypeScript, Redux, React Query, and Tailwind CSS
            </span>
            . Skilled at building scalable, responsive, and user-friendly web
            applications, with strong full-stack foundations in{" "}
            <span className="text-purple-400">
              Java, Spring Boot, and MySQL
            </span>
            . I focus on crafting clean code, optimizing performance, and
            delivering impactful digital experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/1d2GoCxCNgKWTHvF_uvwgvbF99Hn5skJB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 text-lg font-bold rounded-full text-white shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7, #ec4899)",
                boxShadow:
                  "0 0 15px rgba(130,69,236,0.6), 0 0 40px rgba(130,69,236,0.4)",
              }}
            >
              RESUME
            </motion.button>
          </a>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center md:justify-end relative"
        >
          {/* Animated Gradient Blobs */}
          <motion.div
            className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-30"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 -right-10 w-80 h-80 rounded-full bg-pink-500 blur-3xl opacity-25"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          ></motion.div>

          {/* Profile Image */}
          <Tilt
            className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full z-10"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Himanshu Sharma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_25px_rgba(130,69,236,0.6)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
