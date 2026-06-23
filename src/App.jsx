import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collaborations from "./components/Collaborations";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-ink-800 text-cream font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Collaborations />
      <Gallery />
      <Contact />
      <Process />
      
      {/* Testimonial Strip */}
      <div className="bg-red px-4 md:px-16 py-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
        <p className="font-display text-2xl md:text-3xl text-white tracking-wide flex-1">
          "SLEDGE CAPTURED MY SON PERFECTLY. IT'S MORE THAN A PAINTING — IT'S A MEMORY."
        </p>
        <p className="text-sm text-red-100 tracking-widest opacity-75 whitespace-nowrap">
          — Happy Client
        </p>
      </div>
      
      <About />
      <Blogs />
      <Footer />

      <WhatsAppButton />
    </div>
  );
}