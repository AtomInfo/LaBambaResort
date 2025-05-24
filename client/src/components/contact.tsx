import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "0772 448472",
      href: "tel:0772448472",
    },
    {
      icon: Mail,
      title: "Email",
      content: "labambacountryresort1@gmail.com",
      href: "mailto:labambacountryresort1@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kapchorwa, Uganda",
    },
    {
      icon: Clock,
      title: "Breakfast Hours",
      content: "Daily: 7:00 AM - 11:00 AM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-forest-green mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Ready to experience the tranquility of La Bamba? Contact us to make
            a reservation or plan your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest-green rounded-full flex items-center justify-center mr-4">
                    <info.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-green mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-charcoal hover:text-warm-gold transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-charcoal">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Placeholder */}
            <Card className="mt-8 bg-soft-beige">
              <CardContent className="p-8 text-center">
                <Map className="text-4xl text-forest-green mb-4 mx-auto" />
                <h4 className="font-semibold text-charcoal mb-2">
                  Google Maps Integration
                </h4>
                <p className="text-charcoal text-sm">
                  Interactive map will be embedded here
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-forest-green mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-forest-green font-semibold">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 focus:ring-forest-green focus:border-forest-green"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-forest-green font-semibold">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 focus:ring-forest-green focus:border-forest-green"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-forest-green font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 focus:ring-forest-green focus:border-forest-green resize-vertical"
                    placeholder="Tell us about your visit plans or any special requests..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-forest-green hover:bg-sage-green text-white py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
