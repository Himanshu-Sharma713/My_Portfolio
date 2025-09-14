import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-[#0d081f] via-[#120a2e] to-[#0d081f] overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto">
          My professional journey so far — crafting impactful solutions and
          learning through real-world projects.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical glowing line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 h-full rounded-full shadow-[0_0_15px_rgba(130,69,236,0.6)]"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`flex flex-col sm:flex-row items-center mb-20 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Marker */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20 shadow-[0_0_20px_rgba(236,72,153,0.6)]"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
              />
            </motion.div>

            {/* Experience Card */}
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-gray-700 bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-[0_0_30px_rgba(130,69,236,0.4)] transition-transform duration-300 ${
                  index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
                } mt-16 sm:mt-0`}
              >
                {/* Header */}
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm text-gray-300">{exp.company}</h4>
                    <p className="text-xs text-gray-400 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-300 text-sm leading-relaxed">
                  {exp.desc}
                </p>

                {/* Skills */}
                <div className="mt-6">
                  <h5 className="font-semibold text-white text-sm">
                    Key Skills:
                  </h5>
                  <ul className="flex flex-wrap mt-3">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 text-xs rounded-full mr-2 mb-2 shadow-md hover:scale-105 transition"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
