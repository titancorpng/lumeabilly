import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero2 from "@/assets/hero-2.jpg";

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-20">
        <img
          src={hero2}
          alt="Glowing skin"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center"
      >
        <div className="container-wide">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight"
            >
              Nature's Finest Ingredients for Your Radiant Glow
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-primary-foreground/80 leading-relaxed"
            >
              We believe in the power of nature to nurture and restore your skin.
              Our products are crafted with the purest organic ingredients,
              harnessing the gifts of the earth to create a radiant, healthy glow.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
