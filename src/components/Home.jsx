import { motion as Motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <Motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Wrapper Utama */}
      <div
        className="
          flex flex-col-reverse items-center justify-center text-center gap-8
          md:flex-row md:justify-around md:text-left md:gap-12
          w-full max-w-[800px]
        "
      >
        {/* Kiri: Teks */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-[40px] sm:text-[50px] md:text-[65px] font-bold leading-tight font-serif">
            Vinawanda <br /> Khodijah
          </h1>
          <h3 className="text-[24px] sm:text-[30px] md:text-[38px] font-normal mb-3 font-serif">
            Fullstack Engineer
          </h3>

          {/* Ikon Sosial */}
          <div className="flex flex-row gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/vinawanda-khodijah-3ba741351"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d9b55b] text-[#d9b55b] p-2 rounded-md hover:bg-[#d9b55b] hover:text-[#4a1e1e] transition duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://wa.me/6285117005606"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d9b55b] text-[#d9b55b] p-2 rounded-md hover:bg-[#d9b55b] hover:text-[#4a1e1e] transition duration-300"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>

        {/* Kanan: Foto */}
        <Motion.div
          className="rounded-[20px] overflow-hidden border border-[#d9b55b] shadow-lg"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Profile"
            className="w-[200px] h-[250px]
            sm:w-[230px] sm:h-[300px] object-cover"
          />
        </Motion.div>
      </div>
    </Motion.section>
  );
}
