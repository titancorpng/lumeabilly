import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "All our products are made with natural, organic ingredients sourced responsibly.",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "We never test on animals. Our products are ethically made with love.",
  },
  {
    icon: Sparkles,
    title: "Visible Results",
    description: "Experience noticeable improvements in your skin within weeks of use.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every product meets the highest standards of quality and effectiveness.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            The LUMÉABILLY Difference
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
              >
                <feature.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
