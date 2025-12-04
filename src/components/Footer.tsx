import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="LUMÉABILLY" className="h-12 w-auto invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your Glow Redefined. Premium skincare products crafted with love and nature's finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Shop All
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
              <Link to="/cart" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Shopping Cart
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Body Care
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Face Care
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cleansers
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Treatments
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@lumeabilly.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} LUMÉABILLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
