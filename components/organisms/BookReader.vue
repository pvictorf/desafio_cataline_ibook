<template>
  <section class="book-reader">
    <h2>{{ $book.title }}</h2>

    <div class="book-pages">
    <!-- Thumbs -->
    <div class="swiper-container thumbs" thumbsSlider="" >
      <div class="swiper-wrapper">
        <div class="swiper-slide thumb-cover">
          <img :src="$book.cover" :alt="$book.title" />
        </div>
        <div v-for="thumb in $book.pages" :key="thumb.id" class="swiper-slide thumb-content">
          <img class="thumb-image" src="@/assets/img/page.svg" />
          <span class="thumb-number">{{ thumb.pageNumber }}</span>
        </div>
      </div>
    </div>

    <!-- Pages -->
    <div class="swiper-container pages">
      <div class="swiper-wrapper">
        <div class="swiper-slide page-cover">
          <img :src="$book.cover" :alt="$book.title" />
        </div>
        <div v-for="page in $book.pages" :key="page.id" class="swiper-slide page-content">
          <div class="text" v-html="page.text"></div>
          <span class="page-number">{{ page.pageNumber }}</span>
        </div>
      </div>
    </div>

    <!-- navigation buttons -->
    <div class="nav">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    

   </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation, Pagination, Thumbs } from "swiper";
import 'swiper/swiper-bundle.css'
import { books } from '@/store'

Swiper.use([Navigation, Pagination, Thumbs]);

export default Vue.extend({
  mounted() {
    const thumbs = new Swiper(".thumbs", {
        spaceBetween: 18,
        slidesPerView: 2,
        breakpoints: {
          1000: { direction: 'vertical', slidesPerView: 4 }
        },
        centeredSlides: false,
        centeredSlidesBounds: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'horizontal'
    });

    const pages = new Swiper(".pages", {
      spaceBetween: 25,
      preventInteractionOnTransition: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbs,
      },
      watchOverflow: true,
      watchSlidesVisibility: false,
      watchSlidesProgress: false,
    });

    pages.on('slideChange', () => {
      thumbs.slideTo(pages.activeIndex)
    })

    thumbs.on('transitionStart', () => {
      pages.slideTo(thumbs.activeIndex)
    })
  },
  computed: {
    $book() { return books.$single }
  }
}) 
</script>

<style lang="scss" scoped>
.book-reader {
  display: grid;
  grid-gap: 2.5rem
}

.book-pages {
  position: relative;
  display: grid;
  max-height: 879px;
  grid-template-columns: 148px 1fr;
  grid-gap: 2.2rem;

  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    grid-template-rows: 206px 1fr;
    max-height: 100%;
  }

  .thumbs {
    margin: 0 !important;
    height: 100%;

    .thumb-content,
    .thumb-cover {
      width: 148px; 
      height: 100%;
      border: 2px solid #707070;
    }

    .thumb-content {
      display: grid;
      max-height: 206px;
      padding: 1.4rem 0.4rem;
      justify-items: center;
    }

    .thumb-content:hover,
    .thumb-content.swiper-slide-thumb-active {
      border: 2px solid color('dark', 'darkest');
    }
  }

  .pages {
    position: relative;
    width: 100%;
    height: auto;
    box-shadow: -1px 3px 21px 1px rgb(0 0 0 / 12%);
    border: 1px solid #e9e9e9;

    .page-content {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }

      .text::v-deep {
        padding: 4rem 2.5rem;
      }

      .text::v-deep p {
        text-align: justify;
        font-size: 1rem;
        line-height: 1.475rem;
      }

      .page-number {
        position: absolute;
        font-style: italic;
        font-size: 1.2rem;
        bottom: 1.2rem;
        right: 1.2rem;
      }
    }

  }

  .thumb-cover img,
  .page-cover img {
    display: block;
    width: 100%;
    height: 100%;

  }
  
  .nav {
    position: absolute;
    bottom: -30px;
    right: -10px;
    width: 114px;
 
    .swiper-button-prev,
    .swiper-button-next {
      width: 42px;
      height: 32px;
      background: color('dark', 'darkest');
      color: #FFF;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      content: "";
      width: 30px;
      height: 30px;
      background: url('@/assets/img/arrow.svg') no-repeat;
      background-position: center;
    }

    .swiper-button-next::after {
      transform: rotate(180deg);
    }
  }
  
}
</style>


