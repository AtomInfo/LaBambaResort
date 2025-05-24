import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge: string;
}

export default function Menu() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Ugandan Rolex",
      description: "Fresh chapati rolled with scrambled eggs, vegetables, and served with fresh juice",
      price: "15,000 UGX",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Chapati & Beans",
      description: "Soft, homemade chapati served with perfectly seasoned local beans",
      price: "12,000 UGX",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "Traditional",
    },
    {
      id: 3,
      name: "Full Continental",
      description: "Eggs your way, toast, fresh seasonal fruits, and choice of beverage",
      price: "20,000 UGX",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "Complete",
    },
    {
      id: 4,
      name: "Fresh Beverages",
      description: "Premium tea, locally-sourced coffee, and fresh fruit juice selection",
      price: "5,000 UGX",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "Fresh",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-forest-green mb-4">
            Our Breakfast Menu
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Start your day with our carefully crafted breakfast selection,
            featuring authentic Ugandan dishes alongside international
            favorites, all prepared with fresh, local ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-forest-green mb-2">
                  {item.name}
                </h3>
                <p className="text-charcoal mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-warm-gold font-semibold text-lg">
                    {item.price}
                  </span>
                  <span className="text-sm text-charcoal bg-warm-beige px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal mb-6">
            All dishes are prepared fresh to order using locally-sourced
            ingredients
          </p>
          <button
            onClick={scrollToContact}
            className="inline-block bg-forest-green hover:bg-sage-green text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
