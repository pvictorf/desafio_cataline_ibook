<template>
  <div class="dashboard">
    <img class="logo" src="@/assets/img/dashboard.svg" alt="Logo Dashboard" />
    <PageTitle text="Você está no" strong="Dashboard" />
    <button class="button" @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '~/store'

export default Vue.extend({
  methods: {
    async logout() {
      await auth.logout()
      this.$router.replace('/login')
    }
  }
})
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-gap: 2.5rem;
  justify-items: center;

  .logo {
    width: 120px;
  }

  .button {
    background-color: #292929;
    color: #f7f7f7;
    font-size: 1.3rem;
    font-weight: 500;
    padding: .5rem 1rem;
    transition: transform .3s ease;
    cursor: pointer;
  }

  .button:hover {
    transform: scale(1.2);
  } 
}
</style>