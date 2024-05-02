<template>
  <div class="sales" v-show="showSales">
    <div class="sales__info">
      <svg
        class="sales__svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.81877 19.3165L2 9H22L21.1812 19.3165C21.0162 21.3963 19.2802 23 17.1938 23H6.80623C4.71982 23 2.98384 21.3963 2.81877 19.3165Z"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M7 9V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V9"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      <div class="sales__text">
        Совместные покупки для садиков, школ и университетов со скидкой до 10%
      </div>
    </div>
    <div class="sales__close" @click="hideSales">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.6672 1L1.35353 12.3137" stroke="white" stroke-width="2" />
        <path
          d="M12.3137 12.3137L1.00001 1.00001"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
  <app-header></app-header>
  <main-banner class="main-banner"></main-banner>
  <div class="gap">
    <app-row link="#">
      <template #title>Новинки книг</template>
      <template #link>Все новинки</template>
      <template #content>
        <div class="wrapper">
          <book-row
            :cards="cards"
            :breakpoints="{ 321: { slidesPerView: 6, spaceBetween: 24 } }"
          ></book-row>
        </div>
      </template>
    </app-row>

    <div class="wrapper">
      <div class="banners">
        <app-banner
          class="banners__banner"
          img-src="girl.png"
          mobile-img-src="girl_mobile.png"
          :show-mobile-text="false"
        >
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
          class="banners__banner banner_title32"
          img-src="cans.png"
          mobile-img-src="cans_mobile.png"
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
    </div>

    <app-row link="#">
      <template #title>Рекомендуем</template>
      <template #content>
        <div class="wrapper">
          <book-row
            :cards="cards"
            :breakpoints="{ 321: { slidesPerView: 6, spaceBetween: 24 } }"
          ></book-row>
        </div>
      </template>
    </app-row>

    <div class="wrapper">
      <div class="mixin-block">
        <app-banner
          link="#"
          :second-type="true"
          background-img="colors.png"
          class="mixin-block__banner banner_dark banner_title32"
          mobile-bg-img-src="colors_mobile.png"
          :show-mobile-text="false"
        >
          <template #default
            >Товары <br class="mobile-show" />
            для творчества</template
          >
          <template #text>
            Принадлежности для рисования, <br />
            тетради и многое другое.</template
          >
        </app-banner>
        <app-row class="mixin-block__row">
          <template #content>
            <book-row
              :cards="cards"
              :breakpoints="{ 321: { slidesPerView: 3, spaceBetween: 24 } }"
            ></book-row>
          </template>
        </app-row>
      </div>
    </div>

    <div class="last-block">
      <div class="wrapper last-block__wrapper">
        <app-row link="#">
          <template #title>Новости и акции</template>
          <template #link>В раздел</template>
          <template #content>
            <div class="wrapper last-block__wrapper">
              <div class="news-list">
                <news-card
                  v-for="item in news"
                  :key="item.id"
                  :img-src="item.imgSrc"
                  :mobile-src="item.mobileSrc"
                  :link="item.link"
                >
                  <template #title>{{ item.title }}</template>
                  <template #body>{{ item.body }}</template>
                </news-card>
              </div>
            </div>
          </template>
        </app-row>
      </div>
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
import AppBanner from "@/components/AppBanner.vue";
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
  data() {
    return {
      showSales: true,
    };
  },

  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchCards: "cards/fetchCards",
      fetchNews: "news/fetchNews",
    }),
    hideSales() {
      this.showSales = false;
    },
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
.sales {
  position: relative;
  padding: 20px;
  background-color: #000;
  display: flex;
  justify-content: center;
  text-align: center;
  &__info {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__svg {
  }

  &__text {
    color: var(--white);
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }

  &__close {
    --w: 24px;
    width: var(--w);
    height: var(--w);
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
}

.main-banner {
  margin-top: 31.72px;
  margin-bottom: 56px;

  @media (max-width: 320px) {
    margin-top: 8px;
    margin-bottom: 32px;
  }
}
.gap {
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 320px) {
    gap: 32px;
  }
}

.banners {
  display: flex;
  gap: 24px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
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
      @media (max-width: 320px) {
        flex-basis: auto;
        height: 120px;
      }
    }
    &:last-child {
      background-color: var(--hover-color);
      flex-basis: 576px;
      @media (max-width: 320px) {
        flex-basis: auto;
      }
    }
  }
}
.mixin-block {
  display: flex;
  gap: 56px;
  align-items: end;
  &__banner {
    background-color: rgba(241, 241, 241, 1);
    flex-basis: 644px;
  }
  &__row {
    width: 696px;
    flex-basis: 696px;
    flex-grow: 1;
    @media (max-width: 320px) {
      display: none;
    }
  }
}

.last-block {
  margin-bottom: 96px;

  &__wrapper {
    @media (max-width: 320px) {
      max-width: none;
    }
  }
}
.news-list {
  width: 100%;
  display: flex;
  gap: 24px;

  @media (max-width: 320px) {
    padding: 0 var(--side-margin-wrapper);
    overflow-x: auto;
    gap: 16px;
  }
}
.mobile-show {
  @media (min-width: 321px) {
    display: none;
  }
}
</style>
