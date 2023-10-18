import { defineStore } from "pinia";
import { ref } from "vue";
export const useFavoriteStore = defineStore("favorite", () => {
  const favorite = ref([]);
  if (localStorage.getItem("fav")) {
    favorite.value = JSON.parse(localStorage.getItem("fav"));
  }
  const add = (pokemon) => {
    favorite.value.push(pokemon);
    localStorage.setItem("fav", JSON.stringify(favorite.value));
  };
  const remove = (id) => {
    favorite.value = favorite.value.filter((item) => item.id !== id);
    localStorage.setItem("fav", JSON.stringify(favorite.value));
    
  };
  const repeatedPokemon = (name) => {
   return favorite.value.some((item) => item.name == name);

  };
  return {
    favorite,
    add,
    remove,
    repeatedPokemon,
  };
});
