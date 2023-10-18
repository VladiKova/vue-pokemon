<script setup>
import {RouterLink} from 'vue-router';

defineProps(['pokemons']);

</script>
<template>
    <div class="card bg-dark mb-2">
        <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <h4 class="card-title text-info">{{pokemons.name.charAt(0).toUpperCase()+pokemons.name.slice(1)}}</h4>
            <router-link :to="`/pokemons/${pokemons.name}`">
                <button class="btn btn-outline-warning">
                    Show detail
                </button>
            </router-link>
        </div>
    </div>
</template>