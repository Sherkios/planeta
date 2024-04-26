<template>
  <header class="header">
    <div class="wrapper">
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
    </div>
    <div class="wrapper">
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
        <div class="header__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="header__wrapper wrapper">
      <div class="header__nav">
        <header-nav-element
          class="header__nav-element"
          :nav-menu="navMenu"
          :limit-bestseller="limitBestseller"
          @toggleCategory="toggleCategory"
          v-for="category in categoryArr"
          :key="category.id"
          :category="category"
        >
          {{ category.title }}
        </header-nav-element>
      </div>
      <div class="header__nav-content" v-if="isShowNav">
        <div
          class="header__nav-links"
          v-for="category in categoryArr"
          :key="category.id"
          v-show="category.id === openCategory"
        >
          <header-nav-link v-for="link in navMenu" :key="link.id">
            <template #default>{{ link.name }}</template>
            <template #count>{{ link.count }}</template>
          </header-nav-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavElement from "@/components/HeaderNavElement.vue";
import HeaderNavLink from "@/components/HeaderNavLink.vue";
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
    HeaderNavLink,
  },
  data() {
    return {
      isShowNav: false,
      categoryArr: [
        {
          id: 0,
          title: "Книги",
        },
        {
          id: 1,
          title: "Школа",
        },
        {
          id: 2,
          title: "Канцтовары",
        },
        {
          id: 3,
          title: "Хобби",
        },
        {
          id: 4,
          title: "Игры",
        },
        {
          id: 5,
          title: "Игрушки",
        },
      ],
      openCategory: null,
    };
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchLinks: "navMenu/fetchLinks",
      fetchCards: "cards/fetchCards",
    }),
    toggleCategory(id) {
      if (id !== this.openCategory) {
        this.isShowNav = true;
      } else {
        this.isShowNav = !this.isShowNav;
      }
      this.openCategory = id;
    },
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
    position: relative;
    @media (max-width: 320px) {
      max-width: none;
      width: 100%;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    @media (max-width: 320px) {
      display: none;
    }
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

  &__burger {
    @media (min-width: 321px) {
      display: none;
    }
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;

    & span {
      display: inline-block;
      width: 22px;
      height: 2px;
      background-color: var(--second-color);
    }
  }

  &__phone {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
  }

  &__middle {
    width: 100%;
    margin: 29px 0 20.3px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;

    @media (max-width: 320px) {
      align-items: flex-start;
      margin: 0 0 20px 0;
    }
  }

  &__middle-flex {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 33px;

    @media (max-width: 320px) {
      display: none;
    }
  }

  &__logo {
    max-height: 48px;

    @media (max-width: 320px) {
      width: 70%;
    }
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
    gap: 8px;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    @media (max-width: 320px) {
      overflow-x: auto;
      overflow-y: hidden;
    }
  }

  &__nav-element {
    &:first-child {
      @media (max-width: 320px) {
        padding-left: var(--side-margin-wrapper);
      }
    }
    &:last-child {
      @media (max-width: 320px) {
        padding-right: var(--side-margin-wrapper);
      }
    }
  }
  &__nav-content {
    @media (min-width: 321px) {
      display: none;
    }
    position: absolute;
    top: 100%;
    left: calc(var(--side-margin-wrapper) - 5px);

    padding: 8px 42px 16px 16px;

    border-radius: 8px;
    background-color: rgba(241, 241, 241, 1);
  }
}
.wrapper {
}
</style>
