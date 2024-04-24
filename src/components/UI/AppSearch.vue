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
  border: 2px solid var(--ui-color);
  border-radius: 6px;
  max-height: 48px;
  width: 100%;
  overflow: hidden;
  &__input {
    border: none;
    width: 100%;
    height: 100%;

    padding: 12px 16px;

    line-height: 1.5em;
    font-weight: 500;
  }

  &__button {
    flex-shrink: 0;
    padding: 10px 16px;
    background-color: var(--ui-color);
  }

  &__img {
    --w: 24px;

    width: var(--w);
    height: var(--w);
  }
}
</style>
