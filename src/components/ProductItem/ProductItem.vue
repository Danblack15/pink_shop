<template>
  <div class="item-product" :id="item.id">
    <div class="item-product__img" @click="showModal(this.item)">
      <img :src="item.img" :alt="item.name" />
    </div>

    <div class="item-product__info">
      <h3 
        class="item-product__info-name" 
        @click="showModal(this.item)"
      >
        {{ item.name }}
      </h3>
      
      <h4 class="item-product__info-price">
        {{ item.price.toLocaleString("ru-RU") }} &#8381;
      </h4>

      <ButtonProduct class="item-product__info__button" @click="inBasket">
        <p v-if="!this.validInBasket">Добавить в корзину</p>
        <div v-else class="item-product__info__button__in-basket">
          <p>В корзине</p>
          <img src="@/assets/img/success.svg" alt="success" />
        </div>
      </ButtonProduct>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.validInBasket
  },

  methods: {
    ...mapActions({
      showModal: "data/showModal",
      basketLength: "data/basketLength",
    }),

    inBasket() {
      let item = this.item;

      if (localStorage.basket) {
        this.inputBasket(item)
      } else {
        let basket = [];

        basket.push(item)

        basket = JSON.stringify(Object.assign({}, basket))

        localStorage.setItem("basket", basket)
      }

      this.basketLength()
    },

    inputBasket(item) {
      let basket = JSON.parse(localStorage.basket)

      if (this.validRepeatBasket(item, basket)) {
        basket = Object.values(basket)

        basket.push(item)

        basket = JSON.stringify(Object.assign({}, basket))

        localStorage.setItem("basket", basket)
      } else {
        this.deleteFromBasket(item, basket)
      }
    },

    validRepeatBasket(item, basket) {
      for (const key in basket) {
        if (Object.hasOwnProperty.call(basket, key)) {
          const element = basket[key]

          if (element.id == item.id) return false
        }
      }
      return true;
    },

    deleteFromBasket(item, basket) {
      basket = Object.values(basket)

      basket = basket.filter((p) => p.id !== item.id)

      basket = JSON.stringify(Object.assign({}, basket))

      localStorage.setItem("basket", basket)
    },
  },

  computed: {
    ...mapGetters({
      modalVisible: "data/modalVisible",
      basketLen: "data/basketLength",
    }),

    validInBasket() {
      if (this.basketLen) {
        let basket = this.basketLen

        for (const key in basket) {
          if (Object.hasOwnProperty.call(basket, key)) {
            const element = basket[key]

            if (element.id == this.item.id) {
              return true
            }
          }
        }

        return false
      } else {
        return false
      }
    },
  },
};
</script>

<style src="./ProductItem.css" scoped>

</style>