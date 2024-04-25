<template>
  <div class="row">
    <div class="row__top" v-if="$slots.title || link">
      <div class="row__title"><slot name="title"></slot></div>
      <a :href="link" class="row__link" v-if="link"
        ><slot name="link"></slot
      ></a>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "app-row",
  props: {
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }

  &__link {
    color: var(--blue-color);
    font-size: 16px;
    line-height: 1.5em;
  }

  &__books {
    position: relative;
  }
  &__nav {
    top: 114px;
    &_next {
      transform: translate(50%, 0);
    }
    &_prev {
      transform: translate(-50%, 0) rotateY(180deg);
    }
  }
}
</style>
