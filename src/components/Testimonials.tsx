import { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Muhammad K. A.",
    location: "Abuja",
    rating: 5,
    text: "The Body Lotion is incredible! My skin has never felt so soft and hydrated. I've been using it for 3 months and the results are amazing.",
  },
  {
    name: "Rahina M.",
    location: "Maiduguri",
    rating: 5,
    text: "Finally found a skincare brand that truly delivers on its promises. The Claré Wash has transformed my skin completely!",
  },
  {
    name: "Fatima B.",
    location: "Lagos",
    rating: 5,
    text: "The Face Cream is my holy grail product. It's lightweight, absorbs quickly, and gives me that perfect glow every day.",
  },
  {
    name: "Aisha N.",
    location: "Kano",
    rating: 5,
    text: "I've tried countless body oils, but nothing compares to this! My skin glows naturally and feels incredibly smooth all day long.",
  },
  {
    name: "Zainab H.",
    location: "Port Harcourt",
    rating: 5,
    text: "The Black Soap is a game changer! It cleared my acne and left my skin feeling fresh and balanced. Highly recommend!",
  },
  {
    name: "Hauwa S.",
    location: "Kaduna",
    rating: 5,
    text: "Love the Face/Body Scrub! It gently exfoliates and leaves my skin so bright and smooth. Perfect for my skincare routine.",
  },
  {
    name: "Maryam A.",
    location: "Ibadan",
    rating: 5,
    text: "The Knuckle Remover works like magic! I saw visible results in just 2 weeks. My hands look so much better now.",
  },
  {
    name: "Yasmin O.",
    location: "Enugu",
    rating: 5,
    text: "Best skincare investment I've ever made! The products are natural, effective, and my skin has never looked healthier.",
  },
  {
    name: "Safiya I.",
    location: "Jos",
    rating: 5,
    text: "I'm obsessed with the body lotion! It smells amazing and keeps my skin moisturized all day without feeling greasy.",
  },
  {
    name: "Blessing E.",
    location: "Calabar",
    rating: 5,
    text: "LUMÉABILLY has completely changed my skincare game. Natural ingredients, amazing results, and affordable prices!",
  },
];

// Triple testimonials for infinite loop effect
const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const [dragX1, setDragX1] = useState(0);
  const [dragX2, setDragX2] = useState(0);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect for row 1
  useEffect(() => {
    if (isDragging1) return;

    const interval = setInterval(() => {
      setDragX1((prev) => {
        const cardWidth = 296; // 280px card + 16px gap
        const totalWidth = testimonials.length * cardWidth;
        const newX = prev - 1;
        
        // Reset when scrolled through original testimonials
        if (Math.abs(newX) >= totalWidth) {
          return 0;
        }
        return newX;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isDragging1]);

  // Auto-scroll effect for row 2 (opposite direction)
  useEffect(() => {
    if (isDragging2) return;

    const interval = setInterval(() => {
      setDragX2((prev) => {
        const cardWidth = 296;
        const totalWidth = testimonials.length * cardWidth;
        const newX = prev + 0.7; // Opposite direction, slower
        
        // Reset when scrolled back
        if (newX >= 0) {
          return -totalWidth;
        }
        return newX;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isDragging2]);

  const handleDragEnd1 = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragX1((prev) => {
      const cardWidth = 296;
      const totalWidth = testimonials.length * cardWidth;
      let newX = prev + info.offset.x;
      
      // Keep in bounds
      while (newX > 0) newX -= totalWidth;
      while (newX < -totalWidth * 2) newX += totalWidth;
      
      return newX;
    });
    setIsDragging1(false);
  };

  const handleDragEnd2 = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragX2((prev) => {
      const cardWidth = 296;
      const totalWidth = testimonials.length * cardWidth;
      let newX = prev + info.offset.x;
      
      // Keep in bounds
      while (newX > 0) newX -= totalWidth;
      while (newX < -totalWidth * 2) newX += totalWidth;
      
      return newX;
    });
    setIsDragging2(false);
  };

  return (
    <section className="section-padding bg-accent overflow-hidden">
      <div className="max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Row 1 */}
        <div className="mb-8 overflow-hidden" ref={containerRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -10000, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging1(true)}
            onDragEnd={handleDragEnd1}
            animate={{ x: dragX1 }}
            transition={{ duration: 0 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            style={{ width: 'max-content' }}
          >
            {tripleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`row1-${index}`}
                className="w-[280px] flex-shrink-0"
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background p-6 rounded-xl h-full relative group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-primary text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    
                    <p className="text-foreground mb-6 leading-relaxed italic text-sm min-h-[100px]">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* 3D Drop Shadow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scrolling opposite direction */}
        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -10000, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging2(true)}
            onDragEnd={handleDragEnd2}
            animate={{ x: dragX2 }}
            transition={{ duration: 0 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            style={{ width: 'max-content' }}
          >
            {tripleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`row2-${index}`}
                className="w-[280px] flex-shrink-0"
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background p-6 rounded-xl h-full relative group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-primary text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    
                    <p className="text-foreground mb-6 leading-relaxed italic text-sm min-h-[100px]">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* 3D Drop Shadow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Instruction text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center mt-8 text-muted-foreground text-sm tracking-wider px-4"
        >
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ← Drag to explore more reviews →
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}