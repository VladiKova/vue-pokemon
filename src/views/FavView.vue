<script setup>
import { useFavoriteStore } from "@/store/favorite.js";
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
const useFavorite = useFavoriteStore();
const { favorite } = storeToRefs(useFavorite);
const { remove } = (useFavorite);
</script>
<template>
    <div>
        <h2>Favorite Pokemons: </h2>
        <p v-if="favorite.length ===0">Not favorite yet</p>
        <ul v-else class="list-group">
            <li class="list-group-item bg-dark text-info m-2" v-for="pokemon in favorite" :key="pokemon.id">
                <div>
                    {{ pokemon.name.toUpperCase() }}
                    {{ pokemon.id }}
                    <img :src="pokemon.sprites.front_default" />
                </div>
                <div>
                    <button class="btn btn-outline-danger" @click="remove(pokemon.id)">
                        🗑
                    </button>
                    <router-link class="btn btn-outline-info" :to="`/pokemons/${pokemon.name}`" >
                        ⓘ
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>