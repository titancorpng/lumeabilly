import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze O.",
    location: "Lagos",
    rating: 5,
    text: "The Body Lotion is incredible! My skin has never felt so soft and hydrated. I've been using it for 3 months and the results are amazing.",
  },
  {
    name: "Chidinma A.",
    location: "Abuja",
    rating: 5,
    text: "Finally found a skincare brand that truly delivers on its promises. The Claré Wash has transformed my skin completely!",
  },
  {
    name: "Fatima B.",
    location: "Port Harcourt",
    rating: 5,
    text: "The Face Cream is my holy grail product. It's lightweight, absorbs quickly, and gives me that perfect glow every day.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-soft"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
