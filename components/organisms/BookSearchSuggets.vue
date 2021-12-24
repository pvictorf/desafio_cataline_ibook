<template>
  <div class="book-search-suggets">
    <BookSearch />
    <BookSearchList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style lang="scss" scoped>
.book-search-suggets {
  position: relative;

  .book-search-list {
    position: absolute;
  }
}
</style>