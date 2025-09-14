import { education } from "../../constants"; // Import the education data
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-white tracking-wide"
        >
          EDUCATION
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mt-6 text-lg font-medium max-w-2xl mx-auto"
        >
          My educational journey has shaped my technical skills and mindset,
          giving me a strong foundation to grow as a developer and problem
          solver.
        </motion.p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute sm:left-1/2 left-5 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 h-full rounded-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-5 transform -translate-x-1/2 bg-gray-200 border-4 border-purple-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center shadow-lg z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Education Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20 bg-gray-900/80 backdrop-blur-md shadow-purple-700/30 transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-44 ml-12" : "sm:mr-44 ml-12"
              }`}
            >
              {/* Header */}
              <div className="flex items-start space-x-6">
                {/* School Image */}
                <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-400">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Details */}
              <p className="mt-4 text-gray-300 font-semibold">
                Grade: <span className="text-purple-400">{edu.grade}</span>
              </p>
              <p className="mt-3 text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
