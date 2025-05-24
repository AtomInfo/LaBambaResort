import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Menu from "@/components/menu";
import Activities from "@/components/activities";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
