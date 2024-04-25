<template>
  <nav class="header-nav">
    <div class="header-nav__category">
      <div class="header-nav__category-name"><slot></slot></div>
      <div class="header-nav__content-wrapper">
        <div class="header-nav__content">
          <div class="header-nav__links">
            <header-nav-link v-for="link in navMenu" :key="link.id">
              <template #default>{{ link.name }}</template>
              <template #count>{{ link.count }}</template>
            </header-nav-link>
          </div>
          <div class="header-nav__bestseller" v-if="limitBestseller">
            <div class="header-nav__bestseller-name">Бестселлеры</div>
            <div class="header-nav__bestseller-group">
              <book-item
                v-for="card of limitBestseller"
                :key="card.id"
                :imgSrc="card.imgSrc"
                :raiting="card.raiting"
                :reviews="card.reviews"
                :small="true"
                ><template #price>{{ card.price }}</template>
                <template #oldPrice>{{ card.oldPrice }}</template>
                <template #name>{{ card.name }}</template>
                <template #discount>{{ card.discount }}</template></book-item
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderNavLink from "@/components/HeaderNavLink.vue";
// import { mapActions, mapGetters, mapMutations } from "vuex";
import BookItem from "@/components/BookItem.vue";

export default {
  name: "header-nav-element",
  props: {
    navMenu: {
      type: Object,
      required: true,
    },
    limitBestseller: {
      type: Object,
    },
  },
  components: {
    HeaderNavLink,
    BookItem,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  gap: 23.5px;
  &__category {
    --category-color: var(--second-color);
    // position: relative;
    padding: 6px 0;
    color: var(--category-color);

    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;

    transition: all 0.2s ease;

    &:hover {
      --category-color: var(--hover-color);

      & .header-nav__content {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &__category-name {
    cursor: default;
  }
  &__content-wrapper {
    padding-top: 15.72px;
  }
  &__content {
    position: absolute;
    left: 0;
    top: 100%;
    max-width: 1112px;
    width: 1112px;

    padding: 16px 24px;

    display: flex;
    gap: 64px;

    border: 1px solid rgba(227, 227, 227, 1);
    background-color: var(--white);
    border-radius: 12px;

    visibility: hidden;
    opacity: 0;

    transition: all 0.5s ease;
  }
  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 48px;
  }

  &__bestseller {
    // width: 444px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__bestseller-name {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
  }

  &__bestseller-group {
    display: flex;
    gap: 12px;
  }
}
</style>
