import { motion } from "framer-motion";
import { Leaf, Heart, Award, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural ingredients from trusted suppliers who share our commitment to quality and sustainability.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every product is crafted with care and attention to detail, ensuring that you receive the best possible skincare experience.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Our products undergo rigorous testing to ensure they meet the highest standards.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We believe in giving back. A portion of every purchase supports local communities and environmental initiatives.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={hero3}
          alt="About LUMÉABILLY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/90"
            >
              The journey behind your glow
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Our Mission
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Redefining Beauty Through Nature
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LUMÉABILLY was born from a simple belief: that everyone deserves to feel 
                confident in their own skin. Founded in Nigeria, we set out to create 
                premium skincare products that harness the power of nature to deliver 
                real, visible results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey began with a passion for natural beauty and a commitment 
                to quality that refuses to compromise. Every product in our collection 
                is carefully formulated with the finest natural ingredients, designed 
                to nourish, protect, and enhance your natural glow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, LUMÉABILLY stands as a testament to what's possible when you 
                combine traditional wisdom with modern science. We're proud to be 
                part of your skincare journey, helping you discover the radiant, 
                healthy skin you deserve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={hero4}
                alt="Our mission"
                className="rounded-lg shadow-hover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background rounded-lg shadow-soft"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl mb-4"
          >
            Ready to Start Your Glow Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Discover the perfect products for your unique skin and begin your transformation today.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            href="/products"
            className="inline-block bg-primary-foreground text-primary px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-secondary transition-colors"
          >
            Shop Now
          </motion.a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
