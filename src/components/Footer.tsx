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
              Your Glow, Refined. Premium skincare products crafted with love and nature's finest ingredients.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.instagram.com/lumeabilly?igsh=M3diNDRoM3FnODh4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@lumeabilly?_r=1&_t=ZS-91wZdFkVBuG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <svg 
                  className="h-5 w-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Snapchat */}
              <a
                href="https://snapchat.com/t/UlYq4A1w"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Snapchat"
              >
                <svg 
                  className="h-5 w-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.206 2.024c.995 0 2.092.186 3.013.738.918.549 1.46 1.41 1.635 2.508.045.308.063.616.063.925v.148c.001.401-.014.8-.045 1.207a13.1 13.1 0 0 0 1.372.788c.232.114.465.214.714.299.231.078.479.128.722.128.216 0 .429-.033.617-.117a.954.954 0 0 0 .412-.359c.095-.15.143-.328.143-.508 0-.203-.061-.405-.182-.569a1.09 1.09 0 0 0-.445-.36 2.237 2.237 0 0 1-.478-.313.686.686 0 0 1-.228-.518c0-.232.088-.434.263-.607.176-.173.396-.26.656-.26.267 0 .507.097.72.29.213.193.319.45.319.77 0 .424-.159.815-.476 1.173-.317.357-.751.623-1.302.797a3.926 3.926 0 0 1-1.487.261c-.644 0-1.255-.12-1.832-.358a7.013 7.013 0 0 1-1.548-.937 11.984 11.984 0 0 0-.05 1.317c-.013.433-.049.862-.108 1.286-.059.424-.15.84-.273 1.248-.123.408-.286.804-.488 1.187-.803 1.522-2.107 2.55-3.913 3.084-.425.126-.856.215-1.292.267a7.12 7.12 0 0 1-1.301.076c-.908 0-1.763-.134-2.565-.403-.803-.269-1.477-.681-2.024-1.237-.546-.556-.951-1.227-1.215-2.013-.264-.786-.396-1.665-.396-2.638 0-.954.127-1.82.38-2.599.254-.779.616-1.45 1.088-2.013.471-.564 1.046-1.005 1.726-1.323.679-.318 1.448-.477 2.307-.477.424 0 .844.047 1.26.14.416.093.82.23 1.21.41.39.18.767.398 1.131.653.365.255.716.544 1.054.867v-.148c0-.309.018-.617.054-.925.175-1.098.717-1.96 1.635-2.508.921-.552 2.018-.738 3.013-.738z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/products"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Shop All
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/cart"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Shopping Cart
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/products"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Body Care
              </Link>
              <Link
                to="/products"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Face Care
              </Link>
              <Link
                to="/products"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Cleansers
              </Link>
              <Link
                to="/products"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Treatments
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:bilqisms94@gmail.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>bilqisms94@gmail.com</span>
              </a>
              <a 
                href="tel:+2347032102494"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+234 703 210 2494</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Abuja & Maiduguri</span>
              </div>
              <a
                href="https://wa.me/2347032102494"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
              >
                <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} LUMÉABILLY. All rights reserved. Designed by Titan Tech.
          </p>
        </div>
      </div>
    </footer>
  );
}