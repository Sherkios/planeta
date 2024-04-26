<template>
  <footer class="footer">
    <div class="footer__wrapper wrapper">
      <div class="footer__branding">
        <div class="footer__branding-info">
          <img alt src="@/assets/img/footer-logo.png" class="footer__logo" />
          <div class="footer__branding-text">
            Одна из крупнейших сетей магазинов города Уфы Республики
            Башкортостан
          </div>
        </div>
        <div class="footer__date">
          © Планета книги, <br />
          1998-2021
        </div>
      </div>
      <nav class="footer__nav footer-nav">
        <div class="footer-nav__column">
          <div class="footer-nav__title">Каталог</div>
          <ul class="footer-nav__list">
            <li class="footer-nav__link"><a href="#">Книги</a></li>
            <li class="footer-nav__link"><a href="#">Школа</a></li>
            <li class="footer-nav__link"><a href="#">Литература</a></li>
            <li class="footer-nav__link"><a href="#">Эзотерика</a></li>
            <li class="footer-nav__link"><a href="#">Канцтовары</a></li>
            <li class="footer-nav__link"><a href="#">Хозтовары</a></li>
            <li class="footer-nav__link"><a href="#">Детское </a></li>
          </ul>
        </div>
        <div class="footer-nav__column">
          <div class="footer-nav__title">Магазин</div>
          <ul class="footer-nav__list">
            <li class="footer-nav__link"><a href="#">Наши магазины</a></li>
            <li class="footer-nav__link"><a href="#">О бренде</a></li>
            <li class="footer-nav__link"><a href="#">Вакансии</a></li>
            <li class="footer-nav__link"><a href="#">Новости</a></li>
            <li class="footer-nav__link"><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-nav__column">
          <div class="footer-nav__title">Покупателю</div>
          <ul class="footer-nav__list">
            <li class="footer-nav__link"><a href="#">Оплата и доставка</a></li>
            <li class="footer-nav__link"><a href="#">Акции</a></li>
          </ul>
        </div>
      </nav>
      <div class="footer__info footer-info">
        <a href="tel:+" class="footer-info__phone">8 (800) 5000-338</a>
        <div class="footer-info__work-time">
          <p>Режим работы - 9:30-20:00</p>
          <p>в выходные и праздники - 10:00-19:00</p>
          <p>без перерыва и выходных.</p>
        </div>
        <a href="" class="footer-info__confidenty"
          >Политика конфиденциальности</a
        >
        <a href="" class="footer-info__developer">Made in Halikov studio</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 48px 0 63px 0;
  background-color: rgba(241, 241, 241, 1);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  &__branding {
    max-width: 216px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 320px) {
      display: none;
    }
  }

  &__branding-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__logo {
  }

  &__branding-text {
  }

  &__date {
  }

  &__nav {
  }

  &__info {
  }
}
.footer-nav {
  margin-left: 104px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 320px) {
    display: none;
  }
  &__column {
    max-width: 216px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
  }

  &__list {
  }

  &__link {
    line-height: 2em;
  }
}
.footer-info {
  font-family: Arial, Helvetica, sans-serif;
  width: 320px;
  flex-shrink: 0;
  text-align: right;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 320px) {
    width: 100%;
    font-size: 15px;
    line-height: 22px;
  }
  &__phone {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }

  &__work-time {
    margin: 28px 0 40px 0;
    @media (max-width: 320px) {
      margin: 12px 0 24px 0;
    }
  }

  &__confidenty {
    color: revert;
    margin-bottom: 48px;
    @media (max-width: 320px) {
      margin-bottom: 24px;
    }
  }

  &__developer {
    color: revert;
    display: block;
  }
}
</style>
