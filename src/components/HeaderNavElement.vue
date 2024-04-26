<template>
  <nav class="header-nav-element">
    <div class="header-nav-element__category">
      <div class="header-nav-element__category-name" @click="toggleCategory">
        <slot></slot>
      </div>
      <div class="header-nav-element__content">
        <div class="header-nav-element__links">
          <header-nav-link v-for="link in navMenu" :key="link.id">
            <template #default>{{ link.name }}</template>
            <template #count>{{ link.count }}</template>
          </header-nav-link>
        </div>
        <div class="header-nav-element__bestseller" v-if="limitBestseller">
          <div class="header-nav-element__bestseller-name">Бестселлеры</div>
          <div class="header-nav-element__bestseller-group">
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
  </nav>
</template>

<script>
import HeaderNavLink from "@/components/HeaderNavLink.vue";
// import { mapActions, mapGetters, mapMutations } from "vuex";
import BookItem from "@/components/BookItem.vue";

export default {
  name: "header-nav-element",
  emits: ["toggleCategory"],
  props: {
    navMenu: {
      type: Object,
      required: true,
    },
    limitBestseller: {
      type: Object,
    },
    category: {
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
  methods: {
    toggleCategory() {
      this.$emit("toggleCategory", this.category.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-nav-element {
  display: flex;
  gap: 23.5px;

  &__category {
    --category-color: var(--second-color);
    --hover-background: var(--white);
    color: var(--category-color);

    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;

    transition: all 0.2s ease;

    @media (max-width: 320px) {
      font-size: 18px;
      line-height: 28px;
    }

    &:hover {
      --category-color: var(--hover-color);
      --hover-background: rgba(241, 241, 241, 1);

      & .header-nav-element__content {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &__category-name {
    cursor: default;
    padding: 6px 8px;
    border-radius: 6px 6px 0 0;
    background-color: var(--hover-background);
    transition: all 0.5s ease;
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

    background-color: var(--hover-background);
    border-radius: 12px;

    visibility: hidden;
    opacity: 0;

    transition: all 0.5s ease;

    @media (max-width: 320px) {
      max-width: 297px;
    }
  }
  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 48px;

    @media (max-width: 320px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__bestseller {
    // width: 444px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 320px) {
      display: none;
    }
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
