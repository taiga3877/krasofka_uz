import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],

  addToCart: (item) => {
    const { cartItems } = get();
    const isAlreadyInCart = cartItems.find((i) => i.id === item.id);

    if (isAlreadyInCart) return;

    const itemWithQuantity = { ...item, quantity: 1 };
    const updatedCart = [...cartItems, itemWithQuantity];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    set({ cartItems: updatedCart });
  },

  removeFromCart: (id) => {
    const { cartItems } = get();
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    set({ cartItems: updatedCart });
  },

  clearCart: () => {
    localStorage.removeItem('cartItems');
    set({ cartItems: [] });
  },

  updateQuantity: (id, quantity) => {
    const { cartItems } = get();

    // ❌ Удалить товар, если quantity < 1
    if (quantity < 1) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      set({ cartItems: updatedCart });
      return;
    }

    // ✅ Иначе — обновляем количество
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    set({ cartItems: updatedCart });
  },
}));

export { useCartStore };
