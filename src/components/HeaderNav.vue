<template>
  <nav class="header-nav">
    <div class="header-nav__category">
      <div class="header-nav__category-name">Книги</div>
      <div class="header-nav__content-wrapper">
        <div class="header-nav__content">
          <div class="header-nav__links">
            <header-nav-link v-for="link in navMenu" :key="link.id">
              <template #default>{{ link.name }}</template>
              <template #count>{{ link.count }}</template>
            </header-nav-link>
          </div>
          <div class="header-nav__bestseller">
            <div class="header-nav__bestseller-name">Бестселлеры</div>
            <div class="header-nav__bestseller-group"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderNavLink from "@/components/HeaderNavLink.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    HeaderNavLink,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchPosts: "navMenu/fetchPosts",
    }),
  },
  computed: {
    ...mapGetters({
      navMenu: "navMenu/navMenu",
    }),
  },

  async mounted() {
    await this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  gap: 23.5px;
  &__category {
    --category-color: var(--second-color);
    position: relative;
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
    top: 100%;
    max-width: 1112px;
    width: 1112px;

    padding: 16px 24px;

    display: flex;
    gap: 64px;

    border: 1px solid rgba(227, 227, 227, 1);
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

  // &__link {
  //   position: relative;
  //   display: flex;
  //   gap: 5px;
  //   flex: 1 1 248px;

  //   &:nth-child(2n - 1) {
  //     margin-right: 48px;
  //   }
  // }

  // &__link-name {
  //   --link-color: var(--primary-color);
  //   position: relative;
  //   width: max-content;
  //   padding-right: 5px;

  //   color: var(--link-color);

  //   font-size: 16px;
  //   font-weight: 500;
  //   line-height: 40px;

  //   transition: all 0.2s ease;

  //   &:hover {
  //     --link-color: var(--second-color);
  //   }
  // }

  // &__link-count {
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   transform: translate(100%, -8px);
  //   font-size: 16px;

  //   color: var(--blue-color);
  // }

  &__bestseller {
    // width: 444px;
    flex-shrink: 0;
  }

  &__bestseller-name {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
  }
}
</style>
