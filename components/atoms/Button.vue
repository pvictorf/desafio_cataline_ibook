<template>
  <button class="button" type="button" :class="[background]">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true },
    background: { type: String, default: 'light' }
  }
})
</script>

<style lang="scss" scoped>
.button {
  padding: .5rem 1rem;
  border-radius: 5rem;
  font-size: 1.1rem;
  text-align: center;
  transition: all .3s ease;
  cursor: pointer;
}
.button:hover {
  transform: scale(1.1);
}
.light {
  background: color('light');
}
</style>