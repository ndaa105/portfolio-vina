import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="
        fixed z-50
        /* MOBILE (default): bottom center */
        bottom-0 left-1/2 -translate-x-1/2
        w-full max-w-[420px] h-16
        flex items-center justify-center
        bg-transparent
        transition-all duration-300 ease-in-out
        /* DESKTOP: left vertical */
        md:bottom-auto md:left-0 md:top-0 md:translate-x-0
        md:w-36 md:h-screen md:flex md:items-center md:justify-center md:flex-col
      "
    >
      <div
        className="
          /* MOBILE: horizontal row */
          flex flex-row items-center justify-center gap-6
          /* DESKTOP: stack vertically */
          md:flex-col md:gap-8
        "
      >
        <Link
          to="home"
          smooth
          duration={600}
          offset={-60}
          className="flex flex-col items-center hover:text-yellow-300 cursor-pointer transition"
        >
          <FaHome size={30} />
          <span className="text-[12px]">HOME</span>
        </Link>

        <Link
          to="about"
          smooth
          duration={600}
          offset={-60}
          className="flex flex-col items-center hover:text-yellow-300 cursor-pointer transition"
        >
          <FaUser size={30} />
          <span className="text-[12px]">ABOUT</span>
        </Link>

        <Link
          to="projects"
          smooth
          duration={600}
          offset={-60}
          className="flex flex-col items-center hover:text-yellow-300 cursor-pointer transition"
        >
          <FaProjectDiagram size={30} />
          <span className="text-[12px]">PROJECT</span>
        </Link>

        <Link
          to="contact"
          smooth
          duration={600}
          offset={-60}
          className="flex flex-col items-center hover:text-yellow-300 cursor-pointer transition"
        >
          <FaEnvelope size={30} />
          <span className="text-[12px]">CONTACT</span>
        </Link>
      </div>
    </nav>
  );
}
