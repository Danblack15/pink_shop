<template>
  <ul class="header_links__category" v-if="!isLoading">
    <CategoryItem
      v-for="item in sortData"
      :item="item"
      :key="item.id"
      v-model:selected="item.selected"
    />
  </ul>
  <LoadingBlock v-else class="loading_block"/>
</template>

<script>
import CategoryItem from "@/components/CategoryItem";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    CategoryItem,
  },

  mounted() {
    this.sortData;
  },
  computed: {
    ...mapGetters({
      sortData: "data/sortData",
    }),
	...mapState({
		isLoading: state => state.data.isLoading
	}),
  },
};
</script>

<style scoped>
.header_links__category {
  padding-left: 25px;
}
.loading_block{
	margin-left: 50px;
}
</style>