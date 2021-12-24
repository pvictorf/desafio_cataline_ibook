<template>
  <div>
    <HomeTemplate />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { books } from '@/store'
  
  export default Vue.extend({
    layout: 'ibook', 
    async asyncData() {
      try {
        await books.index()
        await books.suggets()
      } catch(e) {
        console.warn(e)
      }
    }
  })
</script>