<template>
  <div class="banner" :class="{ banner_second: secondType }">
    <img
      v-if="backgroundImg"
      :src="`/img/banners/${backgroundImg}`"
      :alt="backgroundImg"
      class="banner__background"
    />
    <div class="banner__info">
      <div class="banner__title">
        <slot></slot>
      </div>
      <div
        class="banner__text"
        :class="{ banner__text_mobile: !showMobileText }"
      >
        <slot name="text"></slot>
      </div>
    </div>
    <a :href="link" class="banner__link" v-if="link">
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        class="banner__link-arrow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8L19 8M19 8L12.8125 2M19 8L12.8125 14"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </a>
    <picture>
      <source
        media="(max-width: 320px)"
        :srcset="`/img/banners/${mobileImgSrc}`"
        v-if="mobileImgSrc"
      />
      <img
        :src="`/img/banners/${imgSrc}`"
        :alt="imgSrc"
        class="banner__img"
        v-if="imgSrc"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: "app-banner",
  props: {
    backgroundImg: {
      type: String,
    },
    imgSrc: {
      type: String,
    },
    mobileImgSrc: {
      type: String,
    },
    link: {
      type: String,
    },
    secondType: {
      type: Boolean,
      default: false,
    },
    showMobileText: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.banner {
  --color: var(--white);
  --link-color: var(--color);
  position: relative;
  max-width: 1056px;
  width: 100%;
  height: 440px;
  border-radius: 6px;
  overflow: hidden;

  display: flex;
  align-items: center;
  padding: 48px;

  @media (max-width: 320px) {
    height: 221px;
    padding: 24px;
  }
  &_dark {
    --color: var(--primary-color);
    --link-color: var(--second-color);
  }
  &_second {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__info {
    // max-width: 327px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: var(--color);
  }

  &__title {
    font-size: 40px;
    font-weight: 800;
    line-height: 46px;

    @media (max-width: 320px) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    &_mobile {
      display: none;
    }
    @media (max-width: 320px) {
      font-size: 15px;
      line-height: 22px;
    }
  }

  &__img {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &__link {
    --w: 40px;
    position: relative;
    z-index: 2;
    width: var(--w);
    height: var(--w);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--link-color);

    @media (max-width: 320px) {
      display: none;
    }
  }
  &__link-arrow {
    fill: var(--link-color);
    stroke: var(--link-color);
  }
}
</style>
