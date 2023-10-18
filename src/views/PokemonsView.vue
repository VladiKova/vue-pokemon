<script setup>
import axios from 'axios';
import { ref } from 'vue';
import PokemonList from '../components/PokemonList.vue';
import {useGetData} from '@/composables/getData.js';

const {data,getData,loading,errorData}=useGetData();
getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <div class="container">
        <h1>First 20 Pokemons</h1>
        <p v-if="loading">Cargando...</p>
        <div class="alert alert-danger" v-if="errorData">{{ errorData }}</div>
        <pokemon-list v-if="data" v-for="(pokemon, index) in data.results" :key="index" :pokemons="pokemon">
        </pokemon-list>
        <button @click="getData(data.next)">Next</button>
    </div>
</template>