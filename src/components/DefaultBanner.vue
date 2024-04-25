<template>
  <div class="banners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "default-banner",
};
</script>

<style lang="scss" scoped>
.banners {
  display: flex;
  gap: 24px;
}
</style>
