import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  { image: hero1, alt: "Luxury skincare products" },
  { image: hero2, alt: "Glowing skin" },
  { image: hero3, alt: "Body oil" },
  { image: hero4, alt: "Skincare routine" },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  }, [page]);

  const nextSlide = useCallback(() => {
    paginate(1);
  }, [paginate]);

  const prevSlide = useCallback(() => {
    paginate(-1);
  }, [paginate]);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const slideTransition = {
    x: { type: "spring" as const, stiffness: 300, damping: 30 },
    opacity: { duration: 0.4 },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/60 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="text-center text-primary-foreground px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Your Glow, Refined.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-8"
          >
            LUMÉABILLY
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pointer-events-auto"
          >
            <Link
              to="/products"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-secondary hover:text-primary transition-all duration-300 rounded-md"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-black/50 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-black/50 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const newDirection = index > currentSlide ? 1 : -1;
              setPage([page + newDirection, newDirection]);
              setCurrentSlide(index);
            }}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "bg-primary-foreground w-8 h-3 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe Indicator - Mobile only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs tracking-wider md:hidden"
      >
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ← Swipe →
        </motion.div>
      </motion.div>
    </section>
  );
}