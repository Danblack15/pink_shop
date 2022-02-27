<template>
  <section class="products_block">
    <section v-if="!isLoading && listProducts.length > 0" class="products_block__enter">
      <ProductItem 
        v-for="item in listProducts"
        :key="item.id"
        :item="item"
      />
    </section>
    <div 
      v-else-if="!isLoading && listProducts.length == 0" 
      class="not_found"
    >
      <img src="@/assets/img/basket.svg" alt="">
      <p>В данной категории товаров пока нет</p>
    </div>
    <LoadingBlock v-else class="loading_block"/>
  </section>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

import ProductItem from '@/components/ProductItem'

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      listProducts: []
    }
  },
  methods: {
		...mapActions({
			fetchData: 'data/fetchData'
		}),
    listProductsSort() {
      let id = this.$route.params.id

      this.listProducts = this.data.filter((p) => p.parent_id == id)
    }
	},

  async mounted() {
		await this.fetchData(),
    this.listProductsSort()
	},
  watch: {
		'$route.path'() {
			if (this.$route.matched[1])
				this.listProductsSort()
		}
	},

  computed: {
		...mapState({
			data: state => state.data.data,
      isLoading: state => state.data.isLoading
		})
	}
}
</script>

<style scoped>
.products_block{
  width: 100%;
  height: 100vh;
  padding-top: 95px;
  padding-bottom: 57px;
  position: relative;
  overflow-y: scroll;
}
.loading_block{
  position: absolute;
  top: 50%;
  left: 50%;
}
.products_block__enter{
  display: flex;
  flex-wrap: wrap;
}
.not_found{
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
</style>