<template>
  <section class="releases">
    <div class="releases-actions">
      <h2>Lançamentos</h2>
      <BookSearchSuggets />
    </div>
    <BookList />
  </section>
</template>

<style lang="scss" scoped>
.releases {
  display: grid;
  grid-gap: 1.3rem;

  .releases-actions {
    display: grid;
    grid-gap: 1rem;
    align-items: center;
    grid-auto-columns: auto 400px;
    grid-auto-flow: column;
    padding-bottom: 1rem;
    h2 {
      font-size: 1.375rem;
      font-weight: 500;
      color: color(dark, darkest);
    }
  }

  .book-search-suggets {
    z-index: 2;
  }

  .book-list {
    z-index: 0;
  }

  @include screen('small', 'medium') {
    .releases-actions {
      display: grid;
      grid-auto-columns: auto 400px;
      grid-auto-flow: row;
    }
  }
}

</style>