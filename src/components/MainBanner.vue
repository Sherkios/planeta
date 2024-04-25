<template>
  <div class="banner-block">
    <swiper
      :slides-per-view="'auto'"
      space-between="24"
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
    >
      <swiper-slide class="swiper-slide">
        <app-banner background-img="banner_1.png" class="banner">
          <template #default
            >Мы изменились <br />
            к лучшему
          </template>
          <template #text>
            Компания «Планета» провела <br />
            ребрендинг. Мы изменили наш <br />
            стиль и улучшили сайт.
          </template>
        </app-banner>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <app-banner class="banner__red banner">
          <template #default
            >Скидка 20% <br />
            на книги о любви!</template
          >
          <template #text>
            Скидка действует на книги <br />
            российских авторов в мягкой <br />
            обложке.
          </template>
        </app-banner>
      </swiper-slide>
    </swiper>
    <div class="slide-button slide-button_prev" ref="prev">
      <img
        src="@/assets/img/slide-arrow.svg"
        class="book-rows__nav-arrow"
        alt
      />
    </div>
    <div class="slide-button slide-button_next" ref="next">
      <img src="@/assets/img/slide-arrow.svg" alt />
    </div>
  </div>
</template>

<script>
import AppBanner from "@/components/UI/AppBanner.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    AppBanner,
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
.banner-block {
  position: relative;
}
.banner {
  width: 1056px;
  &__red {
    background-image: repeating-linear-gradient(
      45deg,
      rgba(201, 22, 39, 1),
      rgba(201, 22, 39, 1) 114px,
      rgba(234, 5, 32, 1) 114px,
      rgba(234, 5, 32, 1) 228px
    );
  }
}
.swiper-slide {
  max-width: max-content;
}
</style>
