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
      } catch(e) {
        console.log(e)
      }
      
    }
  })
</script>