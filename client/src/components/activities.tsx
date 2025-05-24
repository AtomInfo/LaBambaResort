import { Mountain, Users, Camera, Leaf } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      icon: Mountain,
      title: "Mountain Mountain Trails",
      description:
        "Discover breathtaking trails through the Kapchorwa mountains, offering stunning views and encounters with local wildlife. Perfect for both beginners and experienced hikers.",
    },
    {
      icon: Users,
      title: "Cultural Experiences",
      description:
        "Immerse yourself in the rich Sebei culture with visits to local communities, traditional craft workshops, and authentic cultural performances.",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description:
        "Capture the stunning landscapes, unique flora, and vibrant local life with guided photography tours designed for all skill levels.",
    },
    {
      icon: Leaf,
      title: "Nature Walks",
      description:
        "Gentle walks through coffee plantations and forest reserves, perfect for bird watching and learning about local ecosystem conservation.",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="activities" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-forest-green mb-4">
            Explore Kapchorwa
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            La Bamba serves as your perfect base for discovering the natural
            wonders and rich cultural heritage that Kapchorwa has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Mountain hiking trail with lush vegetation"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div>
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest-green rounded-full flex items-center justify-center mr-4">
                    <activity.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-forest-green mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-charcoal">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal mb-6 font-medium">
            Ready to explore? We can help arrange guides and transportation for
            your adventures.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-block bg-warm-gold hover:bg-earth-brown text-forest-green font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Plan Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
}
