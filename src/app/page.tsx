import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/layout/Project";
import Service from "./components/layout/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Footer/>
    </>
  );
}
