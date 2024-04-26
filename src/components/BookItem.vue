<template>
  <div class="book-item" :class="{ 'book-item_small': small }">
    <div class="book-item__top">
      <div class="book-item__tag book-item__tag_bestseller" v-if="bestSeller">
        Бестселлер
      </div>
      <div class="book-item__tag book-item__tag_new-item" v-else-if="newItem">
        Новинки
      </div>
      <div class="book-item__discount" v-if="$slots.discount">
        -<slot name="discount"></slot> %
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="book-item__like"
        v-show="showLike"
        @click="like"
        :class="{ 'book-item__like_set': isLike }"
      >
        <mask
          id="mask0_1_542"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_1_542)">
          <path
            d="M10.9239 21.678L10.9224 21.6767C7.81557 18.8594 5.31738 16.5886 3.58421 14.4682C1.86203 12.3613 1 10.5252 1 8.59401C1 5.44285 3.45246 3 6.59401 3C8.3778 3 10.1064 3.83558 11.2303 5.14502L11.9891 6.02916L12.7479 5.14502C13.8718 3.83558 15.6004 3 17.3842 3C20.5257 3 22.9782 5.44285 22.9782 8.59401C22.9782 10.5252 22.1162 12.3613 20.394 14.4682C18.6608 16.5886 16.1626 18.8594 13.0558 21.6767L13.0543 21.678L11.9891 22.6477L10.9239 21.678Z"
            stroke-width="2"
          />
        </g>
      </svg>
      <img :src="`img/books/${imgSrc}`" class="book-item__img" />
    </div>
    <div class="book-item__price-box">
      <div class="book-item__price" v-if="$slots.price">
        <slot name="price"></slot> ₽
      </div>
      <div class="book-item__old-price" v-if="$slots.oldPrice">
        <slot name="oldPrice"></slot> ₽
      </div>
    </div>
    <div class="book-item__info">
      <a href="#" class="book-item__name"><slot name="name"></slot></a>
      <div class="book-item__reviews">
        <div class="book-item__stars">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            class="book-item__star"
            xmlns="http://www.w3.org/2000/svg"
            v-for="(item, index) in 5"
            :key="index"
          >
            <path
              class="book-item__star-path"
              :class="{ 'book-item__star-path_fire': index + 1 <= raiting }"
              d="M7.55163
            0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348
            4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059
            5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925
            9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531
            13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267
            12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445
            14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134
            9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702
            6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873
            4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163
            0.908492Z"
            />
          </svg>
        </div>
        <div class="book-item__count-reviews">
          {{ reviews }} {{ numWord(reviews, ["отзыв", "отзыва", "отзывов"]) }}
        </div>
      </div>
    </div>
    <app-button
      class="book-item__button"
      v-if="!countBasket && !small"
      @click="incrementCounterBasket"
      >В корзину</app-button
    >
    <div class="book-item__basket-counter" v-else>
      <app-button
        class="book-item__crement button_white"
        v-if="countBasket && !small"
        @click="decrementCounterBasket"
      >
        <img src="@/assets/img/decriment.svg" alt />
      </app-button>
      <div class="book-item__basket-count" v-if="!small">{{ countBasket }}</div>
      <app-button
        class="book-item__crement button_white"
        v-if="countBasket && !small"
        @click="incrementCounterBasket"
      >
        <img src="@/assets/img/increment.svg" alt
      /></app-button>
    </div>
  </div>
</template>

<script>
import numWord from "@/mixins/numWord";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  components: {
    AppButton,
  },
  mixins: [numWord],
  name: "book-item",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    raiting: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    showLike: {
      type: Boolean,
      default: false,
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
    newItem: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLike: false,
      countBasket: 0,
    };
  },
  methods: {
    like() {
      this.isLike = !this.isLike;
    },
    incrementCounterBasket() {
      this.countBasket++;
    },
    decrementCounterBasket() {
      this.countBasket--;
    },
  },
};
</script>

<style lang="scss" scoped>
.book-item {
  position: relative;
  max-width: 216px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 320px) {
    max-width: 136px;
  }
  &_small {
    max-width: 136px;

    & .book-item__top {
      height: 172px;
    }

    & .book-item__img {
      width: 94px;
      height: 148px;
    }

    & .book-item__price {
      font-size: 20px;
    }

    & .book-item__old-price {
      font-size: 14px;
    }

    & .book-item__name {
      font-size: 15px;
      line-height: 22px;
    }
  }
  &__top {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 264px;
    @media (max-width: 320px) {
      height: 172px;
    }
  }

  &__tag {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 4px 10px;

    border-radius: 100px;

    font-size: 14px;
    font-weight: 600;
    line-height: 16.44px;
    color: var(--white);
    &_bestseller {
      background-color: var(--second-color);
    }
    &_new-item {
      background-color: rgba(132, 189, 0, 1);
    }
  }

  &__like {
    position: relative;
    z-index: 1;
    cursor: pointer;

    fill: var(--white);
    stroke: var(--primary-color);

    transition: all 0.5s ease;

    &_set {
      fill: var(--like-color);
      stroke: var(--like-color);
    }
  }

  &__discount {
    position: relative;
    z-index: 1;
    align-self: flex-end;

    padding: 4px 8px;

    background-color: var(--discount-color);
    color: var(--white);

    border-radius: 100px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.44px;
  }

  &__img {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    height: 240px;
    transform: translate(-50%, -50%);
    object-fit: contain;

    @media (max-width: 320px) {
      height: 148px;
    }
  }

  &__price-box {
    display: flex;
    gap: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }

  &__price {
    color: var(--discount-color);
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
  }

  &__old-price {
    --old-price-color: var(--gray-color);
    position: relative;
    color: var(--old-price-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;

    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background-color: var(--old-price-color);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__name {
    height: 48px;

    display: -webkit-box;
    -webkit-line-clamp: 2; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--primary-color);

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
  }

  &__reviews {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__stars {
    display: flex;
  }

  &__star {
    --w: 16px;
    width: var(--w);
    height: var(--w);
  }

  &__star-path {
    fill: rgba(227, 227, 227, 1);

    &_fire {
      fill: var(--hover-color);
    }
  }

  &__count-reviews {
    color: var(--gray-color);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__button {
    padding: 9px 32.5px;
    align-self: flex-start;
    @media (max-width: 320px) {
      padding: 9px 30.5px;
    }
  }

  &__basket-counter {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  &__basket-count {
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
  }

  &__crement {
    --w: 40px;
    width: var(--w);
    height: var(--w);
  }
}
</style>
