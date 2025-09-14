// src/components/Skills/Skills.jsx
// import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="py-28 px-[10vw] md:px-[7vw] lg:px-[18vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-white tracking-wide"
      >
        SKILLS
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
        className="text-gray-300 mt-8 text-lg font-medium max-w-2xl mx-auto leading-relaxed"
      >
        A collection of my technical skills and expertise, honed through
        real-world projects and continuous learning.
      </motion.p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-12 justify-center">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="w-full sm:w-[48%] lg:w-[45%]"
        >
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="bg-gray-900/70 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-lg shadow-purple-700/30 hover:shadow-pink-600/30 transition">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {category.title}
              </h3>

              {/* Skill Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex flex-col items-center justify-center space-y-2 bg-[#131025]/70 border border-gray-700 rounded-2xl py-5 px-4 hover:border-purple-500 hover:scale-105 transition text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <span className="text-sm sm:text-base text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
