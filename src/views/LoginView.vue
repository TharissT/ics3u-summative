<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from "../store"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"

const store = useStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const loginByEmail = async () => {
  try {
    const user = (await signInWithEmailAndPassword(auth, email.value, password.value)).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    console.log(error);
    alert("There was an error signing in with email!");
  }
};

const loginByGoogle = async () => {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error signing in with Google!");
  }
};
</script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <h1>BlockFlix</h1>
        <RouterLink to="/register" class="button register">Register</RouterLink>
      </div>
      <div class="form-container">
        <h2>Login to Your Account</h2>
        <form @submit.prevent="loginByEmail()">
          <input v-model:="email" type="email" placeholder="Email" class="input-field" required />
          <input v-model:="password" type="password" placeholder="Password" class="input-field" required />
          <button type="submit" class="button login">Login</button>
        </form>
        <button @click="loginByGoogle()" type="submit" class="button login">Login by Google</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hero {
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: black;
    overflow: hidden;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 20px;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px 40px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .navbar h1 {
    font-size: 2.5rem;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #e50914;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .navbar .register {
    background-color: #e50914;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s;
  }

  .navbar .register:hover {
    background-color: #f40612;
    transform: scale(1.05);
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    background-color: rgba(0, 0, 0, 0.85);
    padding: 40px 50px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    width: 100%;
    max-width: 400px;
    text-align: center; 
  }

  .form-container h2 {
    font-size: 2rem;
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .input-field {
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #444;
    margin-bottom: 20px;
    background-color: #333;
    color: white;
    font-size: 1rem;
    transition: border-color 0.3s;
  }

  .input-field:focus {
    border-color: #e50914;
    outline: none;
    box-shadow: 0 0 8px rgba(229, 9, 20, 0.6);
  }

  .login {
    background-color: #e50914;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    letter-spacing: 1px;
  }

  .login:hover {
    background-color: #f40612;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .navbar {
      padding: 15px 20px;
    }

    .navbar h1 {
      font-size: 2rem;
    }

    .form-container {
      padding: 30px 20px;
    }

    .form-container h2 {
      font-size: 1.8rem;
    }

    .input-field {
      padding: 12px;
    }

    .login {
      padding: 10px 20px;
    }
  }
</style>