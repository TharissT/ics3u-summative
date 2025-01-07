<script setup>
    import { useStore } from '../store';

    const store = useStore();
</script>

<template>
    <div class="cart">
      <h1>Shopping Cart</h1>
      <div class="item" v-for="([key, value]) in store.cart" :key="key">
        <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
        <h1>{{ value.title }}</h1>
        <button @click="store.cart.delete(key)" class="remove-button">Remove</button>
      </div>
      <router-link to="/movies" class="back-button">Back to Movies</router-link>
    </div>
  </template>
  
  <style scoped>
    h1 {
      color: #e50914;
      text-align: center;
      font-size: 2.5rem;
      margin-top: 20px;
      font-family: 'Helvetica Neue', Arial, sans-serif;
    }
  
    .cart {
      display: flex;
      flex-direction: column;
      background-color: #141414;
      gap: 2rem;
      height: 100vh;
      width: 100%;
      align-items: center;
      padding: 20px;
      overflow-y: auto;
    }
  
    .item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      width: 80%;
      background-color: #222;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
  
    .item:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
    }
  
    .item img {
      width: 120px;
      height: auto;
      border-radius: 8px;
    }
  
    .item .info {
      flex: 1;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  
    .item .info h3 {
      font-size: 1.2rem;
      font-weight: bold;
    }
  
    .item .info p {
      font-size: 1rem;
      color: #aaa;
    }
  
    .item .price {
      font-size: 1.3rem;
      font-weight: bold;
      color: #e50914;
    }
  
    .remove-button {
      padding: 10px 20px;
      background-color: #f40612;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
  
    .remove-button:hover {
      background-color: #e50914;
      transform: scale(1.05);
    }
  
    .remove-button:active {
      background-color: #c4070a;
      transform: scale(1);
    }
  
    .remove-button:focus {
      outline: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    }
  
    .back-button {
      padding: 12px 30px;
      background-color: #e50914;
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;
      text-align: center;
      border-radius: 50px;
      transition: background-color 0.3s ease, transform 0.2s ease;
      margin-top: 30px;
      display: inline-block;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    }
  
    .back-button:hover {
      background-color: #f40612;
      transform: scale(1.05);
    }
  
    .back-button:active {
      background-color: #d4070a;
      transform: scale(1);
    }
  
    .back-button:focus {
      outline: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    }
  </style>