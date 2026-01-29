import { motion as Motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const projects = [
    {
      title: "Learning Management System",
      img: `${import.meta.env.BASE_URL}digital-doctor.png`,
      link: "https://www.digitaldoctoracademy.web.id",
    },
    {
      title: "Betta Fish Online Store",
      img: `${import.meta.env.BASE_URL}ecom.png`,
      link: "https://id.fishkinian.com",
    },
    {
      title: "Company Profile STBA Yapari",
      img: `${import.meta.env.BASE_URL}stba.png`,
      link: "https://stbayapari.ac.id",
    },
    {
      title: "Company Profile Property Hill",
      img: `${import.meta.env.BASE_URL}ph.png`,
      link: "https://propertyhill.my.id",
    },
    {
      title: "Brosur Pemasaran",
      img: `${import.meta.env.BASE_URL}brosur.png`,
    },
    {
      title: "Logo Brand Fashion",
      img: `${import.meta.env.BASE_URL}brand.png`,
    },
  ];

  return (
    <Motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-center mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-semibold mb-10 flex justify-center items-center gap-5 text-[#d9b55b]">
        PROJECTS CREATED
      </h2>

      {/* Bungkus agar selalu center */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="overflow-hidden"
          >
            {projects.map((project, index) => {
              const isTallImage =
                project.title.includes("Brosur") ||
                project.title.includes("Logo");

              return (
                <SwiperSlide key={index}>
                  <Motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="block rounded-2xl"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        src={project.img}
                        alt={project.title}
                        className={`rounded-xl shadow-md object-contain ${
                          isTallImage
                            ? "w-[40%] sm:w-[50%] max-h-[300px]"
                            : "w-[80%] sm:w-[90%] max-h-[340px]"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 text-[#d9b55b]">
                      {project.title}
                    </h3>
                  </Motion.a>
                </SwiperSlide>
              );
            })}

            {/* Tombol navigasi */}
            <div className="swiper-button-prev !text-[#d9b55b] !left-[-10px] sm:!left-0 !top-1/2 !translate-y-[-50%]"></div>
            <div className="swiper-button-next !text-[#d9b55b] !right-[-10px] sm:!right-0 !top-1/2 !translate-y-[-50%]"></div>
          </Swiper>
        </div>
      </div>
    </Motion.section>
  );
}
