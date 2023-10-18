<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>


<template>
  <nav class="container navbar navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Poke Api
      </router-link>
      <div class="d-flex ">
        <router-link class="btn btn-outline-info" to="/">Home</router-link>
        <router-link class="btn btn-outline-info" to="/pokemons">Pokemons List</router-link>
        <router-link class="btn btn-outline-info" to="/about">About</router-link>
        <router-link class="btn btn-outline-info" to="/favorite">Favorite</router-link>

      </div>
    </div>
  </nav>
  <div class="container text-center">
    <RouterView />
  </div>
</template>
<style>
.btn{
  margin: 5px;
}
</style>
