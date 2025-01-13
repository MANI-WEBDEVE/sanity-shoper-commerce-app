// Types for our cart store
type Product = {
  _id: string;
  price: number;
  quantity: number;
  color?: string;
}

type CartStore = {
  cart: Product[];
  cartTotal: number; 
  totalItems: number;
  addToCart: (params: {product: Product, quantity: number, color?: string}) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

// cartStore.js
import { create } from 'zustand';

// Create cart store with Zustand
// Manages shopping cart state including items, total price and count
const useCartStore = create<CartStore>((set) => ({
  // Initial empty cart state
  cart: [],
  cartTotal: 0,
  totalItems: 0,

  // Add/update product in cart
  // Takes product details, quantity and optional color
  addToCart: ({ product, quantity, color }) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex((item) => item._id === product._id);
      const newQuantity = parseInt(quantity as any, 10);

      // Remove product if quantity is 0 or negative
      if (newQuantity <= 0) {
        const updatedCart = state.cart.filter((item) => item._id !== product._id);
        return {
          cart: updatedCart,
          cartTotal: calculateCartTotal(updatedCart),
          totalItems: calculateTotalItems(updatedCart),
        };
      }

      // Update quantity if product exists
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity = newQuantity;

        return {
          cart: updatedCart,
          cartTotal: calculateCartTotal(updatedCart),
          totalItems: calculateTotalItems(updatedCart),
        };
      } else {
        // Add new product to cart
        return {
          cart: [...state.cart, { ...product, quantity: newQuantity, color: color }],
          cartTotal: calculateCartTotal([...state.cart, { ...product, quantity: newQuantity }]),
          totalItems: calculateTotalItems([...state.cart, { ...product, quantity: newQuantity }]),
        };
      }
    }),

  // Remove specific product from cart
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item._id !== productId);

      return {
        cart: updatedCart,
        cartTotal: calculateCartTotal(updatedCart),
        totalItems: calculateTotalItems(updatedCart),
      };
    }),

  // Clear entire cart
  clearCart: () => set({ cart: [], cartTotal: 0, totalItems: 0 }),
}));

// Calculate total price of cart
function calculateCartTotal(cart: Product[]): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Count total number of items in cart
function calculateTotalItems(cart: Product[]): number {
  return cart.reduce((total, item) => total + 1, 0);
}

export default useCartStore;
