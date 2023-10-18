<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData.js';
import {useFavoriteStore} from"@/store/favorite.js";
const { data, getData, loading } = useGetData();
const route = useRoute();
const router = useRouter();
const fav= useFavoriteStore();
const {add, repeatedPokemon}=fav;
const back = () => {
    router.push("/pokemons");
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>
<template>
    <div class="container" v-if="data">
        <h1>Poke name: {{ data.name }} </h1>
        <p>Poke heigh {{ data.height }}</p>
        <img :src="data.sprites?.front_default" />
        <button :disabled="repeatedPokemon(data.name)" class="btn btn-outline-warning" @click="add(data)">Add to favorite</button>
        <button @click="back" class="btn btn-outline-danger">
            Back
        </button>
    </div>
    <div v-else>
        <h1>No existe el pokemon</h1>
        <button @click="back" class="btn btn-outline-danger">
            Back
        </button>
    </div>
</template>