<template>
  <img :class="`icon icon-${name}`" :alt="name" :src="iconPath(img)" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    img: String
  },
  methods: {
    iconPath(path: string) {
      return require(`@/assets/img/${path}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.component {
  
}
</style>