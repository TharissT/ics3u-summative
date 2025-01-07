import { ref } from "vue";
import { defineStore } from "pinia";


export const useStore = defineStore('store', () => {
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  const cart = ref(new Map());

  const addToCart = (id, item) => {
    const tempCart = new Map(cart.value);
    tempCart.set(id, item);
    cart.value = tempCart;
  };

  const removeFromCart = (id) => {
    const tempCart = new Map(cart.value);
    tempCart.delete(id);
    cart.value = tempCart;
  };

  return { firstName, lastName, email, password, cart, addToCart, removeFromCart };
});

