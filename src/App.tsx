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
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
