import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const itemCount = useCart((state) => state.getItemCount());
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <nav ref={menuRef} className="container-wide flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 z-50 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="LUMÉABILLY" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.href
                    ? "text-primary drop-shadow-glow"
                    : "text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
                }`}
              >
                {link.name}
                {/* Underline indicator */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.href 
                    ? "w-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" 
                    : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"
                }`} />
                {/* Background glow on hover */}
                <span className={`absolute inset-0 -z-10 rounded-md transition-all duration-300 ${
                  location.pathname === link.href
                    ? "bg-primary/10 blur-sm scale-110"
                    : "bg-transparent group-hover:bg-primary/5 group-hover:blur-sm group-hover:scale-110"
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 z-50">
            <Link
              to="/cart"
              className="relative p-2 transition-all duration-300 hover:text-primary hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border-b border-border shadow-lg"
            >
              <div className="container-wide py-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-medium py-3 px-4 rounded-md transition-all relative ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                          : "text-muted-foreground hover:text-primary hover:bg-secondary/50 hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]"
                      }`}
                    >
                      {link.name}
                      {/* Active indicator */}
                      {location.pathname === link.href && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]" />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Cart Link for Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4 pt-4 border-t border-border"
                >
                  <Link
                    to="/cart"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-lg font-medium py-3 px-4 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5" />
                      Shopping Cart
                    </span>
                    {itemCount > 0 && (
                      <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Overlay - Closes menu when clicked */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}