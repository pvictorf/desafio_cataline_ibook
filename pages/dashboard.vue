<template>
  <div>
    <DashboardTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    middleware: 'authenticate',
})
</script>
