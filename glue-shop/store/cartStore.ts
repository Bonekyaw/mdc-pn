import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { CartType } from "@/types";

type State = {
  carts: CartType[];
};

type Actions = {
  addToCart: (product: CartType) => void;
  updateCart: (productId: number, itemId: number, quantity: number) => void;
  removeFromCart: (productId: number, itemId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

const initialState: State = {
  carts: [],
};

const useCartStore = create<State & Actions>()(
  immer((set, get) => ({
    ...initialState,
    addToCart: (product) => {
      set((state) => {
        // Check if the product already exists in the cart
        const existingCartIndex = state.carts.findIndex(
          (cart) => cart.id === product.id,
        );
        if (existingCartIndex > -1) {
          // If it exists, update the quantity of the existing cart
          product.items.forEach((item) => {
            const existingItemIndex = state.carts[
              existingCartIndex
            ].items.findIndex(
              (existingItem) =>
                existingItem.color === item.color &&
                existingItem.size === item.size,
            );

            if (existingItemIndex > -1) {
              // If the item exists, update its quantity
              state.carts[existingCartIndex].items[
                existingItemIndex
              ].quantity += item.quantity;
            } else {
              // If the item does not exist, add it to the existing cart
              state.carts[existingCartIndex].items.push(item);
            }
          });
        } else state.carts.push(product);
      });
    },
    updateCart: (productId, itemId, quantity) => {
      set((state) => {
        // Check if the product already exists in the cart
        const existingCartIndex = state.carts.findIndex(
          (cart) => cart.id === productId,
        );

        if (existingCartIndex < 0) return;

        const existingItemIndex = state.carts[
          existingCartIndex
        ].items.findIndex((item) => item.id === itemId);

        if (existingItemIndex < 0) return;

        state.carts[existingCartIndex].items[existingItemIndex].quantity =
          quantity;

        // If the quantity is 0, remove the item from the cart
        if (quantity <= 0) {
          state.carts[existingCartIndex].items.splice(existingItemIndex, 1);
        }
        // If the cart is empty after removing the item, remove the cart
        if (state.carts[existingCartIndex].items.length === 0) {
          state.carts.splice(existingCartIndex, 1);
        }
      });
    },
    removeFromCart: (productId, itemId) => {
      set((state) => {
        // Check if the product already exists in the cart
        const existingCartIndex = state.carts.findIndex(
          (cart) => cart.id === productId,
        );

        if (existingCartIndex < 0) return;

        const existingItemIndex = state.carts[
          existingCartIndex
        ].items.findIndex((item) => item.id === itemId);

        if (existingItemIndex < 0) return;

        // Remove the item from the cart
        state.carts[existingCartIndex].items.splice(existingItemIndex, 1);

        // If the cart is empty after removing the item, remove the cart
        if (state.carts[existingCartIndex].items.length === 0) {
          state.carts.splice(existingCartIndex, 1);
        }
      });
    },
    clearCart: () => set({ carts: [] }),
    getTotalItems: () => {
      const { carts } = get();

      return carts.reduce(
        (total, cart) =>
          total + cart.items.reduce((total, item) => total + item.quantity, 0),
        0,
      );
    },
    getTotalPrice: () => {
      const { carts } = get();

      return carts.reduce(
        (total, cart) =>
          total +
          cart.items.reduce(
            (itemTotal, item) => itemTotal + item.quantity * cart.price,
            0,
          ),
        0,
      );
    },
  })),
);

export default useCartStore;
