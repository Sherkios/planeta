<template>
  <a href="#" class="interect-item">
    <img :src="`img/${imgSrc}`" alt class="interect-item__img" />
    <div class="interect-item__count" v-show="count !== 0">{{ count }}</div>
  </a>
</template>

<script>
export default {
  name: "interect-item",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.interect-items {
  display: flex;
  gap: 24px;
}
.interect-item {
  position: relative;
  --w: 24px;
  width: 24px;
  height: 24px;
  &__img {
    width: 100%;
    height: 100%;
  }
  &__count {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);

    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;

    padding: 0 4px;
    border-radius: 100px;
    background-color: var(--like-color);
    color: var(--white);

    font-size: 12px;
  }
}
</style>
