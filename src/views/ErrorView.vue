<script setup>
</script>

<template>
    <div class="not-found-container">
      <h1>This page does not exist</h1>
      <p>We're sorry, but the page you are looking for cannot be found.</p>
      <router-link to="/" class="home-button">Return Home</router-link>
    </div>
  </template>
  
  <style scoped>
  .not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #141414;
    color: white;
    padding: 20px;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #e50914;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 2rem;
  }
  
  .home-button {
    padding: 12px 30px;
    background-color: #e50914;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  }
  
  .home-button:hover {
    background-color: #f40612;
    transform: scale(1.05);
  }
  
  .home-button:active {
    background-color: #d4070a;
  }
  
  .home-button:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
  </style>
  