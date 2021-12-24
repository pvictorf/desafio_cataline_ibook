<template>
  <div class="book-search-list" v-show="$suggestBooks.length">
    <div class="book-list">
      <router-link :to="`/book/${book.id}`" class="book-item" v-for="book in $suggestBooks" :key="book.id" >
        <img class="book-cover" :src="book.cover" />
        <div class="book-info">
          <h3 class="title">{{book.title}}</h3>
          <i class="author">{{book.author}}</i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  computed: {
    $suggestBooks() {
      return books.$suggestBooks
    }
  }
})
</script>

<style lang="scss" scoped>
.book-search-list {
  display: block;
  background: #fff;
  width: 100%;

  .book-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 0.5rem;
    box-shadow: 1px 2px 2px 2px #CCC; 

    .book-item {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr;
      grid-gap: 1rem;
      padding: 0.5rem;
      border-bottom: 1px solid color('light');

      .book-cover {
        width: 40px;
        height: 40px;
        border-radius: 6px;
      }

      .book-info .title {
        color: color('dark', 'darkest');
      }

      .book-info .author {
        font-size: 0.9rem;
        color: #777;
      }  
    }
  }
}
</style>