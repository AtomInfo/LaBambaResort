import { Leaf, Heart, Utensils, Mountain } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: "Serene Environment",
      description: "Peaceful surroundings for ultimate relaxation",
    },
    {
      icon: Heart,
      title: "Warm Hospitality",
      description: "Genuine Ugandan warmth and care",
    },
    {
      icon: Utensils,
      title: "Authentic Cuisine",
      description: "Traditional and continental breakfast options",
    },
    {
      icon: Mountain,
      title: "Perfect Location",
      description: "Gateway to Kapchorwa's natural wonders",
    },
  ];

  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-forest-green mb-6">
              A Peaceful Haven in Kapchorwa
            </h2>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Nestled in the breathtaking landscapes of Kapchorwa, La Bamba
              Country Resort offers a cozy and confidential environment that's
              perfect for peaceful mornings, casual business meetings, or
              intimate gatherings with loved ones.
            </p>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Our commitment to excellent service and warm Ugandan hospitality
              ensures that every guest feels at home. Whether you're starting
              your day with our signature breakfast or planning your next
              adventure in the region, we provide the perfect sanctuary for
              relaxation and rejuvenation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <feature.icon className="text-forest-green text-2xl mr-4" />
                  <div>
                    <h4 className="font-semibold text-forest-green">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-charcoal">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cozy resort interior with comfortable seating"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
