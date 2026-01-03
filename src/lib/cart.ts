import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getDeliveryFee: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

// Dynamic delivery fee calculation
const calculateDeliveryFee = (subtotal: number): number => {
  if (subtotal === 0) return 0;
  if (subtotal < 10000) return 2000; // ₦2,000 for orders under ₦10,000
  if (subtotal < 20000) return 3000; // ₦3,000 for orders ₦10,000 - ₦19,999
  if (subtotal < 30000) return 4000; // ₦4,000 for orders ₦20,000 - ₦29,999
  if (subtotal < 50000) return 5000; // ₦5,000 for orders ₦30,000 - ₦49,999
  return 6000; // ₦6,000 for orders ₦50,000 and above
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          
          return { items: [...state.items, { product, quantity: 1 }] };
        });
      },
      
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity < 1) {
          get().removeItem(productId);
          return;
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      
      getDeliveryFee: () => {
        const subtotal = get().getSubtotal();
        return calculateDeliveryFee(subtotal);
      },
      
      getTotal: () => {
        const subtotal = get().getSubtotal();
        const deliveryFee = get().getDeliveryFee();
        return subtotal > 0 ? subtotal + deliveryFee : 0;
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'lumeabilly-cart',
    }
  )
);