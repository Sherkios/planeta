<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="header__top">
        <div class="header__location">
          <img
            src="@/assets/img/location.svg"
            alt
            class="header__location-img"
          />
          <div class="header__city">Уфа</div>
        </div>
        <div class="header__top-right">
          <top-nav class="header__top-nav"></top-nav>
          <a href="tel:+78005000-338" class="header__phone">8 (800) 5000-338</a>
        </div>
      </div>
      <div class="header__middle">
        <img src="@/assets/img/logo.png" alt class="header__logo" />
        <div class="header__middle-flex">
          <app-search class="header__serach-block"></app-search>
          <div class="header__interects">
            <interect-item img-src="like.svg" :count="2"></interect-item>
            <interect-item img-src="profile.svg"></interect-item>
            <interect-item img-src="basket.svg" :count="2"></interect-item>
          </div>
        </div>
      </div>
      <div class="header__nav">
        <header-nav-element
          class="header__nav-element"
          :nav-menu="navMenu"
          :limit-bestseller="limitBestseller"
        >
          Книги
        </header-nav-element>
        <header-nav-element class="header__nav-element" :nav-menu="navMenu">
          Школа
        </header-nav-element>
        <header-nav-element class="header__nav-element" :nav-menu="navMenu">
          Канцтовары
        </header-nav-element>
        <header-nav-element class="header__nav-element" :nav-menu="navMenu">
          Хобби
        </header-nav-element>
        <header-nav-element class="header__nav-element" :nav-menu="navMenu">
          Игры
        </header-nav-element>
        <header-nav-element class="header__nav-element" :nav-menu="navMenu">
          Игрушки
        </header-nav-element>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavElement from "@/components/HeaderNavElement.vue";
import TopNav from "@/components/TopNav.vue";
import InterectItem from "@/components/InterectItem.vue";
import AppSearch from "@/components/UI/AppSearch.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "app-header",
  components: {
    HeaderNavElement,
    TopNav,
    InterectItem,
    AppSearch,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchLinks: "navMenu/fetchLinks",
      fetchCards: "cards/fetchCards",
    }),
  },
  computed: {
    ...mapGetters({
      navMenu: "navMenu/navMenu",
      bestseller: "cards/cards",
    }),
    limitBestseller() {
      if (this.bestseller.length > 3) {
        return this.bestseller.slice(0, 3);
      } else {
        return this.bestseller;
      }
    },
  },

  async mounted() {
    await this.fetchLinks();
    await this.fetchCards();
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 24px;
  background-color: var(--white);
  &__wrapper {
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__location {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__location-img {
  }

  &__city {
    color: var(--second-color);
  }

  &__top-right {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__top-nav {
  }

  &__phone {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
  }

  &__middle {
    margin: 29px 0 20.3px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
  }

  &__middle-flex {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 33px;
  }

  &__logo {
    max-height: 48px;
  }

  &__serach-block {
  }

  &__interects {
    display: flex;
    gap: 24px;
  }

  &__nav {
    position: relative;
    display: flex;
    gap: 22px;
  }
}
.wrapper {
}
</style>
