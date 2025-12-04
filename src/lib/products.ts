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
  currency: string;
  image: string;
  hoverImage?: string;
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
    currency: "NGN",
    image: bodyLotion,
    description: "A luxuriously hydrating body lotion that deeply nourishes and softens your skin, leaving it silky smooth and radiant all day long.",
    benefits: ["Deep hydration", "Long-lasting moisture", "Silky smooth finish", "Non-greasy formula"],
    category: "Body Care",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "small-body-oil",
    name: "Small Body Oil",
    price: 4000,
    currency: "NGN",
    image: smallBodyOil,
    description: "A lightweight, fast-absorbing body oil enriched with natural botanicals to give your skin a healthy, luminous glow.",
    benefits: ["Natural glow", "Quick absorption", "Botanical extracts", "Travel-friendly size"],
    category: "Body Care",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "black-soap",
    name: "Black Soap",
    price: 5500,
    currency: "NGN",
    image: blackSoap,
    description: "Traditional African black soap crafted with natural ingredients to gently cleanse, detoxify, and balance your skin.",
    benefits: ["Deep cleansing", "Detoxifying", "Natural ingredients", "Suitable for all skin types"],
    category: "Cleansers",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "face-body-scrub",
    name: "Face/Body Scrub",
    price: 5000,
    currency: "NGN",
    image: faceBodyScrub,
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
    currency: "NGN",
    image: faceCream,
    description: "A rich, nourishing face cream that hydrates, protects, and revitalizes your skin for a youthful, radiant appearance.",
    benefits: ["Intense hydration", "Anti-aging properties", "Skin protection", "Radiant finish"],
    category: "Face Care",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "clare-wash",
    name: "Claré Wash",
    price: 8500,
    currency: "NGN",
    image: clareWash,
    description: "A premium clarifying facial wash that gently removes impurities while maintaining your skin's natural moisture balance.",
    benefits: ["Deep cleansing", "Pore refining", "Balanced hydration", "Gentle formula"],
    category: "Cleansers",
    rating: 4.8,
    reviews: 134,
  },
  {
    id: "big-body-oil",
    name: "Big Body Oil",
    price: 8000,
    currency: "NGN",
    image: bigBodyOil,
    description: "Our signature body oil in a generous size, perfect for daily use. Enriched with nourishing oils for ultimate skin radiance.",
    benefits: ["Luxurious hydration", "Long-lasting glow", "Value size", "Premium blend"],
    category: "Body Care",
    rating: 4.9,
    reviews: 178,
  },
  {
    id: "knuckle-remover",
    name: "Knuckle Remover",
    price: 4500,
    currency: "NGN",
    image: knuckleRemover,
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
