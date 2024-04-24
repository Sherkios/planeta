<template>
  <div class="interect-items">
    <div class="interect-item">
      <img src="@/assets/like.svg" alt class="interect-item__img" />
      <div class="interect-item__count">12</div>
    </div>
    <div class="interect-item">
      <img src="@/assets/profile.svg" alt class="interect-item__img" />
      <div class="interect-item__count">1</div>
    </div>
    <div class="interect-item">
      <img src="@/assets/basket.svg" alt class="interect-item__img" />
      <div class="interect-item__count">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "interect-items",
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

    padding: 0 4px;
    border-radius: 100px;
    background-color: var(--like-color);
    color: var(--white);

    font-size: 12px;
  }
}
</style>
