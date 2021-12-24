<template>
  <form @submit.prevent="searchBooks" class="book-search">
    <input class="input" placeholder="Buscar por título" v-model="search" @keydown="suggestBooks" />
    <button type="submit">
      <Icon name="search" img="search.svg" />
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  data: () => ({
    search: ''
  }),
  methods: {
    async suggestBooks() {
      setTimeout(async () => await books.suggets(this.search), 1000)
    },
    async searchBooks() {
      try {
        books.isLoading(true)
        await books.search(this.search)
      } catch(e) {
        console.log(e)
      } finally {
        books.isLoading(false)
      }
    }
  },
  computed: {
    $suggestBooks() {
      return books.$suggestBooks
    }
  }
})
</script>

<style lang="scss" scoped>
.book-search {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 20px;

  padding: 0.5rem 1rem;
  width: 100%;
  border: 3px  solid color(dark, darkest);
  border-radius: 8px;

  button {
    cursor: pointer;
    text-align: center;
    border: none;
    background: none;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(1.2);
  }


}
</style>