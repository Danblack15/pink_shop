<template>
  <section class="podcategory_block">
    <ul class="podcategory_block__list">
      <PodcategoryItem
        v-for="item in this.podCategorySort"
        :key="item.id"
        :item="item"
      />
    </ul>
  </section>
</template>

<script>
import PodcategoryItem from "@/components/PodcategoryItem/PodcategoryItem";
import { mapGetters } from "vuex";

export default {
  components: {
    PodcategoryItem,
  },

  async mounted() {
    await this.data1
    this.podCategorySort
  },

  watch: {
    "$route.path"() {
      if (this.$route.matched[0].path == "/:category") 
        this.podCategorySort
    },
  },

  computed: {
    ...mapGetters({
      data1: "data/data",
    }),

    podCategorySort() {
      if (this.$route.matched[1]) {
        var href = this.$route.params.category
      } else {
        var href = this.$route.path.substr(1)
      }
      return this.data1.filter((p) => p.parent_id == href)
    },
  },
};
</script>

<style src="./PodcategoryBlock.css" scoped>

</style>