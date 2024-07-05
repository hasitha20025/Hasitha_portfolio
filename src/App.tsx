import About from "./assets/about";
import Contact from "./assets/contact";
import Footer from "./assets/footer";
import Navbar from "./assets/navbar";
import Projects from "./assets/projects";
import Skills from "./assets/skills";

export default function App() {
  return (
    <div className="bg-primary">
      <div className="mx-5 ">
        <Navbar />
        <div className="pt-20 md:pt-20">
          <div className="">
            <About />
          </div>
          <div className="mt-10">
            <Projects />
          </div>
          <div className="mt-10">
            <Skills />
          </div>
          <div className="">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
