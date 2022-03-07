<template>
  <section class="modal_product" v-if="modalVisible" @click.stop="showModal">
    <div class="modal_product__block" @click.stop>
      <div class="modal_product__block__top">
        <p>Информация</p>
        <img src="@/assets/img/close.svg" alt="close" @click.stop="showModal" />
      </div>

      <div class="modal_product__block__center">
        <div>
          <img :src="this.item.img" alt="product" />
        </div>
        <div>
          <p>{{ this.item.name }}</p>
          <p>{{ this.item.price.toLocaleString("ru-RU") }} &#8381;</p>
        </div>
      </div>
      
      <div class="modal_product__block__tabs" v-if="!modalLoaing">
        <UiTabs :item="this.itemDop" />
      </div>
      <LoadingBlock v-else class="loading" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ModalProduct",

  methods: {
    ...mapActions({
      showModal: "data/showModal",
    }),
  },

  computed: {
    ...mapGetters({
      modalVisible: "data/modalVisible",
      modalLoaing: "data/modalLoaing",
      item: "data/selectedProductId",
      itemDop: "data/productitem",
    }),
  },
};
</script>

<style src="./ModalProduct.css" scoped>

</style>