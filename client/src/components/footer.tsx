import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#menu", label: "Our Menu" },
    { href: "#activities", label: "Local Activities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-forest-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              La Bamba Country Resort
            </h3>
            <p className="text-gray-300 mb-4">
              Experience tranquility and authentic Ugandan hospitality in the
              heart of Kapchorwa.
            </p>
            <p className="text-gray-300 text-sm">
              A peaceful haven for unforgettable breakfast experiences and
              mountain adventures.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-warm-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/labambacrk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center text-forest-green hover:bg-earth-brown transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/Labambacountryresortkapchorwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center text-forest-green hover:bg-earth-brown transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="mb-1">📞 0772 448472</p>
              <p>✉️ labambacountryresort1@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 La Bamba Country Resort. All rights reserved. | Kapchorwa,
            Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
