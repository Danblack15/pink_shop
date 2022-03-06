<template>
  <HeaderBlock />
  <router-view></router-view>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

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
    ...mapState({
      data: (state) => state.data.data,
    }),
  },
};
</script>