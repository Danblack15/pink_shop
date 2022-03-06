<template>
  <header>
    <router-link to="/" class="logo">
      <img src="@/assets/img/money.svg" alt="money" />
      <p>SHOP</p>
    </router-link>
    <section class="header-links">
      <CategoryList />
      <div class="wrapper-basket" @click="showBasket">
        <img src="@/assets/img/basket.svg" alt="basket" />
        <span 
          v-if="this.basketLength.length > 0"
          class="wrapper-basket__length-basket"
        >{{ this.basketLength.length }}</span>
      </div>
    </section>
  </header>
</template>

<script>
import CategoryList from "@/components/CategoryList/CategoryList";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CategoryList,
  },

  mounted() {
    this.basketLengthAc()
  },

  methods: {
    ...mapActions({
      basketLengthAc: "data/basketLength",
      showBasket: "data/basketVisible"
    })
  },

  computed: {
    ...mapGetters({
      basketLength: "data/basketLength",
      basketVisible: "data/basketVisible"
    })
  }
};
</script>

<style src="./HeaderBlock.css" scoped>

</style>