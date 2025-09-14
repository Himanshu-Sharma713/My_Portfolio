import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import { X } from "lucide-react";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[8vw] font-sans relative bg-gradient-to-b from-black via-[#0f0f1a] to-black"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-white tracking-tight">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-medium">
          A collection of my favorite projects — blending creativity, design,
          and modern web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleOpenModal(project)}
            className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-3 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-white hover:text-purple-400 transition"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2 bg-black flex items-center justify-center p-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-2xl shadow-lg object-contain"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 bg-white/10 hover:bg-white/20 text-gray-200 rounded-xl font-semibold transition"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
