import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Truck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

const Cart = () => {
  const { items, updateQuantity, removeItem, getSubtotal, getDeliveryFee, getTotal } = useCart();
  const subtotal = getSubtotal();
  const deliveryFee = getDeliveryFee();
  const total = getTotal();

  // Helper function to get next delivery tier info
  const getDeliveryTierInfo = () => {
    if (subtotal < 10000) {
      return {
        nextTier: 10000,
        savings: 1000,
        message: `Add ${formatPrice(10000 - subtotal)} more to reduce delivery fee to ${formatPrice(3000)}`
      };
    }
    if (subtotal < 20000) {
      return {
        nextTier: 20000,
        savings: 1000,
        message: `Add ${formatPrice(20000 - subtotal)} more to reduce delivery fee to ${formatPrice(4000)}`
      };
    }
    if (subtotal < 30000) {
      return {
        nextTier: 30000,
        savings: 1000,
        message: `Add ${formatPrice(30000 - subtotal)} more to get delivery for ${formatPrice(5000)}`
      };
    }
    if (subtotal < 50000) {
      return {
        nextTier: 50000,
        savings: 1000,
        message: `Add ${formatPrice(50000 - subtotal)} more to get delivery for ${formatPrice(6000)}`
      };
    }
    return null;
  };

  const tierInfo = getDeliveryTierInfo();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products yet. 
              Start shopping to fill your cart!
            </p>
            <Link
              to="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-md"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-wide py-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-foreground mb-8"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-card rounded-lg shadow-soft"
              >
                <Link to={`/products/${item.product.id}`} className="flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-md hover:opacity-80 transition-opacity"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.product.id}`}>
                    <h3 className="font-serif text-lg text-foreground hover:text-primary transition-colors">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-primary font-medium mt-1">
                    {formatPrice(item.product.price)}
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary/50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary/50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-foreground">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Delivery Tier Info */}
            {tierInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3"
              >
                <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <span className="font-medium">💡 Tip:</span> {tierInfo.message}
                </p>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 rounded-lg h-fit shadow-soft"
          >
            <h2 className="font-serif text-xl text-foreground mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="text-foreground">{formatPrice(deliveryFee)}</span>
              </div>
              
              {/* Delivery Fee Breakdown */}
              <div className="bg-secondary/30 rounded-md p-3 text-xs text-muted-foreground">
                <p className="font-medium mb-1">Delivery Rates:</p>
                <ul className="space-y-1">
                  <li>Under ₦10,000: ₦2,000</li>
                  <li>₦10,000 - ₦20,000: ₦3,000</li>
                  <li>₦20,000 - ₦30,000: ₦4,000</li>
                  <li>₦30,000 - ₦50,000: ₦5,000</li>
                  <li>₦50,000 - ₦100,000: ₦6,000</li>
                </ul>
              </div>

              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-medium">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary text-lg">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-primary text-primary-foreground py-4 flex items-center justify-center text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-md"
            >
              Proceed to Checkout
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;