import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural ingredients from trusted suppliers who share our commitment to quality and sustainability.",
    image: "/uploads/img1.jpg",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every product is crafted with care and attention to detail, ensuring that you receive the best possible skincare experience.",
    image: "/uploads/img7.jpg",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Our products undergo rigorous testing to ensure they meet the highest standards.",
    image: "/uploads/img3.jpg",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We believe in giving back. A portion of every purchase supports local communities and environmental initiatives.",
    image: "/uploads/img4.jpg",
  },
];

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isCeoHovered, setIsCeoHovered] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/uploads/img2.jpg"
          alt="About LUMÉABILLY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16">
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
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6 }}
              className="relative"
              onMouseEnter={() => setIsCeoHovered(true)}
              onMouseLeave={() => setIsCeoHovered(false)}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3"
              >
                Meet The Founder - Bilkisu Mustapha Sani
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-serif text-2xl md:text-3xl text-foreground mb-6"
              >
                The Face Behind The Brand
              </motion.h3>
              <div className="relative overflow-hidden rounded-lg shadow-hover">
                <motion.img
                  src="/uploads/ceolumeabilly.jpg"
                  alt="CEO of LUMÉABILLY"
                  className="w-full"
                  animate={{
                    scale: isCeoHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isCeoHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="relative h-80">
                  <motion.img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/90 mb-4"
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <value.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <motion.h3
                    className="font-serif text-lg mb-2"
                    animate={{
                      y: hoveredCard === index ? -5 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/90 text-sm leading-relaxed"
                    animate={{
                      y: hoveredCard === index ? -5 : 0,
                      opacity: hoveredCard === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {value.description}
                  </motion.p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
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
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl mb-4"
          >
            Ready to Start Your Glow Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Discover the perfect products for your unique skin and begin your transformation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/products"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-secondary transition-all duration-300 rounded-md hover:scale-105"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;