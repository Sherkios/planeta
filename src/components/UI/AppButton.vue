<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: var(--ui-color);
  color: var(--white);

  font-size: 15px;
  font-weight: 700;
  line-height: 22px;

  &_white {
    background-color: rgba(241, 241, 241, 1);
  }
}
</style>
