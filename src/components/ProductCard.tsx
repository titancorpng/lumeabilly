import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-card transition-all duration-500 group-hover:shadow-glow">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.08 : 1,
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {product.size && (
                <motion.span
                  className="text-sm text-muted-foreground"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.size}
                </motion.span>
              )}
              <motion.button
                onClick={handleAddToCart}
                className="bg-primary text-primary-foreground px-6 py-3 flex items-center gap-2 text-sm font-medium tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </motion.button>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-5">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                ({product.reviews})
              </span>
            </div>

            {/* Product Name & Size */}
            <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}{" "}
              {product.size && (
                <span className="text-sm text-muted-foreground">
                  ({product.size})
                </span>
              )}
            </h3>

            {/* Price */}
            <p className="text-primary font-medium mt-1">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
