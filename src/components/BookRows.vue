<template>
  <div class="book-rows">
    <div class="book-rows__top">
      <div class="book-rows__title"><slot name="title"></slot></div>
      <a :href="link" class="book-rows__link" v-if="link"
        ><slot name="link"></slot
      ></a>
    </div>
    <div class="book-rows__books">
      <swiper
        :slides-per-view="6"
        space-between="24"
        :modules="modules"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
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
      <div class="book-rows__nav book-rows__nav_prev" ref="prev">
        <img
          src="@/assets/img/slide-arrow.svg"
          class="book-rows__nav-arrow"
          alt
        />
      </div>
      <div class="book-rows__nav book-rows__nav_next" ref="next">
        <img src="@/assets/img/slide-arrow.svg" alt />
      </div>
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
  name: "book-rows",
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
    link: {
      type: String,
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
.book-rows {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }

  &__link {
    color: var(--blue-color);
    font-size: 16px;
    line-height: 1.5em;
  }

  &__books {
    position: relative;
  }
  &__nav {
    --w: 40px;
    position: absolute;
    z-index: 5;

    top: 50%;
    transform: translateY(-50%);

    width: var(--w);
    height: var(--w);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: var(--white);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &_next {
      right: 0;
      transform: translate(50%, -50%);
      & img {
        transform: translate(10%, 0);
      }
    }
    &_prev {
      transform: translate(-50%, -50%) rotateY(180deg);
      left: 0;

      & img {
        transform: translate(10%, 0);
      }
    }
  }
}
</style>
