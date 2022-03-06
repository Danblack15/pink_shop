<template>
  <section class="wrapper-basket" v-if="basketVisible" @click="showBasket">
    <div class="wrapper-basket__block" @click.stop>
      <div class="wrapper-basket__block__top">
        <p>Оформить заказ</p>
        <img 
			src="@/assets/img/close.svg" 
			alt="close" 
			@click="showBasket" 
		/>
      </div>
      <div
        class="wrapper-basket__block__products"
        v-if="basketLength.length > 0 && submit == null"
      >
        <p class="wrapper-basket__block__products-name">В корзине:</p>
        <section>
          <BasketItem
            v-for="item in basketLength"
            :key="item.id"
            :item="item"
            @remove="removeBasketItem(item)"
          />
        </section>
      </div>
      <div class="wrapper-basket__block__form" v-if="basketLength.length > 0 && submit == null">
        <form action="send_form" @submit.prevent="submitForm" method="post">
          <fieldset>
            <div>
              <p>Имя</p>
              <input 
				type="text" 
				name="name" 
				id="name"
				required
			  />
            </div>
            <div>
              <p>Телефон</p>
              <input 
				type="tel" 
				name="phone" 
				id="phone"
				required
			  />
            </div>
          </fieldset>
          <fieldset>
            <p>Полный адрес</p>
            <input 
				type="text" 
				name="adres" 
				id="adres" 
				required
			/>
          </fieldset>
          <ButtonProduct class="submit-btn"> Заказать </ButtonProduct>
        </form>
      </div>
	  <div v-else-if="submit" class="wrapper-basket__block__success-submit">
		  <img src="@/assets/img/successBlack.svg" alt="success">
		  <p>Заказ успешно создан</p>
	  </div>
      <div v-else class="wrapper-basket__block__not-found">
        <img src="@/assets/img/basket.svg" alt="basket" />
        <p>В корзине ничего нет</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      showBasket: "data/basketVisible",
      removeBasketItem: "data/removeBasketItem",
	  submitForm: "data/submitForm"
    }),
  },

  computed: {
    ...mapGetters({
      basketVisible: "data/basketVisible",
      basketLength: "data/basketLength",
	  submit: "data/submitForm"
    }),
  },
};
</script>

<style src="./BasketBlock.css" scoped>

</style>