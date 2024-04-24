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
      <header-nav class="header__nav"></header-nav>
    </div>
  </header>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import TopNav from "@/components/TopNav.vue";
import InterectItem from "@/components/InterectItem.vue";
import AppSearch from "@/components/UI/AppSearch.vue";

export default {
  name: "app-header",
  components: {
    HeaderNav,
    TopNav,
    InterectItem,
    AppSearch,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
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
  }
}
.wrapper {
}
</style>
