<template>
  <div class="socials">
    <div class="wrapper socials__wrapper">
      <div class="socials__text">Мы в социальных сетях</div>
      <div class="socials__blocks">
        <a href="#" class="social__element">
          <img src="@/assets/img/vk.svg" alt="ВК" class="socials__img" />
        </a>
        <a href="#" class="socials__element">
          <img
            src="@/assets/img/instagram.svg"
            alt="Инстаграмм"
            class="socials__img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "socials-block",
};
</script>

<style lang="scss" scoped>
.socials {
  padding: 16px 0;

  border-top: 1px solid rgba(227, 227, 227, 1);
  border-bottom: 1px solid rgba(227, 227, 227, 1);

  background-color: rgba(249, 249, 249, 1);
  &__wrapper {
    display: flex;
    gap: 14px;
    justify-content: flex-end;
    align-items: center;
  }

  &__text {
  }

  &__blocks {
    display: flex;
    gap: 16px;
  }

  &__element {
  }

  &__img {
  }
}
</style>
