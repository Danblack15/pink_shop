<template>
  <HeaderBlock />
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import HeaderBlock from "@/components/HeaderBlock/HeaderBlock";

export default {
  components: {
    HeaderBlock,
  },

  methods: {
    ...mapActions({
      fetchData: "data/fetchData",
    }),
  },

  mounted() {
    this.fetchData();
  },

  computed: {
    ...mapGetters({
      data: "data/data"
    }),
  },
};
</script>