import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-4 animate-fade-in">
          <span className="italic font-playfair">La Bamba</span> Country Resort
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-warm-gold">
          <span className="italic font-playfair">Tranquility & Taste in the Heart of Kapchorwa</span>
        </p>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl mb-12 leading-relaxed font-light">
          La Bamba Country Resort is a hidden gem nestled in the lush landscapes
          of Kapchorwa, Uganda. Known for its serene atmosphere and delicious
          breakfasts, we offer both traditional Ugandan and continental options.
        </p>
        <button
          onClick={scrollToMenu}
          className="inline-block bg-warm-gold hover:bg-earth-brown text-forest-green font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Our Menu
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-warm-gold transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
