<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../store';

const isHomePage = ref(false);
const route = useRoute();
const userStore = useStore();

onMounted(() => {
  if (route.path === '/') {
    isHomePage.value = true;
  }
});
</script>

<template>
  <div class="header">
    <h1> BlockFlix </h1>
    <p v-if="!isHomePage && userStore.firstName && !['/register', '/login'].includes(route.path)">
      Hello {{ userStore.firstName }}!
    </p>
  </div>
  <div class="buttons" v-if="isHomePage">
    <RouterLink to="/register" class="button">Register</RouterLink>
    <RouterLink to="/login" class="button">Login</RouterLink>
  </div>
  <div class="buttons" v-if="!isHomePage">
    <RouterLink to="/cart" class="button">Cart</RouterLink>
    <RouterLink to="/settings" class="button">Settings</RouterLink>
    <RouterLink to="/" class="button">Logout</RouterLink>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.header {
  background-color: black;
  padding: 3px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: black;
  padding: 20px;
  margin-top: 80px;
}

.button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #f40612;
}

h1 {
  color: white;
  background-color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-style: italic;
  margin: 0;
}

p {
  background-color: black;
  color: white;
  font-size: 1.3rem;
  margin-top: 1px;
  padding: 1px;
  font-family: 'Poppins', sans-serif;
}
</style>
