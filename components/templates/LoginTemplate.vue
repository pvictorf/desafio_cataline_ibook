<template>
  <div class="login-template">
     <LoginForm />
  </div>
</template>

<style lang="scss" scoped>
.login-template {
  display: grid;
  align-content: center;
  justify-content: center;
  height: calc(100vh - 10.9rem);
  padding: 0 1rem;
  
  @include screen('small') {
    background-color: color('dark', 'darkest');
  }
}

</style>