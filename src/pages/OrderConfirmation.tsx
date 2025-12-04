import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Package, Mail } from "lucide-react";
import { Layout } from "@/components/Layout";

const OrderConfirmation = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="container-wide max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="h-12 w-12 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl md:text-4xl text-foreground mb-4"
          >
            Thank You for Your Order!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-8"
          >
            Your order has been successfully placed. We'll send you a confirmation email shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card p-8 rounded-lg mb-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Order Placed</p>
                  <p className="text-sm text-muted-foreground">Processing</p>
                </div>
              </div>

              <div className="hidden md:block w-16 h-0.5 bg-border" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Confirmation</p>
                  <p className="text-sm text-muted-foreground">Email sent</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              Our team will prepare your order and reach out to you shortly with delivery details.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/"
                className="border border-primary text-primary px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
