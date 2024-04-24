<template>
  <nav class="header-nav">
    <div class="header-nav__category">
      <div class="header-nav__category-name">Книги</div>
      <div class="header-nav__content-wrapper">
        <div class="header-nav__content">
          <div class="header-nav__links">
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Художественная литература
                <div class="header-nav__link-count">573</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Детская литература
                <div class="header-nav__link-count">3</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Комиксы. Манга
                <div class="header-nav__link-count">123</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Психология
                <div class="header-nav__link-count">98</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Эзотерика
                <div class="header-nav__link-count">53</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Философия
                <div class="header-nav__link-count">38</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Деловая литература
                <div class="header-nav__link-count">42</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Юридическая литература

                <div class="header-nav__link-count">65</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Здоровье. Спорт. Красота

                <div class="header-nav__link-count">89</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Мать и дитя

                <div class="header-nav__link-count">51</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Наука и техника

                <div class="header-nav__link-count">90</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Культура. Искуссвто. История
                <div class="header-nav__link-count">34</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Кулинария

                <div class="header-nav__link-count">17</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Хобби

                <div class="header-nav__link-count">1</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Религия

                <div class="header-nav__link-count">87</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Национальная литература

                <div class="header-nav__link-count">58</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Книги на иностранных языках
                <div class="header-nav__link-count">123</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Подарочные издания

                <div class="header-nav__link-count">45</div>
              </div>
            </a>
            <a href="#" class="header-nav__link">
              <div class="header-nav__link-name">
                Разное

                <div class="header-nav__link-count">17</div>
              </div>
            </a>
          </div>
          <div class="header-nav__bestseller">
            <div class="header-nav__bestseller-name">Бестселлеры</div>
            <div class="header-nav__bestseller-group"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  gap: 23.5px;
  &__category {
    --category-color: var(--second-color);
    position: relative;
    padding: 6px 0;
    color: var(--category-color);

    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;

    transition: all 0.2s ease;

    &:hover {
      --category-color: var(--hover-color);

      & .header-nav__content {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &__category-name {
    cursor: default;
  }
  &__content-wrapper {
    padding-top: 15.72px;
  }
  &__content {
    position: absolute;
    top: 100%;
    max-width: 1112px;
    width: 1112px;

    padding: 16px 24px;

    display: flex;
    gap: 64px;

    border: 1px solid rgba(227, 227, 227, 1);
    border-radius: 12px;

    // visibility: hidden;
    // opacity: 0;

    transition: all 0.5s ease;
  }
  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 48px;
  }

  &__link {
    position: relative;
    display: flex;
    gap: 5px;
    flex: 1 1 248px;

    &:nth-child(2n - 1) {
      margin-right: 48px;
    }
  }

  &__link-name {
    --link-color: var(--primary-color);
    position: relative;
    width: max-content;
    padding-right: 5px;

    color: var(--link-color);

    font-size: 16px;
    font-weight: 500;
    line-height: 40px;

    transition: all 0.2s ease;

    &:hover {
      --link-color: var(--second-color);
    }
  }

  &__link-count {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(100%, -8px);
    font-size: 16px;

    color: var(--blue-color);
  }

  &__bestseller {
    // width: 444px;
    flex-shrink: 0;
  }

  &__bestseller-name {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
  }
}
</style>
