<script setup>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "../store";

  const props = defineProps(["genres"]);
  const router = useRouter();
  const selectedGenre = ref(28);
  const response = ref(null);
  const store = useStore();

  const getMovieByGenre = async () => {
    response.value = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`
    );
  };

  onMounted(getMovieByGenre);

  function addToCart(movie) {
    store.cart.set(String(movie.id), { title: movie.title || item.name, url: movie.poster_path })
    localStorage.setItem(`cart_${store.user.email}`, JSON.stringify(Object.fromEntries(store.cart)));
  }
</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre">
      <option v-for="genre of genres" :value="genre.id" :key="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card">
        <div @click="router.push(`/movies/${movie.id}`)">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
          <p class="movie-title">{{ movie.title }}</p>
        </div>
        <button v-if="!store.cart.has(String(movie.id))"
          @click="addToCart(movie)" class="movie-site">
          Buy
        </button>
        <button v-else  class="movie-site added">
          Added
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .movie-gallery {
    padding: 20px;
    color: white;
    background-color: #141414;
  }


  .movie-gallery h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }


  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }


  .movie-card {
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s;
    width: 200px;
  }


  .movie-card:hover {
    transform: scale(1.05);
  }


  .movie-poster {
    width: 100%;
    height: auto;
  }


  .movie-title {
    padding: 10px;
    text-align: center;
    font-size: 1.1rem;
    color: #ffffff;
  }


  select {
    background-color: #333;
    color: white;
    padding: 10px;
    border: 2px solid #444;
    border-radius: 5px;
    font-size: 1rem;
    width: 200px;
    margin: 10px 0;
  }


  select:focus {
    border-color: #e50914;
    outline: none;
  }


  .movie-site {
    background-color: #e50914;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-align: center;
    display: block;
    width: 100%;
    transition: background-color 0.3s, transform 0.3s;
  }


  .movie-site:hover {
    background-color: #b81d24;
    transform: scale(1.05);
  }


  .movie-site:active {
    background-color: #9c141f;
    transform: scale(0.98);
  }


  .movie-site:focus {
    outline: 2px solid #ffd700;
    outline-offset: 2px;
  }


  .added {
    background-color: #28a745;
  }


  .added:hover {
    background-color: darkgreen;
  }


  .added:active {
    background-color: #1e7e34;
  }


  .added:disabled {
    background-color: green;
    cursor: not-allowed;
  }
</style>