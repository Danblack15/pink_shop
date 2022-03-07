<template>
  <section class="content">
    <PodcategoryBlock />
    <ModalProduct />
    <BasketBlock />
    <router-view></router-view>
  </section>
</template>

<script>
import PodcategoryBlock from "@/components/PodcategoryBlock/PodcategoryBlock";
import BasketBlock from "@/components/BasketBlock/BasketBlock";

export default {
  components: {
    PodcategoryBlock,
    BasketBlock,
  },
};
</script>

<style src="./ProductsPage.css" scoped>

</style>