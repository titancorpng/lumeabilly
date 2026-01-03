import bodyLotion from "@/assets/products/body-lotion.jpg";
import smallBodyOil from "@/assets/products/small-body-oil.jpg";
import blackSoap from "@/assets/products/black-soap.jpg";
import faceBodyScrub from "@/assets/products/face-body-scrub.jpg";
import faceCream from "@/assets/products/face-cream.jpg";
import clareWash from "@/assets/products/clare-wash.jpg";
import bigBodyOil from "@/assets/products/big-body-oil.jpg";
import knuckleRemover from "@/assets/products/knuckle-remover.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  size: string;          // ← FIXED
  currency: string;
  image: string;
  hoverImage: string;
  description: string;
  benefits: string[];
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "body-lotion",
    name: "Body Lotion",
    price: 7000,
    size: "250 ml",
    currency: "NGN",
    image: "/uploads/bodylotion(green).jpg",
    hoverImage: "/uploads/bodylotion(pink).jpg",
    description: "A luxuriously hydrating body lotion that deeply nourishes and softens your skin, leaving it silky smooth and radiant all day long.",
    benefits: ["Deep hydration", "Long-lasting moisture", "Silky smooth finish", "Non-greasy formula"],
    category: "Body Care",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "body-oil (big)",
    name: "Body Oil (big)",
    price: 8000,
    size: "100 ml",
    currency: "NGN",
    image: "/uploads/bodyoil(green).jpg",
    hoverImage: "/uploads/bodyoil(pink).jpg",
    description: "Our signature body oil enriched with nourishing oils for ultimate skin radiance and a healthy, luminous glow.",
    benefits: ["Luxurious hydration", "Long-lasting glow", "Premium blend", "Natural botanicals"],
    category: "Body Care",
    rating: 4.9,
    reviews: 178,
  },
    {
    id: "body-oil (small)",
    name: "Body Oil (small)",
    price: 4000,
    size: "55 ml",
    currency: "NGN",
    image: "/uploads/bodyoil(green).jpg",
    hoverImage: "/uploads/bodyoil(pink).jpg",
    description: "Our signature body oil enriched with nourishing oils for ultimate skin radiance and a healthy, luminous glow.",
    benefits: ["Luxurious hydration", "Long-lasting glow", "Premium blend", "Natural botanicals"],
    category: "Body Care",
    rating: 4.9,
    reviews: 178,
  },
  {
    id: "black-soap",
    name: "Black Soap",
    price: 5500,
    size: "250 ml",
    currency: "NGN",
    image: "/uploads/blacksoap(green).jpg",
    hoverImage: "/uploads/blacksoap(pink).jpg",
    description: "Traditional African black soap crafted with natural ingredients to gently exfoliate, cleanse, detoxify, and even out your skin tone.",
    benefits: ["Deep cleansing", "Detoxifying", "Natural ingredients", "Suitable for all skin types"],
    category: "Cleansers",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "face-body-scrub",
    name: "Face/Body Scrub",
    price: 5000,
    size: "250 ml",
    currency: "NGN",
    image: "/uploads/facebodyscrub(green).jpg",
    hoverImage: "/uploads/facebodyscrub(pink).jpg",
    description: "A gentle yet effective exfoliating scrub that removes dead skin cells and reveals a brighter, smoother complexion.",
    benefits: ["Gentle exfoliation", "Brightening effect", "Dual-purpose use", "Smooth texture"],
    category: "Exfoliants",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: "face-cream",
    name: "Face Cream",
    price: 4000,
    size: "50 ml",
    currency: "NGN",
    image: "/uploads/facecream(green).jpg",
    hoverImage: "/uploads/facecream(pink).jpg",
    description: "A rich, nourishing face cream that hydrates, lightens, protects, and revitalizes your skin for a youthful, radiant appearance.",
    benefits: ["Intense hydration", "Anti-aging properties", "Skin protection", "Radiant finish"],
    category: "Face Care",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "clare-wash",
    name: "Claré Wash",
    price: 9000,
    size: "100 ml",
    currency: "NGN",
    image: "/uploads/clarewash(green).jpg",
    hoverImage: "/uploads/clarewash(pink).jpg",
    description: "A premium clarifying oil free facial wash that gently removes impurities while maintaining your skin's natural moisture balance. It targets acne, hyperpigmentation and spot-prone skin.",
    benefits: ["Deep cleansing", "Pore refining", "Balanced hydration", "Gentle formula"],
    category: "Cleansers",
    rating: 4.8,
    reviews: 134,
  },
  {
    id: "knuckle-remover",
    name: "Knuckle Remover",
    price: 4500,
    size: "50 ml",
    currency: "NGN",
    image: "/uploads/kuckleremover(green).jpg",
    hoverImage: "/uploads/kuckleremover(green).jpg", // Only green version available
    description: "A targeted treatment cream designed to brighten and even out dark knuckles and joints for smooth, uniform skin tone.",
    benefits: ["Brightening formula", "Targeted treatment", "Even skin tone", "Visible results"],
    category: "Treatments",
    rating: 4.7,
    reviews: 112,
  },
];

export const formatPrice = (price: number, currency: string = "NGN"): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
  return products.slice(0, count);
};