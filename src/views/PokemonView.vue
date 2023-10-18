<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData.js';
const { data, getData, loading } = useGetData();
const route = useRoute();
const router = useRouter();
const back = () => {
    router.push("/pokemons");
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>
<template>
    <div class="container" v-if="data">
        <h1>Poke name: {{ data.id }} </h1>
        <p>Poke heigh {{ data.height }}</p>
        <img :src="data.sprites?.front_default" />
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