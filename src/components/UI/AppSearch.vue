<template>
  <form class="serach">
    <input class="serach__input" placeholder="Поиск по каталогу" />
    <button class="serach__button" type="submit">
      <img src="@/assets/img/search.svg" alt="Поиск" class="serach__img" />
    </button>
  </form>
</template>

<script>
export default {
  name: "app-search",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.serach {
  display: flex;
  align-items: center;

  width: 100%;
  &__input {
    width: 100%;
    max-height: 48px;
    height: 100%;

    padding: 12px 16px;
    border: 2px solid var(--ui-color);
    border-radius: 6px 0 0 6px;
    font-size: 16px;
    line-height: 1.5em;
    font-weight: 500;
    outline: none;
  }

  &__button {
    height: 48px;
    flex-shrink: 0;
    padding: 10px 16px;
    background-color: var(--ui-color);
    border-radius: 0 6px 6px 0;
  }

  &__img {
    --w: 24px;

    width: var(--w);
    height: var(--w);
  }
}
</style>
