<template>
  <section class="products-block">
    <section
      v-if="!isLoading && listProductsSort.length > 0"
      class="products-block__enter"
    >
      <ProductItem 
        v-for="item in listProductsSort" 
        :key="item.id" 
        :item="item" 
      />
    </section>

    <div 
      v-else-if="!isLoading && listProductsSort.length == 0" 
      class="products-block__not-found"
    >
      <img src="@/assets/img/basket.svg" alt="" />
      <p>В данной категории товаров пока нет</p>
    </div>

    <LoadingBlock v-else class="products-block__loading-block" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import ProductItem from "@/components/ProductItem/ProductItem";

export default {
  components: {
    ProductItem,
  },

  watch: {
    "$route.path"() {
      if (this.$route.matched[1]) this.listProductsSort
    },
  },

  computed: {
    ...mapGetters({
      data: "data/data",
      isLoading: "data/isLoading"
    }),

    listProductsSort() {
      let id = this.$route.params.id

      return this.data.filter((p) => p.parent_id == id)
    },
  },
};
</script>

<style src="./ProductsBlock.css" scoped>

</style>