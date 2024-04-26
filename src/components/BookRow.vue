<template>
  <div class="books">
    <swiper
      :slides-per-view="defaultCount"
      space-between="16"
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <book-item
          :imgSrc="card.imgSrc"
          :raiting="card.raiting"
          :reviews="card.reviews"
          :show-like="true"
          :best-seller="card.bestseller"
          :new-item="card.new"
        >
          <template #price>{{ card.price }}</template>
          <template #oldPrice>{{ card.oldPrice }}</template>
          <template #name>{{ card.name }}</template>
          <template #discount>{{ card.discount }}</template>
        </book-item>
      </swiper-slide>
    </swiper>
    <div
      class="slide-button slide-button_prev books__nav books__nav_prev"
      ref="prev"
    >
      <img src="@/assets/img/slide-arrow.svg" class="books__nav-arrow" alt />
    </div>
    <div
      class="slide-button slide-button_next books__nav books__nav_next"
      ref="next"
    >
      <img src="@/assets/img/slide-arrow.svg" alt />
    </div>
  </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { ref } from "vue";
export default {
  name: "book-row",
  components: {
    BookItem,
    Swiper,
    SwiperSlide,
  },
  props: {
    cards: {
      type: Object,
      required: true,
    },
    defaultCount: {
      type: Number,
      default: 2,
    },
    breakpoints: {
      type: Object,
    },
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>

<style lang="scss" scoped>
.books {
  position: relative;
  &__nav {
    top: 114px;
    @media (max-width: 320px) {
      top: 66px;
    }
    &_next {
      transform: translate(50%, 0);
      @media (max-width: 320px) {
        transform: translate(10%, 0);
      }
    }
    &_prev {
      transform: translate(-50%, 0) rotateY(180deg);
      @media (max-width: 320px) {
        transform: translate(-10%, 0) rotateY(180deg);
      }
    }
  }
}
</style>
