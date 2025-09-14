import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Make sure this is installed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_axbtt7a", // Replace with your EmailJS Service ID
        "template_1ziboq3", // Replace with your EmailJS Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSending(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[10vw] md:px-[7vw] lg:px-[18vw] bg-gradient-to-b from-[#0d081f] via-[#100c25] to-[#0d081f]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-white"
        >
          CONTACT
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mt-6 text-lg font-medium max-w-2xl mx-auto"
        >
          I’d love to hear from you—let’s connect for opportunities, ideas, or
          collaborations.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-gray-900/70 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-lg"
      >
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
          />

          {/* Send Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={isSending}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-lg transition hover:shadow-lg hover:shadow-pink-600/30 ${
              isSending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send"}
            <SendHorizonal size={20} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
