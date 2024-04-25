<template>
  <app-header></app-header>
  <div class="wrapper">
    <main-banner class="main-banner"></main-banner>
    <div class="gap">
      <book-rows :cards="cards" link="#">
        <template #title>Новинки книг</template>
        <template #link>Все новинки</template>
      </book-rows>
      <default-banner class="banners">
        <app-banner class="banners__banner" img-src="girl.png">
          <template #default>Собираемся в школу!</template>
          <template #text
            >Скидки на учебники и школьные принадлежности</template
          >
        </app-banner>
        <app-banner
          class="banners__banner"
          img-src="cans.png"
          link="#"
          :second-type="true"
        >
          <template #default>Канцтовары</template>
          <template #text
            >Принадлежности для рисования, тетради и многое другое.</template
          >
        </app-banner>
      </default-banner>
      <book-rows :cards="cards" link="#">
        <template #title>Рекомендуем</template>
      </book-rows>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import BookRows from "@/components/BookRows.vue";
import MainBanner from "@/components/MainBanner.vue";
import AppBanner from "@/components/UI/AppBanner.vue";
import DefaultBanner from "@/components/DefaultBanner.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "app-main",
  components: {
    AppHeader,
    BookRows,
    MainBanner,
    AppBanner,
    DefaultBanner,
  },

  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchCards: "cards/fetchCards",
    }),
  },
  computed: {
    ...mapGetters({
      cards: "cards/cards",
    }),
  },

  async mounted() {
    await this.fetchCards();
  },
};
</script>

<style lang="scss" scoped>
.main-banner {
  margin-bottom: 56px;
}
.gap {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.banners {
  &__banner {
    flex-grow: 1;
    &:first-child {
      flex-basis: 816px;
      background-image: repeating-linear-gradient(
        45deg,
        rgba(38, 173, 69, 1),
        rgba(38, 173, 69, 1) 114px,
        rgba(136, 190, 63, 1) 114px,
        rgba(136, 190, 63, 1) 228px
      );
    }
    &:last-child {
      background-color: var(--hover-color);
      flex-basis: 576px;
    }
  }
}
</style>
