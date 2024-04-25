<template>
  <app-header></app-header>
  <div class="wrapper">
    <main-banner class="main-banner"></main-banner>
    <div class="gap">
      <app-row link="#">
        <template #title>Новинки книг</template>
        <template #link>Все новинки</template>
        <template #content>
          <book-row :cards="cards"></book-row>
        </template>
      </app-row>

      <div class="banners">
        <app-banner class="banners__banner" img-src="girl.png">
          <template #default
            >Собираемся <br />
            в школу!</template
          >
          <template #text
            >Скидки на учебники и школьные <br />
            принадлежности</template
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
            >Принадлежности для рисования, <br />
            тетради и многое другое.</template
          >
        </app-banner>
      </div>

      <app-row link="#">
        <template #title>Рекомендуем</template>
        <template #content>
          <book-row :cards="cards"></book-row>
        </template>
      </app-row>

      <div class="mixin-block">
        <app-banner
          link="#"
          :second-type="true"
          background-img="colors.png"
          class="mixin-block__banner banner_dark"
        >
          <template #default>Товары для творчества</template>
          <template #text>
            Принадлежности для рисования, <br />
            тетради и многое другое.</template
          >
        </app-banner>
        <app-row class="mixin-block__row">
          <template #content>
            <book-row :cards="cards" :show-count="3"></book-row>
          </template>
        </app-row>
      </div>

      <app-row link="#" class="last-block">
        <template #title>Новости и акции</template>
        <template #link>В раздел</template>
        <template #content>
          <div class="news-list">
            <news-card
              v-for="item in news"
              :key="item.id"
              :img-src="item.imgSrc"
              :link="item.link"
            >
              <template #title>{{ item.title }}</template>
              <template #body>{{ item.body }}</template>
            </news-card>
          </div>
        </template>
      </app-row>
    </div>
  </div>
  <socials-block></socials-block>

  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppRow from "@/components/AppRow.vue";
import MainBanner from "@/components/MainBanner.vue";
import AppBanner from "@/components/UI/AppBanner.vue";
import BookRow from "@/components/BookRow.vue";
import NewsCard from "@/components/NewsCard.vue";
import SocialsBlock from "@/components/SocialsBlock.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "app-main",
  components: {
    AppHeader,
    AppRow,
    AppFooter,
    MainBanner,
    AppBanner,
    BookRow,
    NewsCard,
    SocialsBlock,
  },

  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchCards: "cards/fetchCards",
      fetchNews: "news/fetchNews",
    }),
  },
  computed: {
    ...mapGetters({
      cards: "cards/cards",
      news: "news/news",
    }),
  },

  async mounted() {
    await this.fetchCards();
    await this.fetchNews();
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
  display: flex;
  gap: 24px;
  &__banner {
    flex-grow: 1;
    &:first-child {
      flex-basis: 816px;
      background-image: repeating-linear-gradient(
        45deg,
        rgba(136, 190, 63, 1),
        rgba(136, 190, 63, 1) 114px,
        rgba(38, 173, 69, 1) 114px,
        rgba(38, 173, 69, 1) 228px
      );
    }
    &:last-child {
      background-color: var(--hover-color);
      flex-basis: 576px;
    }
  }
}
.mixin-block {
  display: flex;
  gap: 24px;
  &__banner {
    background-color: rgba(241, 241, 241, 1);
    flex-basis: 644px;
  }
  &__row {
    width: 696px;
    flex-basis: 696px;
  }
}

.news-list {
  width: 100%;
  display: flex;
  gap: 24px;
}
.last-block {
  margin-bottom: 96px;
}
</style>
