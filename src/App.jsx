import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          flex-1
          pt-[20px] md:pt-[0px]
          pb-[800px] md:pb-[50px]
          px-[20px] sm:px-[40px] md:px-[100px] lg:px-[200px]
          space-y-24
        "
      >
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
