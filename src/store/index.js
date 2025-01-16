import { ref } from "vue";
import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useStore = defineStore('store', () => {
  const user = ref(null);
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

  const setUser = (firebaseUser) => {
    user.value = firebaseUser;
  };

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  return { user, cart, addToCart, removeFromCart, setUser };
});

export const userAuthorized = new Promise((resolve, reject) => {
  onAuthStateChanged(auth, user => {
    try {
      const store = useStore();
      store.user = user;
      const storedCart = localStorage.getItem(`cart_${store.user.email}`);

      store.cart = storedCart ? new Map(Object.entries(JSON.parse(storedCart))) : new Map();
      resolve();
    } catch (error) {
      reject();
    }
  })
})


