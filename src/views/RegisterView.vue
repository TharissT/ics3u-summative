<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'vue-router';
import { useStore } from '../store';

const store = useStore();
const router = useRouter();

const password = ref('');
const password2 = ref('');
const firstName = ref('');
const lastName = ref('');
const email = ref('');

async function registerByEmail() {
  if (password.value === password2.value) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;

      store.firstName = firstName.value;
      store.lastName = lastName.value;
      store.email = email.value;
      store.password = password.value;

      await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });

      store.user = user;

      router.push("/movies");
    } catch (error) {
      alert("There was an error creating a user with email!");
    }
  } else {
    window.alert("The passwords are not the same!");
  }
}

async function registerByGoogle(event) {
  event.preventDefault();
  try {
    const user = await signInWithPopup(auth, new GoogleAuthProvider());
    store.user = user.user;

    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with Google!");
  }
}
</script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <h1>BlockFlix</h1>
        <a href="login" class="button login">Login</a>
      </div>
      <div class="form-container">
        <h2>Create an Account</h2>
        <form @submit.prevent="registerByEmail">
          <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
          <input v-model="lastName" type="text" placeholder="Last name" class="input-field" required>
          <input v-model="email" type="email" placeholder="Email" class="input-field" required>
          <input v-model="password" type="password" placeholder="Password" class="input-field" required>
          <input v-model="password2" type="password" placeholder="Re-enter Password" class="input-field" required>
          <button type="submit" class="button register">Register</button>
        </form>
        <button @click="registerByGoogle" class="button register">Register by Google</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.hero {
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background-color: black;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
  justify-content: flex-start;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.navbar h1 {
  font-size: 2.5rem;
  font-family: 'Arial', sans-serif;
  color: #e50914;
  font-weight: bold;
}

.navbar .login {
  background-color: #e50914;
  color: white;
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

.navbar .login:hover {
  background-color: #f40612;
  transform: scale(1.05);
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 40px 50px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
}

.form-container h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
}

.input-field {
  padding: 15px;
  width: 100%;
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

.register {
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
  margin-top: 10px;
}

.register:hover {
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

  .register {
    padding: 10px 20px;
  }
}
</style>