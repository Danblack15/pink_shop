<template>
  <ul class="header-links__category" v-if="!isLoading">
    <CategoryItem
      v-for="item in sortData"
      :item="item"
      :key="item.id"
    />
  </ul>
  <LoadingBlock v-else class="loading_block" />
</template>

<script>
import CategoryItem from "@/components/CategoryItem/CategoryItem"
import { mapGetters } from "vuex"

export default {
  components: {
    CategoryItem,
  },

  computed: {
    ...mapGetters({
      sortData: "data/sortData",
      isLoading: "data/isLoading",
    }),
  },
};
</script>

<style src="./CategoryList.css" scoped>

</style>