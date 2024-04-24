<template>
  <nav class="top-nav">
    <a href="#" class="top-nav__link">Акции</a>
    <a href="#" class="top-nav__link">Оплата и доставка</a>
    <a href="#" class="top-nav__link">Возврат</a>
  </nav>
</template>

<script>
export default {
  name: "top-nav",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  gap: 24px;
  &__link {
    color: var(--gray-color);
    line-height: 1.5em;
    font-weight: 500;
  }
}
</style>
