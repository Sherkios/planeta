<template>
  <a :href="link" class="card">
    <img :src="`img/news/${imgSrc}`" alt class="card__img" />
    <div class="card__info">
      <div class="card__title"><slot name="title"></slot></div>
      <div class="card__text"><slot name="body"></slot></div>
    </div>
  </a>
</template>

<script>
export default {
  name: "news-card",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 320px) {
    gap: 16px;
    max-width: 216px;
  }
  &__img {
    height: 220px;
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;

    @media (max-width: 320px) {
      height: 138.81px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 320px) {
      gap: 8px;
    }
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--second-color);
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }

  &__text {
    display: -webkit-box;
    -webkit-line-clamp: 3; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
  }
}
</style>
