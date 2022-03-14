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

  data() {
    return {  
      podcategoryForRoute: []
    }
  },

  watch: {
    "$route.path"() {
      if (!this.$route.matched[1]) {
        this.searhPodcategory()
      }
    },
  },

  methods: {
    searhPodcategory() {
      let parentId = this.$route.params.category
      
      this.podcategoryForRoute = this.data.filter((p) => p.parent_id == parentId)
 
      this.$router.push(`/${parentId}/${this.podcategoryForRoute[0].id}`)
    }
  },

  computed: {
    ...mapGetters({
      sortData: "data/sortData",
      isLoading: "data/isLoading",
      data: "data/data"
    })
  },
};
</script>

<style src="./CategoryList.css" scoped>

</style>