<template>
  <div class="error-layout">
    <img class="image" src="@/assets/img/404.svg" alt="Algo deu errado :(" />
    <p class="text">
      A página que você está procurando<br />
      não existe ou foi removida
    </p>
    <NuxtLink class="link" to="/">Voltar para Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.error-layout {
  position: absolute;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  background-color: color('dark', 'darkest');

  .image {
    max-width: 500px;
    object-fit: contain;
    width: 100%;
  }

  .text {
    color: color('light');
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .link {
    max-width: 220px;
    background-color: color('light');
    color: #292929;
    font-size: 1.3rem;
    font-weight: 500;
    padding: .5rem 1rem;
    transition: all .3s ease;
  }
  
  .link:hover {
    color: color('light');
    background-color: color('dark');
  }
}
</style>