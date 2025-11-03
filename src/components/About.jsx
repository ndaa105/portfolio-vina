import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <Motion.section
      ref={ref}
      id="about"
      className="
        min-h-screen flex flex-col justify-center items-center 
        px-5 sm:px-8 md:px-16 lg:px-24 
        text-[#d9b55b]
      "
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Judul */}
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 
          flex items-center gap-2 justify-center text-center
        "
      >
        ABOUT ME
      </h2>

      {/* Isi */}
      <p
        className="
          max-w-3xl text-center text-sm sm:text-base md:text-lg 
          leading-relaxed md:leading-[1.8] tracking-wide
        "
      >
        My journey into tech started with a simple curiosity about algorithms
        and grew into building small projects like a local financial system.
        From there, I explored freelance work, developed websites for clients,
        and even created web applications for institutions. Along the way, I
        have worked with React, Node.js, Express, Laravel, Bootstrap, and
        databases like MySQL and MongoDB. What I love most is seeing ideas turn
        into real, functional applications that people can actually use. I enjoy
        solving problems and working with others to make things happen. Right
        now, I am excited to grow further as a Frontend or Backend Engineer,
        contribute to impactful projects, and keep challenging myself to learn
        something new every day.
      </p>
    </Motion.section>
  );
}
