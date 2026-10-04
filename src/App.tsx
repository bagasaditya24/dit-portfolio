import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="overflow-x-hidden bg-[#f5f5f7]">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Contacts />
      <Footer />
    </main>
  );
}