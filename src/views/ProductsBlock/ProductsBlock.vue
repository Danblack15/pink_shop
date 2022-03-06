<template>
  <section class="products_block">
    <section
      v-if="!isLoading && listProducts.length > 0"
      class="products_block__enter"
    >
      <ProductItem v-for="item in listProducts" :key="item.id" :item="item" />
    </section>
    <div v-else-if="!isLoading && listProducts.length == 0" class="not_found">
      <img src="@/assets/img/basket.svg" alt="" />
      <p>В данной категории товаров пока нет</p>
    </div>
    <LoadingBlock v-else class="loading_block" />
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ProductItem from "@/components/ProductItem/ProductItem";

export default {
  components: {
    ProductItem,
  },

  data() {
    return {
      listProducts: [],
    };
  },

  methods: {
    ...mapActions({
      fetchData: "data/fetchData",
    }),
    listProductsSort() {
      let id = this.$route.params.id;

      this.listProducts = this.data.filter((p) => p.parent_id == id);
    },
  },

  async mounted() {
    await this.fetchData(), this.listProductsSort();
  },

  watch: {
    "$route.path"() {
      if (this.$route.matched[1]) this.listProductsSort();
    },
  },

  computed: {
    
    ...mapState({
      data: (state) => state.data.data,
      isLoading: (state) => state.data.isLoading,
    }),
  },
};
</script>

<style src="./ProductsBlock.css" scoped>
</style>