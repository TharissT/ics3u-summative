<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '../store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const store = useStore();
const isHomePage = ref(false);
const route = useRoute();
const router = useRouter();

onMounted(() => {
    if (route.path === '/') {
        isHomePage.value = true;
    }
});
const logout = () => {
  store.user = null;
  signOut(auth);
  router.push("/");
}
</script>

<template>
    <div class=header>
        <h1>BlockFlix</h1>
    </div>
    <div class="buttons" v-if="isHomePage">
        <RouterLink to="/register" class="button">Register</RouterLink>
        <RouterLink to="/login" class="button">Login</RouterLink>
    </div>
    <div class="buttons" v-if="!isHomePage">
        <h1>Welcome, {{ store.user?.displayName || 'Guest' }}</h1>
        <RouterLink to="/cart" class="button">Cart</RouterLink>
        <RouterLink to="/settings" class="button">Settings</RouterLink>
        <button @click="logout" class="button">Logout</button>
    </div>
</template>

<style scoped>
h1 {
    color: white;
    text-align: center;
    font-size: 50px;
    margin: 0;
    font-family: 'Georgia', serif;
}

.header {
    font-family: 'Georgia', 'Times New Roman', Times, serif;
    font-weight: 400;
    font-style: italic;
    background-color: #000;
    text-align: center;
    width: 100%;
    padding: 30px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    color: #f0f0f0;
}

.buttons {
    display: flex;
    justify-content: center;
    background-color: #000;
    padding: 10px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.buttons h1 {
    color: white;
    font-size: 20px;
    margin-right: auto;
    padding-left: 20px;
}

.button {
    padding: 20px 14px;
    margin: 0 8px;
    background-color: #e50914;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.3s, transform 0.2s ease-in-out;
}

.button:hover {
    background-color: #f40612;
    transform: scale(1.05);
}

.button:active {
    transform: scale(1.02);
}

.welcome h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-style: italic;
    margin: 0;
    padding-left: 20px;
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


