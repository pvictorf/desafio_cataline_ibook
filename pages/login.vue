<template>
  <div>
    <LoginTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware({store, redirect}) {
    console.log(store.state)
    if (store.state.auth.token) {
      return redirect('/dashboard')
    }
  },
})
</script>
