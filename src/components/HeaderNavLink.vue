<template>
  <a href="#" class="header-nav-link">
    <div class="header-nav-link__name">
      <slot name="default"></slot>
      <div class="header-nav-link__count"><slot name="count"></slot></div>
    </div>
  </a>
</template>

<script>
export default {
  name: "header-nav-link",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header-nav-link {
  position: relative;
  display: flex;
  gap: 5px;
  flex: 1 1 248px;

  &__name {
    --link-color: var(--primary-color);
    position: relative;
    width: max-content;
    padding-right: 5px;

    color: var(--link-color);

    font-size: 16px;
    font-weight: 500;
    line-height: 40px;

    transition: all 0.2s ease;

    @media (max-width: 320px) {
      line-height: 32px;
    }

    &:hover {
      --link-color: var(--second-color);
    }
  }

  &__count {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(100%, -6px);
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;

    color: var(--blue-color);
  }
}
</style>
