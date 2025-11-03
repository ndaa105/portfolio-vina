import { motion as Motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_amxvbjs",
        "template_cyc5u9t",
        form.current,
        "XKVeR63diukTQ6-Wm"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Motion.section
      id="contact"
      className="
        min-h-screen flex flex-col items-center justify-center
        text-center px-4 sm:px-8 md:px-16 py-10
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Judul */}
      <Motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-2 text-[#d9b55b]"
      >
        CONTACT TO MY EMAIL
      </Motion.h2>

      {/* Form */}
      <Motion.form
        ref={form}
        onSubmit={sendEmail}
        className="
          w-full max-w-md sm:max-w-lg text-left
          space-y-6 sm:space-y-8
        "
        variants={containerVariants}
      >
        {/* Input Fields */}
        <Motion.div
          className="space-y-4 sm:space-y-6"
          variants={containerVariants}
        >
          <Motion.input
            variants={itemVariants}
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-2 sm:p-3 rounded-md bg-transparent text-white placeholder:text-[#d9b55b] border border-[#d9b55b] focus:outline-none focus:ring-2 focus:ring-[#d9b55b] transition text-sm sm:text-base"
          />

          <Motion.input
            variants={itemVariants}
            type="text"
            name="user_surname"
            placeholder="Surname"
            required
            className="w-full p-2 sm:p-3 rounded-md bg-transparent text-white placeholder:text-[#d9b55b] border border-[#d9b55b] focus:outline-none focus:ring-2 focus:ring-[#d9b55b] transition text-sm sm:text-base"
          />

          <Motion.input
            variants={itemVariants}
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-2 sm:p-3 rounded-md bg-transparent text-white placeholder:text-[#d9b55b] border border-[#d9b55b] focus:outline-none focus:ring-2 focus:ring-[#d9b55b] transition text-sm sm:text-base"
          />

          <Motion.textarea
            variants={itemVariants}
            name="message"
            placeholder="Message"
            required
            className="w-full p-2 sm:p-3 rounded-md bg-transparent text-white placeholder:text-[#d9b55b] border border-[#d9b55b] focus:outline-none focus:ring-2 focus:ring-[#d9b55b] h-40 sm:h-52 resize-none transition text-sm sm:text-base"
          />
        </Motion.div>

        {/* Tombol kirim */}
        <Motion.div
          variants={itemVariants}
          className="mt-6 flex justify-center"
        >
          <button
            type="submit"
            disabled={loading}
            className="
              w-3/4 sm:w-1/2 bg-[#d9b55b] text-[#4a1e1e] py-2 sm:py-3 
              rounded-md hover:bg-yellow-400 font-semibold transition 
              flex items-center justify-center gap-3 text-sm sm:text-base
              shadow-md
            "
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </Motion.div>

        {/* Status pesan */}
        {status && (
          <Motion.p
            variants={itemVariants}
            className={`text-center mt-5 ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            } text-sm sm:text-base`}
          >
            {status}
          </Motion.p>
        )}
      </Motion.form>
    </Motion.section>
  );
}
